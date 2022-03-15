
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