import {testInvalid, testValid, html} from '../utils/test-config.js';

testInvalid('heading level skip h1 → h3',
  html('<main><h1>Title</h1><h3>Section</h3></main>'),
  {rule: 'htmlacademy/heading-level'});

testValid('adjacent heading levels are fine',
  html('<main><h1>Title</h1><h2>Section</h2><h3>Sub</h3></main>'),
  {rule: 'htmlacademy/heading-level'});
