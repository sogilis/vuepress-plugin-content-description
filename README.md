# vuepress-plugin-content-description

Vuepress plugin auto generate content description (or content summary) based
on the first words of the content.

## Install

```bash
yarn add -D https://github.com/sogilis/vuepress-plugin-content-description
# OR npm install -D git+https://github.com/sogilis/vuepress-plugin-content-description
```

## Usage

```javascript
module.exports = {
  plugins: ['vuepress-plugin-content-description'],
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
    'vuepress-plugin-content-description',
    {
      excludes: ['/about', '/tag/.*'],
    },
  ],
];
```

### numberOfWords

- Type: `number`
- Default: 70

The number of words extract

First XX words of the page content

Default is 70, as Hugo https://gohugo.io/content-management/summaries/

Example:

```javascript
plugins: [
  [
    'vuepress-plugin-content-description',
    {
      numberOfWords: 90,
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
