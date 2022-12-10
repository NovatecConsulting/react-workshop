---
title: CSS Conventions and Methodologies
layout: layouts/article.njk
description: CSS conventions and methodologies for writing robust and maintainable web applications
level: prerequisites
tags: en
---

# CSS Conventions and Methodologies

## BEM

BEM stands for Block Element modifier and is a popular naming conventions for styling components in web projects. It is also still popular in React Projects.

At the topmost level there is the Block with a name, written in hyphenated-case (also called kebab-case). The name of the block is put into its `class` attribute.

These blocks can consist of multiple elements.

An element of a block is named after the name of the block and the name of the element, delimited by two underscores, eg. `block__element`. It is also put into the class attribute.

Last but not least, there are modifiers. These are for creating variants of the component, these modifiers are named via the class attribute in the format `block--modifier`.

Example: 

```html
<button class="button button--small button--without-text">
  <svg class="button__icon"><path .../></svg>
  <span class="button__text">Button text</span>
</button>
```

This button has a `button--small` and a `button--without-text` modifier.
Sub-elements of the button component are the `button__icon` element and the `button__text` element. 

NOTE: You might be confused why there is a `button__text` element in the HTML when there is a `button--without-text` modifier. This is because buttons always need to have a meaningful caption, even if the text is not visually shown. This is for accessibility reasons.

An in-depth guide about the BEM naming convention is on [https://9elements.com/bem-cheat-sheet/](https://9elements.com/bem-cheat-sheet/)

## Atomic Design

Atomic Design is a methodology for user interface design by Brad Frost. 
This methodology is inspired by Chemistry where atoms combine together to form molecules, which further combine to form organisms.

In-depth guide about Atomic Design: [https://atomicdesign.bradfrost.com/](https://atomicdesign.bradfrost.com/) 

## CUBE CSS

[CUBE](https://cube.fyi/) is a methodology for CSS by [Andy Bell](https://piccalil.li).

## Further Resources

- [https://smolcss.dev](https://smolcss.dev)
- [https://moderncss.dev](https://moderncss.dev)