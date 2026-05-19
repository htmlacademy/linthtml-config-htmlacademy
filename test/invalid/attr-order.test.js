import {testInvalid, html} from '../utils/test-config.js';

testInvalid('class placed after other attributes',
  html('<a href="/x" class="link">y</a>'),
  {rule: 'htmlacademy/attr-order', message: /class.*must come before "href"/});

testInvalid('data-* placed after "others"',
  html('<input class="field" placeholder="x" data-role="q" type="text">'),
  {rule: 'htmlacademy/attr-order', message: /data-role.*must come before "placeholder"/});
