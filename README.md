# is-figma-url [![CI](https://github.com/nagelflorian/is-figma-url/actions/workflows/ci.yml/badge.svg)](https://github.com/nagelflorian/is-figma-url/actions/workflows/ci.yml) [![npm](https://img.shields.io/npm/v/is-figma-url.svg)](https://www.npmjs.com/package/is-figma-url)

Simple regex to check whether a string is a valid [Figma live embed](https://www.figma.com/platform) url.

**Features:**

- ✅ Written in TypeScript with full type definitions
- ✅ Dual package: ESM and CommonJS support
- ✅ Zero dependencies
- ✅ Lightweight and fast

## Install

```bash
npm install is-figma-url --save
```

## Usage

### ESM (ES Modules)

```typescript
import isFigmaUrl from 'is-figma-url';

isFigmaUrl('https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File'); // true
isFigmaUrl('https://www.google.com/'); // false
```

### CommonJS

```javascript
const isFigmaUrl = require('is-figma-url').default;

isFigmaUrl('https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File'); // true
isFigmaUrl('https://www.google.com/'); // false
```

### TypeScript

Full TypeScript support with type definitions included:

```typescript
import isFigmaUrl from 'is-figma-url';

const url: string =
  'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File';
const isValid: boolean = isFigmaUrl(url); // true
```
