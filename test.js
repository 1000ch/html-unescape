const test = require('tape');
const isFunction = require('is-function');
const unescapeHTML = require('./');

test('unescapeHTML', t => {
  t.ok(isFunction(unescapeHTML), 'is a function');

  const object = {};
  const array = [];
  t.is(unescapeHTML(true), true, 'returns original value if argument is true');
  t.is(unescapeHTML(0), 0, 'returns original value if argument is number');
  t.is(unescapeHTML(object), object, 'returns original value if argument is empty object');
  t.is(unescapeHTML(array), array, 'returns original value if argument is empty array');
  t.is(unescapeHTML(null), null, 'returns original value if argument is null');
  t.is(unescapeHTML(undefined), undefined, 'returns original value if argument is undefind');

  t.is(
    unescapeHTML('&lt;html&gt;&lt;/html&gt;'),
    '<html></html>',
    'returns unescaped value'
  );
  t.is(
    unescapeHTML('&lt;script&gt;let string = &#x60;${location.href}&#x60;;&lt;/script&gt;'),
    '<script>let string = `${location.href}`;</script>',
    'returns unescaped value'
  );
  t.is(
    unescapeHTML('&lt;div id=&quot;container&quot;&gt;'),
    '<div id="container">',
    'returns unescaped value'
  );
  t.is(
    unescapeHTML('&lt;div id=&#x27;container&#x27;&gt;'),
    "<div id='container'>",
    'returns unescaped value'
  );

  t.end();
});
