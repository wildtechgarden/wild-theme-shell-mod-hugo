#!/bin/bash

set -e
set -o pipefail

SITEROOT="$(pwd)/tests/config"

export HUGO_MODULE_REPLACEMENTS="github.com/wildtechgarden/wild-theme-shell-mod-hugo -> $(pwd)"
systemd-run --working-dir "$(pwd)/tests/config" -E PATH="${PATH}" -E HUGO_RESOURCEDIR="$(pwd)"/resources -E HUGO_MODULE_REPLACEMENTS="$HUGO_MODULE_REPLACEMENTS" --unit=hugo-serve --user hugo serve --source "${SITEROOT}" --environment "production" --config "$(pwd)"/tests/config/test-config.toml --port 1313 --bind 127.0.0.1

sleep 5

if muffet http://127.0.0.1:1313/ | tee check-links.log; then
	echo "ok"
	RET=0
else
	echo "not ok"
	RET=1
fi

systemctl --user stop hugo-serve
exit $RET
