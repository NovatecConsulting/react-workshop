---
title: React Router
layout: layouts/article.njk
description: Introduction to React Router
level: advanced
---

# React Router

Mit dem React Router kannst du zu einer Webanwendung ein Routing für Single Page Applications hinzufügen.

```sh
npm install react-router-dom
```

Routen ermöglichen das bedingte Rendering von Komponenten basierend auf dem angegebenen Standortpfad deines Browsers.

Beispiel für die Verwendung von React Router in der Einstiegsseite:

```jsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

const MyReactApplication = () => (
  <>
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/notifications" element={<NotificationsPage />} />
      <Route path="/profile/:name" element={<ProfilePage />} />
      <Route path="/groups/*" element={<GroupsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </>
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MyReactApplication />
    </BrowserRouter>
  </React.StrictMode>
);
```

Dieses Beispiel zeigt verschiedene Arten von Routen
- Die `<StartPage />` wird an der `/` Stelle gerendert
- Die `<NotificationsPage />` wird an der Stelle `/notifications` gerendert
- Die Seite `<ProfilePage />` wird an einem beliebigen Ort `/profile/:name` mit dem Parameter `:name` gerendert.
- Die Seite `<GroupsPage />` wird auf jeder Route unter dem Ort `/groups/` dargestellt, einschließlich Unterordnern. Die `<GroupsPage />` kann außerdem verschachtelte `<Routes />` enthalten.

## Parameter auf Seiten verwenden

Parameter können über den `useParams()`-Hook abgefragt werden:

```js
const { name } = useParams();
```

In TypeScript kannst du zusätzlich den Typ des params-Objekts über Generics festlegen:

```ts
const { name } = useParams<{ name?: string }>();
```

## Links zu anderen Routen

```jsx
import { Link } from 'react-router-dom';

const NotificationsPage = () => (
  <article>
    <h1>Notifications</h1>
    <ul>
      <li><Link to="/profile/Lea">Lea</a> posted a new <Link to="/status/32424231">status</Link>.</li>
    </ul>
  </article>
);
```

Diese `<Link />`-Komponenten werden als `<a href="...">`-Tags gerendert und können gestylt werden, indem man das a-Tag in globalen Styles stylt, eine css-Eigenschaft `className` hinzufügt oder gestylte Komponenten (`styled.Link`) verwendet.

## Programmatic Redirect

```js
const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <article>
      <h1>Resource not found</h1>
      <button onClick={() => navigate('/')}> Go back to start </button>
    </article>
  );
}
```
