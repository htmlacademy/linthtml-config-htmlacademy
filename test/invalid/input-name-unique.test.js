import {testInvalid, testValid, html} from '../utils/test-config.js';

testInvalid('duplicate non-radio input names in a form',
  html(`<form action="/api" method="post">
    <input type="text" name="q">
    <input type="text" name="q">
    <button type="submit">Send</button>
  </form>`),
  {rule: 'htmlacademy/input-name-unique'});

testValid('radio group with same name',
  html(`<form action="/api" method="post">
    <input type="radio" name="size" value="s" id="s"><label for="s">S</label>
    <input type="radio" name="size" value="m" id="m"><label for="m">M</label>
    <button type="submit">Send</button>
  </form>`),
  {rule: 'htmlacademy/input-name-unique'});
