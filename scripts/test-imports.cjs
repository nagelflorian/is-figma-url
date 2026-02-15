// Test CommonJS import
const isFigmaUrl = require('../dist/index.js').default;

console.log('Testing CommonJS import...');
const result1 = isFigmaUrl(
  'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
);
const result2 = isFigmaUrl('https://www.google.com/');

if (result1 === true && result2 === false) {
  console.log('✓ CommonJS import works correctly');
  process.exit(0);
} else {
  console.error('✗ CommonJS import failed');
  process.exit(1);
}
