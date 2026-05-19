import {testInvalid, testValid, html} from '../utils/test-config.js';

testInvalid('<a target="_blank"> without rel="noreferrer"',
  html('<a href="https://example.com" target="_blank">External</a>'),
  {rule: 'htmlacademy/a-target-rel'});

testValid('<a target="_blank" rel="noreferrer">',
  html('<a href="https://example.com" target="_blank" rel="noreferrer">External</a>'),
  {rule: 'htmlacademy/a-target-rel'});
