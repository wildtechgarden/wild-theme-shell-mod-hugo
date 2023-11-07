#!/bin/bash
# cspell:ignore wildshell

set -e
set -o pipefail

rm -rf public

export BASEURL="https://www.wild-theme-shell.wtg-demos.ca/"
export HUGO_RESOURCEDIR="$(pwd)"/resources
# export HUGO_MODULE_REPLACEMENTS="github.com/wildtechgarden/wild-theme-shell-mod-hugo -> $(pwd)"
export SITEROOT="$(pwd)/tests/config"
export SITECONFIG="$(pwd)"/tests/config/test-config.toml
export TARGET="$(pwd)"/public
export CURDIR="$(pwd)"

cd "$(pwd)"/tests/config && hugo --gc --minify -b $BASEURL --source "${SITEROOT}" --destination "${TARGET}" --config "${SITECONFIG}"
cd "$CURDIR"
rclone sync --progress --checksum public/ wtg-wildshell:./
