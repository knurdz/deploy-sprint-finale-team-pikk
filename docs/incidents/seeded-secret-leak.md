# Seeded Secret Leak Drill

Seeded test token: **[REDACTED / REVOKED]**

This is not a real credential, but teams must treat it like a leaked secret: remove it, scan for it, and document cleanup/rotation decisions.

## Remediation & Prevention
- **Rotation**: The leaked token was immediately revoked. It has been replaced with a GitHub Actions Secret (`DEBUG_TOKEN`).
- **History Cleanup**: We branched off `main` and carefully cherry-picked the files without merging the compromised commit. This ensured the raw secret never entered our `main` branch's history.
- **Scanning**: We added a secret scanning step using `rg` (ripgrep) to our CI pipeline (`.github/workflows/ci.yml`) to automatically catch any future token or private key patterns before they can be merged.
