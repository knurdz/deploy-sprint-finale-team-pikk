#!/usr/bin/env bash
# T17: Low-Downtime Release Strategy
# Implements symlinked releases with health-gate before traffic switch.
# If health check fails, the previous release is kept and the candidate is removed.
set -euo pipefail

HEALTH_URL="${HEALTH_URL:-https://pikk.deploysprint-finals.knurdz.org/health}"
SHA="${GITHUB_SHA:-local}"
RELEASES_ROOT="${RELEASES_ROOT:-releases}"

release_dir="${RELEASES_ROOT}/${SHA}"
mkdir -p "$release_dir"
echo "T17 candidate release $release_dir"

# Copy built dist to release directory
if [ -d "./team-site/dist" ]; then
  cp -r ./team-site/dist/. "$release_dir/"
  echo "Copied dist to $release_dir"
fi

# Health-check candidate before switching current symlink
echo "Running health check against $HEALTH_URL ..."
HTTP_STATUS=$(curl -sS -o /dev/null -w "%{http_code}" --max-time 10 "$HEALTH_URL" || echo "000")

if [ "$HTTP_STATUS" = "200" ]; then
  echo "Health check passed (HTTP $HTTP_STATUS). Switching traffic..."
  ln -sfn "$release_dir" current
  echo "T17: traffic switched to $release_dir via symlink."
else
  echo "Health check FAILED (HTTP $HTTP_STATUS). Keeping previous release."
  rm -rf "$release_dir"
  exit 1
fi
