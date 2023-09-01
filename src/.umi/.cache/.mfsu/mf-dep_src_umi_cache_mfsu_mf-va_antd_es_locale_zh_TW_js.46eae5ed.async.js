(self["webpackChunkant_design_pro"] = self["webpackChunkant_design_pro"] || []).push([["mf-dep_src_umi_cache_mfsu_mf-va_antd_es_locale_zh_TW_js"],{

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

/***/ "./node_modules/antd/es/calendar/locale/zh_TW.js":
/*!*******************************************************!*\
  !*** ./node_modules/antd/es/calendar/locale/zh_TW.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_picker_locale_zh_TW__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../date-picker/locale/zh_TW */ "./node_modules/antd/es/date-picker/locale/zh_TW.js");

/* harmony default export */ __webpack_exports__["default"] = (_date_picker_locale_zh_TW__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./node_modules/antd/es/date-picker/locale/zh_TW.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/es/date-picker/locale/zh_TW.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var rc_picker_es_locale_zh_TW__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-picker/es/locale/zh_TW */ "./node_modules/rc-picker/es/locale/zh_TW.js");
/* harmony import */ var _time_picker_locale_zh_TW__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../time-picker/locale/zh_TW */ "./node_modules/antd/es/time-picker/locale/zh_TW.js");



// 统一合并为完整的 Locale
var locale = {
  lang: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    placeholder: '請選擇日期',
    yearPlaceholder: '請選擇年份',
    quarterPlaceholder: '請選擇季度',
    monthPlaceholder: '請選擇月份',
    weekPlaceholder: '請選擇周',
    rangePlaceholder: ['開始日期', '結束日期'],
    rangeYearPlaceholder: ['開始年份', '結束年份'],
    rangeMonthPlaceholder: ['開始月份', '結束月份'],
    rangeQuarterPlaceholder: ['開始季度', '結束季度'],
    rangeWeekPlaceholder: ['開始周', '結束周']
  }, rc_picker_es_locale_zh_TW__WEBPACK_IMPORTED_MODULE_1__.default),
  timePickerLocale: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, _time_picker_locale_zh_TW__WEBPACK_IMPORTED_MODULE_2__.default)
};
locale.lang.ok = '確 定';
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
/* harmony default export */ __webpack_exports__["default"] = (locale);

/***/ }),

/***/ "./node_modules/antd/es/locale/zh_TW.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/es/locale/zh_TW.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rc_pagination_es_locale_zh_TW__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rc-pagination/es/locale/zh_TW */ "./node_modules/rc-pagination/es/locale/zh_TW.js");
/* harmony import */ var _calendar_locale_zh_TW__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../calendar/locale/zh_TW */ "./node_modules/antd/es/calendar/locale/zh_TW.js");
/* harmony import */ var _date_picker_locale_zh_TW__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../date-picker/locale/zh_TW */ "./node_modules/antd/es/date-picker/locale/zh_TW.js");
/* harmony import */ var _time_picker_locale_zh_TW__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../time-picker/locale/zh_TW */ "./node_modules/antd/es/time-picker/locale/zh_TW.js");
/* eslint-disable no-template-curly-in-string */




var typeTemplate = '${label}不是一個有效的${type}';
var localeValues = {
  locale: 'zh-tw',
  Pagination: rc_pagination_es_locale_zh_TW__WEBPACK_IMPORTED_MODULE_0__.default,
  DatePicker: _date_picker_locale_zh_TW__WEBPACK_IMPORTED_MODULE_1__.default,
  TimePicker: _time_picker_locale_zh_TW__WEBPACK_IMPORTED_MODULE_2__.default,
  Calendar: _calendar_locale_zh_TW__WEBPACK_IMPORTED_MODULE_3__.default,
  global: {
    placeholder: '請選擇'
  },
  Table: {
    filterTitle: '篩選器',
    filterConfirm: '確定',
    filterReset: '重置',
    filterEmptyText: '無篩選項',
    selectAll: '全部選取',
    selectInvert: '反向選取',
    selectNone: '清空所有',
    selectionAll: '全選所有',
    sortTitle: '排序',
    expand: '展開行',
    collapse: '關閉行',
    triggerDesc: '點擊降序',
    triggerAsc: '點擊升序',
    cancelSort: '取消排序'
  },
  Modal: {
    okText: '確定',
    cancelText: '取消',
    justOkText: '知道了'
  },
  Popconfirm: {
    okText: '確定',
    cancelText: '取消'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: '搜尋資料',
    itemUnit: '項目',
    itemsUnit: '項目',
    remove: '删除',
    selectCurrent: '全選當頁',
    removeCurrent: '删除當頁',
    selectAll: '全選所有',
    removeAll: '删除全部',
    selectInvert: '反選當頁'
  },
  Upload: {
    uploading: '正在上傳...',
    removeFile: '刪除檔案',
    uploadError: '上傳失敗',
    previewFile: '檔案預覽',
    downloadFile: '下载文件'
  },
  Empty: {
    description: '無此資料'
  },
  Icon: {
    icon: '圖標'
  },
  Text: {
    edit: '編輯',
    copy: '複製',
    copied: '複製成功',
    expand: '展開'
  },
  PageHeader: {
    back: '返回'
  },
  Form: {
    optional: '（可選）',
    defaultValidateMessages: {
      "default": '字段驗證錯誤${label}',
      required: '請輸入${label}',
      "enum": '${label}必須是其中一個[${enum}]',
      whitespace: '${label}不能為空字符',
      date: {
        format: '${label}日期格式無效',
        parse: '${label}不能轉換為日期',
        invalid: '${label}是一個無效日期'
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
        len: '${label}須為${len}個字符',
        min: '${label}最少${min}個字符',
        max: '${label}最多${max}個字符',
        range: '${label}須在${min}-${max}字符之間'
      },
      number: {
        len: '${label}必須等於${len}',
        min: '${label}最小值為${min}',
        max: '${label}最大值為${max}',
        range: '${label}須在${min}-${max}之間'
      },
      array: {
        len: '須為${len}個${label}',
        min: '最少${min}個${label}',
        max: '最多${max}個${label}',
        range: '${label}數量須在${min}-${max}之間'
      },
      pattern: {
        mismatch: '${label}與模式不匹配${pattern}'
      }
    }
  },
  Image: {
    preview: '預覽'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (localeValues);

/***/ }),

/***/ "./node_modules/antd/es/time-picker/locale/zh_TW.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/es/time-picker/locale/zh_TW.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var locale = {
  placeholder: '請選擇時間'
};
/* harmony default export */ __webpack_exports__["default"] = (locale);

/***/ }),

/***/ "./node_modules/rc-pagination/es/locale/zh_TW.js":
/*!*******************************************************!*\
  !*** ./node_modules/rc-pagination/es/locale/zh_TW.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // Options.jsx
  items_per_page: '條/頁',
  jump_to: '跳至',
  jump_to_confirm: '確定',
  page: '頁',
  // Pagination.jsx
  prev_page: '上一頁',
  next_page: '下一頁',
  prev_5: '向前 5 頁',
  next_5: '向後 5 頁',
  prev_3: '向前 3 頁',
  next_3: '向後 3 頁',
  page_size: '頁碼'
});

/***/ }),

/***/ "./node_modules/rc-picker/es/locale/zh_TW.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-picker/es/locale/zh_TW.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var locale = {
  locale: 'zh_TW',
  today: '今天',
  now: '此刻',
  backToToday: '返回今天',
  ok: '確定',
  timeSelect: '選擇時間',
  dateSelect: '選擇日期',
  weekSelect: '選擇周',
  clear: '清除',
  month: '月',
  year: '年',
  previousMonth: '上個月 (翻頁上鍵)',
  nextMonth: '下個月 (翻頁下鍵)',
  monthSelect: '選擇月份',
  yearSelect: '選擇年份',
  decadeSelect: '選擇年代',
  yearFormat: 'YYYY年',
  dayFormat: 'D日',
  dateFormat: 'YYYY年M月D日',
  dateTimeFormat: 'YYYY年M月D日 HH時mm分ss秒',
  previousYear: '上一年 (Control鍵加左方向鍵)',
  nextYear: '下一年 (Control鍵加右方向鍵)',
  previousDecade: '上一年代',
  nextDecade: '下一年代',
  previousCentury: '上一世紀',
  nextCentury: '下一世紀'
};
/* harmony default export */ __webpack_exports__["default"] = (locale);

/***/ }),

/***/ "./src/.umi/.cache/.mfsu/mf-va_antd_es_locale_zh_TW.js":
/*!*************************************************************!*\
  !*** ./src/.umi/.cache/.mfsu/mf-va_antd_es_locale_zh_TW.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_antd_es_locale_zh_TW__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/antd/es/locale/zh_TW */ "./node_modules/antd/es/locale/zh_TW.js");

/* harmony default export */ __webpack_exports__["default"] = (_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_antd_es_locale_zh_TW__WEBPACK_IMPORTED_MODULE_0__.default);


/***/ })

}]);