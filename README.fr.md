# Une coquille de thème «sauvage» pour Hugo par WTG

Description:	Une coquille (envelopper) de thème «sauvage» pour Hugo par
					Wild Tech «Garden» (WTG)
Site: <https://www.wild-theme-shell.wtg-demos.ca/>  
URL du référentiel: <https://github.com/wildtechgarden/wild-theme-shell-mod-hugo>\
Statut IC: [![pre-commit.ci statut](https://results.pre-commit.ci/badge/github/wildtechgarden/wild-theme-shell-mod-hugo/main.svg)][pre-commit-ic]
[![build-audit](https://github.com/wildtechgarden/wild-theme-shell-mod-hugo/actions/workflows/audit-only.yml/badge.svg)](https://github.com/wildtechgarden/wild-theme-shell-mod-hugo/actions/workflows/audit-only.yml)

## Matières

1. [Matières](#matières)
2. [Fonctionnalités](#fonctionnalités)
	1. [Conçu pour l'extensibilité](#conçu-pour-lextensibilité)
	2. [Thème minimal à part entière](#thème-minimal-à-part-entière)
	3. [CSS sans classe ou classe pris en charge](#css-sans-classe-ou-classe-pris-en-charge)
	4. [Livré avec un échantillon de CSS vanille « réactif »](#livré-avec-un-échantillon-de-css-vanille--réactif-)
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

Conçu principalement comme un squelette avec des « crochets » destinés à être
fournis par le consommateur de ce shell (p. ex., peut être spécifique au site
ou utilisé par un thème qui étend le coquille).

Voir [Extension (les crochets)][extension], ci-dessous.

### Thème minimal à part entière

Le squelette a des valeurs par défaut pour les 'crochets' qui sont
suffisantes à vous permettre de utilisez ce projet comme thème minimal des
sites web.

Voir [Utilisation][use], ci-dessous

### CSS sans classe ou classe pris en charge

Le code HTML dans le squelette n'est par défaut aucune classe sur les éléments
par défaut, mais accepte des paramètres pour remplacer ce comportement (peut
souvent être à l'échelle du site ou par page, ou à l'échelle du site avec des
remplacements de page, selon votre choix).

### Livré avec un échantillon de CSS vanille « réactif »

1. Par défaut, le menu mobile comme en-tête jusqu'à ce que des écrans plus
	grands soient plus grands
2. Comprend une sélection de couleurs de départ
3. Comprend des styles pour une sortie d'impression raisonnable

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

3. Obtenez le module

	```sh
	hugo mod get github.com/wildtechgarden/wild-theme-shell-mod-hugo
	```

4. Aux faire vérifier le résultat, exécutez le serveur Hugo local

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

[extension]: #extension-les-crochets
[skel]: docs/skeleton.fr.md
[pre-commit-ic]: https://results.pre-commit.ci/latest/github/wildtechgarden/wild-theme-shell-mod-hugo/main
[use]: #utilisation
