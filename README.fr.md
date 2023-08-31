# Une coquille de thème «sauvage» pour Hugo par WTG

Description:	Une coquille (envelopper) de thème «sauvage» pour Hugo par
					Wild Tech «Garden» (WTG)
Site: <https://www.wtg-demos.ca/fr/doc/wild-theme-shell/readme/>  
URL du référentiel: <https://github.com/wildtechgarden/wild-theme-shell-mod-hugo>\
Statut IC: [![pre-commit.ci statut](https://results.pre-commit.ci/badge/github/wildtechgarden/wild-theme-shell-mod-hugo/main.svg)][pre-commit-ic]

## Matières

1. [Matières](#matières)
2. [Fonctionnalités](#fonctionnalités)
	1. [Conçu pour l'extensibilité](#conçu-pour-lextensibilité)
	2. [Thème minimal à part entière](#thème-minimal-à-part-entière)
	3. [CSS sans classe ou classe pris en charge](#css-sans-classe-ou-classe-pris-en-charge)
3. [Utilisation](#utilisation)
	1. [De base (comme thème)](#de-base-comme-thème)
		1. [Module Hugo (préféré)](#module-hugo-préféré)
		2. [Avec `git submodule` (ne pris en charge)](#avec-git-submodule-ne-pris-en-charge)
	2. [Configuration](#configuration)
	3. [Extension (les crochets)](#extension-les-crochets)
		1. [Le base (le squelette)](#le-base-le-squelette)
4. [Développement](#développement)
5. [Colophon](#colophon)

## Fonctionnalités

### Conçu pour l'extensibilité

### Thème minimal à part entière

### CSS sans classe ou classe pris en charge

## Utilisation

### De base (comme thème)

#### Module Hugo (préféré)

1. Initialisez le système de modules Hugo: `hugo mod init
	github.com/<votre_user>/<votre_project>`; (en supposant que vous utilisez
	GitHub, bien sûr).
2. Importez le thème dans votre `hugo.toml`

	```ini
	[module]
	[[module.imports]]
	path = "github.com/wildtechgarden/wild-theme-shell-mod-hugo"
	```

3. Revenu à l'annuaire du site
4. Obtenez le module

	```sh
	hugo mod get github.com/wildtechgarden/wild-theme-shell-mod-hugo
	```

5. Aux faire vérifier le résultat, exécutez le serveur Hugo local

	```sh
	hugo server -b http://localhost:1313/
	```

#### Avec `git submodule` (ne pris en charge)

1. Créez-vous un répertoire de `themes` et basculez-y.

	```sh
	mkdir themes
	cd themes
	```

2. Dans le répertoire themes, ajoutez `wild-theme-shell-mod-hugo` en tant
'submodule'

	```sh
	git submodule add -f https://github.com/wildtechgarden/wild-theme-shell-mod-hugo.git
	```

3. Revenir à l’annuaire du site
4. Pour tester le résultat, exécutez le serveur Hugo local

	```sh
	hugo server -t hugo-minimal-test -b http://localhost:1313/
	```

Jouir!

### Configuration

### Extension (les crochets)

#### Le base (le squelette)

Voir [le documentation du squelette][skel]

## Développement

-------

## Colophon

Copyright © 2023 Wild Tech 'Garden'  
[Publié sous license MIT](LICENSE)

[skel]: docs/skeleton.fr.md
[pre-commit-ic]: https://results.pre-commit.ci/latest/github/wildtechgarden/wild-theme-shell-mod-hugo/main
