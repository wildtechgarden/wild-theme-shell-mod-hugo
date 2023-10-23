# Definition of wild-shell and a-wild-theme combined result

## General

* Preferably vanilla CSS
* Preferably vanilla JS

Wish to avoid SASS if possible.  
Wish to avoid NPM if possible.

## Technical SEO

* Only one H1 per page
* Head title 50 ≤ characters ≤ 70
* Description 110 ≤ characters ≤ 160
* OpenGraph schema with social media card (image)
	* Where no cover image, use a generated card
* JSON-LD 'Schema' and 'Breadcrumbs'
* perfect PageSpeed scores
* Valid HTML5 / CSS3 (updated as browsers gain support for features)
* Canonical or not appropriately
* Index / follow or not appropriately
* Robots.txt with pointer to sitemap.xml

## Mobile

* Responsive design
* Mobile menu (replacing top nav bar) on small devices

## Accessibility / Ease of use

* Anchor link targets
* Visual breadcrumb

## GitHub / GitLab / Plain Markdown compatibility

* render-link that correctly generates links that can also be properly
navigated from the source code (e.g. a base `file.md` links to a sibling
file and `../file.md` links to a file in the parent directory)
* render-image doing the same for paths to images

## Images

* Convert to WebP (with fallback to JPG for old Safari-iOS?)
* Responsive sizes for images
* Responsive pixel densities for images
* Generate thumbnails when requested
* LQIP and colour gradient maps with lazy loading
* TODO: Use Git-LFS and process images on build (with cache),
or do processing outside Hugo and reference images not in repo?
* Image credits / copyright notices
* Easy use of ECDNS and other CC local stock photos
* Gallery and/or carousel for multiple images

## Visible metadata / Authorship / Copyright

* Optionally show date (and optional time) of created/published/updated
* Show authorship
* Have author pages / links to author website / email (optional)
* Indicate article vs. site copyright

## Convenience / Shortcodes

* Insert CreativeCommons license images and links using e.g. CC-BY-SA
* Pull in content from Markdown files in assets or bundles
* Contact form (Formspree or Netlify)
* Emoji support
* Figure
* Img
* Svg
* Embedded PDFs
* Embedded docx
* Embedded ODF
* Empty shortcode (for doing Markdown linter disable in `.md` files)
* Subscript / superscript

## Page looks

* Standard article
* Optionally with hero image
* Custom homepage
	* Hero image with minimal text on landing page 'above the fold'
	* Scrolls up to a mobile or desktop (multi-column) friendly intro page with
	top navbar. On desktop also has navigation sidebar. On mobile (TBD)
* Optional 'cards' on any section (list) page (as with DFD-Zen)
* Optional thumbnails in 'cards'
* Configurable layout of cards (single or multi-column etc) with responsive
design.
* Pagination for long lists
* Related articles
* Optional article summary at top of page
* Tags or other taxonomies (visible)
* Subscript / superscript
* ToC
* Word break (`<wbr>`) support
* Add wrapper (wrapper, wrapper-start, wrapper-end)

## Feeds

* RSS and JSON feeds with full article content

## Multilingual

* Language selector
* hreflang support

## Favicons / Logo

* Based on package from RealFaviconGenerator
* Logo optional
* Part of top navbar if present

## Local search

* Scalable local search using pagefind?

## 404

* Friendly
* Search (if supported)
* Sitemap (if present)
* Home (browse)

## Other error pages

* Identify where it makes sense

## Redirects and Headers (choices)

* Apache2
* Netlify
* Text
* JSON
* CSV

Generate a static Content-Security-Policy (nonces not available)

## Taxonomies and Terms

* Support OOB
	* Tags
	* Series
* Paginate the list of pages for each term.

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
