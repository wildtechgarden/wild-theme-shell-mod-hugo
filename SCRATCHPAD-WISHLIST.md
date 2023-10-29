# Definition of wild-theme-shell

For addons see [a-wild-theme](https://github.com/wildtechgarden/a-wild-theme-mod-hugo)

## TODO

Split this into items for `wild-shell` (core) and `a-wild-theme` (add-on modules)

## General

* Preferably vanilla CSS
* Preferably vanilla JS and then only if required
* Incorporate techniques from [CSS Nouveau](https://www.spicyweb.dev/building-courseware-i-understand/)

Wish to avoid SASS/PostCSS if possible.  
Wish to avoid NPM/js.Build if possible.

In general any partial should be overridable in a theme using this shell,
and smaller customizations should also be supported (e.g. colour scheme only,
without needing to replace all CSS).

## General UI

* Light, dark, and system selection colour modes
* Easily customizable colour schemes

## Multilingual

* Make sure theme can easily support additional languages

## Technical SEO

* Only one H1 per page
* Head title 50 ≤ characters ≤ 70
* Description 110 ≤ characters ≤ 160
* perfect (or close) PageSpeed scores
* Valid HTML5 / CSS3 (updated as browsers gain support for features)
* Canonical or not appropriately
* Index / follow or not appropriately
* Robots.txt with pointer to sitemap.xml

## Mobile

* Responsive design
* Mobile menu (replacing top nav bar) on small devices

## Accessibility / Ease of use

* Must be accessible (a11y)
* Anchor link targets
* Visual breadcrumb
* High contrast (both light and dark modes)

## GitHub / GitLab / Plain Markdown compatibility

* render-link that correctly generates links that can also be properly
navigated from the source code (e.g. a base `file.md` links to a sibling
file and `../file.md` links to a file in the parent directory)
* render-image doing the same for paths to images (so when GitHub/GitLab
render Markdown you should see the images)

## Visible metadata / Authorship / Copyright

* Optionally show date (and optional time) of created/published/updated
* Show authorship
* Have author pages / links to author website / email (optional)
* Indicate article vs. site copyright

## Convenience / Shortcodes

* Pull in content from Markdown files in assets or bundles
* Contact form (Formspree or Netlify)
* Empty shortcode (for doing Markdown linter disable in `.md` files)

## Page looks

* Standard article
* Custom homepage
* Optional article summary at top of page
* Tags or other taxonomies (visible)
* Table of Contents

### Footer

* License / copyright (preferably via click/keypress not taking up space
always)
* Optional Build with / Powered by
* Optional Report a site issue
* Customizable

## Taxonomies and Terms

* Support OOB
	* Tags
	* Series

## HTML content-friendly

* Generating Tables of Contents, HTML sitemaps, and so on should work
correctly when using HTML content files.
* Archetypes need to include `default.html` for HTML content.
* Functionality in render-X hooks should also be available to HTML content
files via shortcodes.

## Limit use of section/list pages with content

* Content should be on regular pages.
* Manual links to pages in a section on a regular page should be the default
navigation targets rather than list pages in most cases.
* Exceptions include situations like a list of blog posts, pages in a
(taxonomy) term, and a paginated HTML sitemap.
* Therefore we want menus that don't use e.g. `mainSections` or to set
`mainSections` to an empty list so that we define the proper navigation
targets.

## Review already done features and record implemented but not listed

* [wtg-shell](https://www.wtg-demos.ca/)
* [DFD-Zen](https://www.zen-theme-hugo-wtg.wtg-demos.ca/)
