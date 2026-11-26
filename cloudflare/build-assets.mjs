import { mkdir, copyFile, readFile, writeFile } from 'node:fs/promises';
await mkdir('cloudflare/public', { recursive: true });
for (const name of ['index.html', 'style.css', 'data.js', 'castellano-content.js','subjects-content.js', 'app.js', 'sync.js']) {
  await copyFile(name, `cloudflare/public/${name}`);
}

const html = await readFile('cloudflare/public/index.html', 'utf8');
await writeFile('cloudflare/public/index.html', html.replace('<title>', '<base href="/app/"><title>').replaceAll('href="#/', 'href="/app/').replace('<script src="data.js">', '<script>window.AULA_CLOUD=true</script><script src="data.js">'));

const names=['index.html','style.css','data.js','castellano-content.js','subjects-content.js','app.js','sync.js'];
const files={};for(const name of names)files['/'+name]=await readFile('cloudflare/public/'+name,'utf8');
const entry="import api from './worker.mjs';\nconst files="+JSON.stringify(files)+";\nconst types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8'};\nexport default {fetch(request,env){return api.fetch(request,{...env,ASSETS:{fetch(r){const raw=new URL(r.url).pathname;const base=raw==='/app'||raw==='/app/'?'/':raw.startsWith('/app/')?raw.slice(4):raw;const p=base==='/'||(raw.startsWith('/app/')&&!base.includes('.'))?'/index.html':base;if(!files[p])return new Response('Not found',{status:404});if(!['GET','HEAD'].includes(r.method))return new Response('Method not allowed',{status:405});return new Response(r.method==='HEAD'?null:files[p],{headers:{'Content-Type':types[p.slice(p.lastIndexOf('.'))],'Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'}})}}})}};\n";
await writeFile('cloudflare/inline-worker.mjs',entry);
