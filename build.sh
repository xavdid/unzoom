#!/bin/bash -e

VER=$(jq -r '.version' manifest.json)

# zip for upload and move to desktop
FNAME="${PWD##*/}_chrome_$VER.zip"
zip -r "$FNAME" . -x /*.git/* build.sh
mv "$FNAME" ~/Desktop
