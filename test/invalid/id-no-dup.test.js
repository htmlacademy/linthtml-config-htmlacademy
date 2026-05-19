import {testInvalid, html} from '../utils/test-config.js';

testInvalid('duplicate ids are caught via htmlacademy/id-no-dup',
  html('<div id="dup">a</div><div id="dup">b</div>'),
  {rule: 'htmlacademy/id-no-dup', code: 'E012'});
