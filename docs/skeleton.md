# The skeleton (base structure)

## Contents

1. [Contents](#contents)
2. [`baseof.html` page outline (pseudocode)](#baseofhtml-page-outline-pseudocode)

## `baseof.html` page outline (pseudocode)

``` plaintext
partial "wtg-theme/helpers/above-html-setup.html" (if it exists)

<html lang="en" dir="ltr">
	block "head-meta"
	<head>
		"wtg-theme/output/head-contents.html" partial (not cached) if present
	</head>
	end "head-meta"

	<body>

	block "body-header"
		if not omitPageHeader
		<header>
			"wtg-theme/output/page-header.html" partial (cached by page) if present
		</header>
		end if
	end "head-meta"

		<div>
			<main>

	block "main-title"
		if no H1 present in content
				<h1>"wtg-theme/helpers/find-page-title.html" partial (cached by page)</h1> if present
		end if
	end "main-title"

	block "main-content"
	end "main-content"

	block "navigation-in-main"
		"wtg-theme/output/page-navigation-main-bottom.html" if present (cached by page)
	end "navigation-in-main"

	block "footer-in-main"
		"wtg-theme/output/page-footer-in-main.html" if present (cached by page)
	end "footer-in-main"

			</main>

	block "navigation-below-main"
	end

	block "footer-after-main"
		"wtg-theme/output/page-footer-after-main.html" if present (cached by page)
	end

		</div>
	</body>
</html>
```
