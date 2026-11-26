import{readFile,writeFile}from'node:fs/promises';
const html=await readFile('cloudflare/landing.html','utf8');
await writeFile('cloudflare/landing-bundle.mjs',`const html=${JSON.stringify(html)};export default{fetch(request){if(!['GET','HEAD'].includes(request.method))return new Response('Method not allowed',{status:405});return new Response(request.method==='HEAD'?null:html,{headers:{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'}})}}`);
