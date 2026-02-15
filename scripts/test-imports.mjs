// Test ESM import
import isFigmaUrl, { isFigmaUrl as isFigmaUrlNamed } from '../dist/esm/index.js';

console.log('Testing ESM import...');
const result1 = isFigmaUrl('https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File');
const result2 = isFigmaUrl('https://www.google.com/');
const result3 = isFigmaUrlNamed('https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File');

if (result1 === true && result2 === false && result3 === true) {
  console.log('✓ ESM import works correctly (default + named)');
  process.exit(0);
} else {
  console.error('✗ ESM import failed');
  process.exit(1);
}
