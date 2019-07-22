# Gatsby Theme Showcase

Add a showcase to any site.

## What you get from this theme

- Airtable integration
- A React component to display data

## Installation

To use this theme in your Gatsby sites, follow these instructions:

1.  Install the theme

    ```sh
    npm install --save @jlengstorf/gatsby-theme-showcase
    ```

2.  Add the theme to your `gatsby-config.js`:

    ```js
    module.exports = {
      plugins: ['@jlengstorf/gatsby-theme-showcase'],
    };
    ```

3.  Start your site
    ```sh
    gatsby develop
    ```

## Usage

### Theme options

| Key    | Default value | Description |
| ------ | ------------- | ----------- |
| `todo` |               | tkt         |

#### Example usage

```js
// gatsby-config.js
module.exports = {
  plugins: ['@jlengstorf/gatsby-theme-showcase'],
};
```

### Exported components

#### `Showcase`

[description of what this is and why it's useful]

#### Example usage in MDX

In any MDX file:

```mdx
import { Showcase } from '@jlengstorf/gatsby-theme-showcase';

# Look at my photos!

<Showcase />
```

#### Example usage in React components

In any React component:

```jsx
import React from 'react';
import { Showcase } from '@jlengstorf/gatsby-theme-showcase';

export default () => (
  <div>
    <Showcase />
  </div>
);
```

#### How to shadow this component

If you want to use [component shadowing](https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/) with this component, create a file at the following path in your site:

```
src/@jlengstorf/gatsby-theme-showcase/components/showcase.js
```
