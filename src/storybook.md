---
title: Storybook
layout: layouts/article.njk
description: An introduction to Storybook, a tool for building UI components in isolation
level: advanced
tags: en
---
# Storybook

Storybook is a tool for building UI components in isolation. This helps building UI components without having to start the full application. 

You can develop the entire user interface without needing to start up a complex application, fill databases or navigate to a certain location within a project.

Also, this helps designers to have an overview of all implementations of components in the project.

- [https://storybook.js.org](https://storybook.js.org)
- [In depth guide with React](https://storybook.js.org/docs/react/get-started/introduction)

Storybook can work with various web frameworks. Besides pure HTML5, it also supports Angular, Vue, Svelte and React.
 
## Getting Started with Storybook and React

Storybook can be installed via `NPM`:

```sh
# Initialize storybook into an existing React project:
npx sb init

# run storybook
npm run storybook
```

UI components are listed in a catalogue. In order to have your components listed inside this catalogue, you have to write a story which contains the minimal code which is required to run the component. Additionally, you can provide additional input fields (aka knobs) so you are able to modify component properties from within the story.

## Writing a Storybook story

Example from the official documentation:

```jsx
// Button.stories.js|jsx

import React from 'react';

import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
};

export const Primary = () => <Button primary>Button</Button>;
```
