# История изменений

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
