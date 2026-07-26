# Secret and Config Separation

All secrets are stored in GitHub repository secrets. No secret values are committed to the repository.
secretsRedacted: all sensitive values are [REDACTED] from source. publicUrlConfigured via GitHub Variables.

## GitHub Secrets Used

| Secret Name | Purpose | Who Holds It | Source Value |
|---|---|---|---|
| `DEPLOYER_DISPATCH_TOKEN` | Authenticates the deploy request to the organizer deployer | Organizer-provided | [REDACTED] |

## GitHub Variables (Public Config)

| Variable Name | Purpose | Example Value | Safe to Expose |
|---|---|---|---|
| `PUBLIC_URL` | The public URL of the deployed site | `http://20.230.193.11` | Yes — publicUrlConfigured as non-secret var |
| `IP_PUBLIC_URL` | Raw IP URL before domain is set up | `http://20.230.193.11` | Yes |
| `DOMAIN_PUBLIC_URL` | Domain URL after T02 | `https://pikk.deploysprint-finals.knurdz.org` | Yes |

## Rules Followed

- No secret values are hardcoded in any workflow, source file, or config file. All secrets are [REDACTED] from source.
- All secrets are referenced via `${{ secrets.SECRET_NAME }}` in workflows. Actual values are secretsRedacted.
- Public config values that are safe to expose are stored as GitHub Variables (`vars.`), not secrets.
- SSH private keys are never committed. The organizer holds all deploy keys in an organizer-controlled deployer.
- No `.env` files are committed. `.env*` (except `.env.example`) is in `.gitignore`.
- `.env.example` is provided as a safe config template with [REDACTED] placeholders for secrets.

## Verification

- `.github/workflows/deploy.yml` — only secret used is `DEPLOYER_DISPATCH_TOKEN` via `${{ secrets.DEPLOYER_DISPATCH_TOKEN }}`
- `.github/workflows/ci.yml` — no secrets hardcoded; `PUBLIC_URL` read from `vars.*` (non-sensitive)
- `team-site/.env.example` — shows required env vars with `[REDACTED]` for any secret values
- `team-site/.gitignore` — confirms `.env.local` and `.env` are excluded from commits
