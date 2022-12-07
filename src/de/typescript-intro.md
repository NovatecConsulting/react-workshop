---
layout: layouts/article.njk
title: TypeScript-Crashkurs
description: Eine kurze Zusammenfassung der Sprache TypeScript für alle, die mit JavaScript vertraut sind.
level: get-started
---

# TypeScript-Crashkurs

Dies ist eine kurze Zusammenfassung der Sprache TypeScript für alle, die mit JavaScript vertraut sind.

Ein ausführliches Tutorial zu TypeScript und der Type Notation findest du hier:
[https://2ality.com/2018/04/type-notation-typescript.html](https://2ality.com/2018/04/type-notation-typescript.html)

Sieh dir auch die offizielle Dokumentation an: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

## TypeScript Playground

Der beste Weg, um eine schnelle Einführung in TypeScript zu bekommen, ist, sich einige Beispiele anzusehen und sie direkt im Browser auszuprobieren.

TypeScript hat einen Playground und bietet auch eine Reihe von Beispielen.

[https://www.typescriptlang.org/play](https://www.typescriptlang.org/play)

## Typen in JavaScript

JavaScript hat nur 8 Typen:

- `undefined`
- `null`
- `boolean`: true or false
- `number`: Zahlen (Fließkommazahlen und Ganzzahlen)
- `string`: Zeichenketten
- `BigInt`: Sehr große ganze Zahlen
- `Symbol`: Symbole
- `Object`: alle Objekte, auch Funktionen und Arrays

## Statische Typen in TypeScript

Zusätzlich zu den Typen in JavaScript fügt TypeScript statische Typen hinzu, die beim Kompilieren geprüft werden.

Diese zusätzlichen Prüfungen helfen, häufige Fehler zu vermeiden, z.B. erinnern sie dich daran, auf `undefined` zu prüfen.
Außerdem liefert es zusätzliche Informationen, die der Autovervollständigung in der IDE zugute kommen.

## Typ-Kennzeichnung

```ts
let x: string;
```

## Abgeleitete Typen

```ts
let x = "Hello world"; // abgeleiteter Typ von x ist string
```

## Typ-Aliase

```ts
type Age = number;
const age: Age = 82;
```

## Typisierte Arrays

```ts
const names: string[] = ['Greg', 'John', 'Paul']; 

const names: Array<string> = ['Greg', 'John', 'Paul'];
```

## Schnittstellen

Du kannst Schnittstellen nutzen, um ein Objekt zu beschreiben.

```ts
interface Point {
  x: number;
  y: number;
  z?: number; // z ist eine optionale Eigenschaft
}
```

## Objektliterale Typen

```ts
type Point2D = {
  x: number;
  y: number;
}
```

Unterschied zu Schnittstellen: Du kannst keine zusätzlichen Eigenschaften in Variablen mit den oben genannten Typen hinzufügen.

## Generische Typen

Du kannst generische Typen (Generics) erstellen, indem du spitze Klammern verwendest:

```ts
class LinkedList<T> {
  
  constructor(
    public item: T,
    public next?: LinkedList<T>
  ) {}
}
```

Daraus können dann spezifische Typen abgeleitet werden:
```ts
const listOfNumbers = new LinkedList<number>();
const listOfStrings = new LinkedList<string>();
```

Das obige Beispiel zeigt auch eine Kurzsyntax für Konstruktorparameter, die automatisch den entsprechend benannten Eigenschaften der Klasse zugewiesen werden (wie `this.item = item;`).

## Implementierungsdetails in Klassen verstecken

Wie in Java und ähnlichen objektorientierten Programmiersprachen kannst du die
die Sichtbarkeit einer Klasseneigenschaft über `public`, `private`, `protected` festlegen.
