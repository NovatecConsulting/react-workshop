---
layout: layouts/article.njk
title: TypeScript introduction
description: A quick summary of the TypeScript language for people familiar with JavaScript.
tags: en
level: get-started
---

# TypeScript introduction

This is a quick summary of the TypeScript language for people familiar with JavaScript.

For an in-depth tutorial on TypeScript and its Type Notation, visit:
[https://2ality.com/2018/04/type-notation-typescript.html](https://2ality.com/2018/04/type-notation-typescript.html)

Also, check the official documentation: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

## TypeScript Playground

The best way to get a quick intro to TypeScript is to look at some examples and try them out directly in the browser.
TypeScript has a playground and also provides a nice set of examples.

[https://www.typescriptlang.org/play](https://www.typescriptlang.org/play)

## Types in JavaScript

JavaScript has only 8 types:

- `undefined`
- `null`
- `boolean`: true or false
- `number`: numbers
- `string`: strings
- `BigInt`: big integer numbers
- `Symbol`: Symbols
- `Object`: all objects, also includes functions and arrays

## Static types in TypeScript

On top of the types in JavaScript, TypeScript adds static types which are checked on compile time.

These additional checks will help to prevent common bugs, eg. it reminds you to check for `undefined`.
Also, it provides some additional information which benefits AutoComplete features in the IDE.

## Type annotations

```ts
let x: string;
```

## Type inference

```ts
let x = "Hello world"; // inferred type of x is string
```

## Type aliases

```ts
type Age = number;
const age: Age = 82;
```

## Typed Arrays

```ts
const names: string[] = ['Greg', 'John', 'Paul']; 

const names: Array<string> = ['Greg', 'John', 'Paul'];
```

## Interfaces

You can describe interfaces to describe an object.

```ts
interface Point {
  x: number;
  y: number;
  z?: number; // z is an optional property
}
```

## Object literal types

```ts
type Point2D = {
  x: number;
  y: number;
}
```

Difference to interfaces: you cannot add additional properties into variables with the above types.

## Generics

You can create more specific types by using Generics.

```ts
class LinkedList<T> {
  
  constructor(
    public item: T,
    public next?: LinkedList<T>
  ) {}
}
```

The example above also shows a shorthand syntax for constructor parameters which are automatically assigned to properties of the class named accordingly (like `this.item = item;`).

## Hiding implementation details inside classes

Like in Java and similar object-oriented programming languages, you can specify
the visibility of a class property via `public`, `private`, `protected`.
