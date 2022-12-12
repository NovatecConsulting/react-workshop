---
title: Komponenten
layout: layouts/article.njk
description: Einführung in Komponenten in React
level: beginner
---
# Komponenten

## Funktionale Komponenten

Funktionale Komponenten sind die am häufigsten verwendeten Komponenten in React.

```jsx
const Header = ({title, subTitle}) => (
  <header>
    <h1>{title}</h1>
    <p>{subTitle}</p>
  </header>
);
```

Diese Komponenten können dann in anderen Komponenten verwendet werden.
Die oberste Komponente einer React-Anwendung wird oft `<App />`-Komponente genannt.

Eine typische Struktur könnte wie folgt aussehen:

```jsx
const App = () => ( 
  <>
    <Header title="Hello World" subTitle="This is my app" />
    <MainContent />
    <Footer />
  </>
);

const root = createRoot(document.getElementById('root'));
root.render(<App />);
```

## Klassenbasierte Komponenten

Neben den funktionalen Komponenten gibt es auch klassenbasierte Komponenten. 
Sie werden heutzutage nur noch selten verwendet, da sie sehr umfangreich sind.
Es wird empfohlen, funktionale Komponenten zu verwenden.

```jsx
class HeaderComponent extends Component {

  render() {
    const { title, subTitle } = this.props;
    return (
      <header>
        <h1>{title}</h1>
        <p>{subTitle}</p>
      </header>
    )
  }
}
```

## Namenskonvention

Für JSX-Komponenten wird die PascalCase-Schreibweise verwendet. Eine gängige Konvention ist auch, pro Komponente eine separate Datei sowie die 
Erweiterung `.jsx` .zu verwenden.

## Rendering einer Komponente

Der folgende Code rendert eine h1-Überschrift mit dem Inhalt `Hallo World!`.

Im Wesentlichen ist dies die grundlegende Anatomie einer React-Anwendung:


```jsx
import { createRoot } from 'react-dom';

function Greeting(props) {
  return <h1>Hello {props.name}!</h1>;
}

const root = createRoot(document.getElementById('root'));
const element = <Greeting name="World" />;
root.render(element);
```

## Komponentenzusammensetzung

Eine React-Anwendung kann durch die Komposition von Komponenten in kleinere Teile zerlegt werden. 

Ein Beispiel für die Struktur einer Blog-Artikel-Seite ist unten zu sehen:

<div class="rect">
  <p>Article</p>
  <div class="rect">
    <p>ArticleHeader</p>
    <div class="rect">Title</div>
    <div class="rect">
      <p>Meta Data</p>
    </div>
  </div>
  <p>[Article Content]</p>
</div>

Der Code für die obige Struktur könnte lauten:

```jsx {% raw %}
function Article({title, metadata, children}) {
  return (
    <article>
      <ArticleHeader title={title} metadata={metadata} />
      {children}
    </article>
  )
}


function ArticleHeader({title, metadata}) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <ArticleMetadata
        user={metadata.name}
        avatarImage={metadata.avatarImage}
        date={metadata.date} />
    </header>
  );
}

function ArticleMetadata({name, date, avatarImage}) {
  return (
    <div className="header__metadata">
      <img src={avatarImage} alt={name}>
      <p>by <em>{name}</em>, {date}</p>
    </div>
  );
}

const element = (
  <Article 
    title="My Amazing blog post" 
    metadata={{name: "Lea Rosema", date: "12.12.2022", avatarImage: "lea.jpg"}}
  >
    <p>Lorem Ipsum dolor sit amet.</p>
  </Article>
);
{% endraw %}
```
