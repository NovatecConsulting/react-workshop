---
title: Handling events
description: Handling events in React
layout: layouts/article.njk
level: beginner
tags: en
order: 5
---

# Handling events

Handling events in JSX looks very similar to the `on...` attributes in HTML and JavaScript.

In HTML, you can provide a string of JavaScript in the `on...` attribute which is then evaluated when the button is clicked:

```html
<button onclick="alert('Button was clicked')"> Click me </button>
```

In JSX, there are also `on...` attributes, but the casing is in camelCase. 
Instead of a string, you provide a function inside curly braces:

```jsx
const ButtonComponent = () => (
  <button onClick={() => alert('Button was clicked')}> Click me </button>
);
```

Instead of providing the function inline, you can also put the function inside a `const`:

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
