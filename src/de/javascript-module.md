---
title: JavaScript Module
layout: layouts/article.njk
description: Ein Einblick in Modulsysteme in JavaScript
level: beginner
---

# JavaScript-Module

## ESM-Module

ES-Module werden in den modernen JS-Umgebungen von heute verwendet. Sie können nativ im Browser via `<script type="module">`-Tags  oder in Node.JS-Projekten durch die Angabe von `"type": "module"` in der `package.json` verwendet werden. 

ES-Module ermöglichen es, weitere Abhängigkeiten aus einer JavaScript-Datei zu laden, ohne zusätzliche Script-Tags zu verwenden.

ES-Modul-Import-Syntax:

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

## Bundling-Toolchains

Bundling-Toolchains wie [webpack](https://webpack.js.org) oder [vite](https://vitejs.dev) verwenden die gleiche Syntax mit dem Schlüsselwort `import`, erfordern aber einen zusätzlichen Kompilierschritt. JavaScript-Dateien mit Importen werden in Javascript-Bundles umgewandelt, in denen alle Abhängigkeiten aufgelöst sind.

Die Verwendung einer Bundling-Toolchain ist heute der beliebteste Weg, um mit JavaScript-Abhängigkeiten zu arbeiten.

Ein wichtiger Aspekt von Importen mit dem Schlüsselwort `import` ist die sogenannte Tree-Shakability. Dank dieser Syntax ist der Abhängigkeitsbaum des JavaScript-Projekts analysierbar, was es Bundlern ermöglicht, ungenutzten Code zu identifizieren und kleinere Bundles zu erstellen.

In den nächsten Unterkapiteln werden wir dir andere Ansätze für Module zeigen, bevor die moderne Import-Syntax in JavaScript eingeführt wurde. Heute sind sie größtenteils veraltet.

## CommonJS

Die CommonJS-Moduldefinition wurde hauptsächlich von Node.JS verwendet, bevor die Import-Syntax eingeführt wurde. Sie wird immer noch in vielen NPM-Paketen verwendet. NPM ist ein Paketmanager für JavaScript, ursprünglich nur für Node.JS-Anwendungen und Bibliotheken. Heute wird NPM für alles im JavaScript-Ökosystem verwendet.

CommonJS Import-Syntax:

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

Die AMD-Definition wurde hauptsächlich für JavaScript in einem Browser verwendet, bevor es ES-Module gab.

AMD verwendet das folgende Muster:

```js
// parameters: module name, dependency array, factory 
define('DataTable', ['math', 'utils'], function () {

});
```

Eine beliebte Implementierung von AMD war [require.js](https://requirejs.com). Heute ist sie größtenteils veraltet. Du wirst möglicherweise auf AMD-Module stoßen, wenn du ältere Projekte pflegst, die für den Internet Explorer 6 optimiert sind.

## Universelle Moduldefinition (UMD)

Die Universal Module Definition vereint CommonJS, AMD und den Export in den globalen Namespace. UMD-Module können in einer CommonJS-Umgebung, in einer AMD-Umgebung und auch direkt im Browser über ein traditionelles `<script>`-Tag funktionieren, indem eine Variable in den globalen Namespace exportiert wird. 

React stellt auch eine UMD-Version der Bibliothek zur Verfügung, so dass sie auch direkt im Browser verwendet werden kann, indem man sie per Skript-Tag lädt, was für schnelle Experimente immer noch nützlich sein kann (CodePen beispielsweise arbeitet noch mit konventionellen Script-Tag-Importen)

UMD-Module haben etwas mehr Boilerplate, damit alle Moduldefinitionen einfach funktionieren.
