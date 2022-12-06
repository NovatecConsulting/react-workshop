---
title: Controlled vs Uncontrolled Inputs
layout: layouts/article.njk
description: A guide to controlling inputs in React
tags: en
level: intermediate
---
# Controlled vs Uncontrolled Inputs

## Controlled Inputs

A recommended way to work with forms is to keep the value of a form element inside the state and use the state as single source of truth. This concept is called <em>controlled inputs</em>. 

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
        <input id="name" value={name} onChange={setName}/>
      </div>

      <div className="field">
        <label for="surname">Surname:</label>
        <input id="surname" value={surName} onChange={setSurName}/>
      </div>

      <button> submit </button>
    </fieldset>
    </form>
  );
}
```

## Uncontrolled Inputs

Uncontrolled inputs use the DOM as the single source of truth rather than managing its value via React state.
This can be helpful when integrating non-React code into React code.