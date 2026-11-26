import { createRemoteJWKSet, jwtVerify } from 'jose';
let keySource, keyUrl;
const topics = new Set(['vowels', 'syllables', 'accents', 'pronouns', 'mixed']);
const json = (body, status = 200) => Response.json(body, { status, headers: { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' } });
export function validateAttempt(a) {
  if (!a || typeof a.id !== 'string' || !/^[a-zA-Z0-9_-]{8,100}$/.test(a.id) || !topics.has(a.topic) || !['practice','retry'].includes(a.mode)) return false;
  if (!Number.isInteger(a.date) || a.date < 0 || a.date > Date.now()+300000 || !Number.isInteger(a.percent) || a.percent < 0 || a.percent > 100) return false;
  if (a.correct == null && a.total == null) return true; // Original records only stored percentages.
  return Number.isInteger(a.total) && a.total > 0 && a.total <= 100 && Number.isInteger(a.correct) && a.correct >= 0 && a.correct <= a.total && a.percent === Math.round(a.correct/a.total*100);
}
export function resultOwner(payload, env) {
  if (typeof payload.email !== 'string' || typeof payload.sub !== 'string') return null;
  const allowed = (env.FAMILY_EMAILS || '').split(',').map(x=>x.trim().toLowerCase()).filter(Boolean);
  return allowed.includes(payload.email.toLowerCase()) ? 'aula-family' : null;
}
export async function verifiedIdentity(request, env) {
  if (!env.ACCESS_TEAM_DOMAIN || !env.ACCESS_AUD) return null;
  const token = request.headers.get('Cf-Access-Jwt-Assertion');
  if (!token) return null;
  const issuer = `https://${env.ACCESS_TEAM_DOMAIN}`;
  const url = `${issuer}/cdn-cgi/access/certs`;
  if (keyUrl !== url) { keyUrl=url; keySource=createRemoteJWKSet(new URL(url)); }
  try {
    const { payload } = await jwtVerify(token,keySource,{issuer,audience:env.ACCESS_AUD,algorithms:['RS256'],requiredClaims:['exp','sub','email']});
    return resultOwner(payload,env)?payload:null;
  } catch { return null; }
}
export async function authenticate(request,env){const identity=await verifiedIdentity(request,env);return identity?resultOwner(identity,env):null}
export async function handleApi(request, env, owner) {
  if (!owner) return json({error:'sign_in_required'},401);
  if (new URL(request.url).pathname !== '/api/results') return json({error:'not_found'},404);
  if (request.method === 'GET') {
    const after = new URL(request.url).searchParams.get('after') || '';
    const {results} = await env.DB.prepare('SELECT id, topic, mode, correct, total, percent, date FROM attempts WHERE owner = ? AND id > ? ORDER BY id LIMIT 501').bind(owner,after).all();
    const more=results.length>500, rows=results.slice(0,500);
    return json({attempts:rows,next:more?rows[rows.length-1].id:null});
  }
  if (request.method !== 'POST') return json({error:'method_not_allowed'},405);
  if (request.headers.get('Origin') !== new URL(request.url).origin) return json({error:'invalid_origin'},403);
  if (!request.headers.get('Content-Type')?.startsWith('application/json')) return json({error:'invalid_content_type'},415);
  const text = await request.text();
  if (text.length>80000) return json({error:'request_too_large'},413);
  let body;try {body=JSON.parse(text)} catch {return json({error:'invalid_json'},400)}
  if (!Array.isArray(body.attempts) || body.attempts.length>100 || !body.attempts.every(validateAttempt)) return json({error:'invalid_results'},400);
  if (body.attempts.length) await env.DB.batch(body.attempts.map(a=>env.DB.prepare('INSERT INTO attempts(owner,id,topic,mode,correct,total,percent,date) VALUES(?,?,?,?,?,?,?,?) ON CONFLICT(owner,id) DO NOTHING').bind(owner,a.id,a.topic,a.mode,a.correct??null,a.total??null,a.percent,a.date)));
  return json({saved:body.attempts.map(a=>a.id)});
}
export default {
  async fetch(request,env) {
    if (new URL(request.url).pathname.startsWith('/api/')) {
      try { if(new URL(request.url).pathname==='/api/profile'){const identity=await verifiedIdentity(request,env);return identity?json({email:identity.email}):json({error:'sign_in_required'},401)}return await handleApi(request,env,await authenticate(request,env)); }
      catch { return json({error:'temporarily_unavailable'},503); }
    }
    return env.ASSETS.fetch(request);
  }
};
