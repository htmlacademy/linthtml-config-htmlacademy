# Changelog

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
- обновили linthtml-rules-htmlacademy 1.0.2
- удалили `htmlacademy/attr-value-style`

## 1.0.5
- Обновили зависимости до актуальных версий
- Добавили linthtml-rules-htmlacademy

## 1.0.3 
Обновляет зависимости

## 1.0.2
Разрешили использовать незаполненный `alt="""`

## 1.0.1
- Обновили правила до linthtml@0.7.2

Новые правила:
- Требуем у `<img>` указывать 4 атрибута
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
- Убрали требование писать по БЭМ, так как БЭМ может быть слишком разным


## 1.0.0 
- Добавили страницы для тестов и сами тесты
- Добавили правила для linthtml@0.6.0
