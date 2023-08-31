# Scratchpad notes; to be moved to README and docs/*

## Partials 'namespace' to aid interoperability with other modules

### the xxx-wtg-awt subdirectories of `layouts/partials`

Partials are expected under `layouts/partials/wtg-theme/helpers` and
`wtg-theme/output` in order to avoid conflicting with modules from
other developers.

### wtg-theme/helpers

For function (no output) partials

### wtg-theme/output

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

## baseof.html outline and variables

### Variables

#### html element class

Defaults to "no-js" meaning the assumption is that no javascript should be
running on the page.

With "has-js", a script that runs on page load will replace "has-js" with
"use-js", and any element that has a "default-hide-js" class will have that
class replaced with "default-show-js".

#### Body class

Defaults to not adding a class to the body. Setting the
`bodyClass` param as described above, will add the
string provided as a class to the `<body>` element.

#### Omit page header

The page can be hidden via param (user) by setting `omitPageHeader`
to `true`. Alternatively a layout can override the `body-header` block.

#### Body header class

If the page has a `<header>` element at the top of the `<body>` (the default),
then setting the `bodyHeaderClass` param will use string provided as the
class(es) for that `<header>`.

#### Body main class

If the page has a `<main>` element (the default), then
setting the `bodyMainClass` param will use string provided as the
class(es) for that `<main>`.

#### Body main id

If the page has a `<main>` element (the default), then setting
the `bodyMainId` param will use string provided as the
id for that `<main>`.

### Above HTML setup

This is a function partial…no page text/elements/etc may be output by this
partial (`warnf` and `errorf` are okay). This exists to do things like
'collect' CSS and JS from other layouts (called in the body).

## Additional layouts

### Default list (section) page layout

`_default/list.html` Uses partial `wtg-theme/output/layout-default-list.html` if
present, otherwise

```go-html-template
{{- .Content -}}
{{- range .Data.Pages }}
<ul>
<li><a href="{{ .RelPermalink }}">{{ .Title }}</a></li>
</ul>
{{- end -}}
```

### Default single (regular) page layout

`_default/list.html` Uses partial `wtg-theme/output/layout-default-single.html`
if present, otherwise

```go-html-template
{{ .Content -}}
```

### 404 page layout

`404.html` Uses partial `wtg-theme/output/layout-404.html` if present,
otherwise

```html
<p>404 Page not found</p>
```
