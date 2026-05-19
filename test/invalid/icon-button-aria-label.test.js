import {testInvalid, html} from '../utils/test-config.js';

testInvalid('icon-only <button> without accessible name',
  html('<button type="button"><svg width="16" height="16"></svg></button>'),
  {rule: 'htmlacademy/icon-button-aria-label'});
