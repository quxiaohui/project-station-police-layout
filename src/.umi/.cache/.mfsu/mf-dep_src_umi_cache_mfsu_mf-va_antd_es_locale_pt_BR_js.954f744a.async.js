(self["webpackChunkant_design_pro"] = self["webpackChunkant_design_pro"] || []).push([["mf-dep_src_umi_cache_mfsu_mf-va_antd_es_locale_pt_BR_js"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/antd/es/calendar/locale/pt_BR.js":
/*!*******************************************************!*\
  !*** ./node_modules/antd/es/calendar/locale/pt_BR.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_picker_locale_pt_BR__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../date-picker/locale/pt_BR */ "./node_modules/antd/es/date-picker/locale/pt_BR.js");

/* harmony default export */ __webpack_exports__["default"] = (_date_picker_locale_pt_BR__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./node_modules/antd/es/date-picker/locale/pt_BR.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/es/date-picker/locale/pt_BR.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var rc_picker_es_locale_pt_BR__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-picker/es/locale/pt_BR */ "./node_modules/rc-picker/es/locale/pt_BR.js");
/* harmony import */ var _time_picker_locale_pt_BR__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../time-picker/locale/pt_BR */ "./node_modules/antd/es/time-picker/locale/pt_BR.js");



// Merge into a locale object
var locale = {
  lang: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    placeholder: 'Selecionar data',
    rangePlaceholder: ['Data inicial', 'Data final']
  }, rc_picker_es_locale_pt_BR__WEBPACK_IMPORTED_MODULE_1__.default),
  timePickerLocale: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, _time_picker_locale_pt_BR__WEBPACK_IMPORTED_MODULE_2__.default)
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
/* harmony default export */ __webpack_exports__["default"] = (locale);

/***/ }),

/***/ "./node_modules/antd/es/locale/pt_BR.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/es/locale/pt_BR.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rc_pagination_es_locale_pt_BR__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rc-pagination/es/locale/pt_BR */ "./node_modules/rc-pagination/es/locale/pt_BR.js");
/* harmony import */ var _calendar_locale_pt_BR__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../calendar/locale/pt_BR */ "./node_modules/antd/es/calendar/locale/pt_BR.js");
/* harmony import */ var _date_picker_locale_pt_BR__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../date-picker/locale/pt_BR */ "./node_modules/antd/es/date-picker/locale/pt_BR.js");
/* harmony import */ var _time_picker_locale_pt_BR__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../time-picker/locale/pt_BR */ "./node_modules/antd/es/time-picker/locale/pt_BR.js");
/* eslint-disable no-template-curly-in-string */




var typeTemplate = '${label} não é um ${type} válido';
var localeValues = {
  locale: 'pt-br',
  Pagination: rc_pagination_es_locale_pt_BR__WEBPACK_IMPORTED_MODULE_0__.default,
  DatePicker: _date_picker_locale_pt_BR__WEBPACK_IMPORTED_MODULE_1__.default,
  TimePicker: _time_picker_locale_pt_BR__WEBPACK_IMPORTED_MODULE_2__.default,
  Calendar: _calendar_locale_pt_BR__WEBPACK_IMPORTED_MODULE_3__.default,
  global: {
    placeholder: 'Por favor escolha'
  },
  Table: {
    filterTitle: 'Menu de Filtro',
    filterConfirm: 'OK',
    filterReset: 'Resetar',
    filterEmptyText: 'Sem filtros',
    filterCheckall: 'Selecionar todos os items',
    emptyText: 'Sem conteúdo',
    selectAll: 'Selecionar página atual',
    selectInvert: 'Inverter seleção',
    selectNone: 'Apagar todo o conteúdo',
    selectionAll: 'Selecionar todo o conteúdo',
    sortTitle: 'Ordenar título',
    expand: 'Expandir linha',
    collapse: 'Colapsar linha',
    triggerDesc: 'Clique organiza por descendente',
    triggerAsc: 'Clique organiza por ascendente',
    cancelSort: 'Clique para cancelar organização'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Cancelar',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Cancelar'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Procurar',
    itemUnit: 'item',
    itemsUnit: 'items',
    remove: 'Remover',
    selectCurrent: 'Selecionar página atual',
    removeCurrent: 'Remover página atual',
    selectAll: 'Selecionar todos',
    removeAll: 'Remover todos',
    selectInvert: 'Inverter seleção atual'
  },
  Upload: {
    uploading: 'Enviando...',
    removeFile: 'Remover arquivo',
    uploadError: 'Erro no envio',
    previewFile: 'Visualizar arquivo',
    downloadFile: 'Baixar arquivo'
  },
  Empty: {
    description: 'Não há dados'
  },
  Icon: {
    icon: 'ícone'
  },
  Text: {
    edit: 'editar',
    copy: 'copiar',
    copied: 'copiado',
    expand: 'expandir'
  },
  PageHeader: {
    back: 'Retornar'
  },
  Form: {
    optional: '(opcional)',
    defaultValidateMessages: {
      "default": 'Erro ${label} na validação de campo',
      required: 'Por favor, insira ${label}',
      "enum": '${label} deve ser um dos seguinte: [${enum}]',
      whitespace: '${label} não pode ser um carácter vazio',
      date: {
        format: ' O formato de data ${label} é inválido',
        parse: '${label} não pode ser convertido para uma data',
        invalid: '${label} é uma data inválida'
      },
      types: {
        string: typeTemplate,
        method: typeTemplate,
        array: typeTemplate,
        object: typeTemplate,
        number: typeTemplate,
        date: typeTemplate,
        "boolean": typeTemplate,
        integer: typeTemplate,
        "float": typeTemplate,
        regexp: typeTemplate,
        email: typeTemplate,
        url: typeTemplate,
        hex: typeTemplate
      },
      string: {
        len: '${label} deve possuir ${len} caracteres',
        min: '${label} deve possuir ao menos ${min} caracteres',
        max: '${label} deve possuir no máximo ${max} caracteres',
        range: '${label} deve possuir entre ${min} e ${max} caracteres'
      },
      number: {
        len: '${label} deve ser igual à ${len}',
        min: 'O valor mínimo de ${label} é ${min}',
        max: 'O valor máximo de ${label} é ${max}',
        range: '${label} deve estar entre ${min} e ${max}'
      },
      array: {
        len: 'Deve ser ${len} ${label}',
        min: 'No mínimo ${min} ${label}',
        max: 'No máximo ${max} ${label}',
        range: 'A quantidade de ${label} deve estar entre ${min} e ${max}'
      },
      pattern: {
        mismatch: '${label} não se encaixa no padrão ${pattern}'
      }
    }
  },
  Image: {
    preview: 'Pré-visualização'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (localeValues);

/***/ }),

/***/ "./node_modules/antd/es/time-picker/locale/pt_BR.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/es/time-picker/locale/pt_BR.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var locale = {
  placeholder: 'Hora'
};
/* harmony default export */ __webpack_exports__["default"] = (locale);

/***/ }),

/***/ "./node_modules/rc-pagination/es/locale/pt_BR.js":
/*!*******************************************************!*\
  !*** ./node_modules/rc-pagination/es/locale/pt_BR.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // Options.jsx
  items_per_page: '/ página',
  jump_to: 'Vá até',
  jump_to_confirm: 'confirme',
  page: 'Página',
  // Pagination.jsx
  prev_page: 'Página anterior',
  next_page: 'Próxima página',
  prev_5: '5 páginas anteriores',
  next_5: '5 próximas páginas',
  prev_3: '3 páginas anteriores',
  next_3: '3 próximas páginas',
  page_size: 'tamanho da página'
});

/***/ }),

/***/ "./node_modules/rc-picker/es/locale/pt_BR.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-picker/es/locale/pt_BR.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var locale = {
  locale: 'pt_BR',
  today: 'Hoje',
  now: 'Agora',
  backToToday: 'Voltar para hoje',
  ok: 'OK',
  clear: 'Limpar',
  month: 'Mês',
  year: 'Ano',
  timeSelect: 'Selecionar hora',
  dateSelect: 'Selecionar data',
  monthSelect: 'Escolher mês',
  yearSelect: 'Escolher ano',
  decadeSelect: 'Escolher década',
  yearFormat: 'YYYY',
  dateFormat: 'D/M/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'D/M/YYYY HH:mm:ss',
  monthBeforeYear: false,
  previousMonth: 'Mês anterior (PageUp)',
  nextMonth: 'Próximo mês (PageDown)',
  previousYear: 'Ano anterior (Control + esquerda)',
  nextYear: 'Próximo ano (Control + direita)',
  previousDecade: 'Década anterior',
  nextDecade: 'Próxima década',
  previousCentury: 'Século anterior',
  nextCentury: 'Próximo século',
  shortWeekDays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  shortMonths: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
};
/* harmony default export */ __webpack_exports__["default"] = (locale);

/***/ }),

/***/ "./src/.umi/.cache/.mfsu/mf-va_antd_es_locale_pt_BR.js":
/*!*************************************************************!*\
  !*** ./src/.umi/.cache/.mfsu/mf-va_antd_es_locale_pt_BR.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_antd_es_locale_pt_BR__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/antd/es/locale/pt_BR */ "./node_modules/antd/es/locale/pt_BR.js");

/* harmony default export */ __webpack_exports__["default"] = (_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_antd_es_locale_pt_BR__WEBPACK_IMPORTED_MODULE_0__.default);


/***/ })

}]);