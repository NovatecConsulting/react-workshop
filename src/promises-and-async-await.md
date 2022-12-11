---
layout: layouts/article.njk
title: Promises and async await
description: An introduction to the Promises pattern in JavaScript
level: prerequisites
order: 8
tags: en
---

# Promises and async await

A common way to write asynchronous JavaScript is using a pattern called Promises. Promises are a feature of ES6 JavaScript.

```js
function wait(timeMilliseconds = 1000) {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(), timeMilliseconds);
  });
}
```

You can wait for a Promise to complete and do further operations using the `then()` function of the Promise: 

```js
wait(2000).then(() => {
  console.log('Time is up!');
});
```

Errors in promises are handled via `.catch()`.
Below, you can see common use-case for promises, which is for fetching data:

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

Working a lot with promises can lead to a pyramid of doom:

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

This can become difficult to maintain. That's why there is an alternative way: `async` functions and `await`.

```js
const tenSeconds = async () => {
  for (let i = 1; i <= 10; i++) {
    await wait(1000);
    console.log(`${i} seconds.`);
  }
};
```

An `async` function is a function that returns a promise. Inside `async` functions, you can use `await` to wait for a Promise to be
completed. `await` can only be used inside `async` functions. You can still call an async function directly, but then you don't have any control about when the function completes.

## Error handling inside async functions

For error-handling, `try-catch` is used.

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

You can use `await` with `Promise.all`:

```js
const [users, posts] = await Promise.all([fetchUsers, fetchPosts]);
```

## Return types

An asynchronous function in JavaScript always returns a Promise, even if it doesn't contain any asynchronous code:

```ts
const asyncFunction = async (): Promise<void> => {};

const asyncFunctionReturningAnswer = async (): Promise<number> => 42;
```
