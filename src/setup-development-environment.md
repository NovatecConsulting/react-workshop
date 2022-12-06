---
title: Setup a local development environment
layout: layouts/article.njk
description: Instructions for setting up a local development environment.
level: get-started
tags: en
---

# Setup a local development environment

For the hands-on part of this course, we are using on [Stackblitz](https://stackblitz.com) so you can do this course just by using the browser.
If you like to work offline, it is best to install a local development environment.

## Steps

- Install [NodeJS](https://nodejs.org)
- Install [Visual Studio Code](https://code.visualstudio.com/)
- Install [git](https://git-scm.com)
- Optional: Install a Graphical git client, eg [GitHub Desktop](https://desktop.github.com/)

## Setup git

The first thing to setup is your name and email address. Some git providers also allow you to keep your email address private, providing you an anonymous email address you can use instead of your actual email.

```sh
git config user.name "Lea Rosema"
git config user.email "lea@lea.codes"
```

## Choosing an authentication method

The two most common authentication methods are HTTPS and SSH.

HTTPS involves creating an access token on your account and configuring it with git. 

SSH involves generating an SSH key on your machine and adding it to your git account.

On unix style machines and also on git bash for windows, you should be able to use `ssh-keygen` to create a key:

```sh
ssh-keygen -t ed25519 -C "your_email@example.com"
```

A third way to authenticate via an Auth provider and some kind of third-party application, eg. the GitHub CLI or GitHub Desktop. On using the tool the first time, you are redirected to your account where you give that application the permissions to operate in your name.

## Git cheatsheet

Common git commands are:

```sh
# Clone the repository to your local machine:
git clone repositoryUrl

# pull the latest version from the remote repository
git pull

# Commit changes to a code base, specifying a commit message:
git commit -m "Changed global styles"

# push all changes to the remote git repository
git push

# switch to an existing branch:
git switch branchName

# create a new branch
git switch -c branchName
```

If you did something terribly wrong, check out [https://ohshitgit.com](https://ohshitgit.com)


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
