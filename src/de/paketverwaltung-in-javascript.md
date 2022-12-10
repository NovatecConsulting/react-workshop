---
title: Paketverwaltung in JavaScript
layout: layouts/article.njk
description: Tools für die Paketverwaltung im JavaScript-Ökosystem
level: prerequisites
---

# Paketmanager für JavaScript

Paketmanager für JavaScript wurden zu einer Sache, als die Ausführung von JavaScript außerhalb des Browsers eine Sache wurde, nämlich als Node.JS veröffentlicht wurde.

[Node.JS](https://nodejs.org) ist eine JavaScript-Umgebung, die auf der Kommandozeile läuft. Da sie außerhalb des Browsers läuft, bietet sie integrierte Bibliotheken für den Zugriff auf das Netzwerk und das Dateisystem. Außerdem ist sie plattformunabhängig und kann auf verschiedenen Plattformen wie Mac, Windows und Linux ausgeführt werden. Node wird mit dem Node Package Manager NPM ausgeliefert.

Du kannst auf npmjs.com nach Paketen suchen, die du in dein Projekt integrieren möchtest. Auch React ist als NPM-Paket verfügbar.

## NPM-Spickzettel

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

## Dependencies und Dev Dependencies

Ein NPM-Projekt kann Abhängigkeiten und Dev-Abhängigkeiten haben. Abhängigkeiten werden zur Laufzeit benötigt, während Dev-Abhängigkeiten zur Build-Zeit erforderlich sind. Typische Dev-Abhängigkeiten sind der Typescript-Compiler und Typ-Annotationen für Pakete.

## Sicherheit von NPM-Paketen

Die Verwendung von NPM birgt ein potenzielles Sicherheitsrisiko. Pakete, die nicht mehr gewartet werden, sind anfällig für verschiedene Hacks und Angriffe. Im schlimmsten Fall kann es sogar passieren, dass ein Paket mit Malware kompromittiert wird. Das kann passieren, wenn ein Betreuer eines Pakets seine Anmeldedaten versehentlich veröffentlicht (z. B. durch die Übergabe der `.npmrc`-Datei) oder wenn er keine 2FA-Authentifizierung mit einem unsicheren Passwort verwendet.

Bösartige Pakete werden in der Regel schnell gemeldet und nicht veröffentlicht. Dennoch gibt es einen Zeitrahmen, in dem du möglicherweise ein bösartiges Paket ziehen könntest.

### Projekte auf Sicherheitsschwachstellen scannen

Jedes Mal, wenn du Abhängigkeiten installierst, wirst du über bestehende bekannte Sicherheitslücken informiert. Es wird dir dann empfohlen, `npm audit` auszuführen, das dir die verwundbaren Pakete zeigt. Einige Probleme lassen sich automatisch mit `npm audit fix` beheben.

Wenn du auf Github bist, wird dir vielleicht Dependabot auffallen, ein Bot, der Projekte automatisch nach Sicherheitslücken durchsucht und Pull Requests mit Korrekturen erstellt, wenn dies möglich ist.

Ein weiterer Anbieter zum Scannen von Projekten auf Sicherheitslücken ist Snyk, das auch in andere Git-Umgebungen integriert werden kann.

- [Working with Dependabot](https://docs.github.com/en/code-security/dependabot/working-with-dependabot/)
- [Snyk](https://snyk.io)

## Alternative Paketverwaltungen

### pnpm

[pnpm](https://pnpm.io) ist ein Paketmanager, der 100% kompatibel zu NPM ist, aber so viel wie möglich mit Symlinks arbeitet, um zu verhindern, dass die gleichen Pakete immer wieder heruntergeladen werden.

```
# install pnpm 
npm install pnpm -g

# use pnpm as you would use npm:
pnpm install react
```

### yarn

[yarn](https://yarnpkg.com) ist ein beliebter Paketmanager, der von Facebook (meta) entwickelt wurde. Yarn bietet zusätzliche Funktionen zu NPM, wie z. B. Workspaces.
