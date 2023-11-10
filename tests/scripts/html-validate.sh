#!/bin/bash
# cspell:ignore filterpattern
set -e
set -o pipefail

SITEROOT="$(pwd)"

if java -jar ~/jar/vnu.jar --Werror --filterpattern "(Attribute .shadowrootmode. not allowed on element .template. at this point\.)" $(find ${SITEROOT}/public -name '*.html') | tee html-validate.log; then
	if java -jar ~/jar/vnu.jar --Werror --filterpattern "(.*\: Property.*(block|inline|start-start|start-end|end-start|end-end).*doesn't exist\.|.*Unknown pseudo-element or pseudo-class .:host.|CSS\: Parse Error\.)" --css $(find ${SITEROOT}/public -name '*.css') | tee -a html-validate.log; then
		echo "ok"
		exit 0
	else
		echo "not ok"
		exit 1
	fi
else
	echo "not ok"
	exit 1
fi
