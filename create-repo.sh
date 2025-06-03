#!/bin/bash

# Replace these variables
GITHUB_USERNAME="YOUR_USERNAME"
GITHUB_TOKEN="YOUR_PERSONAL_ACCESS_TOKEN"
REPO_NAME="blackjack-game"

# Create repository
echo "Creating repository on GitHub..."
curl -H "Authorization: token $GITHUB_TOKEN" \
     -H "Accept: application/vnd.github.v3+json" \
     https://api.github.com/user/repos \
     -d "{\"name\":\"$REPO_NAME\",\"description\":\"Classic Blackjack card game with animations and sound effects\",\"private\":false}"

echo -e "\n\nRepository created! Now pushing code..."

# Add remote and push
git remote add origin "https://$GITHUB_USERNAME:$GITHUB_TOKEN@github.com/$GITHUB_USERNAME/$REPO_NAME.git"
git branch -M main
git push -u origin main

echo -e "\n\nDone! Your repository is now live at: https://github.com/$GITHUB_USERNAME/$REPO_NAME"