# vuepress-plugin-first-lines

Vuepress plugin to add first lines to page data

## Install

```bash
yarn add -D https://github.com/sogilis/vuepress-plugin-first-lines
# OR npm install -D git+https://github.com/sogilis/vuepress-plugin-first-lines
```

## Usage

```javascript
module.exports = {
  plugins: ['vuepress-plugin-first-lines'],
};
```

Put `description` data into `$page` data so you can access like

```js
console.log($page.description);
```

Example output

```js
## De quoi allons-nous parler ? Dans cet article, nous parlerons de tests
automatisés (pas de tests manuels) portant sur une base de code maintenable et
évolutive (pas de code jetab
```

### Override

You can override by specifying a description string in frontmatter

```
---
title: My great post!
date: "2018-08-13T17:36:55.338Z"
description: 'My resume'
---

Some content here...
```

## Options

### excludes

- Type: `Array<string>`
- Default: `undefined`

Exclude pages by their path via a regular expression. This tests for both `path`
and `regularPath`.

Example:

```javascript
plugins: [
  [
    'vuepress-plugin-first-lines',
    {
      excludes: ['/about', '/tag/.*'],
    },
  ],
];
```

### indexStart

- Type: `number`
- Default: `0`

The index of the first character to include in the returned substring.

Example:

```javascript
plugins: [
  [
    'vuepress-plugin-first-lines',
    {
      indexStart: 2,
    },
  ],
];
```

### indexEnd

- Type: `number`
- Default: `200`

The index of the first character to exclude from the returned substring.

Example:

```javascript
plugins: [
  [
    'vuepress-plugin-first-lines',
    {
      indexEnd: 300,
    },
  ],
];
```

## Note

Inspired from

- https://github.com/darrenjennings/vuepress-plugin-reading-time

- https://github.com/webmasterish/vuepress-plugin-feed/

## Used

Used by the blog of SquareSquale and blog of Sogilis
