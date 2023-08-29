#!/bin/bash

set -e
set -o pipefail

rm -rf public

export BASEURL="https://www.wtg-demos.ca/"


export HUGO_MODULE_REPLACEMENTS="github.com/wildtechgarden/wild-theme-shell-mod-hugo -> $(pwd)/../wild-theme-shell-mod-hugo, github.com/wildtechgarden/a-wild-theme-mod-hugo -> $(pwd)/../a-wild-theme-mod-hugo, github.com/wildtechgarden/demo-test-site-hugo-wtg -> $(pwd)/../wild-demo-test-site-hugo-wtg, github.com/wildtechgarden/module-starter-hugo-wtg -> $(pwd)/../module-starter-hugo-wtg, github.com/wildtechgarden/minimal-test-theme-hugo-wtg -> $(pwd)/../minimal-test-theme-hugo-wtg"
HUGO_RESOURCEDIR="$(pwd)"/resources hugo --gc --minify -b $BASEURL --source "$(pwd)" --destination "$(pwd)"/public --config "$(pwd)"/tests/config/hugo.toml
rclone sync --progress public/ wtgdemos:./
