# Deploying LSO Group to Axxess shared hosting

The site is a React + Vite single-page application. GitHub Actions builds it into `dist/` and uploads those static files to the configured Axxess web directory over explicit FTPS.

## One-time GitHub configuration

In **megaprime-digital/lso-group → Settings → Secrets and variables → Actions**, add these repository secrets:

- `FTP_SERVER`: the FTP hostname shown in the Axxess hosting control panel (hostname only; do not include `ftp://`).
- `FTP_USERNAME`: the FTP account username.
- `FTP_PASSWORD`: that FTP account's password.
- `FTP_SERVER_DIR`: the target web-root directory for this domain, as a path relative to the FTP account's starting directory. Confirm the exact path in Axxess before deployment; do not guess it. It commonly resembles `public_html/`, but account layouts differ.

Use a dedicated directory for this site's files. Back up any existing live website before the first live sync. Do not commit FTP credentials to the repository or paste them into issues/chat.

If Axxess provides FTPS, use it. The workflow is configured for explicit FTPS. If the provider's FTP endpoint requires plain FTP or a different FTPS mode, confirm the protocol and port with Axxess support before changing the workflow.

## Initial safe test

1. Add the four secrets above.
2. Open **Actions → Build and Deploy LSO Group → Run workflow**.
3. Keep **dry_run** checked. This builds the site and asks the FTP action to preview the sync without changing remote files.
4. Review the workflow logs for the exact destination and planned changes.
5. Back up the live directory and verify `FTP_SERVER_DIR` points to the correct domain's web root.
6. Run the workflow again with **dry_run** unchecked to publish.
7. After a successful live deployment, add the repository Actions variable `ENABLE_FTP_DEPLOY` with value `true`. Subsequent pushes to `main` will then build and deploy automatically.

Until `ENABLE_FTP_DEPLOY=true` is set, pushes to `main` only run the build job. Manual workflow runs always include the deployment job.

## SPA routing

The `public/.htaccess` file is copied into `dist/` by Vite. It allows Apache to serve existing files normally and falls back to `index.html` for app routes such as `/about-us`, `/services`, `/projects`, and `/contact`. This requires Apache `mod_rewrite) to be enabled by the host.

## Build output and checks

- Build command: `npm run build`
- Output directory: `dist/`
- Node.js: 22
- The repository currently has no committed `package-lock.json`, so the workflow uses `npm install` rather than `npm ci`. Committing a lockfile later would make dependency installation more reproducible.
