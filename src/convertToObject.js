'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const styleObject = {};
  const cleanStrings = sourceString
    .trim()
    .split(';')
    .filter((style) => style.length);

  cleanStrings.forEach((cleanString) => {
    const partsOfString = cleanString
      .split(':')
      .map((partStyle) => partStyle.trim());

    const key = partsOfString[0];
    const value = partsOfString[1];

    if (key && value) {
      styleObject[key] = value;
    }
  });

  return styleObject;
}

module.exports = convertToObject;
