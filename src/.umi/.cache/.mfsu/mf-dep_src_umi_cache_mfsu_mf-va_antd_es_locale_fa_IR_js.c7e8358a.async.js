(self["webpackChunkant_design_pro"] = self["webpackChunkant_design_pro"] || []).push([["mf-dep_src_umi_cache_mfsu_mf-va_antd_es_locale_fa_IR_js"],{

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

/***/ "./node_modules/antd/es/calendar/locale/fa_IR.js":
/*!*******************************************************!*\
  !*** ./node_modules/antd/es/calendar/locale/fa_IR.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_picker_locale_fa_IR__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../date-picker/locale/fa_IR */ "./node_modules/antd/es/date-picker/locale/fa_IR.js");

/* harmony default export */ __webpack_exports__["default"] = (_date_picker_locale_fa_IR__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./node_modules/antd/es/date-picker/locale/fa_IR.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/es/date-picker/locale/fa_IR.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var rc_picker_es_locale_fa_IR__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-picker/es/locale/fa_IR */ "./node_modules/rc-picker/es/locale/fa_IR.js");
/* harmony import */ var _time_picker_locale_fa_IR__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../time-picker/locale/fa_IR */ "./node_modules/antd/es/time-picker/locale/fa_IR.js");



// Merge into a locale object
var locale = {
  lang: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    placeholder: 'انتخاب تاریخ',
    yearPlaceholder: 'انتخاب سال',
    quarterPlaceholder: 'انتخاب فصل',
    monthPlaceholder: 'انتخاب ماه',
    weekPlaceholder: 'انتخاب هفته',
    rangePlaceholder: ['تاریخ شروع', 'تاریخ پایان'],
    rangeYearPlaceholder: ['سال شروع', 'سال پایان'],
    rangeMonthPlaceholder: ['ماه شروع', 'ماه پایان'],
    rangeWeekPlaceholder: ['هفته شروع', 'هفته پایان']
  }, rc_picker_es_locale_fa_IR__WEBPACK_IMPORTED_MODULE_1__.default),
  timePickerLocale: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, _time_picker_locale_fa_IR__WEBPACK_IMPORTED_MODULE_2__.default)
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
/* harmony default export */ __webpack_exports__["default"] = (locale);

/***/ }),

/***/ "./node_modules/antd/es/locale/fa_IR.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/es/locale/fa_IR.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rc_pagination_es_locale_fa_IR__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rc-pagination/es/locale/fa_IR */ "./node_modules/rc-pagination/es/locale/fa_IR.js");
/* harmony import */ var _calendar_locale_fa_IR__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../calendar/locale/fa_IR */ "./node_modules/antd/es/calendar/locale/fa_IR.js");
/* harmony import */ var _date_picker_locale_fa_IR__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../date-picker/locale/fa_IR */ "./node_modules/antd/es/date-picker/locale/fa_IR.js");
/* harmony import */ var _time_picker_locale_fa_IR__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../time-picker/locale/fa_IR */ "./node_modules/antd/es/time-picker/locale/fa_IR.js");
/* eslint-disable no-template-curly-in-string */




var typeTemplate = '${label} از نوع ${type} معتبر نیست';
var localeValues = {
  locale: 'fa',
  Pagination: rc_pagination_es_locale_fa_IR__WEBPACK_IMPORTED_MODULE_0__.default,
  DatePicker: _date_picker_locale_fa_IR__WEBPACK_IMPORTED_MODULE_1__.default,
  TimePicker: _time_picker_locale_fa_IR__WEBPACK_IMPORTED_MODULE_2__.default,
  Calendar: _calendar_locale_fa_IR__WEBPACK_IMPORTED_MODULE_3__.default,
  global: {
    placeholder: 'لطفاً انتخاب کنید'
  },
  Table: {
    filterTitle: 'منوی فیلتر',
    filterConfirm: 'تایید',
    filterReset: 'پاک کردن',
    filterEmptyText: 'بدون فیلتر',
    emptyText: 'بدون داده',
    selectAll: 'انتخاب صفحه‌ی کنونی',
    selectInvert: 'معکوس کردن انتخاب‌ها در صفحه ی کنونی',
    selectNone: 'انتخاب هیچکدام',
    selectionAll: 'انتخاب همه داده‌ها',
    sortTitle: 'مرتب سازی',
    expand: 'باز شدن ردیف',
    collapse: 'بستن ردیف',
    triggerDesc: 'ترتیب نزولی',
    triggerAsc: 'ترتیب صعودی',
    cancelSort: 'لغوِ ترتیبِ داده شده'
  },
  Modal: {
    okText: 'تایید',
    cancelText: 'لغو',
    justOkText: 'تایید'
  },
  Popconfirm: {
    okText: 'تایید',
    cancelText: 'لغو'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'جستجو',
    itemUnit: 'عدد',
    itemsUnit: 'عدد',
    remove: 'حذف',
    selectCurrent: 'انتخاب صفحه فعلی',
    removeCurrent: 'پاک کردن انتخاب‌های صفحه فعلی',
    selectAll: 'انتخاب همه',
    removeAll: 'پاک کردن همه انتخاب‌ها',
    selectInvert: 'معکوس کردن انتخاب‌ها در صفحه ی کنونی'
  },
  Upload: {
    uploading: 'در حال آپلود...',
    removeFile: 'حذف فایل',
    uploadError: 'خطا در آپلود',
    previewFile: 'مشاهده‌ی فایل',
    downloadFile: 'دریافت فایل'
  },
  Empty: {
    description: 'داده‌ای موجود نیست'
  },
  Icon: {
    icon: 'آیکن'
  },
  Text: {
    edit: 'ویرایش',
    copy: 'کپی',
    copied: 'کپی شد',
    expand: 'توسعه'
  },
  PageHeader: {
    back: 'برگشت'
  },
  Form: {
    optional: '(اختیاری)',
    defaultValidateMessages: {
      "default": 'خطا در ${label}',
      required: 'فیلد ${label} اجباریست',
      "enum": '${label} باید یکی از [${enum}] باشد',
      whitespace: '${label} نمیتواند خالی باشد',
      date: {
        format: 'ساختار تاریخ در ${label} نامعتبر است',
        parse: '${label} قابل تبدیل به تاریخ نیست',
        invalid: '${label} تاریخی نا معتبر است'
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
        len: '${label} باید ${len} کاراکتر باشد',
        min: '${label} باید حداقل ${min} کاراکتر باشد',
        max: '${label} باید حداکثر ${max} کاراکتر باشد',
        range: '${label} باید بین ${min}-${max} کاراکتر باشد'
      },
      number: {
        len: '${label} باید برابر ${len}',
        min: '${label} حداقل میتواند ${min} باشد',
        max: '${label} حداکثر میتواند ${max} باشد',
        range: '${label} باید بین ${min}-${max} باشد'
      },
      array: {
        len: 'تعداد ${label} باید ${len} باشد.',
        min: 'تعداد ${label} حداقل باید ${min} باشد',
        max: 'تعداد ${label} حداکثر باید ${max} باشد',
        range: 'مقدار ${label} باید بین ${min}-${max} باشد'
      },
      pattern: {
        mismatch: 'الگوی ${label} با ${pattern} برابری نمی‌کند'
      }
    }
  },
  Image: {
    preview: 'نمایش'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (localeValues);

/***/ }),

/***/ "./node_modules/antd/es/time-picker/locale/fa_IR.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/es/time-picker/locale/fa_IR.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var locale = {
  placeholder: 'انتخاب زمان',
  rangePlaceholder: ['زمان شروع', 'زمان پایان']
};
/* harmony default export */ __webpack_exports__["default"] = (locale);

/***/ }),

/***/ "./node_modules/rc-pagination/es/locale/fa_IR.js":
/*!*******************************************************!*\
  !*** ./node_modules/rc-pagination/es/locale/fa_IR.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // Options.jsx
  items_per_page: '/ صفحه',
  jump_to: 'برو به',
  jump_to_confirm: 'تایید',
  page: '',
  // Pagination.jsx
  prev_page: 'صفحه قبلی',
  next_page: 'صفحه بعدی',
  prev_5: '۵ صفحه قبلی',
  next_5: '۵ صفحه بعدی',
  prev_3: '۳ صفحه قبلی',
  next_3: '۳ صفحه بعدی',
  page_size: 'اندازه صفحه'
});

/***/ }),

/***/ "./node_modules/rc-picker/es/locale/fa_IR.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-picker/es/locale/fa_IR.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var locale = {
  locale: 'fa_IR',
  today: 'امروز',
  now: 'اکنون',
  backToToday: 'بازگشت به روز',
  ok: 'باشه',
  clear: 'پاک کردن',
  month: 'ماه',
  year: 'سال',
  timeSelect: 'انتخاب زمان',
  dateSelect: 'انتخاب تاریخ',
  monthSelect: 'یک ماه را انتخاب کنید',
  yearSelect: 'یک سال را انتخاب کنید',
  decadeSelect: 'یک دهه را انتخاب کنید',
  yearFormat: 'YYYY',
  dateFormat: 'M/D/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'ماه قبل (PageUp)',
  nextMonth: 'ماه بعد (PageDown)',
  previousYear: 'سال قبل (Control + left)',
  nextYear: 'سال بعد (Control + right)',
  previousDecade: 'دهه قبل',
  nextDecade: 'دهه بعد',
  previousCentury: 'قرن قبل',
  nextCentury: 'قرن بعد'
};
/* harmony default export */ __webpack_exports__["default"] = (locale);

/***/ }),

/***/ "./src/.umi/.cache/.mfsu/mf-va_antd_es_locale_fa_IR.js":
/*!*************************************************************!*\
  !*** ./src/.umi/.cache/.mfsu/mf-va_antd_es_locale_fa_IR.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_antd_es_locale_fa_IR__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/antd/es/locale/fa_IR */ "./node_modules/antd/es/locale/fa_IR.js");

/* harmony default export */ __webpack_exports__["default"] = (_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_antd_es_locale_fa_IR__WEBPACK_IMPORTED_MODULE_0__.default);


/***/ })

}]);