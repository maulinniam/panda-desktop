# Panda Desktop

Panda merupakan salah satu cita-cita kami mewujudkan Indonesia yang lebih baik. PuskoMedia Indonesia berpengalaman selama 8 tahun mendampingi desa di berbagai pelosok Indonesia. Bersama Gedhe Foundation kami membantu banyak desa menuju keterbukaan informasi.

Desa sebagai ujung tombak pelayanan pemerintahan sangat strategis untuk menjalankan amanat Undang-Undang No 6 Tahun 2014 tentang Desa. Menyadari hal tersebut, lahirlah Panda sebagai salah satu aplikasi untuk membantu pelayanan masyarakat agar lebih baik.

## Features

Panda memiliki fitur yang dibutuhkan untuk mengelola data administrasi, kependudukan, pelayanan publik, anggaran dan masih banyak lagi.

**Aplikasi Data Kependudukan**
**Aplikasi Layanan dan Administrasi Persuratan**
**Aplikasi Pemerintahan Desa**
**Aplikasi APBDes**
**Statistik**

## Quick start
**Make sure you have Node version >= 6.0 and NPM >= 3**
> Clone/Download the repo then edit `app.component.ts` inside [`/src/app/app.component.ts`](/src/app/app.component.ts)

```bash
# clone our repo
# --depth 1 removes all but one .git commit history
hg clone https://razaqultegar@bitbucket.org/pandadesktop/panda-desktop

# change directory to our repo
cd panda-desktop

# install the repo with npm
npm install

# launch the development build
npm start

# if you're in China use cnpm
# https://github.com/cnpm/cnpm
```
Electron will automatically launch and update itself when your source code changes.

# Getting Started

## Dependencies
What you need to run this app:
* `node` and `npm` (`brew install node`)
* Ensure you're running the latest versions Node `v6.x.x`+ (or `v7.x.x`) and NPM `3.x.x`+

> If you have `nvm` installed, which is highly recommended (`brew install nvm`) you can do a `nvm install --lts && nvm use` in `$` to run with the latest Node LTS. You can also have this `zsh` done for you [automatically](https://github.com/creationix/nvm#calling-nvm-use-automatically-in-a-directory-with-a-nvmrc-file)

Once you have those, you should install these globals with `npm install --global`:
* `electron` (`npm install --global electron`)
* `webpack` (`npm install --global webpack`)
* `karma` (`npm install --global karma-cli`)
* `typescript` (`npm install --global typescript`)

## Installing
* `fork` this repo
* `clone` your fork
* `npm install` to install all dependencies or `yarn`
* `npm start` to start the development workflow

## Building

```bash
# development
npm run build:dev
# production (jit)
npm run build:prod
# AoT
npm run build:aot
```

## Launching Your Build

```bash
npm run launch
```

## Generating Release Packages

Make sure to build your app first. Application packages files will be generated inside the `/packages` directory.

```bash
# all platforms
npm run package
# Linux
npm run package:linux
# Mac
npm run package:mac
# Windows
npm run package:windows
```

## Other Commands

### run unit tests
```bash
npm run test
```

### watch and run our tests
```bash
npm run watch:test
```
When you watch tests you can debug them using the Chrome Debugger tools.  To do this, run
the above command, after the tests run, click on the Debug button in the Karma Electron
instance.  This opens the Karma Debug Runner window.  Open the Chrome dev tools in this
window (Ctrl-Shift-i).  Open the Sources tab, navigate the webpack:// item to find the
test case you want to debug.  Set a breakpoint, then refresh the view (Ctrl-R) to reload
the page.  Your break point should hit and you can debug and step through your code.
<p align="center">
  <img src="https://raw.github.com/colinskow/angular-electron-dream-starter/master/docs/img/debug_unittest.png" alt="Debug Unit Tests" width="300" height="300"/>
</p>

### watch and run all tests in a directory
```bash
npm run watch:test:grep -- app/about/
```

### watch and run a single test
```bash
npm run watch:test:grep -- app/about/about.component.spec.ts
```

This is useful for debugging a failing test case.  You can further narrow to just a single "it" function by placing an "f" (means focus on this test) in front of the failing test case [see Jasmine Focused](https://jasmine.github.io/2.1/focused_specs.html).  Then only this file will be run while you debug.

### run end-to-end tests
```bash
# this will start a test server and launch Protractor
npm run e2e
```

### continuous integration (run unit tests and e2e tests together)
```bash
# this will test both your JIT and AoT builds
npm run ci
```

### run Webdriver.io's live debug (for end-to-end)
This allows you to debug e2e tests and explore your app while it is running. See the [WebDriver.io documentation](http://webdriver.io/api/utility/debug.html) for details.

```bash
npm run e2e:live
```

### clean application data
```bash
# this will delete all data from localStorage, indexedDB etc.
npm run clean:appdata
```

# Configuration
Configuration files live in `config/`. You can modify the settings for Webpack and Karma here.

The configuration for your Electron build lives inside `package.json` under `build`. You can read the docs [here](https://github.com/electron-userland/electron-builder).

# Managing Dependencies

Each package listed in `package.json` under `dependencies` will automatically be packaged with your app and rebuilt for Electron if it contains native bindings. Only list packages here that are necessary for your app's runtime. Angular, CoreJS and related packages are compiled by Webpack and therefore not necessary at runtime. These and anything else not needed to run your app should go under `devDependencies`.

Any time you run `npm install` or `yarn install`, your app dependencies will automatically be built and packaged for your current operating system and architecture. After you run `npm update` or `yarn upgrade`, you will need to manually update app's dependencies are up-to-date as well:

```bash
# if you use yarn
yarn run install-app-deps
# otherwise
npm run install-app-deps
```

# AoT Don'ts
The following are some things that will make AoT compile fail.

- Donâ€™t use require statements for your templates or styles, use styleUrls and templateUrls, the angular2-template-loader plugin will change it to require at build time.
- Donâ€™t use default exports.
- Donâ€™t use `form.controls.controlName`, use `form.get(â€˜controlNameâ€™)`
- Donâ€™t use `control.errors?.someError`, use `control.hasError(â€˜someErrorâ€™)`
- Donâ€™t use functions in your providers, routes or declarations, export a function and then reference that function name
- @Inputs, @Outputs, View or Content Child(ren), Hostbindings, and any field you use from the template or annotate for Angular should be public

# External Stylesheets
Any stylesheets (Sass or CSS) placed in the `src/styles` directory and imported into your project will automatically be compiled into an external `.css` and embedded in your production builds.

For example to use Bootstrap as an external stylesheet:

1) Create a `styles.css` file (name doesn't matter) in the `src/styles` directory.
2) `npm install` the version of Boostrap you want.
3) In `styles.css` add `@import 'bootstrap/css/bootstrap.css';`
4) In `src/app/app.module.ts` add underneath the other import statements: `import '../styles/styles.css';`

# Lazy Loading
When you lazy load a module in your router config, it will go into a separate chunk and the browser will download the code after your main application is finished loading. This results in faster start-up time.

You can make a module lazy load by using the `loadChildren` syntax in your route definitions:

```js
{ path: 'detail', loadChildren: './+detail#DetailModule'}
```

To make sure TypeScript compiles your lazy-loaded modules, declare them in `./src/app/lazy-loaded.ts` with an import statement. Declaring the modules allows TypeScript to only compile the necessary files. Previously TS would compile every single `.ts` file in your project tree on every single build which was inefficient and lead to issues.

# Contributing
You can include more examples as components but they must introduce a new concept such as `Home` component (separate folders), and Todo (services). I'll accept pretty much everything so feel free to open a Pull-Request

# TypeScript
> To take full advantage of TypeScript with autocomplete you would have to install it globally and use an editor with the correct TypeScript plugins.

## Use latest TypeScript compiler
TypeScript 2.1.x includes everything you need. Make sure to upgrade, even if you installed TypeScript previously.

```
npm install --global typescript
```

## Use a TypeScript-aware editor
We have good experience using these editors:

* [Visual Studio Code](https://code.visualstudio.com/)
* [Webstorm](https://www.jetbrains.com/webstorm/download/)
* [Atom](https://atom.io/) with [TypeScript plugin](https://atom.io/packages/atom-typescript)
* [Sublime Text](http://www.sublimetext.com/3) with [Typescript-Sublime-Plugin](https://github.com/Microsoft/Typescript-Sublime-plugin#installation)

### Visual Studio Code + Debugger for Chrome
> Install [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) and see docs for instructions to launch Chrome

The included `.vscode` automatically connects to the webpack development server on port `3000`.

# Types
> When you include a module that doesn't include Type Definitions inside of the module you can include external Type Definitions with @types

i.e, to have youtube api support, run this command in terminal:
```shell
npm i @types/youtube @types/gapi @types/gapi.youtube
```
In some cases where your code editor doesn't support Typescript 2 yet or these types weren't listed in ```tsconfig.json```, add these to **"src/custom-typings.d.ts"** to make peace with the compile check:
```es6
import '@types/gapi.youtube';
import '@types/gapi';
import '@types/youtube';
```

## Custom Type Definitions
When including 3rd party modules you also need to include the type definition for the module
if they don't provide one within the module. You can try to install it with @types

```
npm install @types/node
npm install @types/lodash
```

If you can't find the type definition in the registry we can make an ambient definition in
this file for now. For example

```typescript
declare module "my-module" {
  export function doesSomething(value: string): string;
}
```


If you're prototyping and you will fix the types later you can also declare it as type any

```typescript
declare var assert: any;
declare var _: any;
declare var $: any;
```

If you're importing a module that uses Node.js modules which are CommonJS you need to import as

```typescript
import * as _ from 'lodash';
```


# Frequently asked questions
> Let's [Chat](m.me/puskomedia.id) with `Puskomedia Indonesia Team`.

___

enjoy — **[Puskomedia Indonesia](https://www.puskomedia.id)**

___

# License
 [MIT](/LICENSE)
