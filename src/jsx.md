---
title: JSX
layout: layouts/article.njk
description: Intro to JSX, a syntax extension to JavaScript
level: beginner
order: 1
tags: en
---

# JSX

JSX is a syntax extension to JavaScript that enables a declarative way to build UI components.
It is transformed into valid JavaScript. 

You can write markup directly inside JavaScript.

```jsx
const element = <h1>Hello, world!</h1>;
```

A JSX element represents an object in JavaScript (of type `ReactElement` or `ReactNode`)

You can embed JavaScript expressions into JSX, using curly braces:

```jsx
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
```

JSX is also an expression, you can assign it to variables, or return it from a function to create new JSX elements, which basically is how components in React work.

## JSX Attributes

You can use attributes just like in HTML or assign JavaScript expressions via curly braces to it.

However, one common pitfall is the fact that some are named differently, eg. `className` instead of `class` because it is a reserved keyword in JavaScript. Also, the attributes follow the camelCase notation (eg. `tabIndex`)  which is a common naming convention for variables in JavaScript.

## JSX Fragments

You can use empty tags `<>` and `</>` to group multiple elements in one Fragment without using a further DOM element.

## Rendering JSX

In order to render JSX elements, you will need a root element where the JSX will be inserted. Next to React, a second library, ReactDOM comes into play. ReactDOM keeps the contents of the JSX (which is the representation of the UI of the application) in a Virtual DOM tree. The ReactDOM library keeps the browser's DOM in sync with the Virtual DOM. 

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
