---
title: Arrays in JSX
layout: layouts/article.njk
description: Was gibt es zur Darstellung von Array-Daten in JSX zu beachten?
level: beginner
order: 1
---

# Arrays in JSX

Um ein Array in JSX darzustellen, benötigt jedes Element ein key-Attribut, die einen eindeutigen Schlüssel enthält. Dieser wird benötigt, damit der virtuelle DOM-Baum die einzelnen Elemente identifizieren und auf Änderungen des Array-Inhalts reagieren kann.

Wenn du Daten aus einer API abrufst, die aus einer Datenbank stammen, ist es wahrscheinlich, dass es bereits eine eindeutige ID gibt, die verwendet werden kann.

Beispielcode:

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

Wenn du vergisst, einen Schlüssel anzugeben, scheint es zu funktionieren, aber du erhältst eine Fehlermeldung in der Entwicklungskonsole. Wenn du keine eindeutige ID in den Arraydaten hast, kannst du den Index des aktuellen Eintrags als Schlüssel verwenden, damit die Fehlermeldung verschwindet. Wenn es sich bei der darzustellenden Liste um unveränderliche Daten handelt, ist das in Ordnung, aber sobald du die Liste manipulieren willst, ist davon abzuraten und nicht mehr performant.
