---
title: React Hooks
layout: layouts/article.njk
description: Introduction to React Hooks
level: intermediate
tags: en
---
# React Hooks

Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.

Before React 16.8, the only way of creating a stateful component was to create a Class-Style component which can provide a component state via `state` and `setState` members of the `Component` class. 

## useState Hook

The first hook we learned about was the `useState` hook in the article about [Component State](component-state.md).

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

## Benefits of React Hooks

- Functional components are less verbose than Class-style components
- Separation of concerns: you can extract stateful logic from a component into a hook, which can be tested independently
- Reusability: you can share hooks among many components
- You can build custom hooks

## useEffect hook

The `useEffect` hook lets you execute side-effects on components and run operations whenever a component is mounted, unmounted or a dependant value has changed. This can be used for data fetching.

```jsx
const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // will be executed when the component mounts
    const controller = new AbortController();
    const { signal } = controller();
    fetch("https://yesno.wtf/api", { signal })
      .then(res => res.json())
      .then(data => {
        const { answer, image } = data;
        setData({answer, image});
      });
    
    // When returning a function, it will be executed when the component unmounts
    return () => {
      // prevent setting of state after component has been destroyed.
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

The `useMemo` hook helps you to memoize a value within a component.

Expensive operations like filtering a big array can have a big impact on performance.
With `useMemo` you can ensure the value is only recalculated when necessary:

Example:

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
  
  // .filter is a potentially expensive operation when 
  // the amount of data is bigger than in this example.
  // the filteredPokemons is recalculated every time one 
  // of the dependencies change
  
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

The `useContext` api helps you to share state across components using the Context API. The context API is described within its own article: [Context API](/context-api).