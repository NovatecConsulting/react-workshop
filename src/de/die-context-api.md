---
title: Die Context API
layout: layouts/article.njk
description: Intro to the Context API
level: advanced
---

# Die Context API

React stellt die [Context API](https://reactjs.org/docs/context.html) zur Verfügung, mit der der Zustand über Komponenten hinweg geteilt werden kann ohne ihn über Properties durchzureichen. 

Dies ist nützlich, wenn Sie einen globalen Zustand haben, den Sie in Ihrer Anwendung gemeinsam nutzen wollen. Dieser kann Informationen enthalten, wie z. B. den Benutzer, der gerade angemeldet ist.

## Beispiel

Das folgende Snippet erstellt einen Kontext, der eine Farbe enthält und eine Funktion zum Ändern der Farbe bereitstellt.
Alle Komponenten, die Kinder der `<ColorProvider>` Komponente sind, können diese über die Hook-Funktion `useColor()` verwenden. 

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

### Hinweis

Der `useContext()`-Hook kann nur in funktionalen Komponenten verwendet werden.
