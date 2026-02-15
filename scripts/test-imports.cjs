// Test CommonJS import
const { default: isFigmaUrl, isFigmaUrl: isFigmaUrlNamed } = require('../dist/cjs/index.js');

console.log('Testing CommonJS import...');
const result1 = isFigmaUrl('https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File');
const result2 = isFigmaUrl('https://www.google.com/');
const result3 = isFigmaUrlNamed('https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File');

if (result1 === true && result2 === false && result3 === true) {
  console.log('✓ CommonJS import works correctly (default + named)');
  process.exit(0);
} else {
  console.error('✗ CommonJS import failed');
  process.exit(1);
}
