# Secret and Config Separation

All secrets are stored in GitHub repository secrets. No secret values are committed to the repository.

## GitHub Secrets Used

| Secret Name | Purpose | Who Holds It |
|---|---|---|
| `DEPLOYER_DISPATCH_TOKEN` | Authenticates the deploy request to the organizer deployer | Organizer-provided |

## GitHub Variables (Public Config)

| Variable Name | Purpose | Example Value |
|---|---|---|
| `PUBLIC_URL` | The public URL of the deployed site | `http://20.230.193.11` |
| `IP_PUBLIC_URL` | Raw IP URL before domain is set up | `http://20.230.193.11` |
| `DOMAIN_PUBLIC_URL` | Domain URL after T02 | `https://pikk.deploysprint-finals.knurdz.org` |

## Rules Followed

- No secret values are hardcoded in any workflow, source file, or config file.
- All secrets are referenced via `${{ secrets.SECRET_NAME }}` in workflows.
- Public config values that are safe to expose are stored as GitHub Variables (`vars.`), not secrets.
- SSH private keys are never committed. The organizer holds all deploy keys in an organizer-controlled deployer.
- No `.env` files are committed. `.env*` is in `.gitignore`.

## Verification

Check `.github/workflows/deploy.yml` — the only secret used is `DEPLOYER_DISPATCH_TOKEN` via `${{ secrets.DEPLOYER_DISPATCH_TOKEN }}`.
Check `.github/workflows/ci.yml` — no secrets are hardcoded; `PUBLIC_URL` is read from `vars.*` which are non-sensitive config values.
