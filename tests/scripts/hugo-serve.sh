#!/bin/bash

set -e
set -o pipefail

if [ -z "${HUGO_CACHEDIR}" ]; then
	HUGO_CACHEDIR="$(pwd)/hugo-cache"
fi

export HUGO_RESOURCEDIR="$(pwd)/resources"
export SITEROOT="$(pwd)"
export SITECONFIG="$(pwd)"/tests/config/hugo.toml
cd tests/config && hugo serve --buildDrafts --buildFuture --source "${SITEROOT}" --environment "development" --config "${SITECONFIG}"
