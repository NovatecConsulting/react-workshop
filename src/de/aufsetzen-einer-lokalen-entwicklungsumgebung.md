---
title: Aufsetzen einer lokalen Entwicklungsumgebung
layout: layouts/article.njk
description: Anweisungen zum Einrichten einer lokalen Entwicklungsumgebung.
level: get-started
---

# Aufsetzen einer lokalen Entwicklungsumgebung

Für diesen Kurs nutzen wir [Stackblitz](https://stackblitz.com), eine Entwicklungsumgebung, die direkt im Browser verwendet werden kann.
Für das Offline-Arbeiten ist es jedoch von Vorteil, eine lokale Entwicklungsumgebung aufzusetzen

## Steps

- [NodeJS](https://nodejs.org) installieren
- [Visual Studio Code](https://code.visualstudio.com/) installieren (oder einen anderen Editor)
- [git](https://git-scm.com) installieren
- Optional: graphischen Git-Client installieren, z.B. [GitHub Desktop](https://desktop.github.com/)

## Einrichten von git

```sh
git config user.name "Lea Rosema"
git config user.email "lea@lea.codes"
```

## Repository klonen

```sh
git clone repositoryUrl
```

## Git cheatsheet

```sh
git pull                              # pull the latest version from the server
git commit -m "Changed global styles" # commit something
git push                              # push to remote
```

## Installieren der Abhängigkeiten und Starten des Entwicklungsservers

```sh
npm install # Abhängigkeiten installieren: nur notwendig beim ersten Mal oder nach Update
npm run dev
```

## Ein neues React-Projekt erstellen

```sh
# Create a Vite React App
npm create vite@latest my-react-app -- --template react

# Create a Vite React App with TypeScript
npm create vite@latest my-react-app -- --template react-ts
```

Ausführlicher Guide via [vitejs.dev](https://vitejs.dev).
