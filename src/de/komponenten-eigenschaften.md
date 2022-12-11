---
layout: layouts/article.njk
title: Komponenten-Eigenschaften
description: This article is about defining component properties on a React Component and passing props to child components
level: intermediate
order: 5
---

# Komponenten-Eigenschaften

Komponenteneigenschaften (Component properties oder kurz "Props") werden als Parameter innerhalb einer funktionalen Komponente übergeben.

In diesem Beispiel werden die Props direkt innerhalb des Funktionsparameters destrukturiert:

```jsx
const UserCard = ({name, role, imageSrc}) => (
  <div>
    <img src={imageSrc} alt={name} />
    <h3>{name}</h3>
    <p>{role}</p>
  </div>
);
```

## Komponenten-Props in TypeScript definieren

Du kannst entweder einen `type` oder ein `interface` verwenden, um Komponenten-Eigenschaften zu definieren. Eine Schnittstelle kann mit weiteren Eigenschaften erweitert werden. Das kann für öffentliche APIs hilfreich sein, während ein `type` strikter ist.

Eine typisierte Version der obigen `UserCard`-Komponente könnte wie folgt aussehen:

```tsx
type UserCardProps = {
  name: string;
  role: string;
  imageSrc: string;
};

const UserCard = ({name, role, imageSrc}: UserCardProps): JSX.Element => (
  <div>
    <img src={imageSrc} alt={name} />
    <h3>{name}</h3>
    <p>{role}</p>
  </div>
);
```

TypeScript führt statische Typechecks zur Erstellungszeit durch. 
Bevor TypeScript eingeführt wurde, gab es `PropTypes`, die Property Type Checks zur Laufzeit ermöglichten.

Diese Funktion wird heute kaum noch genutzt und ist nicht mehr in React enthalten. Es ist immer noch als 
separates NPM-Paket verfügbar.

## Common Property types

Du kannst alles als Eigenschaft an eine Komponente übergeben. Neben primitiven Typen und typisierten Objekten kannst du auch
JSX, CSS-Stile, Kind-Elemente und Callback-Funktionen übergeben:

```tsx
type MyComponentProps = {
  // children is a special component property for container component
  children ?: React.ReactNode; 
  
   // A single React element
  childrenElement: JSX.Element;

  // to pass through style props
  style?: React.CSSProperties;

  // form events! the generic parameter is the type of event.target
  onChange?: React.FormEventHandler<HTMLInputElement>; 
};
```

## Eltern-Kind-Kommunikation zwischen Komponenten

Du kannst auch Callback-Funktionen an untergeordnete Komponenten übergeben, die für die Eltern-Kind-Kommunikation zwischen Komponenten genutzt werden können.

Das Beispiel ist ein Benutzer-Dashboard, das alle Benutzer in einer ungeordneten Liste anzeigt.

Für jeden Benutzer gibt es eine Aktion zum Löschen des Benutzers (<em>"delete user"</em>). Wenn du auf die Schaltfläche klickst, wird der Benutzer nicht sofort gelöscht, sondern es wird zunächst ein Bestätigungsdialog angezeigt.

```tsx
const UserDashboard = () => {
  const [users, deleteUser] = useUsers();
  const [pendingDelete, setPendingDelete] = useState<string|null>(null);

  const onConfirm = async () => {
    await deleteUser(pendingDelete);
  };

  const onClose = () => {
    setPendingDelete(null);
  }

  return (
    <>
      {users ? (
        <ul>
          {users.map(user => (<li key={user.id}>
            <UserCard {...user} />
            <button onClick={() => setPendingDelete(user.id)}> delete user </button>
          </li>))}
        </ul>
      ) : (<div>Loading</div>)
      }
      {(pendingDelete !== null) && (<ConfirmDialog text={
        <>Do you really want to delete user <strong>{user.name}</strong>?</>
      } onConfirm={onConfirm} onClose={onClose} />)}
    </>
  )
};
```

Die Implementierung des Bestätigungsdialogs kann wie folgt aussehen:

```tsx
type ConfirmDialogProps = {
  text: JSX.element;
  onConfirm: () => Promise<void>;
  onClose: () => void;
};

const ConfirmDialog = ({text, onConfirm, onClose}: ConfirmDialogProps): JSX.Element => {
  const handleConfirm = async () => {
    await onConfirm();
    onClose();
  }
  return (
    <dialog aria-modal="true">
      <h2>Confirm</h2>
      <p>{text}</p>
      <button onClick={handleConfirm}> Confirm </button>
      <button onClick={() => onClose()}> Cancel </button>
    </dialog>
  );
};
```