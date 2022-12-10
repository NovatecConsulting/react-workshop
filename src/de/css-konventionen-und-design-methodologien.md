---
title: CSS-Konventionen und Design-Methodiken
layout: layouts/article.njk
description: CSS-Konventionen und Design-Methodiken
level: prerequisites
---

# CSS-Konventionen und Design-Methodiken

## BEM

BEM steht für Block Element Modifier und ist eine beliebte Namenskonvention für das Styling von Komponenten in Webprojekten. Auch in React-Projekten ist sie immer noch beliebt.

Auf der obersten Ebene befindet sich der Block mit einem Namen, der mit Bindestrich geschrieben wird (auch Kebab-Case genannt). Der Name des Blocks steht in seinem Attribut `class` (`className` in React).

Diese Blöcke können aus mehreren Elementen bestehen.

Ein Element eines Blocks wird nach dem Namen des Blocks und dem Namen des Elements benannt, getrennt durch zwei Unterstriche, z. B. `block__element`. Er wird auch in das Attribut class eingesetzt.

Zu guter Letzt gibt es noch die Modifikatoren. Sie dienen dazu, Varianten der Komponente zu erstellen. Diese Modifikatoren werden über das class-Attribut im Format `block--modifier` benannt.

Beispiel: 

```html
<button class="button button--small button--without-text">
  <svg class="button__icon"><path .../></svg>
  <span class="button__text">Button text</span>
</button>
```

Dieser Button hat einen `button--small` und einen `button--without-text` Modifikator.
Unterelemente der Button-Komponente sind das Element `button__icon` und das Element `button__text`. 

HINWEIS: Du wirst dich vielleicht wundern, warum es ein `button__text`-Element im HTML gibt, wenn es einen `button--without-text`-Modifikator gibt. Das liegt daran, dass Schaltflächen immer eine aussagekräftige Beschriftung haben müssen, auch wenn der Text nicht visuell angezeigt wird. Dies geschieht aus Gründen der Barrierefreiheit.

Eine ausführliche Anleitung zur BEM-Benennungskonvention findest du auf [https://9elements.com/bem-cheat-sheet/](https://9elements.com/bem-cheat-sheet/)

## Atomic Design

Atomic Design ist eine Methode zur Gestaltung von Benutzeroberflächen von Brad Frost. 
Diese Methode ist von der Chemie inspiriert, wo sich Atome zu Molekülen zusammenschließen, die sich wiederum zu Organismen verbinden.

Ausführlicher Leitfaden über Atomic Design: [https://atomicdesign.bradfrost.com/](https://atomicdesign.bradfrost.com/) 

## CUBE CSS

[CUBE](https://cube.fyi/) ist eine Methodik für CSS von [Andy Bell](https://piccalil.li).

## Further Resources

- [https://smolcss.dev](https://smolcss.dev)
- [https://moderncss.dev](https://moderncss.dev)