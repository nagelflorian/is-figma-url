// Regex from https://www.figma.com/platform
const REGEX =
  /https:\/\/([w.-]+\.)?figma.com\/(file|proto)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/;

/**
 * Checks whether a string is a valid Figma live embed URL
 * @param url - The URL string to validate
 * @returns true if the URL is a valid Figma URL, false otherwise
 */
export default function isFigmaUrl(url: string): boolean {
  return REGEX.test(url);
}
