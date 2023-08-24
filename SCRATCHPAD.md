# Scratchpad notes; to be moved to README and docs/*

## Partials 'namespace' to aid interoperability with other modules

### the xxx-wtg-awt subdirectories of `layouts/partials`

Partials are stored under `layouts/partials/helpers-wtg-awt` and
`output-wtg-awt` in order to avoid conflicting with modules from
other developers.

### helpers-wtg-awt

For function (no output) partials

### output-wtg-awt

For output partials

## Variables (site and/or page level params)

### Setting variables

#### To change it for the site

##### Example for TOML (e.g. hugo.toml)

[params]
topLevelClass = "has-js"

#### To change it for a page

##### Example for TOML frontmatter

``` toml
+++
…
topLevelClass = "has-js"
…
+++

Some page content.
…
```

#### Cascade works

Using cascade allows to set the param on multiple pages at once.
See the [Hugo](https://gohugo.io) documentation of `cascade` for details.

### html element class

Defaults to "no-js" meaning the assumption is that no javascript should be
running on the page.

With "has-js", a script that runs on page load will replace "has-js" with
"use-js", and any element that has a "default-hide-js" class will have that
class replaced with "default-show-js".

### Body class

Defaults to not adding a class to the body. Setting the
`bodyClass` param as described above, will add the
string provided as a class to the `<body>` element.

### Body wrapper class

If the page has a `<div class="body-wrapper">` element (the default), then
setting the `bodyWrapperClass` param will use string provided as the
class(es) for that wrapper `<div>`.

### Omit page header

The page can be hidden via param (user) by setting `omitPageHeader`
to `true`. Alternatively a layout can override the `body-header` block.

### Body header class

If the page has a `<header class="body-header">` element (the default), then
setting the `bodyHeaderClass` param will use string provided as the
class(es) for that `<header>`.

### Body main class

If the page has a `<div class="body-main">` element (the default), then
setting the `bodyMainClass` param will use string provided as the
class(es) for that `<div>`.

### Body main id

If the page has a `<div class="body-main" id="content">` element (the default),
then setting the `bodyMainId` param will use string provided as the
id for that `<div>`.

## Page outline

``` plaintext
partial "helpers-wtg-awt/above-html-setup.html" (if it exists)
<html>
	block "head-meta"
	default:
	<head>
		"output-wtg-awt/head-contents.html" partial (not cached) if present
		else {{ hugo.Generator }}
	</head>
	end
	<body…>
	block "body-wrapper-start"
	default:
	<div class="body-wrapper">
	end
	block "body-header"
	default:
	<header class="body-header">
		if not hidePageHeader
			"output-wtg-awt/header.html" partial (cached by page) if present
		end
	</header>
	end
	block "body-after-header-top"
	default:
	<div class="body-after-header">
		<h1>"output-wtg-awt/page-title.html" partial (cached by page)</h1> if present,
		else {{ .Title }}
	end
		<div class="body-main" id="content">
	block "main"
	default:
	end
	block "navigation-in-main"
	default:
		"output-wtg-awt/page-navigation.html" if present (cached by page)
	end
		</div>
	block "navigation-below-main"
	default:
	end
	block "footer-after-main"
	default:
		"output-wtg-awt/footer.html" if present (cached by page)
	end
	block "body-after-header-bottom">
	default:
	</div>
	end
	block "footer-separated"
	default:
	end
	block "body-wrapper-end"
	default:
	</div>
	end
	</body>
</html>
```

## Above HTML setup

This is a function partial…no page text/elements/etc may be output by this
partial (`warnf` and `errorf` are okay). This exists to do things like
'collect' CSS and JS from other layouts (called in the body).
