---
title: Components
layout: layouts/article.njk
description: Introduction to components in React
level: beginner
order: 2
tags: en
---

# Components

## Functional Components

Functional Components are the most commonly used components in React.

```jsx
const Header = ({title, subTitle}) => (
  <header>
    <h1>{title}</p>
    <p>{subTitle}</p>
  </header>
);
```

These components can then be used in other components.
The topmost component of a React Application is often called `<App />` Component.

A typical structure could look like this:

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

## Class-Style Components

In addition to functional components, there are class-style components. 
They are rarely used nowadays as they are more verbose.
It is recommended to stick to functional style components.

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

## Naming convention

For JSX components the PascalCase notation is used. A common convention is also to use a separate file per component and the 
extension `.jsx` per component.

## Rendering a component

The following code renders a h1 headline containing `Hello World!`.

Essentially, this is the basic anatomy of a React application:


```jsx
import { createRoot } from 'react-dom';

function Greeting(props) {
  return <h1>Hello {props.name}!</h1>;
}

const root = createRoot(document.getElementById('root'));
const element = <Greeting name="World" />;
root.render(element);
```

## Component composition

React application can be broken down into smaller pieces by the composition of components. 

An example structure of a blog article page can be seen below:

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

The code for the above structure could be:

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