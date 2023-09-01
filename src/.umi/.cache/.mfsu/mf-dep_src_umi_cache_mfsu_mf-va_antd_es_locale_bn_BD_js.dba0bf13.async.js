(self["webpackChunkant_design_pro"] = self["webpackChunkant_design_pro"] || []).push([["mf-dep_src_umi_cache_mfsu_mf-va_antd_es_locale_bn_BD_js"],{

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

/***/ "./node_modules/antd/es/calendar/locale/bn_BD.js":
/*!*******************************************************!*\
  !*** ./node_modules/antd/es/calendar/locale/bn_BD.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_picker_locale_bn_BD__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../date-picker/locale/bn_BD */ "./node_modules/antd/es/date-picker/locale/bn_BD.js");

/* harmony default export */ __webpack_exports__["default"] = (_date_picker_locale_bn_BD__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./node_modules/antd/es/date-picker/locale/bn_BD.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/es/date-picker/locale/bn_BD.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var rc_picker_es_locale_bn_BD__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-picker/es/locale/bn_BD */ "./node_modules/rc-picker/es/locale/bn_BD.js");
/* harmony import */ var _time_picker_locale_bn_BD__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../time-picker/locale/bn_BD */ "./node_modules/antd/es/time-picker/locale/bn_BD.js");



// Merge into a locale object
var locale = {
  lang: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    placeholder: 'তারিখ নির্বাচন',
    yearPlaceholder: 'বছর নির্বাচন',
    quarterPlaceholder: 'কোয়ার্টার নির্বাচন',
    monthPlaceholder: 'মাস নির্বাচন',
    weekPlaceholder: 'সপ্তাহ নির্বাচন',
    rangePlaceholder: ['শুরুর তারিখ', 'শেষ তারিখ'],
    rangeYearPlaceholder: ['শুরুর বছর', 'শেষ বছর'],
    rangeMonthPlaceholder: ['শুরুর মাস', 'শেষ মাস'],
    rangeWeekPlaceholder: ['শুরুর সপ্তাহ', 'শেষ সপ্তাহ']
  }, rc_picker_es_locale_bn_BD__WEBPACK_IMPORTED_MODULE_1__.default),
  timePickerLocale: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, _time_picker_locale_bn_BD__WEBPACK_IMPORTED_MODULE_2__.default)
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
/* harmony default export */ __webpack_exports__["default"] = (locale);

/***/ }),

/***/ "./node_modules/antd/es/locale/bn_BD.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/es/locale/bn_BD.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rc_pagination_es_locale_bn_BD__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rc-pagination/es/locale/bn_BD */ "./node_modules/rc-pagination/es/locale/bn_BD.js");
/* harmony import */ var _calendar_locale_bn_BD__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../calendar/locale/bn_BD */ "./node_modules/antd/es/calendar/locale/bn_BD.js");
/* harmony import */ var _date_picker_locale_bn_BD__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../date-picker/locale/bn_BD */ "./node_modules/antd/es/date-picker/locale/bn_BD.js");
/* harmony import */ var _time_picker_locale_bn_BD__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../time-picker/locale/bn_BD */ "./node_modules/antd/es/time-picker/locale/bn_BD.js");
/* eslint-disable no-template-curly-in-string */




var typeTemplate = '${label} টি সঠিক ${type} নয়।';
var localeValues = {
  locale: 'bn-bd',
  Pagination: rc_pagination_es_locale_bn_BD__WEBPACK_IMPORTED_MODULE_0__.default,
  DatePicker: _date_picker_locale_bn_BD__WEBPACK_IMPORTED_MODULE_1__.default,
  TimePicker: _time_picker_locale_bn_BD__WEBPACK_IMPORTED_MODULE_2__.default,
  Calendar: _calendar_locale_bn_BD__WEBPACK_IMPORTED_MODULE_3__.default,
  global: {
    placeholder: 'অনুগ্রহ করে নির্বাচন করুন'
  },
  Table: {
    filterTitle: 'ফিল্টার মেনু',
    filterConfirm: 'ঠিক',
    filterReset: 'রিসেট',
    filterEmptyText: 'ফিল্টার নেই',
    emptyText: 'কোনও ডেটা নেই',
    selectAll: 'বর্তমান পৃষ্ঠা নির্বাচন করুন',
    selectInvert: 'বর্তমান পৃষ্ঠাটি উল্টে দিন',
    selectNone: 'সমস্ত ডেটা সাফ করুন',
    selectionAll: 'সমস্ত ডেটা নির্বাচন করুন',
    sortTitle: 'সাজান',
    expand: 'সারি প্রসারিত করুন',
    collapse: 'সারি সঙ্কুচিত করুন',
    triggerDesc: 'অবতরণকে সাজানোর জন্য ক্লিক করুন',
    triggerAsc: 'আরোহী বাছাই করতে ক্লিক করুন',
    cancelSort: 'বাছাই বাতিল করতে ক্লিক করুন'
  },
  Modal: {
    okText: 'ঠিক',
    cancelText: 'বাতিল',
    justOkText: 'ঠিক'
  },
  Popconfirm: {
    okText: 'ঠিক',
    cancelText: 'বাতিল'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'এখানে অনুসন্ধান',
    itemUnit: 'আইটেম',
    itemsUnit: 'আইটেমসমূহ',
    remove: 'অপসারণ',
    selectCurrent: 'বর্তমান পৃষ্ঠা নির্বাচন করুন',
    removeCurrent: 'বর্তমান পৃষ্ঠাটি সরান',
    selectAll: 'সমস্ত ডেটা নির্বাচন করুন',
    removeAll: 'সমস্ত ডেটা সরান',
    selectInvert: 'বর্তমান পৃষ্ঠাটি উল্টে দিন'
  },
  Upload: {
    uploading: 'আপলোড হচ্ছে ...',
    removeFile: 'ফাইল সরান',
    uploadError: 'আপলোডে সমস্যা',
    previewFile: 'ফাইলের পূর্বরূপ',
    downloadFile: 'ফাইল ডাউনলোড'
  },
  Empty: {
    description: 'কোনও ডেটা নেই'
  },
  Icon: {
    icon: 'আইকন'
  },
  Text: {
    edit: 'সম্পাদনা',
    copy: 'অনুলিপি',
    copied: 'অনুলিপি হয়েছে',
    expand: 'বিস্তৃত করা'
  },
  PageHeader: {
    back: 'পেছনে'
  },
  Form: {
    optional: '(ঐচ্ছিক)',
    defaultValidateMessages: {
      "default": '${label} এর ক্ষেত্রে ক্ষেত্র বৈধতা ত্রুটি',
      required: 'অনুগ্রহ করে ${label} প্রবেশ করান',
      "enum": '${label} অবশ্যই [${enum}] এর মধ্যে একটি হতে হবে',
      whitespace: '${label} ফাঁকা অক্ষর হতে পারে না',
      date: {
        format: '${label} তারিখ ফরমেট সঠিক নয়।',
        parse: '${label} তারিখে রূপান্তর করা যায় না',
        invalid: '${label} একটি সঠিক তারিখ না।'
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
        len: '${label} অবশ্যই ${len} অক্ষরের হতে হবে।',
        min: '${label} অবশ্যই অন্তত ${min} অক্ষরের হতে হবে।',
        max: '${label} অবশ্যই ${max} পর্যন্ত অক্ষরের হতে হবে।',
        range: '${label} অবশ্যই ${min}-${max} অক্ষরের এর মধ্যে হতে হবে।'
      },
      number: {
        len: '${label} অবশ্যই ${len} এর সমান হতে হবে',
        min: '${label} অবশ্যই সর্বনিম্ন ${min} হতে হবে',
        max: '${label} অবশ্যই সর্বোচ্চ ${max} হতে হবে',
        range: '${label} অবশ্যই ${min}-${max} এর মধ্যে হতে হবে'
      },
      array: {
        len: 'অবশ্যই ${len} ${label} হতে হবে',
        min: 'কমপক্ষে ${min} ${label}',
        max: 'সর্বাধিক হিসাবে ${max} ${label}',
        range: '${label} এর পরিমাণ অবশ্যই ${min}-${max} এর মধ্যে হতে হবে'
      },
      pattern: {
        mismatch: '${label} এই ${pattern} প্যাটার্নের সাথে মেলে না'
      }
    }
  },
  Image: {
    preview: 'পূর্বরূপ'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (localeValues);

/***/ }),

/***/ "./node_modules/antd/es/time-picker/locale/bn_BD.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/es/time-picker/locale/bn_BD.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var locale = {
  placeholder: 'সময় নির্বাচন',
  rangePlaceholder: ['সময় শুরু', 'শেষ সময়']
};
/* harmony default export */ __webpack_exports__["default"] = (locale);

/***/ }),

/***/ "./node_modules/rc-pagination/es/locale/bn_BD.js":
/*!*******************************************************!*\
  !*** ./node_modules/rc-pagination/es/locale/bn_BD.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // Options.jsx
  items_per_page: '/ পৃষ্ঠা',
  jump_to: 'যাও',
  jump_to_confirm: 'নিশ্চিত',
  page: 'পৃষ্ঠা',
  // Pagination.jsx
  prev_page: 'আগের পৃষ্ঠা',
  next_page: 'পরের পৃষ্ঠা',
  prev_5: 'পূর্ববর্তী ৫ পৃষ্ঠা',
  next_5: 'পরবর্তী ৫ পৃষ্ঠা',
  prev_3: 'পূর্ববর্তী ৩ পৃষ্ঠা',
  next_3: 'পরবর্তী ৩ পৃষ্ঠা',
  page_size: 'পাতার আকার'
});

/***/ }),

/***/ "./node_modules/rc-picker/es/locale/bn_BD.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-picker/es/locale/bn_BD.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var locale = {
  locale: 'bn_BD',
  today: 'আজ',
  now: 'এখন',
  backToToday: 'আজকে ফিরে চলুন',
  ok: 'ওকে',
  clear: 'পরিস্কার',
  month: 'মাস',
  year: 'বছর',
  timeSelect: 'সময় নির্বাচন',
  dateSelect: 'তারিখ নির্বাচন',
  weekSelect: 'সপ্তাহ পছন্দ করুন',
  monthSelect: 'মাস পছন্দ করুন',
  yearSelect: 'বছর পছন্দ করুন',
  decadeSelect: 'একটি দশক পছন্দ করুন',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'D/M/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'গত মাস (PageUp)',
  nextMonth: 'আগামী মাস (PageDown)',
  previousYear: 'গত বছর (Control + left)',
  nextYear: 'আগামী বছর (Control + right)',
  previousDecade: 'গত দশক',
  nextDecade: 'পরের দশক',
  previousCentury: 'গত শতাব্দী',
  nextCentury: 'পরের শতাব্দী'
};
/* harmony default export */ __webpack_exports__["default"] = (locale);

/***/ }),

/***/ "./src/.umi/.cache/.mfsu/mf-va_antd_es_locale_bn_BD.js":
/*!*************************************************************!*\
  !*** ./src/.umi/.cache/.mfsu/mf-va_antd_es_locale_bn_BD.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_antd_es_locale_bn_BD__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/antd/es/locale/bn_BD */ "./node_modules/antd/es/locale/bn_BD.js");

/* harmony default export */ __webpack_exports__["default"] = (_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_antd_es_locale_bn_BD__WEBPACK_IMPORTED_MODULE_0__.default);


/***/ })

}]);