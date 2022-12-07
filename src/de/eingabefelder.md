---
title: Eingabefelder
layout: layouts/article.njk
description: Eine Anleitung zu Eingabefeldern in React
level: intermediate
---
# Eingabefelder in React

## Von React kontrollierte Eingabefelder

Eine empfohlene Methode, mit Formularen zu arbeiten, besteht darin, den Wert eines Formularelements in Zustandsvariablen zu halten und den Status als einzige Wahrheitsquelle zu verwenden. Dieses Konzept wird <em>kontrollierte Eingabefelder</em> genannt. 

```jsx
const ApplicationForm = () => {
  const [name, setName] = useState('');
  const [surName, setSurName] = useState('');
  return (
    <form>
    <fieldset>
      <legend>Application Form</legend>
    
      <div className="field">
        <label for="name">Name:</label>
        <input id="name" value={name} onChange={(e) => setName(e.target.value)}/>
      </div>

      <div className="field">
        <label for="surname">Surname:</label>
        <input id="surname" value={surName} onChange={(e) => setSurName(e.target.value)}/>
      </div>

      <button> submit </button>
    </fieldset>
    </form>
  );
}
```

## Unkontrollierte Eingabefelder

Unkontrollierte Eingabefelder verwenden das DOM als einzige Quelle der Wahrheit und funktionieren wie konventionelle HTML-Eingabefelder. Sie werden nicht über Zustandsvariablen in React gesteuert.

Das kann hilfreich sein, wenn du Nicht-React-Code in React-Code integrierst.

## React Hook Form

Eine beliebte Bibliothek eines Drittanbieters zur Verwaltung von Formularen und Eingaben ist [React Hook Form](https://react-hook-form.com).
