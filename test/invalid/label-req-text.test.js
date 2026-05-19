import {testInvalid, html} from '../utils/test-config.js';

testInvalid('<label> without visible text',
  html(`<form action="/api" method="post">
    <label for="q"><input type="text" id="q" name="q"></label>
    <button type="submit">Send</button>
  </form>`),
  {rule: 'htmlacademy/label-req-text'});
