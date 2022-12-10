---
title: Styling in React
layout: layouts/article.njk
description: Ein Überblick über die Styling-Konzepte in React
level: beginner
order: 2
---
# Styling in React

## CSS Classes

Innerhalb von React-Projekten können CSS-Dateien direkt in die JavaScript-Dateien importiert werden. 
CSS-Klassen könnend dann mithilfe des `className`-Attributs an JSX-Elementen verwendet werden.

Der Import wird von einer zusätzlichen Toolchain verarbeitet. Beliebte Lösungen sind [webpack](https://webpack.js.org) oder [vite](https://vitejs.dev). 

Zusätzlich können auch `<link rel="stylesheet" href="styles.css">`-Links verwendet werden. Bei einem Produktions-Build wird ein JavaScript-Stylesheet-Import in eine separate css-Datei umgewandelt, die dann über den `<link>`-Tag wie oben beschrieben geladen wird.

Im Entwicklungsmodus wird das CSS direkt in das JavaScript-Bundle eingebettet. Auf diese Weise kann es von Hot Reload profitieren. Hot Reload ermöglicht es, CSS zu speichern und die Änderungen direkt im Browser zu sehen, ohne die Seite neu zu laden.

```jsx
import './styles.css'

const MyComponent = ({title, children}) => (
  <div className="card">
    <h2>{title}</h2>
    {children}
  </div>
);
```

## Styled components

Ein anderer Ansatz ist die Verwendung einer Bibliothek namens [styled-components](https://styled-components.com/). Damit können Sie CSS direkt in JavaScript schreiben. 

```jsx
const Card = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: .25rem;
`

const MyCardComponent ({title, children}) => (
  <Card>
    <h2>{title}</h2>
    {children}
  </Card>)
```

Eine alternative Implementierung der styled-components ist [@emotion/styled](https://emotion.sh/docs/styled). Diese wird im Zusammenhang mit MUI verwendet.

## Tailwind

Ein weiterer sehr beliebter Ansatz ist die Verwendung von [tailwind](https://tailwindcss.com), einer Reihe von CSS-Utility-Klassen, die direkt im className-Attribut angewendet werden. Das Tailwind CSS-Framework fördert die Verwendung von Design-Tokens, was den Vorteil mit sich bringt, dass ein
einheitliches System für Abstände, Schriftgrößen, Farben und weiteres verwendet wird.

```jsx
const MyCardComponent ({title, children}) => (
  <div className="border-solid border-2 border-sky-500 p-4">
    <h2>{title}</h2>
    {children}
  </div>
);
```