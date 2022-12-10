---
title: Rendering Arrays in JSX
layout: layouts/article.njk
description: A guide to rendering arrays in JSX (TODO)
tags: en
order: 3
level: beginner
---

# Rendering Arrays in JSX

In order to render an Array in JSX, each item will require a property containing a unique key. This is required for the virtual dom tree to identify the individual items and reacting to changes of array contents.

If you are consuming data from an API that comes from a database, chances are there already is some kind of unique key.

Example code:

```jsx
function UserCard({name, surname, role}) {
  return (
    <div>
      <h2>{name} {surname}</h2>
      <p>{role}</p>
    </div>
  );
}

function App() {
  const users = [
    {id: 1, name: "John", surname: "Doe", role: "JavaScript unicorn"},
    {id: 2, name: "Foo", surname: "Bar", role: "Senior Pizza Reheater"},
    {id: 3, name: "Luke", surname: "Skywalker", role: "Jedi"},
    {id: 4, name: "Darth", surname: "Vader", role: "Sith"},
  ];

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <UserCard name={user.name} surname={user.surname} role={user.role} />
        </li>
        )
      )}
    </ul>
  );
}
```

If you forget providing a key, it will seem to work but you will get an error message in the dev console. If you don't have a unique id in the array data, you can use the index of the current item as the key to make the error message go away. If the list to be rendered is immutable data, it is okay to do so, but it is discouraged and not performant as soon as you want to manipulate the list.
