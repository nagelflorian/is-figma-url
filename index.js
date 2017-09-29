// Regex from https://www.figma.com/platform
var REGEX = /https:\/\/([w.-]+\.)?figma.com\/(file|proto)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/;

module.exports = function isFigmaUrl(url) {
  return REGEX.test(url);
};
