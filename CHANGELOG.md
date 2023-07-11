# История изменений

## 1.0.9
- Update linthtml-rules-htmlacademy
- Adds new rule `htmlacademy/attr-req-value`: the attribute cannot be empty, except for the list from ignore

```js
{
  'htmlacademy/attr-req-value': [true, { ignore: ['alt']}]
}
```

```html
<button class="foo"></button>
<button disabled></button>
<img src="images/image.jpg" width="100" height="100" alt="">
```
- Disabled rules: 
  - `'class-style'`
  - `'spec-char-escape'`
- Enabled: 
  - `'id-style' : [true, 'dash'],`
  - `'input-req-label'`
  - `'label-no-enc-textarea-or-select'`
  - `'no-surrounding-whitespace'`
  - `'link-min-length-4'`
  - `'tag-self-close' : [true, 'never']`
- Adds:
```js
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
],
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
