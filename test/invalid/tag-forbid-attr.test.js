import {testInvalid, html} from '../utils/test-config.js';

testInvalid('type="text/css" on <link> is forbidden',
  html('<p>x</p>', '<link rel="stylesheet" href="s.css" type="text/css">'),
  {rule: 'htmlacademy/tag-forbid-attr', message: /text\/css.*link/});

testInvalid('type="text/javascript" on <script> is forbidden',
  html('<p>x</p><script src="x.js" type="text/javascript"></script>'),
  {rule: 'htmlacademy/tag-forbid-attr', message: /text\/javascript.*script/});
