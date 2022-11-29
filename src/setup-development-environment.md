---
title: Setup a local development environment
layout: layouts/article.njk
description: Instructions for setting up a local development environment.
level: get-started
tags: en
---

# Setup a local development environment

For this course, we are using on [Stackblitz](https://stackblitz.com) so you can do this course just by using the browser.
If you like to work offline, it is best to install a local development environment.

## Steps

- Install [NodeJS](https://nodejs.org)
- Install [Visual Studio Code](https://code.visualstudio.com/)
- Install [git](https://git-scm.com)
- Optional: Install a Graphical git client, eg [GitHub Desktop](https://desktop.github.com/)

## Setup git

```sh
git config user.name "Lea Rosema"
git config user.email "lea@lea.codes"
```

## Clone the Repository

```sh
git clone repositoryUrl
```

## Git cheatsheet

```sh
git pull                              # pull the latest version from the server
git commit -m "Changed global styles" # commit something
git push                              # push to remote
```

## Install dependencies and run the development server

```sh
npm install
npm run dev
```

## Creating a new React project

```sh
# Create a Vite React App
npm create vite@latest my-react-app -- --template react

# Create a Vite React App with TypeScript
npm create vite@latest my-react-app -- --template react-ts
```

In-depth guide on [vitejs.dev](https://vitejs.dev).
