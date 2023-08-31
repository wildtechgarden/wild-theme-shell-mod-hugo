# Le squelette (structure de base)

## Matières

1. [Matières](#matières)
2. [`baseof.html` page contour (pseudo-code)](#baseofhtml-page-contour-pseudo-code)

## `baseof.html` page contour (pseudo-code)

``` plaintext
partial "wtg-theme/helpers/above-html-setup.html" (s'il existe)

<html lang="en" dir="ltr">
	block "head-meta"
	<head>
		"wtg-theme/output/head-contents.html" partial (sans de caché de page) s'il existe
	</head>
	end "head-meta"

	<body>

	block "body-header"
		if not omitPageHeader
		<header>
			"wtg-theme/output/page-header.html" partial (caché de page) s'il existe
		</header>
		end if
	end "head-meta"

		<div>
			<main>

	block "main-title"
		if sans de H1 présent in content
				<h1>"wtg-theme/helpers/find-page-title.html" partial (caché de page)</h1> s'il existe
		end if
	end "main-title"

	block "main-content"
	end "main-content"

	block "navigation-in-main"
		"wtg-theme/output/page-navigation-main-bottom.html" (caché de page) s'il existe
	end "navigation-in-main"

	block "footer-in-main"
		"wtg-theme/output/page-footer-in-main.html" (caché de page) s'il existe
	end "footer-in-main"

			</main>

	block "navigation-below-main"
	end

	block "footer-after-main"
		"wtg-theme/output/page-footer-after-main.html" if (caché de page) s'il existe
	end

		</div>
	</body>
</html>
```
