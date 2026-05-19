import {testInvalid, html} from '../utils/test-config.js';

testInvalid('<form> without any submit button',
  html('<form action="/api"><input type="text" name="q"></form>'),
  {rule: 'htmlacademy/req-submit-button'});

testInvalid('<form> with only a reset button',
  html('<form action="/api"><button type="reset">Reset</button></form>'),
  {rule: 'htmlacademy/req-submit-button'});
