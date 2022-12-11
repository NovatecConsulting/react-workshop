---
layout: layouts/article.njk
title: Form Validation
description: Introduction to validating forms and handling form errors
tags: en
level: intermediate
---

# Form Validation

Below is a minimal example for form validation. It is a form with only one field. 
In the submit handler, the form is validated. If there are numbers contained in the name, then you will see an error message on the form field, stating numbers are not allowed.

```jsx
const ApplicationForm = ({onSubmit}) => {
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
  const fieldId = useMemo(() => UUID(), []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (/\d/.test(name)) {
      setError('no numbers allowed in name');
      return;
    }
    onSubmit({name});
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="text-field">
        <label for={fieldId}>Enter your name:</label>
        <input id={fieldId} value={name} onChange={(e) => setName(e.target.value)} name="name" aria-invalid={error ? 'true' : null} aria-describedby={error? `${fieldId}_error` : null}>
        {error && (
          <div className="error-text" id={`${fieldId}_error`}>{error}</div>
        )}
      </div>
      <button> submit form </button>
    </form>
  );
}
```

## Accessibility concerns

As you can see in the above example, some `ARIA` attributes are used in the example, which helps screenreader users using your app.
In this case, there is an `aria-invalid` attribute to mark a form field invalid and a helper text. The helper text is programmatically associated with the form field via `aria-describedBy`.

`ARIA` attributes are solely for helping screenreader users, but you can also use CSS attribute selectors to provide visual styles:

```css
input[aria-invalid="true"] {
  outline: 2px solid red;
}
```

There are component libraries built with accessibility in mind that automatically take care of that for you, for example [Material UI](https://mui.com).

A standard input component in Material is implemented in the [Text Field component](https://mui.com/material-ui/react-text-field/#main-content), which provide `error` and `helperText` properties to display form errors.

## See also

- [react-hook-form](https://react-hook-form.com)
- [Material UI](https://mui.com)
- [Using React Hook Form with Material UI](https://seanconnolly.dev/react-hook-form-material-ui)
