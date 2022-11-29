---
title: Semantic HTML
layout: layouts/article.njk
description: Introduction to semantic HTML.
tags: en
level: get-started
---
# Semantic HTML

You can give your HTML a structure.

- You can use `<header>`, `<footer>`, `<nav>`, `<main>` elements which are called landmarks
- People with vision impairments who use a screen reader can use these landmarks for navigating through the document
- A structured markup helps you as a developer (including the next developer and/or future you)
- It is also beneficial for search engine optimization

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My amazing blog post</title>
</head>
<body>
  <header>
    <h1>My amazing blog post</h1>
    <p>by <em>Lea Rosema</em>, <em>12.12.2022</em></p>
  </header>
  <main>
    <article>
      <h2>An amazing topic</h2>
      <p>Lorem ipsum dolor sit amet...</p>
      
      <h2>Another topic</h2>
      <p>Bla bla bla</p>
      
      <h3>A subtopic to the second topic</h3>
      <p>Hello hello hello</p>
    </article>
  </main>
  <footer>
    <p>&copy; Novatec GmbH</p>
  </footer>
</body>
</html>
```

