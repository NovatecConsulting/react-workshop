---
layout: layouts/article.njk
title: Promises und async/await
description: Eine Einführung in das Promises-Muster in JavaScript
level: prerequisites
order: 8
---

# Promises und async await

Eine gängige Methode, um asynchrones JavaScript zu schreiben, ist die Verwendung eines Musters namens Promises. Promises sind ein Feature von ES6-JavaScript.

```js
function wait(timeMilliseconds = 1000) {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(), timeMilliseconds);
  });
}
```

Du kannst auf die Fertigstellung einer Promise warten und weitere Operationen mit der Funktion `then()` der Promise durchführen: 

```js
wait(2000).then(() => {
  console.log('Time is up!');
});
```

Fehler in Promises werden über `.catch()` behandelt.
Unten siehst du einen häufigen Anwendungsfall für Promises, nämlich das Abrufen von Daten:

```js
function fetchUsers() {
  return new Promise((resolve, reject) => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
}
```

## async/await

Viel mit Promises zu arbeiten, kann zu einer Pyramide des Verderbens (Pyramid of Doom) führen:

```js
wait(2000).then(() => {
  console.log('2 seconds');
  wait(2000).then(() => {
    console.log('4 seconds');
    wait(2000).then(() => {
      console.log('6 seconds');
      wait(2000).then(() => {
        console.log('8 seconds');
        wait(2000).then(() => {
          console.log('10 seconds');
        });
      });
    });
  });
});
```

Das kann schwierig zu warten werden. Deshalb gibt es einen alternativen Weg: `async`-Funktionen und `await`.

```js
const tenSeconds = async () => {
  for (let i = 1; i <= 10; i++) {
    await wait(1000);
    console.log(`${i} seconds.`);
  }
};
```

Eine `async`-Funktion ist eine Funktion, die ein Promise-Objekt zurückgibt. 

Innerhalb von `async`-Funktionen kannst du `await` verwenden, um auf die Fertigstellung eines Promises zu warten.
`await` kann nur innerhalb von `async` Funktionen verwendet werden.

Du kannst eine asynchrone Funktion auch direkt aufrufen, aber dann hast du keine Kontrolle mehr darüber, wann die Funktion abgeschlossen ist.

## Fehlerbehandlung in asynchronen Funktionen

Für die Fehlerbehandlung wird `try-catch` verwendet.

```js
const main = async () => {
  try {
    const users = await fetchUsers();
  } catch(err) {
    console.error(err.message);
  }
}

main();
```

## Awaiting multiple promises in parallel

Du kannst `await` mit `Promise.all` verwenden:

```js
const [users, posts] = await Promise.all([fetchUsers, fetchPosts]);
```

## Rückgabetypen

Eine asynchrone Funktion in JavaScript gibt immer ein Promise zurück, auch wenn sie keinen asynchronen Code enthält:

```ts
const asyncFunction = async (): Promise<void> => {};

const asyncFunctionReturningAnswer = async (): Promise<number> => 42;
```
