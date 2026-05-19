import {testInvalid, testValid, html} from '../utils/test-config.js';

testInvalid('<svg> without role or aria-hidden',
  html('<main><h1>x</h1><svg width="16" height="16"></svg></main>'),
  {rule: 'htmlacademy/svg-role-img'});

testValid('decorative <svg aria-hidden="true"> is allowed',
  html('<main><h1>x</h1><svg aria-hidden="true" width="16" height="16"></svg></main>'),
  {rule: 'htmlacademy/svg-role-img'});
