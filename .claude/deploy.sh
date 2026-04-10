#!/bin/bash
# Auto-deploy: commit to GitHub and deploy to Firebase after each edit
ROOT="/Users/prakarshthakur/Desktop/antigravity"
NXUS="$ROOT/nxus"
LOG="/tmp/antigravity-deploy.log"

FILE=$(jq -r '.tool_input.file_path // ""')
if [ -z "$FILE" ] || [ "$FILE" = "null" ]; then exit 0; fi

{
  echo ""
  echo "=== $(date) ==="
  echo "File edited: $FILE"

  if [[ "$FILE" == "$NXUS"* ]]; then
    # File is in nxus repo (master branch)
    cd "$NXUS" || exit 1
    git add -A
    if ! git diff --cached --quiet; then
      git commit -m "auto: update $(basename "$FILE")"
      git push origin master && echo "✓ Pushed nxus to GitHub (master)"
    else
      echo "No changes to commit in nxus"
    fi

    echo "Building and deploying to Firebase..."
    firebase deploy --only hosting && echo "✓ Deployed to Firebase"
  else
    # File is in root repo (main branch)
    cd "$ROOT" || exit 1
    git add -A
    if ! git diff --cached --quiet; then
      git commit -m "auto: update $(basename "$FILE")"
      git push origin main && echo "✓ Pushed root to GitHub (main)"
    fi
    firebase deploy && echo "✓ Deployed to Firebase"
  fi
} >> "$LOG" 2>&1
