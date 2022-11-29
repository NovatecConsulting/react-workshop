---
title: Context API
layout: layouts/article.njk
description: Intro to the Context API
level: advanced
tags: en
---
# Advanced State

## Context API

React provides a [Context API](https://reactjs.org/docs/context.html) which you can use to share state without having to pass the state down via Component properties. 

This is useful if you have a global state which you want to share throughout your application. This can hold information like the user that is currently logged in.

## Example

The snippet below creates a Color context that holds a color and also provides a function for changing the color.
All components that are children of the `<ColorProvider>` component can consume this color setter and getter via
the `useColor()` hook function, which is a convenience function to the `useContext(ColorContext)` hook call.

```js
import { createContext, useState, useMemo, useContext } from 'react';

const ColorContext = createContext();

const ColorProvider = ({children}) => {
  const [color, setColor] = useState('#663399');
  const value = useMemo(() => ({color, setColor}), [color, setColor]);
  return <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
};

const useColor = () => useContext(ColorContext);
```

[Try it on CodePen](https://codepen.io/learosema/pen/rNKrWgg/49b30a304b5aebd418f4d74df01d6e80?editors=0010)

### Note

The `useContext()` hook can only be used in functional style components.
