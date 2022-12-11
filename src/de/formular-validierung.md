---
layout: layouts/article.njk
title: Formular Validierung
description: Einführung in die Validierung von Formularen und den Umgang mit Formularfehlern
level: intermediate
---

# Formular-Validierung

Im Folgenden findest du ein minimales Beispiel für eine Formularvalidierung. Es handelt sich um ein Formular mit nur einem Feld. 
Im Submit-Handler wird das Formular validiert. Wenn der Name Zahlen enthält, wird eine Fehlermeldung im Formularfeld angezeigt, die besagt, dass Zahlen nicht zulässig sind.

```jsx
const ApplicationForm = ({onSubmit}) => {
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
  const fieldId = useMemo(() => UUID(), []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (/\d/.test(name)) {
      setError('no numbers allowed in name');
      return;
    }
    onSubmit({name});
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="text-field">
        <label for={fieldId}>Enter your name:</label>
        <input id={fieldId} value={name} onChange={(e) => setName(e.target.value)} name="name" aria-invalid={error ? 'true' : null} aria-describedby={error? `${fieldId}_error` : null}>
        {error && (
          <div className="error-text" id={`${fieldId}_error`}>{error}</div>
        )}
      </div>
      <button> submit form </button>
    </form>
  );
}
```

## Barrierefreiheit

Wie du im obigen Beispiel sehen kannst, werden einige `ARIA`-Attribute verwendet, die Screenreader-Nutzern bei der Verwendung deiner App helfen.

In diesem Fall gibt es ein `aria-invalid`-Attribut, um ein Formularfeld als ungültig zu markieren, und einen Hilfstext. Der Hilfstext wird über das Attribut `aria-describedBy` programmatisch mit dem Formularfeld verknüpft.

`ARIA`-Attribute sind nur für Screenreader-Nutzer gedacht, aber du kannst auch CSS-Attributselektoren verwenden, um visuelle Stile zu erstellen:

```css
input[aria-invalid="true"] {
  outline: 2px solid red;
}
```

Es gibt Komponentenbibliotheken, die mit Blick auf Barrierefreiheit entwickelt wurden und sich automatisch darum kümmern, zum Beispiel [Material UI](https://mui.com).

Eine Standardeingabekomponente in Material ist in der [Text Field-Komponente](https://mui.com/material-ui/react-text-field/#main-content) implementiert, die die Eigenschaften `error` und `helperText` bietet, um Formularfehler anzuzeigen.

## Siehe auch

- [react-hook-form](https://react-hook-form.com)
- [Material UI](https://mui.com)
- [Using React Hook Form with Material UI](https://seanconnolly.dev/react-hook-form-material-ui)
