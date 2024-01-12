module.exports = {
  'id-class-ignore-regex': false,
  'line-max-len-ignore-regex': false,
  'spec-char-escape': false,
  'plugins': ['linthtml-rules-htmlacademy'],
  'attr-name-ignore-regex': 'viewBox|preserveAspectRatio',
  'rules': {
    'htmlacademy/space-between-comments': [true, 'space'],
    'htmlacademy/a-target-rel': true,
    'htmlacademy/aria-label-misuse': true,
    'htmlacademy/attr-delimiter': true,
    'htmlacademy/attr-req-value': [true, { ignore: ['alt'] }],
    'htmlacademy/attribute-allowed-values': [
      true, {
        'input': {
          attributes: {
            'type': {
              enum: [
                'text', 'email', 'password', 'radio', 'checkbox', 'file', 'number', 'color',
                'date', 'range', 'hidden'
              ],
            },
          },
        },
      },
    ],
    'htmlacademy/ban-url-spaces': true,
    'htmlacademy/charset-position': true,
    'htmlacademy/class-first': true,
    'htmlacademy/form-action-attribute': true,
    'htmlacademy/head-meta-charset': true,
    'htmlacademy/id-no-dup': true,
    'htmlacademy/img-svg-req-dimensions': true,
    'htmlacademy/input-req-label': true,
    'htmlacademy/link-req-content': true,
    'htmlacademy/no-blocking-script': true,
    'htmlacademy/no-double-br': true,
    'htmlacademy/no-px-size': true,
    'htmlacademy/req-charset-utf': true,
    'htmlacademy/req-head-styles': true,
    'htmlacademy/req-meta-viewport': true,
    'htmlacademy/req-single-styles': true,
    'htmlacademy/section-has-heading': true,
    'htmlacademy/tag-name-lowercase': [true, {
      ignore: ['clipPath', 'textPath', 'linearGradient', 'radialGradient']
    }],
    'htmlacademy/tag-self-close': true,

    'attr-bans': false,
    'attr-name-style': [true, 'dash'],
    'attr-new-line': false,
    'attr-no-dup': true,
    'attr-no-unsafe-char': true,
    'attr-order': false,
    'attr-quote-style': [true, 'double'],
    'attr-req-value': false,
    'attr-validate': true,
    'button-req-content': true,
    'class-no-dup': true,
    'class-style': false, // [true, 'dash'] для html-1 и [true, 'bem'] для html-2
    'doctype-first': true,
    'doctype-html5': true,
    'fieldset-contains-legend': true,
    'fig-req-figcaption': true,
    'focusable-tabindex-style': true,
    'head-req-title': true,
    'head-valid-content-model': true,
    'href-style': false,
    'html-req-lang': true,
    'html-valid-content-model': true,
    'id-class-no-ad': false,
    'id-class-style': false,
    'id-no-dup': false, // fixme правило сломано в последней версии линтера ждем https://github.com/linthtml/linthtml/issues/469
    'id-style': [true, 'dash'],
    'img-req-alt': [true, 'allownull'],
    'img-req-src': true,
    'indent-style': false,
    'indent-width': false,
    'input-btn-req-value-or-title': true,
    'input-radio-req-name': true,
    'input-req-label': false,
    'label-no-enc-textarea-or-select': true,
    'label-req-for': false,
    'lang-style': [true, 'case'],
    'line-end-style': false,
    'line-max-len': false,
    'line-no-trailing-whitespace': false,
    'no-surrounding-whitespace': true,
    'link-min-length-4': false,
    'spec-char-escape': false,
    'link-req-noopener': false,
    'table-req-caption': false,
    'table-req-header': false,
    'tag-bans': [true, 'style'],
    'tag-close': true,
    'tag-name-lowercase': false,
    'tag-name-match': true,
    'tag-req-attr': [
      true, {
        'input': [
          {
            name: 'name',
          },
        ], 'select': [
          {
            name: 'name',
          },
        ], 'textarea': [
          {
            name: 'name',
          },
        ], 'time': [
          {
            name: 'datetime',
          },
        ], 'source': [
          {
            name: 'type',
          },
        ], 'button': [
          {
            name: 'type',
          },
        ], 'a': [
          {
            name: 'href',
          },
        ],
      },
    ],
    'tag-self-close': false,
    'title-max-len': false,
    'title-no-dup': true,
  },
};
