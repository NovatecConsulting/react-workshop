---
title: JavaScript Modules
layout: layouts/article.njk
description: An in-depth guide to modules in JavaScript
level: prerequisites
tags: en
---

# JavaScript Modules

## ESM Modules

ES Modules are used in today's modern JS environments. It is natively supported in the browser by using a `<script type="module">` tag or in Node.JS projects when specifying `"type": "module"` in the `package.json`. 

ES Modules make it possible to load further dependencies from a JavaScript file without using additional script tags.

ES Module Import Syntax:

```js
// named imports from an ESM Module:
import { add, sub } from './math.esm.js';

// default import from an ESM Module:
import SomeModule from './module.esm.js';
```

ES Module Export Syntax:

```js
// named exports:
export function add(a, b) {
  return a + b;
}

export const PI = 3.141592654;

// default exports
export default class WebComponent extends HTMLElement {

}

export default function calculateSomething() {
  return 42;
}
```

## Bundling toolchains

Bundling toolchains like [webpack](https://webpack.js.org) or [vite](https://vitejs.dev) also use the same kind of syntax with the `import` keyword, but involve an additional compile step. JavaScript files with imports are transformed into Javascript Bundles with all the dependencies resolved.

Using a bundling toolchain is the most popular way to work with JavaScript dependencies today.

One important aspects of imports using the `import` keyword is so-called tree-shakability. Thanks to this syntax, the dependency tree of the JavaScript project is parseable which makes it possible for bundlers to identify unused code and to create smaller bundles.

In the next subchapters we'll show you other approaches to modules before the modern import syntax was introduced to JavaScript. Today, they are mostly deprecated.

## CommonJS

The CommonJS module definition was primarily used by Node.JS before the import syntax was introduced. It is still used in many NPM packages. NPM is a package manager for JavaScript, originally only for Node.JS, today used for everything in the JavaScript ecosystem.

CommonJS Import syntax:

```js
const add = require('./math');
```

CommonJS Export syntax:
```js
function add(a, b) {
  return a + b; 
}

module.exports = {
  add,
};
```

## Asynchronous Module Definition (AMD)

The AMD definition was primarily used for JavaScript in a browser before there were ES Modules.

AMD uses the following pattern:

```js
// parameters: module name, dependency array, factory 
define('DataTable', ['math', 'utils'], function () {

});
```

One popular implementation of AMD was [require.js](https://requirejs.com). Today it is mostly obsolete. You may encounter AMD modules when you maintain older projects optimized for Internet Explorer 6.

## Universal Module definition (UMD)

The Universal Module Definition brings together CommonJS, AMD and exporting to the global namespace. UMD modules can work in a CommonJS environment, in an AMD environment and also directly in the browser via a traditional `<script>` tag by exporting a variable to the global namespace. 

React also provides an UMD version of the library, so it can also be used directly in the browser by loading it via script tag, which can still be useful for quick experiments.

UMD modules have some more boilerplate to make all module definitions just work.
