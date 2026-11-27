# Aula · Practica a tu ritmo

5th grade exam practice: 680 questions across Castellano (479 questions / 17 sets), Matemáticas (94 / 4 sets), and Valencià (107 / 4 sets). Every set includes shuffled attempts, feedback, scores, error review, and synchronized history. Each available subject also has a 20-question mixed review. English is reserved for future content.

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

Cloud history is refreshed on startup, focus, reconnection, manual sync, and every 30 seconds while the page is visible. Attempts have stable IDs and inserts are idempotent. The approved family accounts share one history; other accounts are rejected. Offline results stay in local storage and upload on reconnection. The browser cache assumes a personal device and should be cleared before handing the device to a different person.

To migrate existing GitHub Pages results, export history on the original URL/browser and import that JSON file on the Cloudflare app. Imports merge by ID without overwriting existing results. Original records retain percentages; newer attempts also include exact counts.

## Content

`data.js`, `castellano-content.js` and `subjects-content.js` contain questions and topic metadata, `app.js` the exercise flow, `sync.js` synchronization/export/import, and `style.css` presentation.

When Wrangler SDK startup is unavailable, build assets, bundle `cloudflare/inline-worker.mjs` with esbuild into `cloudflare/bundle.mjs`, and use `cloudflare/deploy-api.mjs`. Supply the approved family emails through JSON on stdin; never commit their values. The fallback uses the existing Wrangler OAuth grant and Cloudflare’s official Worker upload API. Static files are embedded in the small Worker bundle.

## Production address

- Public introduction: https://aula.grabmyapps.com/
- Signed-in home: https://aula.grabmyapps.com/app/
- Subjects and exercises: `/app/castellano`, `/app/castellano/diptongos-e-hiatos`, `/app/castellano/silabas`, `/app/castellano/tildes`, `/app/castellano/pronombres-personales`, `/app/castellano/repaso`.
- History, profile and sign-out: `/app/history`, `/app/profile`, `/app/logout`.
- Results: `/app/results/<attempt-id>`. Shared links show the saved summary after family history synchronization. Detailed answers are kept in the original tab session.

The public Worker `aula-welcome` serves only the exact route `aula.grabmyapps.com/`. It has no database binding. Build with `node cloudflare/build-landing.mjs`, then deploy using `node cloudflare/deploy-api.mjs --landing` (empty JSON stdin). Its route configuration is recorded in `cloudflare/landing.wrangler.jsonc`. Older hash links automatically migrate to clean `/app/` URLs. The app Worker serves the SPA document for direct page requests; its base URL keeps styles and scripts resolvable on nested exercise pages.

All other paths remain on the Access-protected `aula-semestre` Worker, including `/app/`, `/api/profile`, and `/api/results`. Keep the landing route exact, without a wildcard. Access also registers `aula.grabmyapps.com/app` as a public hostname destination on the same application; this allows the logout `returnTo` destination to validate. Logout returns to the public homepage. The separate root domain `grabmyapps.com` is not used or changed.

Task formats include multiple choice, typed words/letters, typed integer answers, and click-to-order sequences. Each attempt includes the available formats for its topic. Written answers normalize Unicode, casing, and incidental spacing; accents remain significant. Integer answers permit ungrouped digits or correctly grouped dots/spaces. User-written text is HTML-escaped in feedback and result review. `task-types.js` defines formats and grading.
