// Official Cloudflare API fallback for deployment when Wrangler's SDK cannot load.
// Uses the existing Wrangler OAuth grant; never prints or embeds credentials.
import { readFile, writeFile } from 'node:fs/promises';
import { homedir } from 'node:os';
const landing=process.argv.includes('--landing');
const config=JSON.parse(await readFile(landing?'cloudflare/landing.wrangler.jsonc':'wrangler.jsonc','utf8'));
const authPath=homedir()+'/Library/Preferences/.wrangler/config/default.toml';
let auth=await readFile(authPath,'utf8');
const field=name=>auth.match(new RegExp('^'+name+'\\s*=\\s*"([^"]+)"','m'))?.[1];
let token=field('oauth_token');if(!token)throw Error('Wrangler login required');
const apiBase='https://api.cloudflare.com/client/v4/accounts/'+config.account_id;
async function call(path,options){let r=await fetch(apiBase+path,{...options,headers:{...options.headers,Authorization:'Bearer '+token}});if(r.status===401){const form=new URLSearchParams({grant_type:'refresh_token',refresh_token:field('refresh_token'),client_id:'54d11594-84e4-41aa-b438-e81b8fa78ee7'});const refreshed=await fetch('https://dash.cloudflare.com/oauth2/token',{method:'POST',body:form});if(!refreshed.ok)throw Error('Wrangler login expired');const data=await refreshed.json();token=data.access_token;auth=auth.replace(/^oauth_token\s*=\s*"[^"]+"/m,'oauth_token = "'+token+'"');if(data.refresh_token)auth=auth.replace(/^refresh_token\s*=\s*"[^"]+"/m,'refresh_token = "'+data.refresh_token+'"');await writeFile(authPath,auth,{mode:0o600});r=await fetch(apiBase+path,{...options,headers:{...options.headers,Authorization:'Bearer '+token}})}const data=await r.json();if(!r.ok||!data.success)throw Error('Cloudflare API '+r.status+': '+JSON.stringify(data.errors));return data.result;}
let input='';for await(const chunk of process.stdin)input+=chunk;const {familyEmails}=JSON.parse(input||'{}');
if(!landing&&!familyEmails)throw Error('Approved family emails required on stdin');
const bindings=landing?[]:[{type:'d1',name:'DB',id:config.d1_databases[0].database_id},...Object.entries(config.vars).map(([name,text])=>({type:'plain_text',name,text})),{type:'secret_text',name:'FAMILY_EMAILS',text:familyEmails}];
const body=new FormData();body.set('metadata',new Blob([JSON.stringify({main_module:'worker.mjs',compatibility_date:config.compatibility_date,bindings})],{type:'application/json'}));body.set('worker.mjs',new Blob([await readFile(landing?'cloudflare/landing-bundle.mjs':'cloudflare/bundle.mjs')],{type:'application/javascript+module'}),'worker.mjs');
const result=await call('/workers/scripts/'+config.name,{method:'PUT',body});console.log(JSON.stringify({deployed:true,id:result.id,version:result.deployment_id??result.version_id}));
