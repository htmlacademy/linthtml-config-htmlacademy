# linthtml-config-htmlacademy
> Это стандартный конфигурационный файл для linthtml от [HTML Academy](https://htmlacademy.ru/).

## Установка

```bash
npm install linthtml-config-htmlacademy -D
```

## Использование

Если вы установили `linthtml-config-htmlacademy` локально в свой проект, то просто примените его в конфигурационном файле `.linthtml` вашего проекта:

```json
{
  "extends": "linthtml-config-htmlacademy"
}
```

### Расширение конфига

Просто добавьте ключ `"rules"` в ваш конфиг после `"extends": "linthtml-config-htmlacademy"`, а затем добавьте туда свои правила.

Например, если вы хотите изменить максимальную длину `line-max-len`, то нужно:

```json
{
  "extends": "linthtml-config-htmlacademy",
  "rules": {
    "line-max-len": [
      true,
      120
    ]
  }
}
```
