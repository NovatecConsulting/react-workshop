---
title: Testing in React
layout: layouts/article.njk
description: Introduction to testing in React
level: intermediate
---

# Testing Frameworks

## Unit vs Integration vs End-to-End

- Unit tests are for testing an isolated unit of a software project
- Integration tests are for testing groups of units and how they work together in a software project
- End-to-end tests involve testing an application's workflow from beginning to end. This method aims to replicate real user scenarios to validate the system for integration and data integrity

## jest

Jest is a testing framework built by facebook which works out of the box with React. It includes common assertions and also tools for analyzing code coverage.
It also provides multiple assertion APIs known from other testing frameworks.

You can run tests inside a project by running `jest`. This is also often configured as test script for NPM so you can run `npm test`.
You can also identify code coverage of your test by running `jest --coverage`. This generated a report in `.coverage/index.html`. 
This identifies how much of your code is covered by your tests, which means it analyses if all possible branches of the application are run by the tests.
This can also can help identify dead code.

Example of a simple unit test of a `Vector` class:

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

- Full example unit test of a Vector class: [vector.test.ts](https://github.com/learosema/ella-math/blob/main/src/vector.test.ts)
- Website: [https://jestjs.io](https://jestjs.io)

## React Testing Library

The React Testing Library is a very light-weight solution for testing React components. It provides light utility functions on top of react-dom and react-dom/test-utils, in a way that encourages better testing practices. Its primary guiding principle is:

Test the way the software is used.

So rather than dealing with instances of rendered React components, your tests will work with actual DOM nodes.

- [Example](https://testing-library.com/docs/react-testing-library/example-intro)
- In depth guide: [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Mock-Service-Worker 

Mock Service Worker allows you to create a fake Rest API via a service worker.
This is useful for prototyping a backend server when a backend does not exist yet. Also, this is very useful for testing purposes.

- Website: [https://mswjs.io](https://mswjs.io)

## Cypress

Cypress is a modern end-to-end testing tool for JavaScript. As it is based on Chromium, it provides a very developer friendly experience including the rich developer tools of chromium based browsers.

- Website: [https://www.cypress.io](https://www.cypress.io)