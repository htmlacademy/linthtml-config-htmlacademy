# История изменений

## 1.0.3 
Обновляет зависимости

## 1.0.2
Разрешили использовать незаполненный `alt="""`

## 1.0.1
- Обновили правила до linthtml@0.7.2

Новые правила:
- Требуем у `<img>` указывать 4 атрибута
    ```js 
    tag-req-attr" : [true, {
        "img": [
            {"name": "src"},
            {"name": "alt"},
            {"name": "width"},
            {"name": "height"}
        ]}
    ]
    ```
- Убрали требование писать по БЭМ, так как БЭМ может быть слишком разным


## 1.0.0 
- Добавили страницы для тестов и сами тесты
- Добавили правила для linthtml@0.6.0