# LintHTML Config for HTML Academy CODEGUIDE

[![npm version](https://img.shields.io/npm/v/linthtml-config-htmlacademy.svg)](https://www.npmjs.com/package/linthtml-config-htmlacademy)
[![test](https://github.com/htmlacademy/linthtml-config-htmlacademy/actions/workflows/test.yml/badge.svg)](https://github.com/htmlacademy/linthtml-config-htmlacademy/actions/workflows/test.yml)
[![license](https://img.shields.io/npm/l/linthtml-config-htmlacademy.svg)](https://github.com/htmlacademy/linthtml-config-htmlacademy/blob/main/LICENSE)

[LintHTML](https://linthtml.vercel.app) configuration for HTML markup validation according to [HTML Academy codeguide](https://codeguide.academy).

## Installation

```bash
npm install @linthtml/linthtml linthtml-config-htmlacademy --save-dev
```

## Usage

Create a `.linthtmlrc` configuration file in your project root:

```json
{
  "extends": "linthtml-config-htmlacademy"
}
```

### Extending the Config

Add a `rules` key after `extends` to customize rules:

```json
{
  "extends": "linthtml-config-htmlacademy",
  "rules": {
    "line-max-len": [true, 120]
  }
}
```

## Rules

This config includes custom rules from [linthtml-rules-htmlacademy](https://github.com/htmlacademy/linthtml-rules-htmlacademy). See the full [list of rules](https://github.com/htmlacademy/linthtml-rules-htmlacademy#rules).

## VS Code Integration

Install the [LintHTML extension](https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-linthtml) to see errors highlighted in VS Code.

> The configuration file must be named `.linthtmlrc` as [required by the extension](https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-linthtml#:~:text=If%20you%20have%20a%20valid%20hmllint%20configuration%20file).

![VS Code error highlighting](assets/vs-code-report.png)

## CLI Usage

Add a script to your `package.json`:

```json
{
  "scripts": {
    "lint:html": "linthtml source/*.html --config .linthtmlrc"
  }
}
```

- `linthtml` — runs HTML validation
- `source/*.html` — path to HTML files
- `--config .linthtmlrc` — path to configuration file

## Links

- [HTML Academy](https://htmlacademy.ru)
- [HTML Academy Codeguide](https://codeguide.academy)
- [Codeguide Repository](https://github.com/htmlacademy/codeguide)
- [LintHTML Documentation](https://linthtml.vercel.app)
