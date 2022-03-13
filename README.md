# Project Details
---

```
	Project Name: Pug/SCSS Template
	Date Commence: 2020
	Repository URL: https://bitbucket.org/commude_git/pug-scss-template/src
	Specifications URL(if any): -N/A-
```


# Table of Content:
---
1. [COMMUDE Coding rules](#markdown-header-commude-coding-rule)
2. [Prerequisites](#markdown-header-prerequisites)
2. [Using the template](#markdown-header-using-the-template)
2. [Setup development environment ](#markdown-header-setup-development-environment)
3. [Project tree Structure](#markdown-header-project-directory-structure)
4. [Wiki](https://bitbucket.org/commude_git/pug-scss-template/wiki/Home)
5. [Htaccess template](https://bitbucket.org/commude_git/htaccess-template/src/master/)
6. [VS Code template](https://bitbucket.org/commude_git/vscode-setting-template/src/master/htdocs/)
7. [SSH Setup](https://docs.google.com/document/d/1KCsmc6oLRxhI5zXAZwvHGFqZHk9TiI6IN2xnuFFj680/edit?usp=drive_web&ouid=105749486430863183626)
8. [PUG Usage](https://drive.google.com/drive/folders/1HWlaviU35Z1cK7Uz81VbUE4rZjJCPAKy)

## COMMUDE Coding Rule
---
- [JP Ver](https://docs.google.com/document/d/1iwIVulnExD6ralOuJVCeMc6twYXE1ZDmJ-tVXGuEOhk/edit#heading=h.epwlr8b4jlog)
- [EN Ver](https://docs.google.com/document/d/1iGk5EpJaRu53UnIKUc22_a2fAK-XWS2qizcdGikiMHE/edit#heading=h.epwlr8b4jlog)

## Prerequisites
---
* SSH key should be registered to Bitbucket account

## Using the template
---
* All assets/images/files should be placed inside the src folder only.
* All files in DIST is automatically deleted/cleared upon running npm run:watch all

## Setup development environment
---
* Clone repository to your project path.
* Use terminal/shell/cmd to access [project_name]/htdocs/
    * NPM scripts will only work inside htdocs/ directory.
* Install Dependencies (This must be sucessfully before proceeding to the next step)
```
npm ci
```

* Once successfully installed, you can run the command to compile and preview site.
```
npm run watch:all
```

## Essential Commands
---

* Install Dependencies (First-time only)

```
npm ci
```

* Compile/Watch Changes and Load local server with Browser

    - Clear Distribution folder
    - PUG >> HTML
    - SCSS >> CSS
    - Optimize images for DIST
    - Load local server with hot reloading.

```
npm run watch:all
```

* Format Source

```
npm run format:all
```

* Pre-release production

- Minify source + delete source map

```
npm run prepare:all
```

## NPM commands:
---

* Update package

```
npm update package-name
```

* Remove package

```
npm uninstall package-name
```

* List up outdated packages

```
npm outdate
```

* Remove unused packages
```
npm prune
```

## Project Directory Structure
---

```
.
├── README.md
└── /htdocs/
    ├── .stylelintignore
    ├── .browserslistrc
    ├── .stylelintrc.json
    ├── .prettierrc.json
    ├── .eslintrc.json
    ├── imagemin.js
    ├── package-lock.json
    ├── package.json
    ├── /dist/
    │   ├── /_assets/
    │   │   ├── /css/
    │   │   │   ├── style.css
    │   │   │   └── style.css.map
    │   │   ├── /images/
    │   │   ├── /js/
    │   │   │   └── bundle.js
    │   │   └── /lib/
    │   ├── /about/
    │   │   └── index.html
    │   └── index.html
    └── /src/
        ├── /images/
        ├── /js/
        │   ├── /modules/
        │   └── index.js
        ├── /lib/
        ├── /pug/
        │   ├── /_inc/
        │   │   ├── _head.pug
        │   │   ├── _siteFooter.pug
        │   │   └── _siteHeader.pug
        │   ├── /about/
        │   │   └── index.pug
        │   └── index.pug
        └── /scss/
            ├── /_base/
            ├── /_mixin/
            ├── /_modules/
            ├── /_pages/
            ├── _common.scss
            └── style.scss
```

## Liquid Layout

```
$contentCenter: 1140px; // コンテンツ幅 = 1140pxだった場合 (If content width is 1140px)

.xxxx {
  // PC(>1140px)
  font-size: 3rem;

  // Liquid(<=1140px)
  @include u-mqMax() {
    font-size: 2rem;
  }

  // SP(<=768px)
  @include u-mqMax($maxW: $windowSP) {
    font-size: 1.5rem;
  }
}
```

### Print CSS

```
// print
@include u-print {

}
```