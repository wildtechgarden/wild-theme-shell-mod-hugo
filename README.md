# 'Wild' theme shell for Hugo by Wild Tech 'Garden'

Description:	The Hugo shell (wrapper) module for themes by
					Wild Tech 'Garden' (WTG)  
Site: <https://www.wtg-demos.ca/doc/wild-theme-shell/readme/>  
Repository: <https://github.com/wildtechgarden/wild-theme-shell-mod-hugo>  
CI Status: [![pre-commit.ci status][pre-commit-ci]](https://results.pre-commit.ci/latest/github/wildtechgarden/wild-theme-shell-mod-hugo/main)

## Contents

1. [Contents](#contents)
2. [Features](#features)
	1. [Designed for extensibility](#designed-for-extensibility)
	2. [Minimal theme in its own right](#minimal-theme-in-its-own-right)
	3. [Classless or classful CSS supported](#classless-or-classful-css-supported)
	4. [Comes with sample 'responsive' vanilla CSS](#comes-with-sample-responsive-vanilla-css)
3. [Usage](#usage)
	1. [Basic (as theme)](#basic-as-theme)
		1. [Hugo module (preferred)](#hugo-module-preferred)
		2. [With `git submodule` (unsupported by theme author)](#with-git-submodule-unsupported-by-theme-author)
	2. [Configuration](#configuration)
	3. [Extension (the hooks)](#extension-the-hooks)
		1. [The base (skeleton)](#the-base-skeleton)
4. [Development](#development)
5. [Colophon](#colophon)

## Features

### Designed for extensibility

Primarily designed as a skeleton with 'hooks' to be supplied by the consumer of
this shell (e.g. can be site-specific or used by a theme that extends the
shell).

See [Extension (the hooks)][extension], below.

### Minimal theme in its own right

The skeleton has defaults for the 'hooks' that are sufficient to allow you to
use this project as a minimal theme for websites.

See [Usage][use], below.

### Classless or classful CSS supported

The HTML in the skeleton defaults to no classes on the elements by default,
but accepts parameters to override this behaviour (often can be site-wide or
per-page, or site-wide with page overrides, as you choose).

### Comes with sample 'responsive' vanilla CSS

1. Defaults to mobile menu as header until on larger screens
2. Includes a selection of starter colour schemes
3. Includes styles for reasonable printed output

## Usage

### Basic (as theme)

#### Hugo module (preferred)

1. Initialize the Hugo module system: `hugo mod init
	github.com/<your_user>/<your_project>`; (assuming you are using GitHub,
	of course).
2. Import the theme in your `hugo.toml`

	```ini
	[module]
	[[module.imports]]
	path = "github.com/wildtechgarden/wild-theme-shell-mod-hugo"
	```

3. Get the module

	```sh
	hugo mod get github.com/wildtechgarden/wild-theme-shell-mod-hugo
	```

4. To test the result, run the local Hugo server

	```sh
	hugo server -b http://localhost:1313/
	```

#### With `git submodule` (unsupported by theme author)

1. Make a themes directory and switch to it.

	```sh
	mkdir themes
	cd themes
	```

2. In the themes directory, add wild-theme-shell-mod-hugo as a submodule

	```sh
	git submodule add -f https://github.com/wildtechgarden/wild-theme-shell-mod-hugo.git
	```

3. Change back to the site directory
4. To test the result, run the local Hugo server

	```sh
	hugo server -t wild-theme-shell-mod-hugo -b http://localhost:1313/
	```

 Enjoy!

### Configuration

### Extension (the hooks)

#### The base (skeleton)

See [skeleton documentation][skel]

## Development

-------

## Colophon

Copyright © 2023 Wild Tech 'Garden'  
[Released under an MIT License](LICENSE)

[extension]: #extension-the-hooks
[pre-commit-ci]: https://results.pre-commit.ci/badge/github/wildtechgarden/wild-theme-shell-mod-hugo/main.svg
[skel]: docs/skeleton.md
[use]: #usage
