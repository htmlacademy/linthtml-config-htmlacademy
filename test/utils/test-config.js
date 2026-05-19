import {describe, it} from 'node:test';
import {strict as assert} from 'node:assert';
import linthtml from '@linthtml/linthtml';
import plugin from 'linthtml-rules-htmlacademy';
import config from '../../linthtml.config.js';

const pluginRulesMap = Object.fromEntries(
  plugin.rules.map((rule) => [rule.name, rule]),
);

const resolvedConfig = {...config, plugins_rules: pluginRulesMap};

export function html(body, headExtra = '') {
  return `<!DOCTYPE html><html lang="ru"><head><meta charset="utf-8"><title>x</title>${headExtra}</head><body>${body}</body></html>`;
}

async function runConfig(code) {
  const issues = await linthtml(code, resolvedConfig);
  return issues.map((i) => ({
    rule: i.rule,
    code: i.code,
    line: i.position?.start?.line,
    message: i.message,
  }));
}

function matches(found, expected) {
  return found.find((f) =>
    f.rule === expected.rule
    && (expected.code === undefined || f.code === expected.code)
    && (expected.line === undefined || f.line === expected.line)
    && (!expected.message || expected.message.test(f.message)),
  );
}

export function testInvalid(description, code, expected) {
  describe(`config: ${description}`, () => {
    it('reports the expected issue', async () => {
      const found = await runConfig(code);
      const match = matches(found, expected);
      assert.ok(
        match,
        `Expected an issue from ${expected.rule}${
          expected.code ? ` with code ${expected.code}` : ''
        }, got:\n${JSON.stringify(found, null, 2)}`,
      );
    });
  });
}

export function testValid(description, code, {rule}) {
  describe(`config: ${description}`, () => {
    it(`reports no issues from ${rule}`, async () => {
      const found = await runConfig(code);
      const ruleIssues = found.filter((f) => f.rule === rule);
      assert.equal(
        ruleIssues.length,
        0,
        `Expected no issues from ${rule}, got:\n${JSON.stringify(ruleIssues, null, 2)}`,
      );
    });
  });
}
