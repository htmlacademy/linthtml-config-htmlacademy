import {testInvalid, html} from '../utils/test-config.js';

testInvalid('boolean attributes written with a redundant value',
  html('<input type="text" disabled="disabled" name="q">'),
  {rule: 'htmlacademy/boolean-attr-no-value'});
