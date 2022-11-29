---
title: JSX
layout: layouts/article.njk
description: Einführung in JSX, eine Syntaxerweiterung um Markup in JavaScript schreiben zu können.
level: beginner
---

# JSX

JSX ist eine Syntaxerweiterung für JavaScript, die eine deklarative Erstellung von UI-Komponenten ermöglicht.
Es wird durch einen weiteren Kompilierungsschrit in gültiges JavaScript umgewandelt. 

Damit ist es möglich, Markup in JavaScript schreiben:

```jsx
const element = <h1>Hello, world!</h1>;
```

Ein JSX-Element stellt ein Objekt in JavaScript dar (vom Typ "ReactElement" oder "ReactNode").

JavaScript-Ausdrücke können mit geschweiften Klammern in JSX eingebettet werden. 

```jsx
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
```

Das sieht aus wie eine Template-Sprache, aber hier können alle JavaScript-Sprachfeatures verwendet werden.

JSX ist wiederum auch ein Ausdruck, man kann ihn Variablen zuweisen oder von einer Funktion zurückgeben, um neue JSX-Elemente zu erstellen.

## JSX Attribute

Sie können Attribute wie in HTML verwenden oder JavaScript-Ausdrücke über geschweifte Klammern zuweisen.

Ein häufiger Fallstrick ist jedoch die Tatsache, dass einige Attribute anders benannt sind, z. B. `className` statt `class`, da `class` ein reserviertes Schlüsselwort in JavaScript ist. Außerdem folgen die Attribute der camelCase-Schreibweise (z. B. `tabIndex`). camelCase ist eine gängige Namenskonvention für Variablen in JavaScript.


## Rendern von JSX

Um JSX-Elemente zu rendern, wird ein Root-Element benötigt, in das die JSX-Elemente eingefügt werden:

```html
<div id="root"></div>
```

```jsx
const root = ReactDOM.createRoot(
  document.getElementById('root')
);

const element = <h1>Hello, world</h1>;
root.render(element);
```

`root.render(element)` ist damit auch der Einstiegspunkt einer React-Anwendung.