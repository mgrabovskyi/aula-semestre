import { mkdir, copyFile, readFile, writeFile } from 'node:fs/promises';
await mkdir('cloudflare/public', { recursive: true });
for (const name of ['index.html', 'style.css', 'data.js', 'app.js', 'sync.js']) {
  await copyFile(name, `cloudflare/public/${name}`);
}

const html = await readFile('cloudflare/public/index.html', 'utf8');
await writeFile('cloudflare/public/index.html', html.replace('<script src="sync.js">', '<script>window.AULA_CLOUD=true</script><script src="sync.js">'));
