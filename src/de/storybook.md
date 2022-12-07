---
title: Storybook
layout: layouts/article.njk
description: Eine Einführung in Storybook, ein Tool zur Erstellung von UI-Komponenten außerhalb des Anwendungskontextes
level: advanced
---
# Storybook

Storybook ist ein Werkzeug, mit dem du UI-Komponenten isoliert erstellen kannst. Es hilft bei der Erstellung von Benutzeroberflächenkomponenten, ohne dass die gesamte Anwendung gestartet werden muss. 

Du kannst die gesamte Benutzeroberfläche entwickeln, ohne eine komplexe Anwendung zu starten, Datenbanken zu füllen oder zu einem bestimmten Ort innerhalb eines Projekts zu navigieren.

Außerdem können Designer/innen so einen Überblick über alle Implementierungen von Komponenten im Projekt erhalten.

- [https://storybook.js.org](https://storybook.js.org)
- [Ausführliche Anleitung für React](https://storybook.js.org/docs/react/get-started/introduction)

Storybook kann mit verschiedenen Web-Frameworks arbeiten. Neben framework-unabhängigem HTML5 unterstützt es auch Angular, Vue, Svelte und React.

## Erste Schritte mit Storybook und React

Storybook kann über `NPM` installiert werden:

```sh
# Initialize storybook into an existing React project:
npx sb init

# run storybook
npm run storybook
```

UI-Komponenten werden in einem Katalog aufgeführt. Damit deine Komponenten in diesem Katalog aufgeführt werden, musst du eine Story schreiben, die den minimalen Code enthält, der zum Ausführen der Komponente erforderlich ist. Außerdem kannst du zusätzliche Eingabefelder (auch „Knobs” genannt) bereitstellen, damit du die Eigenschaften der Komponente in der Story ändern kannst.

## Eine Storybook-Geschichte schreiben

Beispiel aus der offiziellen Dokumentation:

```jsx
// Button.stories.js|jsx

import React from 'react';

import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
};

export const Primary = () => <Button primary>Button</Button>;
```
