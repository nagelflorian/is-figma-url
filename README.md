# is-figma-url

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
