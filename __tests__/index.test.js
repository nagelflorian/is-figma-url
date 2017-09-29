const isFigmaUrl = require('../index');

test('should return true for a valid figma live embed url', () => {
  const validUrl =
    'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File';
  expect(isFigmaUrl(validUrl)).toBeTruthy();
});

test('should return false for invalid figma live embed url', () => {
  const invalidUrls = [
    'https://www.google.com',
    'https://www.figma.com',
    'http://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
  ];
  invalidUrls.forEach(url => expect(isFigmaUrl(url)).toBeFalsy());
});
