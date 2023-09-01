(self["webpackChunkant_design_pro"] = self["webpackChunkant_design_pro"] || []).push([["mf-dep_src_umi_cache_mfsu_mf-va_antd_es_locale_id_ID_js"],{

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

/***/ "./node_modules/antd/es/calendar/locale/id_ID.js":
/*!*******************************************************!*\
  !*** ./node_modules/antd/es/calendar/locale/id_ID.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _date_picker_locale_id_ID__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../date-picker/locale/id_ID */ "./node_modules/antd/es/date-picker/locale/id_ID.js");

/* harmony default export */ __webpack_exports__["default"] = (_date_picker_locale_id_ID__WEBPACK_IMPORTED_MODULE_0__.default);

/***/ }),

/***/ "./node_modules/antd/es/date-picker/locale/id_ID.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/es/date-picker/locale/id_ID.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var rc_picker_es_locale_id_ID__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-picker/es/locale/id_ID */ "./node_modules/rc-picker/es/locale/id_ID.js");
/* harmony import */ var _time_picker_locale_id_ID__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../time-picker/locale/id_ID */ "./node_modules/antd/es/time-picker/locale/id_ID.js");



// Merge into a locale object
var locale = {
  lang: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    placeholder: 'Pilih tanggal',
    rangePlaceholder: ['Mulai tanggal', 'Tanggal akhir']
  }, rc_picker_es_locale_id_ID__WEBPACK_IMPORTED_MODULE_1__.default),
  timePickerLocale: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__.default)({}, _time_picker_locale_id_ID__WEBPACK_IMPORTED_MODULE_2__.default)
};
// All settings at:
// https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json
/* harmony default export */ __webpack_exports__["default"] = (locale);

/***/ }),

/***/ "./node_modules/antd/es/locale/id_ID.js":
/*!**********************************************!*\
  !*** ./node_modules/antd/es/locale/id_ID.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rc_pagination_es_locale_id_ID__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rc-pagination/es/locale/id_ID */ "./node_modules/rc-pagination/es/locale/id_ID.js");
/* harmony import */ var _calendar_locale_id_ID__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../calendar/locale/id_ID */ "./node_modules/antd/es/calendar/locale/id_ID.js");
/* harmony import */ var _date_picker_locale_id_ID__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../date-picker/locale/id_ID */ "./node_modules/antd/es/date-picker/locale/id_ID.js");
/* harmony import */ var _time_picker_locale_id_ID__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../time-picker/locale/id_ID */ "./node_modules/antd/es/time-picker/locale/id_ID.js");




var localeValues = {
  locale: 'id',
  Pagination: rc_pagination_es_locale_id_ID__WEBPACK_IMPORTED_MODULE_0__.default,
  DatePicker: _date_picker_locale_id_ID__WEBPACK_IMPORTED_MODULE_1__.default,
  TimePicker: _time_picker_locale_id_ID__WEBPACK_IMPORTED_MODULE_2__.default,
  Calendar: _calendar_locale_id_ID__WEBPACK_IMPORTED_MODULE_3__.default,
  Table: {
    filterTitle: 'Saring',
    filterConfirm: 'OK',
    filterReset: 'Hapus',
    selectAll: 'Pilih semua di halaman ini',
    selectInvert: 'Balikkan pilihan di halaman ini',
    sortTitle: 'Urutkan'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Batal',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Batal'
  },
  Transfer: {
    titles: ['', ''],
    searchPlaceholder: 'Cari',
    itemUnit: 'item',
    itemsUnit: 'item'
  },
  Upload: {
    uploading: 'Mengunggah...',
    removeFile: 'Hapus file',
    uploadError: 'Kesalahan pengunggahan',
    previewFile: 'File pratinjau',
    downloadFile: 'Unduh berkas'
  },
  Empty: {
    description: 'Tidak ada data'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (localeValues);

/***/ }),

/***/ "./node_modules/antd/es/time-picker/locale/id_ID.js":
/*!**********************************************************!*\
  !*** ./node_modules/antd/es/time-picker/locale/id_ID.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var locale = {
  placeholder: 'Pilih waktu'
};
/* harmony default export */ __webpack_exports__["default"] = (locale);

/***/ }),

/***/ "./node_modules/rc-pagination/es/locale/id_ID.js":
/*!*******************************************************!*\
  !*** ./node_modules/rc-pagination/es/locale/id_ID.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // Options.jsx
  items_per_page: '/ halaman',
  jump_to: 'Menuju',
  jump_to_confirm: 'konfirmasi',
  page: 'Halaman',
  // Pagination.jsx
  prev_page: 'Halaman Sebelumnya',
  next_page: 'Halaman Berikutnya',
  prev_5: '5 Halaman Sebelumnya',
  next_5: '5 Halaman Berikutnya',
  prev_3: '3 Halaman Sebelumnya',
  next_3: '3 Halaman Berikutnya',
  page_size: 'ukuran halaman'
});

/***/ }),

/***/ "./node_modules/rc-picker/es/locale/id_ID.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-picker/es/locale/id_ID.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var locale = {
  locale: 'id_ID',
  today: 'Hari ini',
  now: 'Sekarang',
  backToToday: 'Kembali ke hari ini',
  ok: 'Baik',
  clear: 'Bersih',
  month: 'Bulan',
  year: 'Tahun',
  timeSelect: 'pilih waktu',
  dateSelect: 'pilih tanggal',
  weekSelect: 'Pilih satu minggu',
  monthSelect: 'Pilih satu bulan',
  yearSelect: 'Pilih satu tahun',
  decadeSelect: 'Pilih satu dekade',
  yearFormat: 'YYYY',
  dateFormat: 'D/M/YYYY',
  dayFormat: 'D',
  dateTimeFormat: 'D/M/YYYY HH:mm:ss',
  monthBeforeYear: true,
  previousMonth: 'Bulan sebelumnya (PageUp)',
  nextMonth: 'Bulan selanjutnya (PageDown)',
  previousYear: 'Tahun lalu (Control + kiri)',
  nextYear: 'Tahun selanjutnya (Kontrol + kanan)',
  previousDecade: 'Dekade terakhir',
  nextDecade: 'Dekade berikutnya',
  previousCentury: 'Abad terakhir',
  nextCentury: 'Abad berikutnya'
};
/* harmony default export */ __webpack_exports__["default"] = (locale);

/***/ }),

/***/ "./src/.umi/.cache/.mfsu/mf-va_antd_es_locale_id_ID.js":
/*!*************************************************************!*\
  !*** ./src/.umi/.cache/.mfsu/mf-va_antd_es_locale_id_ID.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_antd_es_locale_id_ID__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/antd/es/locale/id_ID */ "./node_modules/antd/es/locale/id_ID.js");

/* harmony default export */ __webpack_exports__["default"] = (_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_antd_es_locale_id_ID__WEBPACK_IMPORTED_MODULE_0__.default);


/***/ })

}]);