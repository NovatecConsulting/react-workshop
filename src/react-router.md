---
title: React Router
layout: layouts/article.njk
description: Introduction to React Router
level: advanced
tags: en
---

# React Router

React router enables you to build a web application with SPA-style routing.

```sh
npm install react-router-dom
```

Routes enable conditional rendering of components based on the given location path of your browser.

I
Usage example in the entry point:
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

## Linking to other pages

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

Link components are rendered as `<a href="...">` tags and can be styled by styling the a tag in global styles, or adding a css `className` property or using styled components (`styled.Link`).

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
