---
title: Styling in React
layout: layouts/article.njk
description: In this article we'll provide an overview to styling concepts in React
level: beginner
tags: en
order: 4
---
# Styling in React

## CSS Classes

You can import stylesheets directly into your component files use CSS classes by using the `className` attribute.
The import is processed by an additional toolchain. Popular solutions are [webpack](https://webpack.js.org) or [vite](https://vitejs.dev). 

Additionally, you can also use `<link rel="stylesheet" href="styles.css">` links. A production build transforms a JavaScript stylesheet import into a separate css file which is then loaded via the `<link>` tag as above. In development mode, the CSS is directly embedded into the JavaScript bundle. This way, it can benefit from hot reload. Hot reload enables to save css and see the changes directly in the browser without refreshing.

```jsx
import './styles.css'

const MyComponent = ({title, children}) => (
  <div className="card">
    <h2>{title}</h2>
    {children}
  </div>
);
```

## Using the `style` property

You can also apply styles directly to a component via the `style` property. The `style` property takes an object of styles. CSS properties follow the naming pattern of the CSS Object model, which uses camelCase:

```jsx
const MyComponent = ({title, children}) => (
  <div style={% raw %}{{borderRadius: '.25rem', border: '1px solid #ccc', padding: '1rem'}}{% endraw %}>
    <h2>{title}</h2>
    {children}
  </div>
);
```

## Styled components

Another approach is to use a library called [styled-components](https://styled-components.com/). This enables you to write CSS directly in JavaScript. 

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

An alternative implementation of styled-components is [@emotion/styled](https://emotion.sh/docs/styled). This is used in the context of the MUI component framework.

## Tailwind

Another very popular approach is to use [tailwind](https://tailwindcss.com) which is a set of CSS utility classes which are directly applied in the className attribute. The Tailwind CSS framework encourages the use of design tokens.

```jsx
const MyCardComponent ({title, children}) => (
  <div className="border-solid border-2 border-sky-500 p-4">
    <h2>{title}</h2>
    {children}
  </div>
);
```