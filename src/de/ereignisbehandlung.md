---
title: Ereignisbehandlung
description: Behandlung von Ereignissen innerhalb von React-Komponenten
layout: layouts/article.njk
level: beginner
order: 3
---

# Umgang mit Ereignissen

Der Umgang mit Ereignissen in JSX ähnelt sehr den "on..."-Attributen in HTML und JavaScript.

In HTML kannst du im Attribut "on..." eine JavaScript-Zeichenkette angeben, die dann ausgewertet wird, wenn die Schaltfläche angeklickt wird:

```html
<button onclick="alert('Button was clicked')"> Click me </button>
```

In JSX gibt es auch `on...`-Attribute, aber die Schreibweise ist in camelCase. 
Anstelle einer Zeichenkette gibst du eine Funktion in geschweiften Klammern an:

```jsx
const ButtonComponent = () => (
  <button onClick={() => alert('Button was clicked')}> Click me </button>
);
```

Anstatt die Funktion inline zur Verfügung zu stellen, kannst du die Funktion auch in eine `const` einfügen:

```jsx
const ButtonComponent = () => {
  const handleClick = () => {
    alert('Button was clicked');
  }
  return (
    <button onClick={handleClick}> Click me </button>
  )
}
```
