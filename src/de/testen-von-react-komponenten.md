---
title: Testen von React-Komponenten
layout: layouts/article.njk
description: Wie werden Tests für React-Komponenten erstellt?
level: intermediate
---

# Testen von React-Komponenten

## Unit vs Integration vs End-to-End

- Unit-tests dienen zum Testen einer isolierten Einheit eines Softwareprojekts.
- Integrationstests dienen dazu, Gruppen von Einheiten zu testen und zu prüfen, wie sie in einem Softwareprojekt zusammenarbeiten.
- Bei End-to-End-Tests wird der Arbeitsablauf einer Anwendung von Anfang bis Ende getestet. Diese Methode zielt darauf ab, reale Benutzerszenarien nachzustellen, um das System auf Integration und Datenintegrität zu prüfen.

## jest

Jest ist ein von Facebook entwickeltes Testframework, das sofort mit React funktioniert. Es enthält allgemeine Assertions und Werkzeuge zur Analyse der Codeabdeckung.
Außerdem bietet es mehrere Assertion-APIs, die von anderen Test-Frameworks bekannt sind.

Du kannst Tests innerhalb eines Projekts ausführen, indem du `jest` startest. Es wird auch oft als Testskript für NPM konfiguriert, so dass du `npm test` ausführen kannst.
Du kannst auch die Code-Abdeckung deines Tests ermitteln, indem du `jest --coverage` ausführst. Dies erzeugt einen Bericht in `.coverage/index.html`. 
Damit wird festgestellt, wie viel deines Codes von deinen Tests abgedeckt wird, d.h. es wird analysiert, ob alle möglichen Zweige der Anwendung von den Tests durchlaufen werden.
Dies kann auch helfen, toten Code zu identifizieren.

Beispiel für einen einfachen Unit-Test einer "Vektor"-Klasse:

```js
describe('Vector class', () => {
  test('Vector addition', () => {
    const v1 = new Vector(1, 2);
    const v2 = new Vector(3, 5);
    const v3 = v1.add(v2);
    expect(v3.x).toBe(4);
    expect(v3.y).toBe(7);
  });
});
```

- Beispiel-Unittest einer Vektor-Klasse: [vector.test.ts](https://github.com/learosema/ella-math/blob/main/src/vector.test.ts)
- Website: [https://jestjs.io](https://jestjs.io)

## React Testing Library

Die React Testing Library ist eine sehr leichtgewichtige Lösung für das Testen von React-Komponenten. Sie bietet einfache Funktionen, die auf react-dom und react-dom/test-utils aufsetzen, um bessere Testverfahren zu ermöglichen. Ihr wichtigstes Prinzip ist:

Teste die Art und Weise, wie die Software verwendet wird.

Anstatt mit Instanzen von gerenderten React-Komponenten zu arbeiten, werden deine Tests mit tatsächlichen DOM-Knoten arbeiten.

- [Example](https://testing-library.com/docs/react-testing-library/example-intro)
- Ausführlicher Guide: [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Mock-Service-Worker 

Mock Service Worker ermöglicht es dir, eine gemockte Rest-API über einen Service Worker zu erstellen.
Das ist nützlich für das Prototyping eines Backend-Servers, wenn es noch kein Backend gibt. Auch für Testzwecke ist dies sehr nützlich.

- Website: [https://mswjs.io](https://mswjs.io)

## Cypress

Cypress ist ein modernes End-to-End-Testwerkzeug für JavaScript. Da es auf Chromium basiert, bietet es ein sehr entwicklerfreundliches Erlebnis, einschließlich der reichhaltigen Entwicklerwerkzeuge von Chromium-basierten Browsern.

- Website: [https://www.cypress.io](https://www.cypress.io)
