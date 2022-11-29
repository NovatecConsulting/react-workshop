---
title: Semantisches HTML
layout: layouts/article.njk
description: Einführung in semantisches HTML.
level: get-started
---
# Semantisches HTML

Mit semantischen HTML-Tags kann HTML eine Struktur gegeben werden.

- Sie können `<header>`, `<footer>`, `<nav>`, `<main>` Elemente verwenden, die als Landmarks bezeichnet werden.
- Menschen mit Sehbehinderungen nutzen diese Landmarks als Orientierungshilfe
- Screen reader können diese Landmaks zur Navigation durch das Dokument nutzen
- Ein strukturiertes Markup hilft auch beim Entwickeln
- Es ist auch für die Suchmaschinenoptimierung von Vorteil.

Eine Semantische HTML-Struktur für einen Blogbeitrag kann zum Beispiel so aussehen:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mein toller Blogbeitrag</title>
</head>
<body>
  <header>
    <h1>Mein toller Blogbeitrag</h1>
    <p>von <em>Lea Rosema</em>, <em>12.12.2022</em></p>
  </header>
  <main>
    <article>
      <h2>Ein schönes Thema</h2>
      <p>Lorem ipsum dolor sit amet...</p>
      
      <h2>Ein anderes Thema</h2>
      <p>Bla bla bla</p>
      
      <h3>Ein Unterthema</h3>
      <p>Hallo hallo hallo</p>
    </article>
  </main>
  <footer>
    <p>&copy; Novatec GmbH</p>
  </footer>
</body>
</html>
```

