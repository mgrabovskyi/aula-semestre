# Aula · Practica a tu ritmo

Spanish-language 5th grade exam practice. Castellano has four exercise sets, 76 questions, shuffled attempts, feedback, mixed review, and results history. English, Mathematics, and Valenciano are placeholders for future content.

## Hosting

- GitHub Pages: serves root HTML/JS; history stays browser-local. Export/import enables transferring existing records to the Cloudflare app.
- Cloudflare Worker `aula-semestre`: serves the same app plus authenticated result APIs.
- D1 database `aula-results`: dedicated to this project, with a shared family history.
- Cloudflare Access: requires verified login; the Worker independently validates Access JWT signature, issuer, audience and expiry. Result APIs reject all access until configured.

## Develop and deploy

```sh
npm ci
npm test
npm run build
npx wrangler d1 migrations apply aula-results --remote
npx wrangler deploy
```

Wrangler uses the developer's Cloudflare login. Never commit credentials.

Configure `ACCESS_TEAM_DOMAIN` (the hostname, without https://) and `ACCESS_AUD` in Wrangler variables; store approved addresses in the `FAMILY_EMAILS` Worker secret after creating the Access application. Protect the entire Worker or its production hostname and permit only approved email addresses. Keep preview URLs disabled. Do not expose result endpoints without authentication.

Cloudflare files live in `cloudflare/`; `wrangler.jsonc` binds the dedicated database. Static assets are copied from the root by `npm run build`. Root HTML does not activate cloud sync; the generated Cloudflare HTML does.

## Result synchronization

Cloud history is refreshed on startup, focus, reconnection, manual sync, and every 30 seconds while the page is visible. Attempts have stable IDs and inserts are idempotent. The two approved family accounts share one history; other accounts are rejected. Offline results stay in local storage and upload on reconnection. The browser cache assumes a personal device and should be cleared before handing the device to a different person.

To migrate existing GitHub Pages results, export history on the original URL/browser and import that JSON file on the Cloudflare app. Imports merge by ID without overwriting existing results. Original records retain percentages; newer attempts also include exact counts.

## Content

`data.js` contains questions, `app.js` the exercise flow, `sync.js` synchronization/export/import, and `style.css` presentation.

When Wrangler SDK startup is unavailable, build assets, bundle `cloudflare/inline-worker.mjs` with esbuild into `cloudflare/bundle.mjs`, and use `cloudflare/deploy-api.mjs`. Supply the approved family emails through JSON on stdin; never commit their values. The fallback uses the existing Wrangler OAuth grant and Cloudflare’s official Worker upload API. Static files are embedded in the small Worker bundle.
