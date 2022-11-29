---
title: Zustandsbehaftete Komponenten
layout: layouts/article.njk
description: Eine Einführung in Zustandsverwaltung innerhalb von Komponenten
level: intermediate
---
# Zustandsbehaftete Komponenten

## Funktionale Komponenten

Funktionale Komponenten verwenden den `useState`-Hook, um den Zustand innerhalb einer Komponente festzuhalten.

`useState` gibt eine Variable mit dem aktuellen Zustandswert und eine Funktion zum Ändern dieses Wertes zurück. Der Zustand kann nicht durch direktes Zuweisen eines neuen Wertes verändert werden.

In der Funktion kann entweder der neue Wert direkt übergeben werden, oder alternativ eine Callbackfunktion, die den vorherigen Zustand als Wert übergibt.

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

[Beispiel auf Codepen](https://codepen.io/learosema/pen/gOKKBdx/0bfc2ff395f5cd9cd94d055bed7143b6?editors=1010)
