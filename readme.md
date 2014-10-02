# html-unescape [![Build Status](https://travis-ci.org/1000ch/html-unescape.svg?branch=master)](https://travis-ci.org/1000ch/html-unescape)

Unescape HTML special characters.

## Install

```sh
$ npm install 1000ch/html-unescape
```

## Usage

```javascript
const unescapeHTML = require('html-unescape');

unescapeHTML('&lt;html&gt;&lt;/html&gt;');
// => <html></html>
```

## License

[MIT](https://1000ch.mit-license.org) © [Shogo Sensui](https://github.com/1000ch)
