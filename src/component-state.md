---
title: Component State
layout: layouts/article.njk
description: Using state within Components
level: intermediate
tags: en
---
# Component State

## Functional components

Functional components use the `useState` hook to hold state within a component.

```jsx
function Counter() {
  const [value, setValue] = useState(1);
  
  const handleClick = () => {
    setValue(value => value + 1);
  };

  return (
    <div>
      <p>
        Counter Value: {value}
      </p>
      <button onClick={handleClick}> Increase counter </button>
    </div>
  );
}
```

[Try it on Codepen](https://codepen.io/learosema/pen/gOKKBdx/0bfc2ff395f5cd9cd94d055bed7143b6?editors=1010)
