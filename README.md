# linthtml-config-htmlacademy

Recommended shareable config for [linthtml](https://github.com/htmlacademy/linthtml-config-htmlacademy).
It turns on some of the [rules](https://github.com/linthtml/linthtml/blob/develop/docs/rules.md) within [linthtml](https://github.com/linthtml/linthtml).

Use it as is or as a foundation for your own config.

## Installation

```bash
npm install htmllint-config-htmlacademy -D
```

## Usage

If you've installed `linthtml-config-htmlacademy` locally within your project, just set your `linthtml` config to:

```json
{
  "extends": "@linthtml/linthtml-config-recommended"
}
```

### Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to change the `line-max-len` rule and increase the limit, turn off the `tag-close` rule, and add the `attr-order` rule:

```json
{
  "extends": "stylelint-config-recommended",
  "rules": {
    "line-max-len": [
      true,
      120
    ],
    "tag-close": "off",
    "attr-order": [
      true,
      [
        "id", "class"
      ]
    ]
  }
}
```


## VS Code
