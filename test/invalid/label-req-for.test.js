import {testInvalid, html} from '../utils/test-config.js';

testInvalid('<label> without for and without form-control descendant',
  html('<label>Stray label</label>'),
  {rule: 'htmlacademy/label-req-for'});

testInvalid('<label for> points at a non-existent id',
  html('<label for="ghost">Email</label>'),
  {rule: 'htmlacademy/label-req-for'});
