# is-figma-url [![CI](https://github.com/nagelflorian/is-figma-url/actions/workflows/ci.yml/badge.svg)](https://github.com/nagelflorian/is-figma-url/actions/workflows/ci.yml) [![npm](https://img.shields.io/npm/v/is-figma-url.svg)](https://www.npmjs.com/package/is-figma-url) [![Maintainability](https://api.codeclimate.com/v1/badges/5c92b396d3aff06ddeb0/maintainability)](https://codeclimate.com/github/nagelflorian/is-figma-url/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/5c92b396d3aff06ddeb0/test_coverage)](https://codeclimate.com/github/nagelflorian/is-figma-url/test_coverage)

Simple regex to check whether a string is a valid [Figma live embed](https://www.figma.com/platform) url.

## Install

```
npm install is-figma-url --save
```

## Quick start

```js
import isFigmaUrl from 'is-figma-url';

isFigmaUrl('https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File'); // true
isFigmaUrl('https://www.google.com/'); // false
```
