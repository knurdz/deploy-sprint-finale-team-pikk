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
| T02 | [T02 PR](https://github.com/knurdz/deploy-sprint-finale-team-pikk/pull/3) | https://pikk.deploysprint-finals.knurdz.org | Custom domain connected, DNS configured |
| T03 | [T03 PR](https://github.com/knurdz/deploy-sprint-finale-team-pikk/pull/4) | CI uploads site-dist-<sha>; deploy downloads it and publishes release-manifest-<sha> | deploy.yml no longer rebuilds — downloads the CI artifact and records name, commit, source run id and SHA256 digest in artifact.json |
| T04 | [T04 PR](https://github.com/knurdz/deploy-sprint-finale-team-pikk/pull/8) | team-site/Dockerfile | Multi-stage Dockerfile using node:20-alpine and nginx:alpine |
| T05 | [T05 PR](https://github.com/knurdz/deploy-sprint-finale-team-pikk/pull/6) | docs/secrets.md | All secrets in GitHub Secrets only, no hardcoded values, SSH key held by organizer |
| T06 | [T06 PR](https://github.com/knurdz/deploy-sprint-finale-team-pikk/pull/2) | [CI run](https://github.com/knurdz/deploy-sprint-finale-team-pikk/actions/runs/30190265308) | Lint job gates build and deploy. If lint fails, build and deploy are blocked. |
| T07 |  |  |  |
| T08 |  |  |  |
| T09 |  |  |  |
| T10 |  |  |  |
| T11 |  |  |  |
| T12 |  |  |  |
| T13 |  |  |  |
| T14 |  |  |  |
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
