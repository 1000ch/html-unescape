'use strict';

const isString = require('is-string');

const unescapeMap = {
  '&amp;' : '&',
  '&lt;'  : '<',
  '&gt;'  : '>',
  '&quot;': '"',
  '&#x27;': "'",
  '&#x60;': '`'
};
const unescapeRegex = new RegExp(`(${Object.keys(unescapeMap).join('|')})`, 'g');

module.exports = function unescapeHTML(value) {
  if (!isString(value)) {
    return value;
  }

  return value.replace(unescapeRegex, match => unescapeMap[match]);
};
