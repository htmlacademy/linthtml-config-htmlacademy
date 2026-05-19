# Changelog

## 2.0.0 — ???

### Breaking

- Migrated to ESM. Configuration file renamed `index.js` → `linthtml.config.js`. Consumers extending the config by package name (`"extends": "linthtml-config-htmlacademy"` in `.linthtmlrc`) keep working through `package.json#exports`. Programmatic consumers (`require('linthtml-config-htmlacademy')`) must switch to `import`.
- Renamed `htmlacademy/img-svg-req-dimensions` → `htmlacademy/replaced-elements-req-dimensions` (now covers `<img>`, `<svg>`, `<video>`, `<iframe>` — all replaced elements that benefit from explicit dimensions).
- Node.js requirement bumped to >= 24.

### Added

- Activated `htmlacademy/req-submit-button` — every `<form>` must contain a submit button (`<button type="submit">`, `<button>` without `type`, `<input type="submit">`, or an external submitter linked via the `form` attribute). New rule, see [linthtml-rules-htmlacademy#40](https://github.com/htmlacademy/linthtml-rules-htmlacademy/issues/40).
- Activated `htmlacademy/label-req-for` — every `<label>` must be associated with a labelable form control, either through `for`/`id` or through an inline descendant.
- Activated `htmlacademy/boolean-attr-no-value` — boolean attributes (`disabled`, `checked`, `required`, `autofocus`, …) must be written without a value.
- Activated `htmlacademy/icon-button-aria-label` — icon-only `<button>` elements (no visible text) must declare an accessible name via `aria-label`, `aria-labelledby`, or `title`. Addresses [linthtml-rules-htmlacademy#80](https://github.com/htmlacademy/linthtml-rules-htmlacademy/issues/80).
- Activated `htmlacademy/tag-forbid-attr` with the redundant-`type` rule: `<link type="text/css">` and `<script type="text/javascript">` are flagged (these defaults have not been required since HTML5).
- Activated `htmlacademy/attr-order` with the codeguide default `class → src/href → data-* → others`. Disabled `htmlacademy/class-first` in the same config to avoid duplicate reports — `attr-order` already enforces `class` as the first group.
- Activated `htmlacademy/input-name-unique` — duplicate `<input name>` inside a single form is flagged (radio / checkbox groups exempt). New rule, see [linthtml-rules-htmlacademy#46](https://github.com/htmlacademy/linthtml-rules-htmlacademy/issues/46).
- Activated `htmlacademy/heading-level` — heading-level skips and headings starting with anything other than `<h1>` are flagged. New rule, see [linthtml-rules-htmlacademy#41](https://github.com/htmlacademy/linthtml-rules-htmlacademy/issues/41).
- Activated `htmlacademy/label-req-text` — `<label>` without visible text content is flagged (covers the `<label for="x"><input id="x"></label>` anti-pattern that the existing `label-req-for` allowed). New rule, see [linthtml-rules-htmlacademy#67](https://github.com/htmlacademy/linthtml-rules-htmlacademy/issues/67).
- Activated `htmlacademy/svg-role-img` — inline `<svg>` must opt in as content (`role="img"` + `aria-label`) or as decorative (`aria-hidden="true"`). New rule, see [linthtml-rules-htmlacademy#53](https://github.com/htmlacademy/linthtml-rules-htmlacademy/issues/53).
- Expanded `attr-name-ignore-regex` to cover camelCase SVG attributes (`viewBox`, `preserveAspectRatio`, `xlink:href`, `gradientTransform`, `patternUnits`, `markerWidth`, `attributeName`, `stdDeviation`, `baseFrequency`, …). Without this, the dash-case `attr-name-style` rule reports valid SVG markup. Closes [#19](https://github.com/htmlacademy/linthtml-config-htmlacademy/issues/19).
- Expanded `htmlacademy/tag-name-lowercase` `ignore` list to all SVG filter primitives (`feBlend`, `feColorMatrix`, `feGaussianBlur`, …) and other camelCase SVG tags (`foreignObject`, `animateTransform`, `animateMotion`). Part of [#19](https://github.com/htmlacademy/linthtml-config-htmlacademy/issues/19).
- `tag-req-attr.form`: requires the `method` attribute on `<form>`.
- `tag-self-close`: explicitly `[true, 'never']`.
- `node:test`-based test suite under `test/invalid/` for the most important policy decisions (label association, submit button, duplicate ids, boolean attribute values, icon-button accessibility, forbidden `type` attributes); fixtures in `test/valid/` (catalog page, index page, forms page) must lint clean.

### Changed

- `htmlacademy/attribute-allowed-values.input.type` whitelist expanded to the full set of HTML5 `<input type>` values (was 11 entries, now 22). The previous list was effectively a no-op because the rule itself was broken upstream; now that the rule works, the policy is to allow every valid HTML5 input type and rely on other rules for narrower constraints.
- `htmlacademy/a-target-rel`: the plugin rule now requires `rel="noreferrer"` (which per the HTML spec implies `noopener`). Still disabled by default in this config because modern browsers add `noopener` automatically for `target="_blank"` since 2020; enable it when explicit `rel="noreferrer"` in source is preferred.
- `htmlacademy/no-px-size`: now also covers `<video>` and `<iframe>` (was `<img>` and `<svg>` only).
- `htmlacademy/charset-position`: fixed so it actually requires the first `<head>` child to be `<meta charset>`; previously any first `<meta>` (e.g. `<meta name="viewport">`) passed silently.
- `htmlacademy/aria-label-misuse`: `aria-label` on `<svg role="img">` no longer flagged — content SVG legitimately uses this pattern. See [linthtml-rules-htmlacademy#79](https://github.com/htmlacademy/linthtml-rules-htmlacademy/issues/79).
- Fixture `test/valid/*.html` updated to follow the new `attr-order` (`href` before `rel`, `src` before `type`) and the new `svg-role-img` (decorative `<svg>` now carries `aria-hidden="true"`).

### Known limitations

- Base linthtml `id-no-dup` rule is disabled because of an upstream bug ([linthtml/linthtml#469](https://github.com/linthtml/linthtml/issues/469), open since 2022). The plugin rule `htmlacademy/id-no-dup` is enabled as a working replacement, so duplicate ids are still caught.

### Migration notes

- Replace any usage of `htmlacademy/img-svg-req-dimensions` with `htmlacademy/replaced-elements-req-dimensions` in project-level overrides.
- If your `.linthtmlrc` points at `node_modules/linthtml-config-htmlacademy/index.js` directly, switch to `"extends": "linthtml-config-htmlacademy"` or to the new `linthtml.config.js` path.

## 1.0.25
Fixes `req-webp-in-picture` to not check `<picture>` if all `<source>` have attribute `type="image/svg+xml"`.

## 1.0.24
- Adds a `req-tags-presence` rule that requires the specified tags on the page.
- Adds a `req-preload-font` rule that requires the `preload` value for the font.
- Adds a `req-webp-in-picture` rule that requires `webp` in `<picture>`
- Adds a `no-class-in-container` rule that checks the `class` attribute for child elements inside the specified container.

```json
{
  "htmlacademy/req-tags-presence": [ true, ["header", "nav", "main", "section", "h1", "footer"]],
  "htmlacademy/req-preload-font": true,
  "htmlacademy/req-webp-in-picture": true,
  "htmlacademy/no-class-in-container": [true, {
    "containers": ["content"],
    "ignore": {
      "tags": ["h1", "p"],
      "classes": ["content__title"]
    }
  }]
}
```

## 1.0.23
Update dependencies. Adds a `tag-forbid-attr` rule that disallows the use of specified attributes on the specified tag.

## 1.0.22
Added a new rule [htmlacademy/req-source-width-height](https://github.com/htmlacademy/linthtml-rules-htmlacademy/blob/main/rules/req-source-width-height/README.md) that requires the `width` and `height` attributes of `<source>`, inside `<picture>`.

```html
<picture>
  <source srcset="images/image-tablet.jpg" width="768" height="480" media="(min-width: 768px)">
  <img src="images/image-mobile.jpg" width="320" height="148" alt="">
</picture>
```

## 1.0.21
Clarifies the [no-blocking-script](rules/no-blocking-script/README.md) rule for the `<script>` tag. You can now add modules to `<head>`.

```html
<html lang="ru">
<head>
  <script src="app.js" type="module"></script>
</head>
<body>…</body>
</html>
```

## 1.0.20
Updates the @linthtml/linthtml to the latest version

## 1.0.19
Added a new rule [htmlacademy/req-mailto](https://github.com/htmlacademy/linthtml-rules-htmlacademy/blob/main/rules/req-mailto/README.md), which requires `mailto:` for email-text links.
```json
{
  "htmlacademy/req-mailto": true
}
```

```html
<a href="mailto:example@example.com">example@example.com</a>
```


## 1.0.18
Added a new rule [htmlacademy/req-stylesheet-link](https://github.com/htmlacademy/linthtml-rules-htmlacademy/blob/main/rules/req-stylesheet-link/README.md) that checks for a link tag with the `rel="stylesheet"` attribute inside the head tag.
```json
{
  "htmlacademy/req-stylesheet-link": true
}
```

```html
<head>
  <link rel="stylesheet" href="styles/style.css">
</head>
```

## 1.0.17
- Excludes the `<input type="submit">` check from the [input-req-label](rules/input-req-label/README.md) rule.
- Adds `ignore` option for [tag-req-attr](rules/tag-req-attr/README.md)
```js
'input': [
  {
    name: 'name',
    ignore: {
      'type': 'submit'
    }
  },
],
```

## 1.0.16
Fix `htmlacademy/attr-req-value` rule

### Exceptions
A single `<option>` in `<select>` may have an empty value for the `value` attribute if it is selected by default.

The following pattern is **not** considered a problem:

```html
<label for="fruits">Fruits</label>
<select id="fruits" name="fruits" required>
  <option value="">Select...</option>
  <option value="banana">Banana</option>
  <option value="apple">Apple</option>
</select>
```

## 1.0.15
Added `htmlacademy/space-between-comments`
```js
rules: {
  'htmlacademy/space-between-comments': [true, 'space' | 'no-space]
}
```

This rule checks for spaces at the beginning and end of the comment block.

## Options

`string`: `"space"|"no-space"`

## Value `space`
If a comment has spaces at both the beginning and end of the comment block, it is compliant.

The following patterns are considered problematic:
```html
<!-- Comment-->
<!--Comment -->
<!--Comment-->
```

The following patterns are **not** considered problems:
```html
<!-- Comment -->
```

## Value `no-space`
If a comment has **no** spaces at both the beginning and end of the comment block, it is compliant.

The following patterns are considered problematic:
```html
<!-- Comment-->
<!--Comment -->
<!-- Comment -->
```

The following patterns are **not** considered problems:
```html
<!--Comment-->
```

## 1.0.14
`attr-req-value` can now accept regex for ignore

```js
'htmlacademy/attr-req-value': [
  true,
  {
    ignore: ['/^data/']
  }
],
```

## 1.0.13
Disabled `attr-new-line` rule

## 1.0.12
Fixed regex in `attr-name-ignore-regex`

## 1.0.11
Disabled `link-min-length-4`

This rule triggered for a good example
```html
<a class="logo" href="markup-4-index.html">
  <img src="img/logo.svg" width="63" height="52" alt="Логотип сайта гостиницы для котов и кошек Котейка">
</a>
```

## 1.0.10
Fixed `req-charset-utf` rule

## 1.0.9
- Update linthtml-rules-htmlacademy
- Sorted htmlacademy rules
- Added so many new rules:
  - `htmlacademy/attr-req-value`
  - `htmlacademy/aria-label-misuse`
  - `htmlacademy/attr-delimiter`
  - `htmlacademy/attribute-allowed-values`
  - `htmlacademy/ban-url-spaces`
  - `htmlacademy/id-no-dup`
  - `htmlacademy/input-req-label`
  - `htmlacademy/link-req-content`
  - `htmlacademy/no-blocking-script`
  - `htmlacademy/no-px-size`
  - `htmlacademy/req-head-styles`
  - `htmlacademy/req-meta-viewport`
  - `htmlacademy/req-single-styles`
  - `htmlacademy/tag-name-lowercase`
  - `htmlacademy/tag-self-close`
- Disabled rules:
  - `'class-style'`
  - `'spec-char-escape'`
  - `tag-self-close`
  - `input-req-label`
- Enabled rules:
  - `'id-style' : [true, 'dash'],`
  - `'input-req-label'`
  - `'label-no-enc-textarea-or-select'`
  - `'no-surrounding-whitespace'`
  - `'link-min-length-4'`
  - `'tag-self-close' : [true, 'never']`
- Adds:
```js
{
  'tag-req-attr': [
    true,
    {
      'input': [
        {
          name: 'name'
        },
      ],
      'select': [
        {
          name: 'name'
        },
      ],
      'textarea': [
        {
          name: 'name'
        },
      ],
      'time': [
        {
          name: 'datetime'
        },
      ],
      'source': [
        {
          name: 'type'
        },
      ],
      'button': [
        {
          name: 'type'
        },
      ],
      'a': [
        {
          name: 'href'
        },
      ],
    }
  ]
}
```

## 1.0.8
- Update linthtml-rules-htmlacademy
- Adds new rule `htmlacademy/section-has-heading`
```html
 <section>
  <h2>title</h2>
</section>

 <section>
   <div>
      <h2>title</h2>
   </div>
</section>
```

## 1.0.7
- Update linthtml-rules-htmlacademy
- Adds htmlacademy rules
- Remove bem for id
- Remove `indent-style`
- Remove `line-no-trailing-whitespace`
- Remove `link-req-noopener`
- Adds `spec-char-escape`
- Fixed `head-meta-charset`

## 1.0.6
- Updated linthtml-rules-htmlacademy 1.0.2
- Removed `htmlacademy/attr-value-style`

## 1.0.5
- Updated dependencies to latest versions
- Added linthtml-rules-htmlacademy

## 1.0.3
Updated dependencies

## 1.0.2
Allowed empty `alt=""`

## 1.0.1
- Updated rules to linthtml@0.7.2

New rules:
- Require 4 attributes on `<img>`
    ```json
    {
      "tag-req-attr": [true, {
          "img": [
              {"name": "src"},
              {"name": "alt"},
              {"name": "width"},
              {"name": "height"}
          ]}
      ]
    }
    ```
- Removed BEM requirement as BEM can vary significantly


## 1.0.0
- Added test pages and tests
- Added rules for linthtml@0.6.0
