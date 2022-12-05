---
title: Package Managers in JavaScript
layout: layouts/article.njk
description: Information about various package managers in JavaScript
level: beginner
tags: en
---

# Package managers for JavaScript

Package managers for JavaScript became a thing when running JavaScript outside the browser became a thing, which was when Node.JS was released.

[Node.JS](https://nodejs.org) is a JavaScript environment that runs on the command line. As it runs outside the browser, it provides built-in libraries for network and filesystem access. Additionally, it is platform-independent and can be run on various platforms like Mac, Windows, Linux. Node comes with the Node Package Manager NPM.

You can go to npmjs.com and search for packages which you may want to integrate into your project. React is also available as an NPM package.

## NPM cheat sheet

```sh
# Install all dependencies of a project
npm install

# Or in short:
npm i

# Install a dependency to a project
npm install react

# Install a dev dependency
npm i typescript -D

# Remove a dependency
npm remove react

# Install a dependency globally
npm install pnpm -g

# Initialize an own package
npm init

# Initialize an own package without further interaction
# answer all questions with yes and use defaults
npm init -y
```

## Dependencies vs Dev Dependencies

An NPM project can have dependencies and dev dependencies. Dependencies are required at run time and Dev dependencies are required at build time. Typical dev dependencies are the typescript compiler and type annotations for packages.

## Security considerations for NPM

Using NPM comes with a potential security risk. Packages wich are no longer maintained have a risk of becoming vulnerable to various hacks and attacks. In the worst case, it could even happen that a package is compromised with malware. This can happen if a maintainer of a package publishes their credentials by accident (eg. by committing the `.npmrc` file) or by not using 2FA authentication with an insecure password.

Malicious packages usually get quickly reported and unpublished. Still, there is a time frame where you could potentially pull a malicious package.

### Scanning projects for security vulnerabilities

Everytime you install dependencies, you will get informed about existing known vulnerabilities. It advises you to run `npm audit` which will show you the vulnerable packages. Some issues are automatically fixable via `npm audit fix`.

If you are on Github, you may notice Dependabot, a bot which automatically searches projects for security vulnerabilities and creates pull requests with fixes when possible.

Another provider for scanning projects for security vulnerabilities is Snyk, which can also be integrated in other git environments.

- [Working with Dependabot](https://docs.github.com/en/code-security/dependabot/working-with-dependabot/)
- [Snyk](https://snyk.io)

## Other package managers

### pnpm

[pnpm](https://pnpm.io) is a package manager which is 100% compatible to NPM but uses symlinks as much as possible to prevent downloading the same packages over and over again.

```
# install pnpm 
npm install pnpm -g

# use pnpm as you would use npm:
pnpm install react
```

### yarn

[yarn](https://yarnpkg.com) is a popular package manager created by Facebook (meta). Yarn provides additional features on top of NPM such as workspaces.
