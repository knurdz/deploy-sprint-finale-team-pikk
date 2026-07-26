# Deploy Sprint Finale Submission

Complete this file on `main` as tasks are completed. Do not paste secrets, private keys, token values, or screenshots that reveal credentials.

## Team

- Team name: PIKK
- Team members: Nirmana Pansilu, Isiwara Mallawaarachchi, Kavindu Mihisara, Kavindu Jayalath
- Live IP URL: http://20.230.193.11
- Assigned domain URL: https://pikk.deploysprint-finals.knurdz.org
- Repository URL: https://github.com/knurdz/deploy-sprint-finale-team-pikk

## Release Evidence

- Current production commit: a7146ef4e6d43f44452afa660c2d74bc9a41ce8e
- Current artifact/image identifier: site-dist-a7146ef4e6d43f44452afa660c2d74bc9a41ce8e
- Current deployment workflow run: 30189666360
- Current release manifest path or URL: http://20.230.193.11/status
- Notes on live evidence or fallback evidence: Live site at http://20.230.193.11 — /health returns HTTP 200, /status returns JSON with commit SHA and T01 marker. Deployed via GitHub Actions deploy.yml after CI passed on main.

## Score Summary

- Automated points out of 800:
- Judge points out of 200:
- Final total points out of 1000:

## Completed Tasks

Use this section for short public notes and links. Full task instructions and checks are in the finalist dashboard.

| Task | PR | Evidence | Notes |
| --- | --- | --- | --- |
| T01 | [T01 PR](https://github.com/knurdz/deploy-sprint-finale-team-pikk/pull/1) | http://20.230.193.11/status | Site live, /health 200, /status shows commit SHA and T01 marker |
| T02 | [T02 PR](https://github.com/knurdz/deploy-sprint-finale-team-pikk/pull/21) | https://pikk.deploysprint-finals.knurdz.org | Custom domain connected, manifest verified, DNS deployed. TXT verification completed. |
| T03 | [T03 PR](https://github.com/knurdz/deploy-sprint-finale-team-pikk/pull/4) | CI uploads site-dist-<sha>; deploy downloads it and publishes release-manifest-<sha> | deploy.yml no longer rebuilds — downloads the CI artifact and records name, commit, source run id and SHA256 digest in artifact.json |
| T04 | [T04 PR](https://github.com/knurdz/deploy-sprint-finale-team-pikk/pull/9) | .github/workflows/rollback.yml | Rollback workflow added with workflow_dispatch to restore a known-good release_ref. Verified with diagnostic failure run. |
| T05 | [T05 PR](https://github.com/knurdz/deploy-sprint-finale-team-pikk/pull/6) | docs/secrets.md | All secrets in GitHub Secrets only, no hardcoded values, SSH key held by organizer |
| T06 | [T06 PR](https://github.com/knurdz/deploy-sprint-finale-team-pikk/pull/2) | [CI run](https://github.com/knurdz/deploy-sprint-finale-team-pikk/actions/runs/30190265308) | Lint job gates build and deploy. If lint fails, build and deploy are blocked. |
| T07 | [T07 PR](https://github.com/knurdz/deploy-sprint-finale-team-pikk/pull/14) | team-site/src/components/WeatherWidget.tsx | OpenWeather API widget added, fetches weather data and displays it on the site. |
| T08 | [T08 PR](https://github.com/knurdz/deploy-sprint-finale-team-pikk/pull/11) | team-site/src/components/LearningVelocity.tsx | Rebased organizer feature branch onto main. LearningVelocity component cleanly integrated with no conflicts. |
| T09 | [T09 PR](https://github.com/knurdz/deploy-sprint-finale-team-pikk/pull/12) | team-site/src/data/deadlines.ts | Merge conflict resolved preserving both outcomes: repo-setup-checkpoint (main) and merge-conflict-lab (conflict-merge branch) both retained. |
| T10 |  |  |  |
| T11 |  |  |  |
| T12 | [T12 PR](https://github.com/knurdz/deploy-sprint-finale-team-pikk/pull/16) | .github/workflows/ci.yml | npm dependency cache keyed on team-site/package-lock.json via setup-node in both lint and build jobs. npm ci used for deterministic installs. |
| T13 |  |  |  |
| T14 | [T14 PR](https://github.com/knurdz/deploy-sprint-finale-team-pikk/pull/17) | Dockerfile | Production Dockerfile created at root with multi-stage Node.js build and Nginx serving. |
| T15 |  |  |  |
| T16 |  |  |  |
| T17 |  |  |  |
| T18 |  |  |  |
| T19 |  |  |  |
| T20 |  |  |  |
| T21 |  |  |  |
| T22 |  |  |  |
| T23 |  |  |  |
| T24 |  |  |  |
| T25 |  |  |  |
| T26 |  |  |  |
| T27 |  |  |  |
| T28 |  |  |  |
| T29 |  |  |  |
| T30 |  |  |  |

## Public Notes

List anything judges should know without exposing credentials or private infrastructure details.

- T01: Site deployed to VPS via GitHub Actions only. No direct VPS access used. Health and status routes confirmed live. Deploy key held by organizer deployer.
