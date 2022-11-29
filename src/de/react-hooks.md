---
title: React Hooks
layout: layouts/article.njk
description: Einführung in React Hooks.
level: intermediate
---
# React Hooks

Hooks sind eine neue Ergänzung in React 16.8. Mit ihnen kann Zustand und andere React-Features genutzt werden, ohne eine Klassenbasierte Komponente zu verwenden.

Vor React 16.8 war die einzige Möglichkeit, eine zustandsbehaftete Komponente zu erstellen, die Erstellung einer Komponente im Klassenstil, die einen Komponentenzustand über die `state`- und `setState`-Mitglieder der `Component`-Klasse bereitstellen kann. 

## useState Hook

Der erste Hook, den wir kennengelernt haben, war der `useState`-Hook aus dem Artikel über [Zustandsbehaftete Komponenten](zustandsbehaftete-komponenten.md).

```jsx
const myComponent = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div>{{counter}}</div>
      <button onClick={() => setCounter(counter => counter + 1)}> Increase</button>
    <>
  );
};
```

## Vorteile von React Hooks

- Funktionale Komponenten sind kürzer als Komponenten im Klassenstil
- Trennung von Zuständigkeiten: Sie können zustandsabhängige Logik aus einer Komponente in einen Hook extrahieren, der unabhängig getestet werden kann
- Wiederverwendbarkeit: Sie können Hooks für viele Komponenten verwenden
- Sie können eigene Hooks erstellen

## useEffect hook

Mit dem `useEffect`-Hook können Sie Seiteneffekte auf Komponenten ausführen und Operationen durchführen, wenn eine Komponente eingehängt oder ausgehängt wird oder sich ein abhängiger Wert geändert hat. Dies kann für das Abrufen von Daten verwendet werden.

```jsx
const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // wird nach dem Mounten einer Komponente ausgeführt
    const controller = new AbortController();
    const { signal } = controller();
    fetch("https://yesno.wtf/api", { signal })
      .then(res => res.json())
      .then(data => {
        const { answer, image } = data;
        setData({answer, image});
      });
    
    // Wird beim Unmounten ausgeführt.
    return () => {
      // Abbruch des Request, um zu verhindern dass setData aufgerüfen wird
      // nachdem die Komponente zerstört wurde.
      controller.abort();
    }
  }, []);

  return (data ?
    <>
      <img src={data.image} alt={`The answer is ${data.answer}`}>
    </> :
    <>
      <div>Loading</div>
    <>
  );
};
```

## useMemo hook

Der `useMemo`-Hook hilft, einen Wert innerhalb einer Komponente zu zwischenzuspeichern.

Aufwändige Operationen wie das Filtern eines großen Arrays können große Auswirkungen auf die Performance der Anwendung haben.
Mit `useMemo` kann sichergestellt werden, dass der Wert nur bei Bedarf neu berechnet wird:

Beispiel:

```jsx
// a huge array of Pokemons:
const pokemons = [
  'Bulbasaur',
  'Ivysaur',
  'Venusaur',
  'Charmander',
  'Charmeleon',
  'Charizard',
  'Squirtle',
  'Wartortle',
  'Blastoise',
  'Caterpie',
];

const MyComponent = () => {
  const [filter, setFilter] = useState('');
  const filteredPokemons = useMemo(
    () => pokemons.filter(it => it.toLowerCase().startsWith(filter.toLowerCase())),
    [pokemons, filter] // dependency array.
  );
  
  // .filter ist eine potentiell teure Operation, wenn 
  // die Menge der Daten größer ist als in diesem Beispiel.
  // die gefilterten Pokemon werden jedes Mal neu berechnet, wenn sich eine 
  // der Abhängigkeiten ändert
  
  return (
    <>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      <ul>
        {filteredPokemons.map(pokemon => (<li key={pokemon}>{pokemon}</li>))}
      </ul>
    </>
  );
};
```

## useContext hook

Die "useContext"-Api hilft dabei, einen globalen Anwendungszustand über die Context-API zwischen Komponenten zu teilen. Die Kontext-API wird in einem eigenen Artikel beschrieben: [Die Context API](die-context-api).