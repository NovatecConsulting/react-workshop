---
layout: layouts/article.njk
title: TypeScript-Crashkurs
description: Eine kurze Zusammenfassung der Sprache TypeScript für alle, die mit JavaScript vertraut sind.
level: get-started
---

# TypeScript-Crashkurs

Dies ist eine kurze Zusammenfassung der Sprache TypeScript für alle, die mit JavaScript vertraut sind.

Ein ausführliches Tutorial zu TypeScript und seiner Typennotation finden Sie unter 
[https://2ality.com/2018/04/type-notation-typescript.html](https://2ality.com/2018/04/type-notation-typescript.html)

## TypeScript Playground

Der beste Weg, einen schnellen Einstieg in TypeScript zu bekommen, ist, sich einige Beispiele anzusehen und sie direkt im Browser auszuprobieren.
TypeScript hat einen Playground und bietet auch eine Reihe von Beispielen.

[https://www.typescriptlang.org/play](https://www.typescriptlang.org/play)

## Typen in JavaScript

JavaScript hat nur 8 Typen:

- `undefined`
- `null`
- `boolean`: true oder false
- `number`: Zahlen
- `string`: Zeichenketten
- `BigInt`: sehr große Ganzzahlen (für die `number` unzureichend ist)
- `Symbol`: Symbole
- `Object`: alle Objekte, darunter auch Funktionen und Arrays

## Statische Typisierung in TypeScript

Zusätzlich zu den Typen in JavaScript fügt TypeScript statische Typen hinzu, die bei der Kompilierung überprüft werden.

Diese zusätzlichen Prüfungen helfen dabei, häufige Fehler zu vermeiden, z.B. erinnert es Sie daran, auf `undefined` zu prüfen.
Außerdem liefert es einige zusätzliche Informationen, die den AutoVervollständigungsfunktionen in der IDE zugute kommen.

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

Es gibt in TypeScript das Konzept von Schnittstellen, um ein Objekt zu beschreiben:

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

Unterschied zu Schnittstellen: Es können keine zusätzlichen Eigenschaften in Variablen mit den oben genannten Typen hinzugefügt werden.
