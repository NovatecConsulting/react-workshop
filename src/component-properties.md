---
layout: layouts/article.njk
title: Component Properties
description: This article is about defining component properties on a React Component and passing props to child components
tags: en
level: intermediate
order: 5
---

# Component properties

Components properties are passed as a parameter inside a functional component.
In this example, the props are directly destructured inside the function parameter:

```jsx
const UserCard = ({name, role, imageSrc}) => (
  <div>
    <img src={imageSrc} alt={name} />
    <h3>{name}</h3>
    <p>{role}</p>
  </div>
);
```

## Defining component props in TypeScript

You can either use a `type` or an `interface` to specify component props. An interface can be extended with further properties. This can be helpful for public APIs, while a `type` is more strict.

A typed version of the above `UserCard` component may look like this:

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

TypeScript does static type checks at build time. 
Before TypeScript became a thing, there were `PropTypes`, which provided property type checks at runtime.

This is mostly not used anymore today and no longer bundled with React. It is still available as a 
separate NPM package.

## Common Property types

You can pass anything as a property to a component. Besides primitive types and typed objects, you can also
pass JSX, child elements, CSS styles or callback functions:

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

## Parent-Child communication between components

You can also pass callback functions to child components, which can be used for parent-child communication between components.
The example is a user dashboard, which iterates over all users of the application and displays them in an unordered list.
For each user, it provides a "delete user" action. On click on the button, the user isn't deleted immediately but a confirmation dialog is shown first.

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

The implementation of the confirmation dialog can look like this:

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