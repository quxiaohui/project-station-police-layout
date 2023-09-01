(self["webpackChunkant_design_pro"] = self["webpackChunkant_design_pro"] || []).push([["mf-dep_src_umi_core_umiExports_ts-src_umi_plugin-request_request_ts"],{

/***/ "./src/.umi/core/history.ts":
/*!**********************************!*\
  !*** ./src/.umi/core/history.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHistory": function() { return /* binding */ createHistory; },
/* harmony export */   "history": function() { return /* binding */ history; }
/* harmony export */ });
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@umijs/runtime */ "./node_modules/history-with-query/esm/history.js");
// @ts-nocheck

var options = {
  "basename": "/"
};

if (window.routerBase) {
  options.basename = window.routerBase;
} // remove initial history because of ssr


var history = ({"NODE_ENV":"development"}).__IS_SERVER ? null : (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_runtime__WEBPACK_IMPORTED_MODULE_0__.createBrowserHistory)(options);
var createHistory = function createHistory() {
  var hotReload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  if (!hotReload) {
    history = (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_runtime__WEBPACK_IMPORTED_MODULE_0__.createBrowserHistory)(options);
  }

  return history;
};


/***/ }),

/***/ "./src/.umi/core/plugin.ts":
/*!*********************************!*\
  !*** ./src/.umi/core/plugin.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "plugin": function() { return /* binding */ plugin; }
/* harmony export */ });
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@umijs/runtime */ "./node_modules/@umijs/runtime/dist/index.esm.js");
// @ts-nocheck

var plugin = new _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_runtime__WEBPACK_IMPORTED_MODULE_0__.Plugin({
  validKeys: ['modifyClientRenderOpts', 'patchRoutes', 'rootContainer', 'render', 'onRouteChange', '__mfsu', 'getInitialState', 'initialStateConfig', 'locale', 'layout', 'layoutActionRef', 'request']
});


/***/ }),

/***/ "./src/.umi/core/umiExports.ts":
/*!*************************************!*\
  !*** ./src/.umi/core/umiExports.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "history": function() { return /* reexport safe */ _history__WEBPACK_IMPORTED_MODULE_0__.history; },
/* harmony export */   "plugin": function() { return /* reexport safe */ _plugin__WEBPACK_IMPORTED_MODULE_1__.plugin; },
/* harmony export */   "Access": function() { return /* reexport safe */ _plugin_access_access__WEBPACK_IMPORTED_MODULE_2__.Access; },
/* harmony export */   "traverseModifyRoutes": function() { return /* reexport safe */ _plugin_access_access__WEBPACK_IMPORTED_MODULE_2__.traverseModifyRoutes; },
/* harmony export */   "useAccess": function() { return /* reexport safe */ _plugin_access_access__WEBPACK_IMPORTED_MODULE_2__.useAccess; },
/* harmony export */   "__PLUGIN_INITIAL_STATE": function() { return /* reexport safe */ _plugin_initial_state_exports__WEBPACK_IMPORTED_MODULE_3__.__PLUGIN_INITIAL_STATE; },
/* harmony export */   "FormattedDate": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.FormattedDate; },
/* harmony export */   "FormattedDateParts": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.FormattedDateParts; },
/* harmony export */   "FormattedDisplayName": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.FormattedDisplayName; },
/* harmony export */   "FormattedHTMLMessage": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.FormattedHTMLMessage; },
/* harmony export */   "FormattedList": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.FormattedList; },
/* harmony export */   "FormattedMessage": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.FormattedMessage; },
/* harmony export */   "FormattedNumber": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.FormattedNumber; },
/* harmony export */   "FormattedNumberParts": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.FormattedNumberParts; },
/* harmony export */   "FormattedPlural": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.FormattedPlural; },
/* harmony export */   "FormattedRelativeTime": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.FormattedRelativeTime; },
/* harmony export */   "FormattedTime": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.FormattedTime; },
/* harmony export */   "FormattedTimeParts": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.FormattedTimeParts; },
/* harmony export */   "IntlContext": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.IntlContext; },
/* harmony export */   "IntlProvider": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.IntlProvider; },
/* harmony export */   "RawIntlProvider": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.RawIntlProvider; },
/* harmony export */   "addLocale": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.addLocale; },
/* harmony export */   "createIntl": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.createIntl; },
/* harmony export */   "createIntlCache": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.createIntlCache; },
/* harmony export */   "defineMessages": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.defineMessages; },
/* harmony export */   "formatMessage": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.formatMessage; },
/* harmony export */   "getAllLocales": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.getAllLocales; },
/* harmony export */   "getDirection": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.getDirection; },
/* harmony export */   "getIntl": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.getIntl; },
/* harmony export */   "getLocale": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.getLocale; },
/* harmony export */   "injectIntl": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.injectIntl; },
/* harmony export */   "localeInfo": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.localeInfo; },
/* harmony export */   "setIntl": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.setIntl; },
/* harmony export */   "setLocale": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.setLocale; },
/* harmony export */   "useIntl": function() { return /* reexport safe */ _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__.useIntl; },
/* harmony export */   "SelectLang": function() { return /* reexport safe */ _plugin_locale_SelectLang__WEBPACK_IMPORTED_MODULE_5__.SelectLang; },
/* harmony export */   "useModel": function() { return /* reexport safe */ _plugin_model_useModel__WEBPACK_IMPORTED_MODULE_7__.useModel; },
/* harmony export */   "ErrorShowType": function() { return /* reexport safe */ _plugin_request_request__WEBPACK_IMPORTED_MODULE_8__.ErrorShowType; },
/* harmony export */   "UseRequestProvider": function() { return /* reexport safe */ _plugin_request_request__WEBPACK_IMPORTED_MODULE_8__.UseRequestProvider; },
/* harmony export */   "request": function() { return /* reexport safe */ _plugin_request_request__WEBPACK_IMPORTED_MODULE_8__.request; },
/* harmony export */   "useRequest": function() { return /* reexport safe */ _plugin_request_request__WEBPACK_IMPORTED_MODULE_8__.useRequest; },
/* harmony export */   "Helmet": function() { return /* reexport safe */ _plugin_helmet_exports__WEBPACK_IMPORTED_MODULE_9__.Helmet; }
/* harmony export */ });
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history */ "./src/.umi/core/history.ts");
/* harmony import */ var _plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./plugin */ "./src/.umi/core/plugin.ts");
/* harmony import */ var _plugin_access_access__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../plugin-access/access */ "./src/.umi/plugin-access/access.tsx");
/* harmony import */ var _plugin_initial_state_exports__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../plugin-initial-state/exports */ "./src/.umi/plugin-initial-state/exports.ts");
/* harmony import */ var _plugin_locale_localeExports__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../plugin-locale/localeExports */ "./src/.umi/plugin-locale/localeExports.ts");
/* harmony import */ var _plugin_locale_SelectLang__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../plugin-locale/SelectLang */ "./src/.umi/plugin-locale/SelectLang.tsx");
/* harmony import */ var _plugin_layout_layoutExports__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../plugin-layout/layoutExports */ "./src/.umi/plugin-layout/layoutExports.ts");
/* harmony import */ var _plugin_model_useModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../plugin-model/useModel */ "./src/.umi/plugin-model/useModel.tsx");
/* harmony import */ var _plugin_request_request__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../plugin-request/request */ "./src/.umi/plugin-request/request.ts");
/* harmony import */ var _plugin_helmet_exports__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../plugin-helmet/exports */ "./src/.umi/plugin-helmet/exports.ts");
// @ts-nocheck











/***/ }),

/***/ "./src/.umi/plugin-access/access.tsx":
/*!*******************************************!*\
  !*** ./src/.umi/plugin-access/access.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "traverseModifyRoutes": function() { return /* reexport safe */ _runtimeUtil__WEBPACK_IMPORTED_MODULE_2__.traverseModifyRoutes; },
/* harmony export */   "useAccess": function() { return /* binding */ useAccess; },
/* harmony export */   "Access": function() { return /* binding */ Access; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context */ "./src/.umi/plugin-access/context.ts");
/* harmony import */ var _runtimeUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./runtimeUtil */ "./src/.umi/plugin-access/runtimeUtil.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
// @ts-nocheck






var useAccess = function useAccess() {
  var access = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.default);
  return access;
};
var Access = function Access(props) {
  var accessible = props.accessible,
      fallback = props.fallback,
      children = props.children;

  if ( true && typeof accessible === 'function') {
    console.warn('[plugin-access]: provided "accessible" prop is a function named "' + accessible.name + '" instead of a boolean, maybe you need check it.');
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: accessible ? children : fallback
  }, void 0, false);
};

/***/ }),

/***/ "./src/.umi/plugin-access/context.ts":
/*!*******************************************!*\
  !*** ./src/.umi/plugin-access/context.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
// @ts-nocheck

var AccessContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
/* harmony default export */ __webpack_exports__["default"] = (AccessContext);

/***/ }),

/***/ "./src/.umi/plugin-access/runtimeUtil.ts":
/*!***********************************************!*\
  !*** ./src/.umi/plugin-access/runtimeUtil.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "traverseModifyRoutes": function() { return /* binding */ traverseModifyRoutes; }
/* harmony export */ });
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");


// @ts-nocheck
var oldChildrenPropsName = 'routes';
function traverseModifyRoutes(childrenList, access) {
  var resultChildrenList = [].concat(childrenList).map(function (resultRoute) {
    var childList = resultRoute.children || resultRoute[oldChildrenPropsName];

    if (childList && childList !== null && childList !== void 0 && childList.length) {
      return (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.default)({}, resultRoute), {}, (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.default)({
        children: childList === null || childList === void 0 ? void 0 : childList.map(function (route) {
          return (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.default)({}, route);
        })
      }, oldChildrenPropsName, childList === null || childList === void 0 ? void 0 : childList.map(function (route) {
        return (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.default)({}, route);
      })));
    }

    return resultRoute;
  });
  return resultChildrenList.map(function (currentRoute) {
    var currentRouteAccessible = typeof currentRoute.unaccessible === 'boolean' ? !currentRoute.unaccessible : true;

    if (currentRoute && false) {
      currentRoute.unaccessible = true;
    } // 判断路由是否有权限的具体代码


    if (currentRoute && currentRoute.access) {
      if (typeof currentRoute.access !== 'string') {
        throw new Error('[plugin-access]: "access" field set in "' + currentRoute.path + '" route should be a string.');
      }

      var accessProp = access[currentRoute.access]; // 如果是方法需要执行以下

      if (typeof accessProp === 'function') {
        currentRouteAccessible = accessProp(currentRoute);
      } else if (typeof accessProp === 'boolean') {
        // 不是方法就直接 copy
        currentRouteAccessible = accessProp;
      }

      currentRoute.unaccessible = !currentRouteAccessible;
    }

    var childList = currentRoute.children || currentRoute[oldChildrenPropsName]; // 筛选子路由

    if (childList && Array.isArray(childList) && childList.length) {
      if (!Array.isArray(childList)) {
        return currentRoute;
      } // 父亲没权限，理论上每个孩子都没权限
      // 可能有打平 的事情发生，所以都执行一下


      childList.forEach(function (childRoute) {
        childRoute.unaccessible = !currentRouteAccessible;
      });
      var finallyChildList = traverseModifyRoutes(childList, access); // 如果每个子节点都没有权限，那么自己也属于没有权限

      var isAllChildChildrenUnaccessible = Array.isArray(finallyChildList) && finallyChildList.every(function (route) {
        return route.unaccessible;
      });

      if (!currentRoute.unaccessible && isAllChildChildrenUnaccessible) {
        currentRoute.unaccessible = true;
      }

      if (finallyChildList && (finallyChildList === null || finallyChildList === void 0 ? void 0 : finallyChildList.length) > 0) {
        return (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.default)({}, currentRoute), {}, (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.default)({
          children: finallyChildList
        }, oldChildrenPropsName, finallyChildList));
      }

      delete currentRoute.routes;
      delete currentRoute.children;
    }

    return currentRoute;
  });
}

/***/ }),

/***/ "./src/.umi/plugin-helmet/exports.ts":
/*!*******************************************!*\
  !*** ./src/.umi/plugin-helmet/exports.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Helmet": function() { return /* reexport safe */ _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_react_helmet__WEBPACK_IMPORTED_MODULE_0__.Helmet; }
/* harmony export */ });
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_react_helmet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/react-helmet */ "./node_modules/react-helmet/es/Helmet.js");
// @ts-nocheck
// @ts-ignore


/***/ }),

/***/ "./src/.umi/plugin-initial-state/exports.ts":
/*!**************************************************!*\
  !*** ./src/.umi/plugin-initial-state/exports.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__PLUGIN_INITIAL_STATE": function() { return /* binding */ __PLUGIN_INITIAL_STATE; }
/* harmony export */ });
// @ts-nocheck
// @ts-ignore
var __PLUGIN_INITIAL_STATE = 1;

/***/ }),

/***/ "./src/.umi/plugin-layout/layoutExports.ts":
/*!*************************************************!*\
  !*** ./src/.umi/plugin-layout/layoutExports.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// @ts-nocheck
// avoid `export *` error
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./src/.umi/plugin-locale/SelectLang.tsx":
/*!***********************************************!*\
  !*** ./src/.umi/plugin-locale/SelectLang.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectLang": function() { return /* binding */ SelectLang; }
/* harmony export */ });
/* harmony import */ var antd_es_menu_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/menu/style */ "./node_modules/antd/es/menu/style/index.js");
/* harmony import */ var antd_es_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd/es/menu */ "./node_modules/antd/es/menu/index.js");
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var antd_es_config_provider_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/config-provider/style */ "./node_modules/antd/es/config-provider/style/index.js");
/* harmony import */ var antd_es_config_provider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd/es/config-provider */ "./node_modules/antd/es/config-provider/index.js");
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var antd_es_dropdown_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/es/dropdown/style */ "./node_modules/antd/es/dropdown/style/index.js");
/* harmony import */ var antd_es_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/es/dropdown */ "./node_modules/antd/es/dropdown/index.js");
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _localeExports__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./localeExports */ "./src/.umi/plugin-locale/localeExports.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");










var _excluded = ["overlayClassName"],
    _excluded2 = ["globalIconClassName", "postLocalesData", "onItemClick", "icon", "style", "reload"];

var _jsxFileName = "/Users/quxiaohui/Desktop/projects/react/project-station/src/.umi/plugin-locale/SelectLang.tsx",
    _this = undefined;

// @ts-nocheck





var HeaderDropdown = function HeaderDropdown(_ref) {
  var cls = _ref.overlayClassName,
      restProps = (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__.default)(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd_es_dropdown__WEBPACK_IMPORTED_MODULE_10__.default, (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.default)({
    overlayClassName: cls
  }, restProps), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 3
  }, _this);
};

var transformArrayToObject = function transformArrayToObject(allLangUIConfig) {
  return allLangUIConfig.reduce(function (obj, item) {
    if (!item.lang) {
      return obj;
    }

    return (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.default)({}, obj), {}, (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_3__.default)({}, item.lang, item));
  }, {});
};

var defaultLangUConfigMap = {
  'ar-EG': {
    lang: 'ar-EG',
    label: 'العربية',
    icon: '🇪🇬',
    title: 'لغة'
  },
  'az-AZ': {
    lang: 'az-AZ',
    label: 'Azərbaycan dili',
    icon: '🇦🇿',
    title: 'Dil'
  },
  'bg-BG': {
    lang: 'bg-BG',
    label: 'Български език',
    icon: '🇧🇬',
    title: 'език'
  },
  'bn-BD': {
    lang: 'bn-BD',
    label: 'বাংলা',
    icon: '🇧🇩',
    title: 'ভাষা'
  },
  'ca-ES': {
    lang: 'ca-ES',
    label: 'Catalá',
    icon: '🇨🇦',
    title: 'llengua'
  },
  'cs-CZ': {
    lang: 'cs-CZ',
    label: 'Čeština',
    icon: '🇨🇿',
    title: 'Jazyk'
  },
  'da-DK': {
    lang: 'da-DK',
    label: 'Dansk',
    icon: '🇩🇰',
    title: 'Sprog'
  },
  'de-DE': {
    lang: 'de-DE',
    label: 'Deutsch',
    icon: '🇩🇪',
    title: 'Sprache'
  },
  'el-GR': {
    lang: 'el-GR',
    label: 'Ελληνικά',
    icon: '🇬🇷',
    title: 'Γλώσσα'
  },
  'en-GB': {
    lang: 'en-GB',
    label: 'English',
    icon: '🇬🇧',
    title: 'Language'
  },
  'en-US': {
    lang: 'en-US',
    label: 'English',
    icon: '🇺🇸',
    title: 'Language'
  },
  'es-ES': {
    lang: 'es-ES',
    label: 'Español',
    icon: '🇪🇸',
    title: 'Idioma'
  },
  'et-EE': {
    lang: 'et-EE',
    label: 'Eesti',
    icon: '🇪🇪',
    title: 'Keel'
  },
  'fa-IR': {
    lang: 'fa-IR',
    label: 'فارسی',
    icon: '🇮🇷',
    title: 'زبان'
  },
  'fi-FI': {
    lang: 'fi-FI',
    label: 'Suomi',
    icon: '🇫🇮',
    title: 'Kieli'
  },
  'fr-BE': {
    lang: 'fr-BE',
    label: 'Français',
    icon: '🇧🇪',
    title: 'Langue'
  },
  'fr-FR': {
    lang: 'fr-FR',
    label: 'Français',
    icon: '🇫🇷',
    title: 'Langue'
  },
  'ga-IE': {
    lang: 'ga-IE',
    label: 'Gaeilge',
    icon: '🇮🇪',
    title: 'Teanga'
  },
  'he-IL': {
    lang: 'he-IL',
    label: 'עברית',
    icon: '🇮🇱',
    title: 'שפה'
  },
  'hi-IN': {
    lang: 'hi-IN',
    label: 'हिन्दी, हिंदी',
    icon: '🇮🇳',
    title: 'भाषा: हिन्दी'
  },
  'hr-HR': {
    lang: 'hr-HR',
    label: 'Hrvatski jezik',
    icon: '🇭🇷',
    title: 'Jezik'
  },
  'hu-HU': {
    lang: 'hu-HU',
    label: 'Magyar',
    icon: '🇭🇺',
    title: 'Nyelv'
  },
  'hy-AM': {
    lang: 'hu-HU',
    label: 'Հայերեն',
    icon: '🇦🇲',
    title: 'Լեզու'
  },
  'id-ID': {
    lang: 'id-ID',
    label: 'Bahasa Indonesia',
    icon: '🇮🇩',
    title: 'Bahasa'
  },
  'it-IT': {
    lang: 'it-IT',
    label: 'Italiano',
    icon: '🇮🇹',
    title: 'Linguaggio'
  },
  'is-IS': {
    lang: 'is-IS',
    label: 'Íslenska',
    icon: '🇮🇸',
    title: 'Tungumál'
  },
  'ja-JP': {
    lang: 'ja-JP',
    label: '日本語',
    icon: '🇯🇵',
    title: '言語'
  },
  'ku-IQ': {
    lang: 'ku-IQ',
    label: 'کوردی',
    icon: '🇮🇶',
    title: 'Ziman'
  },
  'kn-IN': {
    lang: 'zh-TW',
    label: 'ಕನ್ನಡ',
    icon: '🇮🇳',
    title: 'ಭಾಷೆ'
  },
  'ko-KR': {
    lang: 'ko-KR',
    label: '한국어',
    icon: '🇰🇷',
    title: '언어'
  },
  'lv-LV': {
    lang: 'lv-LV',
    label: 'Latviešu valoda',
    icon: '🇱🇮',
    title: 'Kalba'
  },
  'mk-MK': {
    lang: 'mk-MK',
    label: 'македонски јазик',
    icon: '🇲🇰',
    title: 'Јазик'
  },
  'mn-MN': {
    lang: 'mn-MN',
    label: 'Монгол хэл',
    icon: '🇲🇳',
    title: 'Хэл'
  },
  'ms-MY': {
    lang: 'ms-MY',
    label: 'بهاس ملايو‎',
    icon: '🇲🇾',
    title: 'Bahasa'
  },
  'nb-NO': {
    lang: 'nb-NO',
    label: 'Norsk',
    icon: '🇳🇴',
    title: 'Språk'
  },
  'ne-NP': {
    lang: 'ne-NP',
    label: 'नेपाली',
    icon: '🇳🇵',
    title: 'भाषा'
  },
  'nl-BE': {
    lang: 'nl-BE',
    label: 'Vlaams',
    icon: '🇧🇪',
    title: 'Taal'
  },
  'nl-NL': {
    lang: 'nl-NL',
    label: 'Vlaams',
    icon: '🇳🇱',
    title: 'Taal'
  },
  'pl-PL': {
    lang: 'pl-PL',
    label: 'Polski',
    icon: '🇵🇱',
    title: 'Język'
  },
  'pt-BR': {
    lang: 'pt-BR',
    label: 'Português',
    icon: '🇧🇷',
    title: 'Idiomas'
  },
  'pt-PT': {
    lang: 'pt-PT',
    label: 'Português',
    icon: '🇵🇹',
    title: 'Idiomas'
  },
  'ro-RO': {
    lang: 'ro-RO',
    label: 'Română',
    icon: '🇷🇴',
    title: 'Limba'
  },
  'ru-RU': {
    lang: 'ru-RU',
    label: 'Русский',
    icon: '🇷🇺',
    title: 'язык'
  },
  'sk-SK': {
    lang: 'sk-SK',
    label: 'Slovenčina',
    icon: '🇸🇰',
    title: 'Jazyk'
  },
  'sr-RS': {
    lang: 'sr-RS',
    label: 'српски језик',
    icon: '🇸🇷',
    title: 'Језик'
  },
  'sl-SI': {
    lang: 'sl-SI',
    label: 'Slovenščina',
    icon: '🇸🇱',
    title: 'Jezik'
  },
  'sv-SE': {
    lang: 'sv-SE',
    label: 'Svenska',
    icon: '🇸🇪',
    title: 'Språk'
  },
  'ta-IN': {
    lang: 'ta-IN',
    label: 'தமிழ்',
    icon: '🇮🇳',
    title: 'மொழி'
  },
  'th-TH': {
    lang: 'th-TH',
    label: 'ไทย',
    icon: '🇹🇭',
    title: 'ภาษา'
  },
  'tr-TR': {
    lang: 'tr-TR',
    label: 'Türkçe',
    icon: '🇹🇷',
    title: 'Dil'
  },
  'uk-UA': {
    lang: 'uk-UA',
    label: 'Українська',
    icon: '🇺🇰',
    title: 'Мова'
  },
  'vi-VN': {
    lang: 'vi-VN',
    label: 'Tiếng Việt',
    icon: '🇻🇳',
    title: 'Ngôn ngữ'
  },
  'zh-CN': {
    lang: 'zh-CN',
    label: '简体中文',
    icon: '🇨🇳',
    title: '语言'
  },
  'zh-TW': {
    lang: 'zh-TW',
    label: '繁體中文',
    icon: '🇭🇰',
    title: '語言'
  }
};
var SelectLang = function SelectLang(props) {
  var _allLangUIConfig$sele;

  var globalIconClassName = props.globalIconClassName,
      postLocalesData = props.postLocalesData,
      onItemClick = props.onItemClick,
      icon = props.icon,
      style = props.style,
      reload = props.reload,
      restProps = (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__.default)(props, _excluded2);

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_7__.useContext)(antd_es_config_provider__WEBPACK_IMPORTED_MODULE_11__.default.ConfigContext),
      direction = _useContext.direction;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(function () {
    return (0,_localeExports__WEBPACK_IMPORTED_MODULE_8__.getLocale)();
  }),
      _useState2 = (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.default)(_useState, 2),
      selectedLang = _useState2[0],
      setSelectedLang = _useState2[1];

  var changeLang = function changeLang(_ref2) {
    var key = _ref2.key;
    (0,_localeExports__WEBPACK_IMPORTED_MODULE_8__.setLocale)(key, reload);
    setSelectedLang((0,_localeExports__WEBPACK_IMPORTED_MODULE_8__.getLocale)());
  };

  var defaultLangUConfig = (0,_localeExports__WEBPACK_IMPORTED_MODULE_8__.getAllLocales)().map(function (key) {
    return defaultLangUConfigMap[key] || {
      lang: key,
      label: key,
      icon: "🌐",
      title: key
    };
  });
  var allLangUIConfig = (postLocalesData === null || postLocalesData === void 0 ? void 0 : postLocalesData(defaultLangUConfig)) || defaultLangUConfig;
  var handleClick = onItemClick ? function (params) {
    return onItemClick(params);
  } : changeLang;
  var menuItemStyle = {
    minWidth: "160px"
  };
  var menuItemIconStyle = {
    marginRight: "8px"
  };

  var langMenu = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd_es_menu__WEBPACK_IMPORTED_MODULE_12__.default, {
    selectedKeys: [selectedLang],
    onClick: handleClick,
    children: allLangUIConfig.map(function (localeObj) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(antd_es_menu__WEBPACK_IMPORTED_MODULE_12__.default.Item, {
        style: menuItemStyle,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
          role: "img",
          "aria-label": (localeObj === null || localeObj === void 0 ? void 0 : localeObj.label) || "en-US",
          style: menuItemIconStyle,
          children: (localeObj === null || localeObj === void 0 ? void 0 : localeObj.icon) || "🌐"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 427,
          columnNumber: 13
        }, _this), (localeObj === null || localeObj === void 0 ? void 0 : localeObj.label) || "en-US"]
      }, localeObj.lang || localeObj.key, true, {
        fileName: _jsxFileName,
        lineNumber: 426,
        columnNumber: 11
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 423,
    columnNumber: 5
  }, _this);

  var inlineStyle = (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.default)({
    cursor: "pointer",
    padding: "12px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
    verticalAlign: "middle"
  }, style);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(HeaderDropdown, (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.default)({
    overlay: langMenu,
    placement: direction !== 'rtl' ? 'bottomRight' : 'bottomLeft'
  }, restProps), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("span", {
      className: globalIconClassName,
      style: inlineStyle,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("i", {
        className: "anticon",
        title: (_allLangUIConfig$sele = allLangUIConfig[selectedLang]) === null || _allLangUIConfig$sele === void 0 ? void 0 : _allLangUIConfig$sele.title,
        children: icon ? icon : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("svg", {
          viewBox: "0 0 24 24",
          focusable: "false",
          width: "1em",
          height: "1em",
          fill: "currentColor",
          "aria-hidden": "true",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("path", {
            d: "M0 0h24v24H0z",
            fill: "none"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 462,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("path", {
            d: "M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z ",
            className: "css-c4d79v"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 463,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 454,
          columnNumber: 13
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 451,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 450,
      columnNumber: 7
    }, _this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 449,
    columnNumber: 5
  }, _this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {}, void 0, false);
};

/***/ }),

/***/ "./src/.umi/plugin-locale/locale.tsx":
/*!*******************************************!*\
  !*** ./src/.umi/plugin-locale/locale.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "event": function() { return /* binding */ event; },
/* harmony export */   "LANG_CHANGE_EVENT": function() { return /* binding */ LANG_CHANGE_EVENT; },
/* harmony export */   "_onCreate": function() { return /* binding */ _onCreate; },
/* harmony export */   "_LocaleContainer": function() { return /* binding */ _LocaleContainer; }
/* harmony export */ });
/* harmony import */ var antd_es_config_provider_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/config-provider/style */ "./node_modules/antd/es/config-provider/style/index.js");
/* harmony import */ var antd_es_config_provider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd/es/config-provider */ "./node_modules/antd/es/config-provider/index.js");
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment_locale_bn_bd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment/locale/bn-bd */ "./node_modules/moment/locale/bn-bd.js");
/* harmony import */ var moment_locale_bn_bd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment_locale_bn_bd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment_locale_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment/locale/fa */ "./node_modules/moment/locale/fa.js");
/* harmony import */ var moment_locale_fa__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment_locale_fa__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment_locale_id__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment/locale/id */ "./node_modules/moment/locale/id.js");
/* harmony import */ var moment_locale_id__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment_locale_id__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment_locale_ja__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment/locale/ja */ "./node_modules/moment/locale/ja.js");
/* harmony import */ var moment_locale_ja__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment_locale_ja__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var moment_locale_pt_br__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment/locale/pt-br */ "./node_modules/moment/locale/pt-br.js");
/* harmony import */ var moment_locale_pt_br__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment_locale_pt_br__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment/locale/zh-cn */ "./node_modules/moment/locale/zh-cn.js");
/* harmony import */ var moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment_locale_zh_cn__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var moment_locale_zh_tw__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment/locale/zh-tw */ "./node_modules/moment/locale/zh-tw.js");
/* harmony import */ var moment_locale_zh_tw__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment_locale_zh_tw__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _localeExports__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./localeExports */ "./src/.umi/plugin-locale/localeExports.ts");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");




var _jsxFileName = "/Users/quxiaohui/Desktop/projects/react/project-station/src/.umi/plugin-locale/locale.tsx",
    _this = undefined;

// @ts-nocheck










 // @ts-ignore


var event = new (events__WEBPACK_IMPORTED_MODULE_3___default())();
event.setMaxListeners(5);
var LANG_CHANGE_EVENT = Symbol('LANG_CHANGE');
function _onCreate() {
  var locale = (0,_localeExports__WEBPACK_IMPORTED_MODULE_12__.getLocale)();

  if ((moment__WEBPACK_IMPORTED_MODULE_4___default()) !== null && (moment__WEBPACK_IMPORTED_MODULE_4___default()) !== void 0 && (moment__WEBPACK_IMPORTED_MODULE_4___default().locale)) {
    var _localeInfo$locale;

    moment__WEBPACK_IMPORTED_MODULE_4___default().locale(((_localeInfo$locale = _localeExports__WEBPACK_IMPORTED_MODULE_12__.localeInfo[locale]) === null || _localeInfo$locale === void 0 ? void 0 : _localeInfo$locale.momentLocale) || '');
  }

  (0,_localeExports__WEBPACK_IMPORTED_MODULE_12__.setIntl)(locale);
}
var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_2__.useEffect;
var _LocaleContainer = function _LocaleContainer(props) {
  var _localeInfo$locale3;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2__.useState(function () {
    return (0,_localeExports__WEBPACK_IMPORTED_MODULE_12__.getLocale)();
  }),
      _React$useState2 = (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),
      locale = _React$useState2[0],
      setLocale = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_2__.useState(function () {
    return (0,_localeExports__WEBPACK_IMPORTED_MODULE_12__.getIntl)(locale, true);
  }),
      _React$useState4 = (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState3, 2),
      intl = _React$useState4[0],
      setContainerIntl = _React$useState4[1];

  var handleLangChange = function handleLangChange(locale) {
    if ((moment__WEBPACK_IMPORTED_MODULE_4___default()) !== null && (moment__WEBPACK_IMPORTED_MODULE_4___default()) !== void 0 && (moment__WEBPACK_IMPORTED_MODULE_4___default().locale)) {
      var _localeInfo$locale2;

      moment__WEBPACK_IMPORTED_MODULE_4___default().locale(((_localeInfo$locale2 = _localeExports__WEBPACK_IMPORTED_MODULE_12__.localeInfo[locale]) === null || _localeInfo$locale2 === void 0 ? void 0 : _localeInfo$locale2.momentLocale) || 'en');
    }

    setLocale(locale);
    setContainerIntl((0,_localeExports__WEBPACK_IMPORTED_MODULE_12__.getIntl)(locale));
  };

  useIsomorphicLayoutEffect(function () {
    event.on(LANG_CHANGE_EVENT, handleLangChange);
    return function () {
      event.off(LANG_CHANGE_EVENT, handleLangChange);
    };
  }, []);
  var defaultAntdLocale = {};
  var direction = (0,_localeExports__WEBPACK_IMPORTED_MODULE_12__.getDirection)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(antd_es_config_provider__WEBPACK_IMPORTED_MODULE_14__.default, {
    direction: direction,
    locale: ((_localeInfo$locale3 = _localeExports__WEBPACK_IMPORTED_MODULE_12__.localeInfo[locale]) === null || _localeInfo$locale3 === void 0 ? void 0 : _localeInfo$locale3.antd) || defaultAntdLocale,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_13__.jsxDEV)(_localeExports__WEBPACK_IMPORTED_MODULE_12__.RawIntlProvider, {
      value: intl,
      children: props.children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }, _this);
};

/***/ }),

/***/ "./src/.umi/plugin-locale/localeExports.ts":
/*!*************************************************!*\
  !*** ./src/.umi/plugin-locale/localeExports.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createIntl": function() { return /* reexport safe */ _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_4__.createIntl; },
/* harmony export */   "FormattedDate": function() { return /* reexport safe */ _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedDate; },
/* harmony export */   "FormattedDateParts": function() { return /* reexport safe */ _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedDateParts; },
/* harmony export */   "FormattedDisplayName": function() { return /* reexport safe */ _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedDisplayName; },
/* harmony export */   "FormattedHTMLMessage": function() { return /* reexport safe */ _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_6__.default; },
/* harmony export */   "FormattedList": function() { return /* reexport safe */ _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedList; },
/* harmony export */   "FormattedMessage": function() { return /* reexport safe */ _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_7__.default; },
/* harmony export */   "FormattedNumber": function() { return /* reexport safe */ _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedNumber; },
/* harmony export */   "FormattedNumberParts": function() { return /* reexport safe */ _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_8__.FormattedNumberParts; },
/* harmony export */   "FormattedPlural": function() { return /* reexport safe */ _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_9__.default; },
/* harmony export */   "FormattedRelativeTime": function() { return /* reexport safe */ _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_10__.default; },
/* harmony export */   "FormattedTime": function() { return /* reexport safe */ _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedTime; },
/* harmony export */   "FormattedTimeParts": function() { return /* reexport safe */ _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_5__.FormattedTimeParts; },
/* harmony export */   "IntlContext": function() { return /* reexport safe */ _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_11__.Context; },
/* harmony export */   "IntlProvider": function() { return /* reexport safe */ _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_4__.default; },
/* harmony export */   "RawIntlProvider": function() { return /* reexport safe */ _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_11__.Provider; },
/* harmony export */   "createIntlCache": function() { return /* reexport safe */ _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_12__.createIntlCache; },
/* harmony export */   "defineMessages": function() { return /* reexport safe */ _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_5__.defineMessages; },
/* harmony export */   "injectIntl": function() { return /* reexport safe */ _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_11__.default; },
/* harmony export */   "useIntl": function() { return /* reexport safe */ _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_13__.default; },
/* harmony export */   "localeInfo": function() { return /* binding */ localeInfo; },
/* harmony export */   "addLocale": function() { return /* binding */ addLocale; },
/* harmony export */   "getIntl": function() { return /* binding */ getIntl; },
/* harmony export */   "setIntl": function() { return /* binding */ setIntl; },
/* harmony export */   "getLocale": function() { return /* binding */ getLocale; },
/* harmony export */   "getDirection": function() { return /* binding */ getDirection; },
/* harmony export */   "setLocale": function() { return /* binding */ setLocale; },
/* harmony export */   "formatMessage": function() { return /* binding */ formatMessage; },
/* harmony export */   "getAllLocales": function() { return /* binding */ getAllLocales; }
/* harmony export */ });
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/react-intl */ "./node_modules/react-intl/lib/components/provider.js");
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_runtime__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./node_modules/@umijs/runtime */ "./node_modules/@umijs/runtime/dist/index.esm.js");
/* harmony import */ var _locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale */ "./src/.umi/plugin-locale/locale.tsx");
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_warning_warning_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/warning/warning.js */ "./node_modules/warning/warning.js");
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_warning_warning_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_warning_warning_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_plugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/plugin */ "./src/.umi/core/plugin.ts");
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/react-intl */ "./node_modules/react-intl/lib/index.js");
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/react-intl */ "./node_modules/react-intl/lib/components/html-message.js");
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/react-intl */ "./node_modules/react-intl/lib/components/message.js");
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/react-intl */ "./node_modules/react-intl/lib/components/createFormattedComponent.js");
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/react-intl */ "./node_modules/react-intl/lib/components/plural.js");
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/react-intl */ "./node_modules/react-intl/lib/components/relative.js");
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/react-intl */ "./node_modules/react-intl/lib/components/injectIntl.js");
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/react-intl */ "./node_modules/react-intl/lib/utils.js");
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./node_modules/react-intl */ "./node_modules/react-intl/lib/components/useIntl.js");
/* harmony import */ var antd_es_locale_bn_BD__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! antd/es/locale/bn_BD */ "./node_modules/antd/es/locale/bn_BD.js");
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_src_locales_bn_BD_ts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/locales/bn-BD.ts */ "./src/locales/bn-BD.ts");
/* harmony import */ var antd_es_locale_en_US__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! antd/es/locale/en_US */ "./node_modules/antd/es/locale/en_US.js");
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_src_locales_en_US_ts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./src/locales/en-US.ts */ "./src/locales/en-US.ts");
/* harmony import */ var antd_es_locale_fa_IR__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! antd/es/locale/fa_IR */ "./node_modules/antd/es/locale/fa_IR.js");
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_src_locales_fa_IR_ts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./src/locales/fa-IR.ts */ "./src/locales/fa-IR.ts");
/* harmony import */ var antd_es_locale_id_ID__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! antd/es/locale/id_ID */ "./node_modules/antd/es/locale/id_ID.js");
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_src_locales_id_ID_ts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./src/locales/id-ID.ts */ "./src/locales/id-ID.ts");
/* harmony import */ var antd_es_locale_ja_JP__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! antd/es/locale/ja_JP */ "./node_modules/antd/es/locale/ja_JP.js");
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_src_locales_ja_JP_ts__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./src/locales/ja-JP.ts */ "./src/locales/ja-JP.ts");
/* harmony import */ var antd_es_locale_pt_BR__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! antd/es/locale/pt_BR */ "./node_modules/antd/es/locale/pt_BR.js");
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_src_locales_pt_BR_ts__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./src/locales/pt-BR.ts */ "./src/locales/pt-BR.ts");
/* harmony import */ var antd_es_locale_zh_CN__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! antd/es/locale/zh_CN */ "./node_modules/antd/es/locale/zh_CN.js");
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_src_locales_zh_CN_ts__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./src/locales/zh-CN.ts */ "./src/locales/zh-CN.ts");
/* harmony import */ var antd_es_locale_zh_TW__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! antd/es/locale/zh_TW */ "./node_modules/antd/es/locale/zh_TW.js");
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_src_locales_zh_TW_ts__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./src/locales/zh-TW.ts */ "./src/locales/zh-TW.ts");

// @ts-nocheck


 // @ts-ignore





var g_intl;
var useLocalStorage = true;
















var localeInfo = {
  'bn-BD': {
    messages: (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)({}, _Users_quxiaohui_Desktop_projects_react_project_station_src_locales_bn_BD_ts__WEBPACK_IMPORTED_MODULE_14__.default),
    locale: 'bn-BD',
    antd: (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)({}, antd_es_locale_bn_BD__WEBPACK_IMPORTED_MODULE_22__.default),
    momentLocale: 'bn-bd'
  },
  'en-US': {
    messages: (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)({}, _Users_quxiaohui_Desktop_projects_react_project_station_src_locales_en_US_ts__WEBPACK_IMPORTED_MODULE_15__.default),
    locale: 'en-US',
    antd: (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)({}, antd_es_locale_en_US__WEBPACK_IMPORTED_MODULE_23__.default),
    momentLocale: ''
  },
  'fa-IR': {
    messages: (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)({}, _Users_quxiaohui_Desktop_projects_react_project_station_src_locales_fa_IR_ts__WEBPACK_IMPORTED_MODULE_16__.default),
    locale: 'fa-IR',
    antd: (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)({}, antd_es_locale_fa_IR__WEBPACK_IMPORTED_MODULE_24__.default),
    momentLocale: 'fa'
  },
  'id-ID': {
    messages: (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)({}, _Users_quxiaohui_Desktop_projects_react_project_station_src_locales_id_ID_ts__WEBPACK_IMPORTED_MODULE_17__.default),
    locale: 'id-ID',
    antd: (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)({}, antd_es_locale_id_ID__WEBPACK_IMPORTED_MODULE_25__.default),
    momentLocale: 'id'
  },
  'ja-JP': {
    messages: (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)({}, _Users_quxiaohui_Desktop_projects_react_project_station_src_locales_ja_JP_ts__WEBPACK_IMPORTED_MODULE_18__.default),
    locale: 'ja-JP',
    antd: (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)({}, antd_es_locale_ja_JP__WEBPACK_IMPORTED_MODULE_26__.default),
    momentLocale: 'ja'
  },
  'pt-BR': {
    messages: (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)({}, _Users_quxiaohui_Desktop_projects_react_project_station_src_locales_pt_BR_ts__WEBPACK_IMPORTED_MODULE_19__.default),
    locale: 'pt-BR',
    antd: (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)({}, antd_es_locale_pt_BR__WEBPACK_IMPORTED_MODULE_27__.default),
    momentLocale: 'pt-br'
  },
  'zh-CN': {
    messages: (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)({}, _Users_quxiaohui_Desktop_projects_react_project_station_src_locales_zh_CN_ts__WEBPACK_IMPORTED_MODULE_20__.default),
    locale: 'zh-CN',
    antd: (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)({}, antd_es_locale_zh_CN__WEBPACK_IMPORTED_MODULE_28__.default),
    momentLocale: 'zh-cn'
  },
  'zh-TW': {
    messages: (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)({}, _Users_quxiaohui_Desktop_projects_react_project_station_src_locales_zh_TW_ts__WEBPACK_IMPORTED_MODULE_21__.default),
    locale: 'zh-TW',
    antd: (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)({}, antd_es_locale_zh_TW__WEBPACK_IMPORTED_MODULE_29__.default),
    momentLocale: 'zh-tw'
  }
};
/**
 * 增加一个新的国际化语言
 * @param name 语言的 key
 * @param messages 对应的枚举对象
 * @param extraLocale momentLocale, antd 国际化
 */

var addLocale = function addLocale(name, messages, extraLocales) {
  var _localeInfo$name, _name$split;

  if (!name) {
    return;
  } // 可以合并


  var mergeMessages = (_localeInfo$name = localeInfo[name]) !== null && _localeInfo$name !== void 0 && _localeInfo$name.messages ? Object.assign({}, localeInfo[name].messages, messages) : messages;

  var _ref = extraLocales || {},
      momentLocale = _ref.momentLocale,
      antd = _ref.antd;

  var locale = (_name$split = name.split('-')) === null || _name$split === void 0 ? void 0 : _name$split.join('-');
  localeInfo[name] = {
    messages: mergeMessages,
    locale: locale,
    momentLocale: momentLocale,
    antd: antd
  }; // 如果这是的 name 和当前的locale 相同需要重新设置一下，不然更新不了

  if (locale === getLocale()) {
    _locale__WEBPACK_IMPORTED_MODULE_1__.event.emit(_locale__WEBPACK_IMPORTED_MODULE_1__.LANG_CHANGE_EVENT, locale);
  }
};
/**
 * 获取当前的 intl 对象，可以在 node 中使用
 * @param locale 需要切换的语言类型
 * @param changeIntl 是否不使用 g_intl
 * @returns IntlShape
 */

var getIntl = function getIntl(locale, changeIntl) {
  // 如果全局的 g_intl 存在，且不是 setIntl 调用
  if (g_intl && !changeIntl && !locale) {
    return g_intl;
  } // 如果存在于 localeInfo 中


  if (locale && localeInfo[locale]) {
    return (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_4__.createIntl)(localeInfo[locale]);
  } // 不存在需要一个报错提醒


  _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_warning_warning_js__WEBPACK_IMPORTED_MODULE_2___default()(!locale || !!localeInfo[locale], "The current popular language does not exist, please check the locales folder!"); // 使用 zh-CN

  if (localeInfo["zh-CN"]) return (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_4__.createIntl)(localeInfo["zh-CN"]); // 如果还没有，返回一个空的

  return (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_react_intl__WEBPACK_IMPORTED_MODULE_4__.createIntl)({
    locale: "zh-CN",
    messages: {}
  });
};
/**
 * 切换全局的 intl 的设置
 * @param locale 语言的key
 */

var setIntl = function setIntl(locale) {
  g_intl = getIntl(locale, true);
};
/**
 * 获取当前选择的语言
 * @returns string
 */

var getLocale = function getLocale() {
  var runtimeLocale = _core_plugin__WEBPACK_IMPORTED_MODULE_3__.plugin.applyPlugins({
    key: 'locale',
    type: _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_runtime__WEBPACK_IMPORTED_MODULE_30__.ApplyPluginsType.modify,
    initialValue: {}
  }); // runtime getLocale for user define

  if (typeof (runtimeLocale === null || runtimeLocale === void 0 ? void 0 : runtimeLocale.getLocale) === 'function') {
    return runtimeLocale.getLocale();
  } // please clear localStorage if you change the baseSeparator config
  // because changing will break the app


  var lang = navigator.cookieEnabled && typeof localStorage !== 'undefined' && useLocalStorage ? window.localStorage.getItem('umi_locale') : ''; // support baseNavigator, default true

  var browserLang;
  var isNavigatorLanguageValid = typeof navigator !== 'undefined' && typeof navigator.language === 'string';
  browserLang = isNavigatorLanguageValid ? navigator.language.split('-').join('-') : '';
  return lang || browserLang || "zh-CN";
};
/**
 * 获取当前选择的方向
 * @returns string
 */

var getDirection = function getDirection() {
  var lang = getLocale(); // array with all prefixs for rtl langueges ex: ar-EG , he-IL

  var rtlLangs = ['he', 'ar', 'fa', 'ku'];
  var direction = rtlLangs.filter(function (lng) {
    return lang.startsWith(lng);
  }).length ? 'rtl' : 'ltr';
  return direction;
};
/**
 * 切换语言
 * @param lang 语言的 key
 * @param realReload 是否刷新页面，默认刷新
 * @returns string
 */

var setLocale = function setLocale(lang) {
  var realReload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var runtimeLocale = _core_plugin__WEBPACK_IMPORTED_MODULE_3__.plugin.applyPlugins({
    key: 'locale',
    type: _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_runtime__WEBPACK_IMPORTED_MODULE_30__.ApplyPluginsType.modify,
    initialValue: {}
  });

  var updater = function updater() {
    if (getLocale() !== lang) {
      if (navigator.cookieEnabled && typeof window.localStorage !== 'undefined' && useLocalStorage) {
        window.localStorage.setItem('umi_locale', lang || '');
      }

      setIntl(lang);

      if (realReload) {
        window.location.reload();
      } else {
        _locale__WEBPACK_IMPORTED_MODULE_1__.event.emit(_locale__WEBPACK_IMPORTED_MODULE_1__.LANG_CHANGE_EVENT, lang); // chrome 不支持这个事件。所以人肉触发一下

        if (window.dispatchEvent) {
          var _event = new Event('languagechange');

          window.dispatchEvent(_event);
        }
      }
    }
  };

  if (typeof (runtimeLocale === null || runtimeLocale === void 0 ? void 0 : runtimeLocale.setLocale) === 'function') {
    runtimeLocale.setLocale({
      lang: lang,
      realReload: realReload,
      updater: updater
    });
    return;
  }

  updater();
};
var firstWaring = true;
/**
 * intl.formatMessage 的语法糖
 * @deprecated 使用此 api 会造成切换语言的时候无法自动刷新，请使用 useIntl 或 injectIntl
 * @param descriptor { id : string, defaultMessage : string }
 * @param values { [key:string] : string }
 * @returns string
 */

var formatMessage = function formatMessage(descriptor, values) {
  if (firstWaring) {
    _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_warning_warning_js__WEBPACK_IMPORTED_MODULE_2___default()(false, "Using this API will cause automatic refresh when switching languages, please use useIntl or injectIntl.\n\n\u4F7F\u7528\u6B64 api \u4F1A\u9020\u6210\u5207\u6362\u8BED\u8A00\u7684\u65F6\u5019\u65E0\u6CD5\u81EA\u52A8\u5237\u65B0\uFF0C\u8BF7\u4F7F\u7528 useIntl \u6216 injectIntl\u3002\n\nhttp://j.mp/37Fkd5Q\n      ");
    firstWaring = false;
  }

  return g_intl.formatMessage(descriptor, values);
};
/**
 * 获取语言列表
 * @returns string[]
 */

var getAllLocales = function getAllLocales() {
  return Object.keys(localeInfo);
};

/***/ }),

/***/ "./src/.umi/plugin-model/helpers/constant.tsx":
/*!****************************************************!*\
  !*** ./src/.umi/plugin-model/helpers/constant.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UmiContext": function() { return /* binding */ UmiContext; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
// @ts-nocheck

var UmiContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});

/***/ }),

/***/ "./src/.umi/plugin-model/useModel.tsx":
/*!********************************************!*\
  !*** ./src/.umi/plugin-model/useModel.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useModel": function() { return /* binding */ useModel; }
/* harmony export */ });
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_plugin_model_node_modules_fast_deep_equal_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@umijs/plugin-model/node_modules/fast-deep-equal/index.js */ "./node_modules/@umijs/plugin-model/node_modules/fast-deep-equal/index.js");
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_plugin_model_node_modules_fast_deep_equal_index_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_plugin_model_node_modules_fast_deep_equal_index_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/constant */ "./src/.umi/plugin-model/helpers/constant.tsx");

// @ts-nocheck
 // @ts-ignore

 // @ts-ignore


function useModel(namespace, updater) {
  var dispatcher = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_helpers_constant__WEBPACK_IMPORTED_MODULE_3__.UmiContext);
  var updaterRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(updater);
  updaterRef.current = updater;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(function () {
    return updaterRef.current ? updaterRef.current(dispatcher.data[namespace]) : dispatcher.data[namespace];
  }),
      _useState2 = (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var stateRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(state);
  stateRef.current = state;
  var isMount = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    isMount.current = true;
    return function () {
      isMount.current = false;
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var handler = function handler(e) {
      if (!isMount.current) {
        // 如果 handler 执行过程中，组件被卸载了，则强制更新全局 data
        setTimeout(function () {
          dispatcher.data[namespace] = e;
          dispatcher.update(namespace);
        });
      } else {
        if (updater && updaterRef.current) {
          var currentState = updaterRef.current(e);
          var previousState = stateRef.current;

          if (!_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_plugin_model_node_modules_fast_deep_equal_index_js__WEBPACK_IMPORTED_MODULE_2___default()(currentState, previousState)) {
            setState(currentState);
          }
        } else {
          setState(e);
        }
      }
    };

    try {
      dispatcher.callbacks[namespace].add(handler);
      dispatcher.update(namespace);
    } catch (e) {
      dispatcher.callbacks[namespace] = new Set();
      dispatcher.callbacks[namespace].add(handler);
      dispatcher.update(namespace);
    }

    return function () {
      dispatcher.callbacks[namespace].delete(handler);
    };
  }, [namespace]);
  return state;
}
;

/***/ }),

/***/ "./src/.umi/plugin-request/request.ts":
/*!********************************************!*\
  !*** ./src/.umi/plugin-request/request.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorShowType": function() { return /* binding */ ErrorShowType; },
/* harmony export */   "request": function() { return /* binding */ request; },
/* harmony export */   "useRequest": function() { return /* binding */ useRequest; },
/* harmony export */   "UseRequestProvider": function() { return /* reexport safe */ _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_ahooksjs_use_request__WEBPACK_IMPORTED_MODULE_7__.UseRequestProvider; }
/* harmony export */ });
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umi_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/umi-request */ "./node_modules/umi-request/dist/index.esm.js");
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@umijs/runtime */ "./node_modules/@umijs/runtime/dist/index.esm.js");
/* harmony import */ var _core_umiExports__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/umiExports */ "./src/.umi/core/umiExports.ts");
/* harmony import */ var _umijs_plugin_request_lib_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @umijs/plugin-request/lib/ui */ "./src/.umi/plugin-request/ui/index.ts");
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_ahooksjs_use_request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@ahooksjs/use-request */ "./node_modules/@ahooksjs/use-request/es/index.js");




var _excluded = ["url"];
// @ts-nocheck

/**
 * Base on https://github.com/umijs//Users/quxiaohui/Desktop/projects/react/project-station/node_modules/umi-request
 */
 // @ts-ignore


 // decoupling with antd UI library, you can using `alias` modify the ui methods
// @ts-ignore




function useRequest(service) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_ahooksjs_use_request__WEBPACK_IMPORTED_MODULE_7__.default)(service, (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.default)({
    formatResult: function formatResult(result) {
      return result === null || result === void 0 ? void 0 : result.data;
    },
    requestMethod: function requestMethod(requestOptions) {
      if (typeof requestOptions === 'string') {
        return request(requestOptions);
      }

      if (typeof requestOptions === 'object') {
        var _url = requestOptions.url,
            rest = (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.default)(requestOptions, _excluded);

        return request(_url, rest);
      }

      throw new Error('request options error');
    }
  }, options));
}

var ErrorShowType;

(function (ErrorShowType) {
  ErrorShowType[ErrorShowType["SILENT"] = 0] = "SILENT";
  ErrorShowType[ErrorShowType["WARN_MESSAGE"] = 1] = "WARN_MESSAGE";
  ErrorShowType[ErrorShowType["ERROR_MESSAGE"] = 2] = "ERROR_MESSAGE";
  ErrorShowType[ErrorShowType["NOTIFICATION"] = 4] = "NOTIFICATION";
  ErrorShowType[ErrorShowType["REDIRECT"] = 9] = "REDIRECT";
})(ErrorShowType || (ErrorShowType = {}));

var DEFAULT_ERROR_PAGE = '/exception';
var requestMethodInstance;

var getRequestMethod = function getRequestMethod() {
  var _requestConfig$errorC;

  if (requestMethodInstance) {
    // request method 已经示例化
    return requestMethodInstance;
  } // runtime 配置可能应为依赖顺序的问题在模块初始化的时候无法获取，所以需要封装一层在异步调用后初始化相关方法
  // 当用户的 app.ts 中依赖了该文件的情况下就该模块的初始化时间就会被提前，无法获取到运行时配置


  var requestConfig = _core_umiExports__WEBPACK_IMPORTED_MODULE_5__.plugin.applyPlugins({
    key: 'request',
    type: _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_runtime__WEBPACK_IMPORTED_MODULE_8__.ApplyPluginsType.modify,
    initialValue: {}
  });

  var errorAdaptor = ((_requestConfig$errorC = requestConfig.errorConfig) === null || _requestConfig$errorC === void 0 ? void 0 : _requestConfig$errorC.adaptor) || function (resData) {
    return resData;
  };

  requestMethodInstance = (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umi_request__WEBPACK_IMPORTED_MODULE_4__.extend)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__.default)({
    errorHandler: function errorHandler(error) {
      var _error$request, _error$request$option, _errorInfo4;

      // @ts-ignore
      if (error !== null && error !== void 0 && (_error$request = error.request) !== null && _error$request !== void 0 && (_error$request$option = _error$request.options) !== null && _error$request$option !== void 0 && _error$request$option.skipErrorHandler) {
        throw error;
      }

      var errorInfo;

      if (error.name === 'ResponseError' && error.data && error.request) {
        var _errorInfo;

        var _ctx = {
          req: error.request,
          res: error.response
        };
        errorInfo = errorAdaptor(error.data, _ctx);
        error.message = ((_errorInfo = errorInfo) === null || _errorInfo === void 0 ? void 0 : _errorInfo.errorMessage) || error.message;
        error.data = error.data;
        error.info = errorInfo;
      }

      errorInfo = error.info;

      if (errorInfo) {
        var _errorInfo2, _errorInfo3, _requestConfig$errorC2;

        var errorMessage = (_errorInfo2 = errorInfo) === null || _errorInfo2 === void 0 ? void 0 : _errorInfo2.errorMessage;
        var errorCode = (_errorInfo3 = errorInfo) === null || _errorInfo3 === void 0 ? void 0 : _errorInfo3.errorCode;
        var errorPage = ((_requestConfig$errorC2 = requestConfig.errorConfig) === null || _requestConfig$errorC2 === void 0 ? void 0 : _requestConfig$errorC2.errorPage) || DEFAULT_ERROR_PAGE;

        switch ((_errorInfo4 = errorInfo) === null || _errorInfo4 === void 0 ? void 0 : _errorInfo4.showType) {
          case ErrorShowType.SILENT:
            // do nothing
            break;

          case ErrorShowType.WARN_MESSAGE:
            _umijs_plugin_request_lib_ui__WEBPACK_IMPORTED_MODULE_6__.message.warn(errorMessage);
            break;

          case ErrorShowType.ERROR_MESSAGE:
            _umijs_plugin_request_lib_ui__WEBPACK_IMPORTED_MODULE_6__.message.error(errorMessage);
            break;

          case ErrorShowType.NOTIFICATION:
            _umijs_plugin_request_lib_ui__WEBPACK_IMPORTED_MODULE_6__.notification.open({
              description: errorMessage,
              message: errorCode
            });
            break;

          case ErrorShowType.REDIRECT:
            // @ts-ignore
            _core_umiExports__WEBPACK_IMPORTED_MODULE_5__.history.push({
              pathname: errorPage,
              query: {
                errorCode: errorCode,
                errorMessage: errorMessage
              }
            }); // redirect to error page

            break;

          default:
            _umijs_plugin_request_lib_ui__WEBPACK_IMPORTED_MODULE_6__.message.error(errorMessage);
            break;
        }
      } else {
        _umijs_plugin_request_lib_ui__WEBPACK_IMPORTED_MODULE_6__.message.error(error.message || 'Request error, please retry.');
      }

      throw error;
    }
  }, requestConfig)); // 中间件统一错误处理
  // 后端返回格式 { success: boolean, data: any }
  // 按照项目具体情况修改该部分逻辑

  requestMethodInstance.use( /*#__PURE__*/function () {
    var _ref = (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/(0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__.default)().mark(function _callee(ctx, next) {
      var _req$options;

      var req, res, options, getResponse, resData, errorInfo, error;
      return (0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__.default)().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return next();

            case 2:
              req = ctx.req, res = ctx.res; // @ts-ignore

              if (!((_req$options = req.options) !== null && _req$options !== void 0 && _req$options.skipErrorHandler)) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return");

            case 5:
              options = req.options;
              getResponse = options.getResponse;
              resData = getResponse ? res.data : res;
              errorInfo = errorAdaptor(resData, ctx);

              if (!(errorInfo.success === false)) {
                _context.next = 17;
                break;
              }

              // 抛出错误到 errorHandler 中处理
              error = new Error(errorInfo.errorMessage);
              error.name = 'BizError';
              error.data = resData;
              error.info = errorInfo;
              error.request = req;
              error.response = res;
              throw error;

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }()); // Add user custom middlewares

  var customMiddlewares = requestConfig.middlewares || [];
  customMiddlewares.forEach(function (mw) {
    requestMethodInstance.use(mw);
  }); // Add user custom interceptors

  var requestInterceptors = requestConfig.requestInterceptors || [];
  var responseInterceptors = requestConfig.responseInterceptors || [];
  requestInterceptors.map(function (ri) {
    requestMethodInstance.interceptors.request.use(ri);
  });
  responseInterceptors.map(function (ri) {
    requestMethodInstance.interceptors.response.use(ri);
  });
  return requestMethodInstance;
};

var request = function request(url, options) {
  var requestMethod = getRequestMethod();
  return requestMethod(url, options);
};



/***/ }),

/***/ "./src/.umi/plugin-request/ui/index.ts":
/*!*********************************************!*\
  !*** ./src/.umi/plugin-request/ui/index.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "message": function() { return /* reexport safe */ antd_es_message__WEBPACK_IMPORTED_MODULE_2__.default; },
/* harmony export */   "notification": function() { return /* reexport safe */ antd_es_notification__WEBPACK_IMPORTED_MODULE_3__.default; }
/* harmony export */ });
/* harmony import */ var antd_es_message_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/es/message/style */ "./node_modules/antd/es/message/style/index.js");
/* harmony import */ var antd_es_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/es/message */ "./node_modules/antd/es/message/index.js");
/* harmony import */ var antd_es_notification_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/es/notification/style */ "./node_modules/antd/es/notification/style/index.js");
/* harmony import */ var antd_es_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/es/notification */ "./node_modules/antd/es/notification/index.js");
// @ts-nocheck






/***/ }),

/***/ "./src/locales/bn-BD.ts":
/*!******************************!*\
  !*** ./src/locales/bn-BD.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _bn_BD_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bn-BD/component */ "./src/locales/bn-BD/component.ts");
/* harmony import */ var _bn_BD_globalHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bn-BD/globalHeader */ "./src/locales/bn-BD/globalHeader.ts");
/* harmony import */ var _bn_BD_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bn-BD/menu */ "./src/locales/bn-BD/menu.ts");
/* harmony import */ var _bn_BD_pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bn-BD/pages */ "./src/locales/bn-BD/pages.ts");
/* harmony import */ var _bn_BD_pwa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bn-BD/pwa */ "./src/locales/bn-BD/pwa.ts");
/* harmony import */ var _bn_BD_settingDrawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bn-BD/settingDrawer */ "./src/locales/bn-BD/settingDrawer.ts");
/* harmony import */ var _bn_BD_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bn-BD/settings */ "./src/locales/bn-BD/settings.ts");








/* harmony default export */ __webpack_exports__["default"] = ((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)({
  'navBar.lang': 'ভাষা',
  'layout.user.link.help': 'সহায়তা',
  'layout.user.link.privacy': 'গোপনীয়তা',
  'layout.user.link.terms': 'শর্তাদি',
  'app.copyright.produced': 'প্রযোজনা করেছেন অ্যান্ট ফিনান্সিয়াল এক্সপেরিয়েন্স ডিপার্টমেন্ট',
  'app.preview.down.block': 'আপনার স্থানীয় প্রকল্পে এই পৃষ্ঠাটি ডাউনলোড করুন',
  'app.welcome.link.fetch-blocks': 'সমস্ত ব্লক পান',
  'app.welcome.link.block-list': '`block` ডেভেলপমেন্ট এর উপর ভিত্তি করে দ্রুত স্ট্যান্ডার্ড, পৃষ্ঠাসমূহ তৈরি করুন।'
}, _bn_BD_globalHeader__WEBPACK_IMPORTED_MODULE_2__.default), _bn_BD_menu__WEBPACK_IMPORTED_MODULE_3__.default), _bn_BD_settingDrawer__WEBPACK_IMPORTED_MODULE_6__.default), _bn_BD_settings__WEBPACK_IMPORTED_MODULE_7__.default), _bn_BD_pwa__WEBPACK_IMPORTED_MODULE_5__.default), _bn_BD_component__WEBPACK_IMPORTED_MODULE_1__.default), _bn_BD_pages__WEBPACK_IMPORTED_MODULE_4__.default));

/***/ }),

/***/ "./src/locales/bn-BD/component.ts":
/*!****************************************!*\
  !*** ./src/locales/bn-BD/component.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'component.tagSelect.expand': 'বিস্তৃত',
  'component.tagSelect.collapse': 'সঙ্কুচিত',
  'component.tagSelect.all': 'সব'
});

/***/ }),

/***/ "./src/locales/bn-BD/globalHeader.ts":
/*!*******************************************!*\
  !*** ./src/locales/bn-BD/globalHeader.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'component.globalHeader.search': 'অনুসন্ধান করুন',
  'component.globalHeader.search.example1': 'অনুসন্ধান উদাহরণ ১',
  'component.globalHeader.search.example2': 'অনুসন্ধান উদাহরণ ২',
  'component.globalHeader.search.example3': 'অনুসন্ধান উদাহরণ ৩',
  'component.globalHeader.help': 'সহায়তা',
  'component.globalHeader.notification': 'বিজ্ঞপ্তি',
  'component.globalHeader.notification.empty': 'আপনি সমস্ত বিজ্ঞপ্তি দেখেছেন।',
  'component.globalHeader.message': 'বার্তা',
  'component.globalHeader.message.empty': 'আপনি সমস্ত বার্তা দেখেছেন।',
  'component.globalHeader.event': 'ঘটনা',
  'component.globalHeader.event.empty': 'আপনি সমস্ত ইভেন্ট দেখেছেন।',
  'component.noticeIcon.clear': 'সাফ',
  'component.noticeIcon.cleared': 'সাফ করা হয়েছে',
  'component.noticeIcon.empty': 'বিজ্ঞপ্তি নেই',
  'component.noticeIcon.view-more': 'আরো দেখুন'
});

/***/ }),

/***/ "./src/locales/bn-BD/menu.ts":
/*!***********************************!*\
  !*** ./src/locales/bn-BD/menu.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'menu.welcome': 'স্বাগতম',
  'menu.more-blocks': 'আরও ব্লক',
  'menu.home': 'নীড়',
  'menu.admin': 'অ্যাডমিন',
  'menu.admin.sub-page': 'উপ-পৃষ্ঠা',
  'menu.login': 'প্রবেশ',
  'menu.register': 'নিবন্ধন',
  'menu.register-result': 'নিবন্ধনে ফলাফল',
  'menu.dashboard': 'ড্যাশবোর্ড',
  'menu.dashboard.analysis': 'বিশ্লেষণ',
  'menu.dashboard.monitor': 'নিরীক্ষণ',
  'menu.dashboard.workplace': 'কর্মক্ষেত্র',
  'menu.exception.403': '403',
  'menu.exception.404': '404',
  'menu.exception.500': '500',
  'menu.form': 'ফর্ম',
  'menu.form.basic-form': 'বেসিক ফর্ম',
  'menu.form.step-form': 'পদক্ষেপ ফর্ম',
  'menu.form.step-form.info': 'পদক্ষেপ ফর্ম (স্থানান্তর তথ্য লিখুন)',
  'menu.form.step-form.confirm': 'পদক্ষেপ ফর্ম (স্থানান্তর তথ্য নিশ্চিত করুন)',
  'menu.form.step-form.result': 'পদক্ষেপ ফর্ম (সমাপ্ত)',
  'menu.form.advanced-form': 'উন্নত ফর্ম',
  'menu.list': 'তালিকা',
  'menu.list.table-list': 'অনুসন্ধানের টেবিল',
  'menu.list.basic-list': 'বেসিক তালিকা',
  'menu.list.card-list': 'কার্ডের তালিকা',
  'menu.list.search-list': 'অনুসন্ধানের তালিকা',
  'menu.list.search-list.articles': 'অনুসন্ধানের তালিকা (নিবন্ধসমূহ)',
  'menu.list.search-list.projects': 'অনুসন্ধানের তালিকা (প্রকল্পগুলি)',
  'menu.list.search-list.applications': 'অনুসন্ধানের তালিকা (অ্যাপ্লিকেশন)',
  'menu.profile': 'প্রোফাইল',
  'menu.profile.basic': 'বেসিক প্রোফাইল',
  'menu.profile.advanced': 'উন্নত প্রোফাইল',
  'menu.result': 'ফলাফল',
  'menu.result.success': 'সাফল্য',
  'menu.result.fail': 'ব্যর্থ',
  'menu.exception': 'ব্যতিক্রম',
  'menu.exception.not-permission': '403',
  'menu.exception.not-find': '404',
  'menu.exception.server-error': '500',
  'menu.exception.trigger': 'ট্রিগার',
  'menu.account': 'হিসাব',
  'menu.account.center': 'অ্যাকাউন্ট কেন্দ্র',
  'menu.account.settings': 'অ্যাকাউন্ট সেটিংস',
  'menu.account.trigger': 'ট্রিগার ত্রুটি',
  'menu.account.logout': 'প্রস্থান',
  'menu.editor': 'গ্রাফিক সম্পাদক',
  'menu.editor.flow': 'ফ্লো এডিটর',
  'menu.editor.mind': 'মাইন্ড এডিটর',
  'menu.editor.koni': 'কোনি সম্পাদক'
});

/***/ }),

/***/ "./src/locales/bn-BD/pages.ts":
/*!************************************!*\
  !*** ./src/locales/bn-BD/pages.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'pages.layouts.userLayout.title': 'পিঁপড়া ডিজাইন হচ্ছে সিহু জেলার সবচেয়ে প্রভাবশালী ওয়েব ডিজাইনের স্পেসিফিকেশন',
  'pages.login.accountLogin.tab': 'অ্যাকাউন্টে লগইন',
  'pages.login.accountLogin.errorMessage': 'ভুল ব্যবহারকারীর নাম/পাসওয়ার্ড(admin/ant.design)',
  'pages.login.failure': 'লগইন ব্যর্থ হয়েছে। আবার চেষ্টা করুন!',
  'pages.login.success': 'সফল লগইন!',
  'pages.login.username.placeholder': 'ব্যবহারকারীর নাম: admin or user',
  'pages.login.username.required': 'আপনার ব্যবহারকারীর নাম ইনপুট করুন!',
  'pages.login.password.placeholder': 'পাসওয়ার্ড: ant.design',
  'pages.login.password.required': 'আপনার পাসওয়ার্ড ইনপুট করুন!',
  'pages.login.phoneLogin.tab': 'ফোন লগইন',
  'pages.login.phoneLogin.errorMessage': 'যাচাইকরণ কোড ত্রুটি',
  'pages.login.phoneNumber.placeholder': 'ফোন নম্বর',
  'pages.login.phoneNumber.required': 'আপনার ফোন নম্বর ইনপুট করুন!',
  'pages.login.phoneNumber.invalid': 'ফোন নম্বরটি সঠিক নয়!',
  'pages.login.captcha.placeholder': 'যাচাইকরণের কোড',
  'pages.login.captcha.required': 'দয়া করে ভেরিফিকেশন কোডটি ইনপুট করুন!',
  'pages.login.phoneLogin.getVerificationCode': 'কোড পান',
  'pages.getCaptchaSecondText': 'সেকেন্ড',
  'pages.login.rememberMe': 'আমাকে মনে রাখুন',
  'pages.login.forgotPassword': 'পাসওয়ার্ড ভুলে গেছেন?',
  'pages.login.submit': 'প্রবেশ করুন',
  'pages.login.loginWith': 'লগইন করতে পারেন:',
  'pages.login.registerAccount': 'অ্যাকাউন্ট নিবন্ধন করুন',
  'pages.welcome.link': 'স্বাগতম',
  'pages.welcome.alertMessage': 'দ্রুত এবং শক্তিশালী ভারী শুল্ক উপাদান প্রকাশ করা হয়েছে।',
  'pages.admin.subPage.title': 'এই পৃষ্ঠাটি কেবল অ্যাডমিন দ্বারা দেখা যাবে',
  'pages.admin.subPage.alertMessage': 'UMI UI এখন প্রকাশিত হয়েছে, অভিজ্ঞতা শুরু করতে npm run ui ব্যবহার করতে স্বাগতম।',
  'pages.searchTable.createForm.newRule': 'নতুন বিধি',
  'pages.searchTable.updateForm.ruleConfig': 'বিধি কনফিগারেশন',
  'pages.searchTable.updateForm.basicConfig': 'মৌলিক তথ্য',
  'pages.searchTable.updateForm.ruleName.nameLabel': 'বিধি নাম',
  'pages.searchTable.updateForm.ruleName.nameRules': 'বিধির নাম লিখুন!',
  'pages.searchTable.updateForm.ruleDesc.descLabel': 'বিধির বিবরণ',
  'pages.searchTable.updateForm.ruleDesc.descPlaceholder': 'কমপক্ষে পাঁচটি অক্ষর লিখুন',
  'pages.searchTable.updateForm.ruleDesc.descRules': 'কমপক্ষে পাঁচটি অক্ষরের একটি বিধান বিবরণ লিখুন!',
  'pages.searchTable.updateForm.ruleProps.title': 'বৈশিষ্ট্য কনফিগার করুন',
  'pages.searchTable.updateForm.object': 'নিরীক্ষণ অবজেক্ট',
  'pages.searchTable.updateForm.ruleProps.templateLabel': 'বিধি টেম্পলেট',
  'pages.searchTable.updateForm.ruleProps.typeLabel': 'বিধি প্রকার',
  'pages.searchTable.updateForm.schedulingPeriod.title': 'সময়সূচী নির্ধারণ করুন',
  'pages.searchTable.updateForm.schedulingPeriod.timeLabel': 'শুরুর সময়',
  'pages.searchTable.updateForm.schedulingPeriod.timeRules': 'একটি শুরুর সময় চয়ন করুন!',
  'pages.searchTable.titleDesc': 'বর্ণনা',
  'pages.searchTable.ruleName': 'বিধি নাম প্রয়োজন',
  'pages.searchTable.titleCallNo': 'পরিষেবা কল সংখ্যা',
  'pages.searchTable.titleStatus': 'অবস্থা',
  'pages.searchTable.nameStatus.default': 'ডিফল্ট',
  'pages.searchTable.nameStatus.running': 'চলমান',
  'pages.searchTable.nameStatus.online': 'অনলাইন',
  'pages.searchTable.nameStatus.abnormal': 'অস্বাভাবিক',
  'pages.searchTable.titleUpdatedAt': 'সর্বশেষ নির্ধারিত',
  'pages.searchTable.exception': 'ব্যতিক্রম জন্য কারণ লিখুন!',
  'pages.searchTable.titleOption': 'অপশন',
  'pages.searchTable.config': 'কনফিগারেশন',
  'pages.searchTable.subscribeAlert': 'সতর্কতা সাবস্ক্রাইব করুন',
  'pages.searchTable.title': 'ইনকয়েরি ফরম',
  'pages.searchTable.new': 'নতুন',
  'pages.searchTable.chosen': 'নির্বাচিত',
  'pages.searchTable.item': 'আইটেম',
  'pages.searchTable.totalServiceCalls': 'পরিষেবা কলগুলির মোট সংখ্যা',
  'pages.searchTable.tenThousand': '000',
  'pages.searchTable.batchDeletion': 'একসাখে ডিলিট',
  'pages.searchTable.batchApproval': 'একসাখে অনুমোদন'
});

/***/ }),

/***/ "./src/locales/bn-BD/pwa.ts":
/*!**********************************!*\
  !*** ./src/locales/bn-BD/pwa.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'app.pwa.offline': 'আপনি এখন অফলাইন',
  'app.pwa.serviceworker.updated': 'নতুন সামগ্রী উপলব্ধ',
  'app.pwa.serviceworker.updated.hint': 'বর্তমান পৃষ্ঠাটি পুনরায় লোড করতে দয়া করে "রিফ্রেশ" বোতাম টিপুন',
  'app.pwa.serviceworker.updated.ok': 'রিফ্রেশ'
});

/***/ }),

/***/ "./src/locales/bn-BD/settingDrawer.ts":
/*!********************************************!*\
  !*** ./src/locales/bn-BD/settingDrawer.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'app.setting.pagestyle': 'পৃষ্ঠা স্টাইল সেটিং',
  'app.setting.pagestyle.dark': 'ডার্ক স্টাইল',
  'app.setting.pagestyle.light': 'লাইট স্টাইল',
  'app.setting.content-width': 'সামগ্রীর প্রস্থ',
  'app.setting.content-width.fixed': 'স্থির',
  'app.setting.content-width.fluid': 'প্রবাহী',
  'app.setting.themecolor': 'থিম রঙ',
  'app.setting.themecolor.dust': 'ডাস্ট রেড',
  'app.setting.themecolor.volcano': 'আগ্নেয়গিরি',
  'app.setting.themecolor.sunset': 'সানসেট কমলা',
  'app.setting.themecolor.cyan': 'সবুজাভ নীল',
  'app.setting.themecolor.green': 'পোলার সবুজ',
  'app.setting.themecolor.daybreak': 'দিবস ব্রেক ব্লু (ডিফল্ট)',
  'app.setting.themecolor.geekblue': 'গিক আঠালো',
  'app.setting.themecolor.purple': 'গোল্ডেন বেগুনি',
  'app.setting.navigationmode': 'নেভিগেশন মোড',
  'app.setting.sidemenu': 'সাইড মেনু লেআউট',
  'app.setting.topmenu': 'টপ মেনু লেআউট',
  'app.setting.fixedheader': 'স্থির হেডার',
  'app.setting.fixedsidebar': 'স্থির সাইডবার',
  'app.setting.fixedsidebar.hint': 'সাইড মেনু বিন্যাসে কাজ করে',
  'app.setting.hideheader': 'স্ক্রোল করার সময় হেডার লুকানো',
  'app.setting.hideheader.hint': 'লুকানো হেডার সক্ষম থাকলে কাজ করে',
  'app.setting.othersettings': 'অন্যান্য সেটিংস্',
  'app.setting.weakmode': 'দুর্বল মোড',
  'app.setting.copy': 'সেটিং কপি করুন',
  'app.setting.copyinfo': 'সাফল্যের অনুলিপি করুন - প্রতিস্থাপন করুন: src/models/setting.js',
  'app.setting.production.hint': 'কেবল বিকাশের পরিবেশে প্যানেল শো সেট করা হচ্ছে, দয়া করে ম্যানুয়ালি সংশোধন করুন'
});

/***/ }),

/***/ "./src/locales/bn-BD/settings.ts":
/*!***************************************!*\
  !*** ./src/locales/bn-BD/settings.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'app.settings.menuMap.basic': 'মৌলিক বৈশিষ্ট্যসহ',
  'app.settings.menuMap.security': 'নিরাপত্তা বিন্যাস',
  'app.settings.menuMap.binding': 'অ্যাকাউন্ট বাঁধাই',
  'app.settings.menuMap.notification': 'নতুন বার্তা বিজ্ঞপ্তি',
  'app.settings.basic.avatar': 'অবতার',
  'app.settings.basic.change-avatar': 'অবতার পরিবর্তন করুন',
  'app.settings.basic.email': 'ইমেইল',
  'app.settings.basic.email-message': 'আপনার ইমেইল ইনপুট করুন!',
  'app.settings.basic.nickname': 'ডাক নাম',
  'app.settings.basic.nickname-message': 'আপনার ডাকনামটি ইনপুট করুন!',
  'app.settings.basic.profile': 'ব্যক্তিগত প্রোফাইল',
  'app.settings.basic.profile-message': 'আপনার ব্যক্তিগত প্রোফাইল ইনপুট করুন!',
  'app.settings.basic.profile-placeholder': 'নিজের সাথে সংক্ষিপ্ত পরিচয়',
  'app.settings.basic.country': 'দেশ/অঞ্চল',
  'app.settings.basic.country-message': 'আপনার দেশ ইনপুট করুন!',
  'app.settings.basic.geographic': 'প্রদেশ বা শহর',
  'app.settings.basic.geographic-message': 'আপনার ভৌগলিক তথ্য ইনপুট করুন!',
  'app.settings.basic.address': 'রাস্তার ঠিকানা',
  'app.settings.basic.address-message': 'দয়া করে আপনার ঠিকানা ইনপুট করুন!',
  'app.settings.basic.phone': 'ফোন নম্বর',
  'app.settings.basic.phone-message': 'আপনার ফোন ইনপুট করুন!',
  'app.settings.basic.update': 'তথ্য হালনাগাদ',
  'app.settings.security.strong': 'শক্তিশালী',
  'app.settings.security.medium': 'মধ্যম',
  'app.settings.security.weak': 'দুর্বল',
  'app.settings.security.password': 'অ্যাকাউন্টের পাসওয়ার্ড',
  'app.settings.security.password-description': 'বর্তমান পাসওয়ার্ড শক্তি',
  'app.settings.security.phone': 'সুরক্ষা ফোন',
  'app.settings.security.phone-description': 'আবদ্ধ ফোন',
  'app.settings.security.question': 'নিরাপত্তা প্রশ্ন',
  'app.settings.security.question-description': 'সুরক্ষা প্রশ্ন সেট করা নেই, এবং সুরক্ষা নীতি কার্যকরভাবে অ্যাকাউন্ট সুরক্ষা রক্ষা করতে পারে',
  'app.settings.security.email': 'ব্যাকআপ ইমেইল',
  'app.settings.security.email-description': 'বাউন্ড ইমেইল',
  'app.settings.security.mfa': 'MFA ডিভাইস',
  'app.settings.security.mfa-description': "আনবাউন্ড এমএফএ ডিভাইস, বাঁধাইয়ের পরে, দু'বার নিশ্চিত করা যায়",
  'app.settings.security.modify': 'পরিবর্তন করুন',
  'app.settings.security.set': 'সেট',
  'app.settings.security.bind': 'বাঁধাই',
  'app.settings.binding.taobao': 'বাঁধাই তাওবাও',
  'app.settings.binding.taobao-description': 'বর্তমানে আনবাউন্ড তাওবাও অ্যাকাউন্ট',
  'app.settings.binding.alipay': 'বাইন্ডিং আলিপে',
  'app.settings.binding.alipay-description': 'বর্তমানে আনবাউন্ড আলিপে অ্যাকাউন্ট',
  'app.settings.binding.dingding': 'বাঁধাই ডিঙ্গটালক',
  'app.settings.binding.dingding-description': 'বর্তমানে আনবাউন্ড ডিঙ্গটাল অ্যাকাউন্ট',
  'app.settings.binding.bind': 'বাঁধাই',
  'app.settings.notification.password': 'অ্যাকাউন্টের পাসওয়ার্ড',
  'app.settings.notification.password-description': 'অন্যান্য ব্যবহারকারীর বার্তাগুলি স্টেশন চিঠি আকারে জানানো হবে',
  'app.settings.notification.messages': 'সিস্টেম বার্তা',
  'app.settings.notification.messages-description': 'সিস্টেম বার্তাগুলি স্টেশন চিঠির আকারে জানানো হবে',
  'app.settings.notification.todo': 'করণীয় বিজ্ঞপ্তি',
  'app.settings.notification.todo-description': 'করণীয় তালিকাটি স্টেশন থেকে চিঠি আকারে জানানো হবে',
  'app.settings.open': 'খোলা',
  'app.settings.close': 'বন্ধ'
});

/***/ }),

/***/ "./src/locales/en-US.ts":
/*!******************************!*\
  !*** ./src/locales/en-US.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _en_US_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./en-US/component */ "./src/locales/en-US/component.ts");
/* harmony import */ var _en_US_globalHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./en-US/globalHeader */ "./src/locales/en-US/globalHeader.ts");
/* harmony import */ var _en_US_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./en-US/menu */ "./src/locales/en-US/menu.ts");
/* harmony import */ var _en_US_pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./en-US/pages */ "./src/locales/en-US/pages.ts");
/* harmony import */ var _en_US_pwa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./en-US/pwa */ "./src/locales/en-US/pwa.ts");
/* harmony import */ var _en_US_settingDrawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./en-US/settingDrawer */ "./src/locales/en-US/settingDrawer.ts");
/* harmony import */ var _en_US_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./en-US/settings */ "./src/locales/en-US/settings.ts");








/* harmony default export */ __webpack_exports__["default"] = ((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)({
  'navBar.lang': 'Languages',
  'layout.user.link.help': 'Help',
  'layout.user.link.privacy': 'Privacy',
  'layout.user.link.terms': 'Terms',
  'app.copyright.produced': 'Produced by Ant Financial Experience Department',
  'app.preview.down.block': 'Download this page to your local project',
  'app.welcome.link.fetch-blocks': 'Get all block',
  'app.welcome.link.block-list': 'Quickly build standard, pages based on `block` development'
}, _en_US_globalHeader__WEBPACK_IMPORTED_MODULE_2__.default), _en_US_menu__WEBPACK_IMPORTED_MODULE_3__.default), _en_US_settingDrawer__WEBPACK_IMPORTED_MODULE_6__.default), _en_US_settings__WEBPACK_IMPORTED_MODULE_7__.default), _en_US_pwa__WEBPACK_IMPORTED_MODULE_5__.default), _en_US_component__WEBPACK_IMPORTED_MODULE_1__.default), _en_US_pages__WEBPACK_IMPORTED_MODULE_4__.default));

/***/ }),

/***/ "./src/locales/en-US/component.ts":
/*!****************************************!*\
  !*** ./src/locales/en-US/component.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'component.tagSelect.expand': 'Expand',
  'component.tagSelect.collapse': 'Collapse',
  'component.tagSelect.all': 'All'
});

/***/ }),

/***/ "./src/locales/en-US/globalHeader.ts":
/*!*******************************************!*\
  !*** ./src/locales/en-US/globalHeader.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'component.globalHeader.search': 'Search',
  'component.globalHeader.search.example1': 'Search example 1',
  'component.globalHeader.search.example2': 'Search example 2',
  'component.globalHeader.search.example3': 'Search example 3',
  'component.globalHeader.help': 'Help',
  'component.globalHeader.notification': 'Notification',
  'component.globalHeader.notification.empty': 'You have viewed all notifications.',
  'component.globalHeader.message': 'Message',
  'component.globalHeader.message.empty': 'You have viewed all messsages.',
  'component.globalHeader.event': 'Event',
  'component.globalHeader.event.empty': 'You have viewed all events.',
  'component.noticeIcon.clear': 'Clear',
  'component.noticeIcon.cleared': 'Cleared',
  'component.noticeIcon.empty': 'No notifications',
  'component.noticeIcon.view-more': 'View more'
});

/***/ }),

/***/ "./src/locales/en-US/menu.ts":
/*!***********************************!*\
  !*** ./src/locales/en-US/menu.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'menu.welcome': 'Welcome',
  'menu.more-blocks': 'More Blocks',
  'menu.home': 'Home',
  'menu.admin': 'Admin',
  'menu.admin.sub-page': 'Sub-Page',
  'menu.login': 'Login',
  'menu.register': 'Register',
  'menu.register-result': 'Register Result',
  'menu.dashboard': 'Dashboard',
  'menu.dashboard.analysis': 'Analysis',
  'menu.dashboard.monitor': 'Monitor',
  'menu.dashboard.workplace': 'Workplace',
  'menu.exception.403': '403',
  'menu.exception.404': '404',
  'menu.exception.500': '500',
  'menu.form': 'Form',
  'menu.form.basic-form': 'Basic Form',
  'menu.form.step-form': 'Step Form',
  'menu.form.step-form.info': 'Step Form(write transfer information)',
  'menu.form.step-form.confirm': 'Step Form(confirm transfer information)',
  'menu.form.step-form.result': 'Step Form(finished)',
  'menu.form.advanced-form': 'Advanced Form',
  'menu.list': 'List',
  'menu.list.table-list': 'Search Table',
  'menu.list.basic-list': 'Basic List',
  'menu.list.card-list': 'Card List',
  'menu.list.search-list': 'Search List',
  'menu.list.search-list.articles': 'Search List(articles)',
  'menu.list.search-list.projects': 'Search List(projects)',
  'menu.list.search-list.applications': 'Search List(applications)',
  'menu.profile': 'Profile',
  'menu.profile.basic': 'Basic Profile',
  'menu.profile.advanced': 'Advanced Profile',
  'menu.result': 'Result',
  'menu.result.success': 'Success',
  'menu.result.fail': 'Fail',
  'menu.exception': 'Exception',
  'menu.exception.not-permission': '403',
  'menu.exception.not-find': '404',
  'menu.exception.server-error': '500',
  'menu.exception.trigger': 'Trigger',
  'menu.account': 'Account',
  'menu.account.center': 'Account Center',
  'menu.account.settings': 'Account Settings',
  'menu.account.trigger': 'Trigger Error',
  'menu.account.logout': 'Logout',
  'menu.editor': 'Graphic Editor',
  'menu.editor.flow': 'Flow Editor',
  'menu.editor.mind': 'Mind Editor',
  'menu.editor.koni': 'Koni Editor'
});

/***/ }),

/***/ "./src/locales/en-US/pages.ts":
/*!************************************!*\
  !*** ./src/locales/en-US/pages.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'pages.layouts.userLayout.title': 'Ant Design is the most influential web design specification in Xihu district',
  'pages.login.accountLogin.tab': 'Account Login',
  'pages.login.accountLogin.errorMessage': 'Incorrect username/password(admin/ant.design)',
  'pages.login.failure': 'Login failed, please try again!',
  'pages.login.success': 'Login successful!',
  'pages.login.username.placeholder': 'Username: admin or user',
  'pages.login.username.required': 'Please input your username!',
  'pages.login.password.placeholder': 'Password: ant.design',
  'pages.login.password.required': 'Please input your password!',
  'pages.login.phoneLogin.tab': 'Phone Login',
  'pages.login.phoneLogin.errorMessage': 'Verification Code Error',
  'pages.login.phoneNumber.placeholder': 'Phone Number',
  'pages.login.phoneNumber.required': 'Please input your phone number!',
  'pages.login.phoneNumber.invalid': 'Phone number is invalid!',
  'pages.login.captcha.placeholder': 'Verification Code',
  'pages.login.captcha.required': 'Please input verification code!',
  'pages.login.phoneLogin.getVerificationCode': 'Get Code',
  'pages.getCaptchaSecondText': 'sec(s)',
  'pages.login.rememberMe': 'Remember me',
  'pages.login.forgotPassword': 'Forgot Password ?',
  'pages.login.submit': 'Login',
  'pages.login.loginWith': 'Login with :',
  'pages.login.registerAccount': 'Register Account',
  'pages.welcome.link': 'Welcome',
  'pages.welcome.alertMessage': 'Faster and stronger heavy-duty components have been released.',
  'pages.admin.subPage.title': 'This page can only be viewed by Admin',
  'pages.admin.subPage.alertMessage': 'Umi ui is now released, welcome to use npm run ui to start the experience.',
  'pages.searchTable.createForm.newRule': 'New Rule',
  'pages.searchTable.updateForm.ruleConfig': 'Rule configuration',
  'pages.searchTable.updateForm.basicConfig': 'Basic Information',
  'pages.searchTable.updateForm.ruleName.nameLabel': 'Rule Name',
  'pages.searchTable.updateForm.ruleName.nameRules': 'Please enter the rule name!',
  'pages.searchTable.updateForm.ruleDesc.descLabel': 'Rule Description',
  'pages.searchTable.updateForm.ruleDesc.descPlaceholder': 'Please enter at least five characters',
  'pages.searchTable.updateForm.ruleDesc.descRules': 'Please enter a rule description of at least five characters!',
  'pages.searchTable.updateForm.ruleProps.title': 'Configure Properties',
  'pages.searchTable.updateForm.object': 'Monitoring Object',
  'pages.searchTable.updateForm.ruleProps.templateLabel': 'Rule Template',
  'pages.searchTable.updateForm.ruleProps.typeLabel': 'Rule Type',
  'pages.searchTable.updateForm.schedulingPeriod.title': 'Set Scheduling Period',
  'pages.searchTable.updateForm.schedulingPeriod.timeLabel': 'Starting Time',
  'pages.searchTable.updateForm.schedulingPeriod.timeRules': 'Please choose a start time!',
  'pages.searchTable.titleDesc': 'Description',
  'pages.searchTable.ruleName': 'Rule name is required',
  'pages.searchTable.titleCallNo': 'Number of Service Calls',
  'pages.searchTable.titleStatus': 'Status',
  'pages.searchTable.nameStatus.default': 'default',
  'pages.searchTable.nameStatus.running': 'running',
  'pages.searchTable.nameStatus.online': 'online',
  'pages.searchTable.nameStatus.abnormal': 'abnormal',
  'pages.searchTable.titleUpdatedAt': 'Last Scheduled at',
  'pages.searchTable.exception': 'Please enter the reason for the exception!',
  'pages.searchTable.titleOption': 'Option',
  'pages.searchTable.config': 'Configuration',
  'pages.searchTable.subscribeAlert': 'Subscribe to alerts',
  'pages.searchTable.title': 'Enquiry Form',
  'pages.searchTable.new': 'New',
  'pages.searchTable.chosen': 'chosen',
  'pages.searchTable.item': 'item',
  'pages.searchTable.totalServiceCalls': 'Total Number of Service Calls',
  'pages.searchTable.tenThousand': '0000',
  'pages.searchTable.batchDeletion': 'bacth deletion',
  'pages.searchTable.batchApproval': 'batch approval'
});

/***/ }),

/***/ "./src/locales/en-US/pwa.ts":
/*!**********************************!*\
  !*** ./src/locales/en-US/pwa.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'app.pwa.offline': 'You are offline now',
  'app.pwa.serviceworker.updated': 'New content is available',
  'app.pwa.serviceworker.updated.hint': 'Please press the "Refresh" button to reload current page',
  'app.pwa.serviceworker.updated.ok': 'Refresh'
});

/***/ }),

/***/ "./src/locales/en-US/settingDrawer.ts":
/*!********************************************!*\
  !*** ./src/locales/en-US/settingDrawer.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'app.setting.pagestyle': 'Page style setting',
  'app.setting.pagestyle.dark': 'Dark style',
  'app.setting.pagestyle.light': 'Light style',
  'app.setting.content-width': 'Content Width',
  'app.setting.content-width.fixed': 'Fixed',
  'app.setting.content-width.fluid': 'Fluid',
  'app.setting.themecolor': 'Theme Color',
  'app.setting.themecolor.dust': 'Dust Red',
  'app.setting.themecolor.volcano': 'Volcano',
  'app.setting.themecolor.sunset': 'Sunset Orange',
  'app.setting.themecolor.cyan': 'Cyan',
  'app.setting.themecolor.green': 'Polar Green',
  'app.setting.themecolor.daybreak': 'Daybreak Blue (default)',
  'app.setting.themecolor.geekblue': 'Geek Glue',
  'app.setting.themecolor.purple': 'Golden Purple',
  'app.setting.navigationmode': 'Navigation Mode',
  'app.setting.sidemenu': 'Side Menu Layout',
  'app.setting.topmenu': 'Top Menu Layout',
  'app.setting.fixedheader': 'Fixed Header',
  'app.setting.fixedsidebar': 'Fixed Sidebar',
  'app.setting.fixedsidebar.hint': 'Works on Side Menu Layout',
  'app.setting.hideheader': 'Hidden Header when scrolling',
  'app.setting.hideheader.hint': 'Works when Hidden Header is enabled',
  'app.setting.othersettings': 'Other Settings',
  'app.setting.weakmode': 'Weak Mode',
  'app.setting.copy': 'Copy Setting',
  'app.setting.copyinfo': 'copy success，please replace defaultSettings in src/models/setting.js',
  'app.setting.production.hint': 'Setting panel shows in development environment only, please manually modify'
});

/***/ }),

/***/ "./src/locales/en-US/settings.ts":
/*!***************************************!*\
  !*** ./src/locales/en-US/settings.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'app.settings.menuMap.basic': 'Basic Settings',
  'app.settings.menuMap.security': 'Security Settings',
  'app.settings.menuMap.binding': 'Account Binding',
  'app.settings.menuMap.notification': 'New Message Notification',
  'app.settings.basic.avatar': 'Avatar',
  'app.settings.basic.change-avatar': 'Change avatar',
  'app.settings.basic.email': 'Email',
  'app.settings.basic.email-message': 'Please input your email!',
  'app.settings.basic.nickname': 'Nickname',
  'app.settings.basic.nickname-message': 'Please input your Nickname!',
  'app.settings.basic.profile': 'Personal profile',
  'app.settings.basic.profile-message': 'Please input your personal profile!',
  'app.settings.basic.profile-placeholder': 'Brief introduction to yourself',
  'app.settings.basic.country': 'Country/Region',
  'app.settings.basic.country-message': 'Please input your country!',
  'app.settings.basic.geographic': 'Province or city',
  'app.settings.basic.geographic-message': 'Please input your geographic info!',
  'app.settings.basic.address': 'Street Address',
  'app.settings.basic.address-message': 'Please input your address!',
  'app.settings.basic.phone': 'Phone Number',
  'app.settings.basic.phone-message': 'Please input your phone!',
  'app.settings.basic.update': 'Update Information',
  'app.settings.security.strong': 'Strong',
  'app.settings.security.medium': 'Medium',
  'app.settings.security.weak': 'Weak',
  'app.settings.security.password': 'Account Password',
  'app.settings.security.password-description': 'Current password strength',
  'app.settings.security.phone': 'Security Phone',
  'app.settings.security.phone-description': 'Bound phone',
  'app.settings.security.question': 'Security Question',
  'app.settings.security.question-description': 'The security question is not set, and the security policy can effectively protect the account security',
  'app.settings.security.email': 'Backup Email',
  'app.settings.security.email-description': 'Bound Email',
  'app.settings.security.mfa': 'MFA Device',
  'app.settings.security.mfa-description': 'Unbound MFA device, after binding, can be confirmed twice',
  'app.settings.security.modify': 'Modify',
  'app.settings.security.set': 'Set',
  'app.settings.security.bind': 'Bind',
  'app.settings.binding.taobao': 'Binding Taobao',
  'app.settings.binding.taobao-description': 'Currently unbound Taobao account',
  'app.settings.binding.alipay': 'Binding Alipay',
  'app.settings.binding.alipay-description': 'Currently unbound Alipay account',
  'app.settings.binding.dingding': 'Binding DingTalk',
  'app.settings.binding.dingding-description': 'Currently unbound DingTalk account',
  'app.settings.binding.bind': 'Bind',
  'app.settings.notification.password': 'Account Password',
  'app.settings.notification.password-description': 'Messages from other users will be notified in the form of a station letter',
  'app.settings.notification.messages': 'System Messages',
  'app.settings.notification.messages-description': 'System messages will be notified in the form of a station letter',
  'app.settings.notification.todo': 'To-do Notification',
  'app.settings.notification.todo-description': 'The to-do list will be notified in the form of a letter from the station',
  'app.settings.open': 'Open',
  'app.settings.close': 'Close'
});

/***/ }),

/***/ "./src/locales/fa-IR.ts":
/*!******************************!*\
  !*** ./src/locales/fa-IR.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _fa_IR_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fa-IR/component */ "./src/locales/fa-IR/component.ts");
/* harmony import */ var _fa_IR_globalHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fa-IR/globalHeader */ "./src/locales/fa-IR/globalHeader.ts");
/* harmony import */ var _fa_IR_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fa-IR/menu */ "./src/locales/fa-IR/menu.ts");
/* harmony import */ var _fa_IR_pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fa-IR/pages */ "./src/locales/fa-IR/pages.ts");
/* harmony import */ var _fa_IR_pwa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fa-IR/pwa */ "./src/locales/fa-IR/pwa.ts");
/* harmony import */ var _fa_IR_settingDrawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fa-IR/settingDrawer */ "./src/locales/fa-IR/settingDrawer.ts");
/* harmony import */ var _fa_IR_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fa-IR/settings */ "./src/locales/fa-IR/settings.ts");








/* harmony default export */ __webpack_exports__["default"] = ((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)({
  'navBar.lang': 'زبان ها  ',
  'layout.user.link.help': 'کمک',
  'layout.user.link.privacy': 'حریم خصوصی',
  'layout.user.link.terms': 'مقررات',
  'app.preview.down.block': 'این صفحه را در پروژه محلی خود بارگیری کنید',
  'app.welcome.link.fetch-blocks': 'دریافت تمام بلوک',
  'app.welcome.link.block-list': 'به سرعت صفحات استاندارد مبتنی بر توسعه "بلوک" را بسازید'
}, _fa_IR_globalHeader__WEBPACK_IMPORTED_MODULE_2__.default), _fa_IR_menu__WEBPACK_IMPORTED_MODULE_3__.default), _fa_IR_settingDrawer__WEBPACK_IMPORTED_MODULE_6__.default), _fa_IR_settings__WEBPACK_IMPORTED_MODULE_7__.default), _fa_IR_pwa__WEBPACK_IMPORTED_MODULE_5__.default), _fa_IR_component__WEBPACK_IMPORTED_MODULE_1__.default), _fa_IR_pages__WEBPACK_IMPORTED_MODULE_4__.default));

/***/ }),

/***/ "./src/locales/fa-IR/component.ts":
/*!****************************************!*\
  !*** ./src/locales/fa-IR/component.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'component.tagSelect.expand': 'باز',
  'component.tagSelect.collapse': 'بسته ',
  'component.tagSelect.all': 'همه'
});

/***/ }),

/***/ "./src/locales/fa-IR/globalHeader.ts":
/*!*******************************************!*\
  !*** ./src/locales/fa-IR/globalHeader.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'component.globalHeader.search': 'جستجو ',
  'component.globalHeader.search.example1': 'مثال 1 را جستجو کنید',
  'component.globalHeader.search.example2': 'مثال 2 را جستجو کنید',
  'component.globalHeader.search.example3': 'مثال 3 را جستجو کنید',
  'component.globalHeader.help': 'کمک',
  'component.globalHeader.notification': 'اعلان',
  'component.globalHeader.notification.empty': 'شما همه اعلان ها را مشاهده کرده اید.',
  'component.globalHeader.message': 'پیام',
  'component.globalHeader.message.empty': 'شما همه پیام ها را مشاهده کرده اید.',
  'component.globalHeader.event': 'رویداد',
  'component.globalHeader.event.empty': 'شما همه رویدادها را مشاهده کرده اید.',
  'component.noticeIcon.clear': 'پاک کردن',
  'component.noticeIcon.cleared': 'پاک شد',
  'component.noticeIcon.empty': 'بدون اعلان',
  'component.noticeIcon.view-more': 'نمایش بیشتر'
});

/***/ }),

/***/ "./src/locales/fa-IR/menu.ts":
/*!***********************************!*\
  !*** ./src/locales/fa-IR/menu.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'menu.welcome': 'خوش آمدید',
  'menu.more-blocks': 'بلوک های بیشتر',
  'menu.home': 'خانه',
  'menu.admin': 'مدیر',
  'menu.admin.sub-page': 'زیر صفحه',
  'menu.login': 'ورود',
  'menu.register': 'ثبت نام',
  'menu.register-result': 'ثبت نام نتیجه',
  'menu.dashboard': 'داشبورد',
  'menu.dashboard.analysis': 'تحلیل و بررسی',
  'menu.dashboard.monitor': 'نظارت',
  'menu.dashboard.workplace': 'محل کار',
  'menu.exception.403': '403',
  'menu.exception.404': '404',
  'menu.exception.500': '500',
  'menu.form': 'فرم',
  'menu.form.basic-form': 'فرم اساسی',
  'menu.form.step-form': 'فرم مرحله',
  'menu.form.step-form.info': 'فرم مرحله (نوشتن اطلاعات انتقال)',
  'menu.form.step-form.confirm': 'فرم مرحله (تأیید اطلاعات انتقال)',
  'menu.form.step-form.result': 'فرم مرحله (تمام شده)',
  'menu.form.advanced-form': 'فرم پیشرفته',
  'menu.list': 'لیست',
  'menu.list.table-list': 'جدول جستجو',
  'menu.list.basic-list': 'لیست اصلی',
  'menu.list.card-list': 'لیست کارت',
  'menu.list.search-list': 'لیست جستجو',
  'menu.list.search-list.articles': 'لیست جستجو (مقالات)',
  'menu.list.search-list.projects': 'لیست جستجو (پروژه ها)',
  'menu.list.search-list.applications': 'لیست جستجو (برنامه ها)',
  'menu.profile': 'مشخصات',
  'menu.profile.basic': 'مشخصات عمومی',
  'menu.profile.advanced': 'مشخصات پیشرفته',
  'menu.result': 'نتیجه',
  'menu.result.success': 'موفق',
  'menu.result.fail': 'ناموفق',
  'menu.exception': 'استثنا',
  'menu.exception.not-permission': '403',
  'menu.exception.not-find': '404',
  'menu.exception.server-error': '500',
  'menu.exception.trigger': 'راه اندازی',
  'menu.account': 'حساب',
  'menu.account.center': 'مرکز حساب',
  'menu.account.settings': 'تنظیمات حساب',
  'menu.account.trigger': 'خطای راه اندازی',
  'menu.account.logout': 'خروج',
  'menu.editor': 'ویرایشگر گرافیک',
  'menu.editor.flow': 'ویرایشگر جریان',
  'menu.editor.mind': 'ویرایشگر ذهن',
  'menu.editor.koni': 'ویرایشگر Koni'
});

/***/ }),

/***/ "./src/locales/fa-IR/pages.ts":
/*!************************************!*\
  !*** ./src/locales/fa-IR/pages.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'pages.layouts.userLayout.title': 'طراحی مورچه تأثیرگذارترین مشخصات طراحی وب در منطقه Xihu است',
  'pages.login.accountLogin.tab': 'ورود به حساب کاربری',
  'pages.login.accountLogin.errorMessage': 'نام کاربری / رمزعبور نادرست (مدیر / ant.design)',
  'pages.login.username.placeholder': 'نام کاربری: مدیر یا کاربر',
  'pages.login.username.required': 'لطفا نام کاربری خود را وارد کنید!',
  'pages.login.password.placeholder': 'رمز عبور: ant.design',
  'pages.login.password.required': 'لطفاً رمز ورود خود را وارد کنید!',
  'pages.login.phoneLogin.tab': 'ورود به سیستم تلفن',
  'pages.login.phoneLogin.errorMessage': 'خطای کد تأیید',
  'pages.login.phoneNumber.placeholder': 'شماره تلفن',
  'pages.login.phoneNumber.required': 'لطفاً شماره تلفن خود را وارد کنید!',
  'pages.login.phoneNumber.invalid': 'شماره تلفن نامعتبر است!',
  'pages.login.captcha.placeholder': 'کد تایید',
  'pages.login.captcha.required': 'لطفا کد تأیید را وارد کنید!',
  'pages.login.phoneLogin.getVerificationCode': 'دریافت کد',
  'pages.getCaptchaSecondText': 'ثانیه',
  'pages.login.rememberMe': 'مرا به خاطر بسپار',
  'pages.login.forgotPassword': 'رمز عبور را فراموش کرده اید ?',
  'pages.login.submit': 'ارسال',
  'pages.login.loginWith': 'وارد شوید با :',
  'pages.login.registerAccount': 'ثبت نام',
  'pages.welcome.link': 'خوش آمدید',
  'pages.welcome.alertMessage': 'اجزای سنگین تر سریعتر و قوی تر آزاد شده اند.',
  'pages.admin.subPage.title': 'این صفحه فقط توسط مدیر قابل مشاهده است',
  'pages.admin.subPage.alertMessage': 'رابط کاربری Umi اکنون منتشر شده است ، برای شروع تجربه استفاده از npm run ui خوش آمدید.',
  'pages.searchTable.createForm.newRule': 'قانون جدید',
  'pages.searchTable.updateForm.ruleConfig': 'پیکربندی قانون',
  'pages.searchTable.updateForm.basicConfig': 'اطلاعات اولیه',
  'pages.searchTable.updateForm.ruleName.nameLabel': ' نام قانون',
  'pages.searchTable.updateForm.ruleName.nameRules': 'لطفاً نام قانون را وارد کنید!',
  'pages.searchTable.updateForm.ruleDesc.descLabel': 'شرح قانون',
  'pages.searchTable.updateForm.ruleDesc.descPlaceholder': 'لطفاً حداقل پنج حرف وارد کنید',
  'pages.searchTable.updateForm.ruleDesc.descRules': 'لطفاً حداقل یک قانون حاوی پنج کاراکتر شرح دهید!',
  'pages.searchTable.updateForm.ruleProps.title': 'پیکربندی خصوصیات',
  'pages.searchTable.updateForm.object': 'نظارت بر شی',
  'pages.searchTable.updateForm.ruleProps.templateLabel': 'الگوی قانون',
  'pages.searchTable.updateForm.ruleProps.typeLabel': 'نوع قانون',
  'pages.searchTable.updateForm.schedulingPeriod.title': 'تنظیم دوره زمان بندی',
  'pages.searchTable.updateForm.schedulingPeriod.timeLabel': 'زمان شروع',
  'pages.searchTable.updateForm.schedulingPeriod.timeRules': 'لطفاً زمان شروع را انتخاب کنید!',
  'pages.searchTable.titleDesc': 'شرح',
  'pages.searchTable.ruleName': 'نام قانون لازم است',
  'pages.searchTable.titleCallNo': 'تعداد تماس های خدماتی',
  'pages.searchTable.titleStatus': 'وضعیت',
  'pages.searchTable.nameStatus.default': 'پیش فرض',
  'pages.searchTable.nameStatus.running': 'در حال دویدن',
  'pages.searchTable.nameStatus.online': 'برخط',
  'pages.searchTable.nameStatus.abnormal': 'غیرطبیعی',
  'pages.searchTable.titleUpdatedAt': 'آخرین برنامه ریزی در',
  'pages.searchTable.exception': 'لطفا دلیل استثنا را وارد کنید!',
  'pages.searchTable.titleOption': 'گزینه',
  'pages.searchTable.config': 'پیکربندی',
  'pages.searchTable.subscribeAlert': 'مشترک شدن در هشدارها',
  'pages.searchTable.title': 'فرم درخواست',
  'pages.searchTable.new': 'جدید',
  'pages.searchTable.chosen': 'انتخاب شده',
  'pages.searchTable.item': 'مورد',
  'pages.searchTable.totalServiceCalls': 'تعداد کل تماس های خدماتی',
  'pages.searchTable.tenThousand': '0000',
  'pages.searchTable.batchDeletion': 'حذف دسته ای',
  'pages.searchTable.batchApproval': 'تصویب دسته ای'
});

/***/ }),

/***/ "./src/locales/fa-IR/pwa.ts":
/*!**********************************!*\
  !*** ./src/locales/fa-IR/pwa.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'app.pwa.offline': 'شما اکنون آفلاین هستید',
  'app.pwa.serviceworker.updated': 'مطالب جدید در دسترس است',
  'app.pwa.serviceworker.updated.hint': 'لطفاً برای بارگیری مجدد صفحه فعلی ، دکمه "تازه سازی" را فشار دهید',
  'app.pwa.serviceworker.updated.ok': 'تازه سازی'
});

/***/ }),

/***/ "./src/locales/fa-IR/settingDrawer.ts":
/*!********************************************!*\
  !*** ./src/locales/fa-IR/settingDrawer.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'app.setting.pagestyle': 'تنظیم نوع صفحه',
  'app.setting.pagestyle.dark': 'سبک تیره',
  'app.setting.pagestyle.light': 'سبک سبک',
  'app.setting.content-width': 'عرض محتوا',
  'app.setting.content-width.fixed': 'ثابت',
  'app.setting.content-width.fluid': 'شناور',
  'app.setting.themecolor': 'رنگ تم',
  'app.setting.themecolor.dust': 'گرد و غبار قرمز',
  'app.setting.themecolor.volcano': 'آتشفشان',
  'app.setting.themecolor.sunset': 'غروب نارنجی',
  'app.setting.themecolor.cyan': 'فیروزه ای',
  'app.setting.themecolor.green': 'سبز قطبی',
  'app.setting.themecolor.daybreak': 'آبی روشن(پیشفرض)',
  'app.setting.themecolor.geekblue': 'چسب گیک',
  'app.setting.themecolor.purple': 'بنفش طلایی',
  'app.setting.navigationmode': 'حالت پیمایش',
  'app.setting.sidemenu': 'طرح منوی کناری',
  'app.setting.topmenu': 'طرح منوی بالایی',
  'app.setting.fixedheader': 'سرصفحه ثابت',
  'app.setting.fixedsidebar': 'نوار کناری ثابت',
  'app.setting.fixedsidebar.hint': 'کار بر روی منوی کناری',
  'app.setting.hideheader': 'هدر پنهان هنگام پیمایش',
  'app.setting.hideheader.hint': 'وقتی Hidden Header فعال باشد کار می کند',
  'app.setting.othersettings': 'تنظیمات دیگر',
  'app.setting.weakmode': 'حالت ضعیف',
  'app.setting.copy': 'تنظیمات کپی',
  'app.setting.copyinfo': 'موفقیت در کپی کردن ， لطفا defaultSettings را در src / models / setting.js جایگزین کنید',
  'app.setting.production.hint': 'صفحه تنظیم فقط در محیط توسعه نمایش داده می شود ، لطفاً دستی تغییر دهید'
});

/***/ }),

/***/ "./src/locales/fa-IR/settings.ts":
/*!***************************************!*\
  !*** ./src/locales/fa-IR/settings.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'app.settings.menuMap.basic': 'تنظیمات پایه ',
  'app.settings.menuMap.security': 'تنظیمات امنیتی',
  'app.settings.menuMap.binding': 'صحافی حساب',
  'app.settings.menuMap.notification': 'اعلان پیام جدید',
  'app.settings.basic.avatar': 'آواتار',
  'app.settings.basic.change-avatar': 'آواتار را تغییر دهید',
  'app.settings.basic.email': 'ایمیل',
  'app.settings.basic.email-message': 'لطفا ایمیل خود را وارد کنید!',
  'app.settings.basic.nickname': 'نام مستعار',
  'app.settings.basic.nickname-message': 'لطفاً نام مستعار خود را وارد کنید!',
  'app.settings.basic.profile': 'پروفایل شخصی',
  'app.settings.basic.profile-message': 'لطفاً مشخصات شخصی خود را وارد کنید!',
  'app.settings.basic.profile-placeholder': 'معرفی مختصر خودتان',
  'app.settings.basic.country': 'کشور / منطقه',
  'app.settings.basic.country-message': 'لطفاً کشور خود را وارد کنید!',
  'app.settings.basic.geographic': 'استان یا شهر',
  'app.settings.basic.geographic-message': 'لطفاً اطلاعات جغرافیایی خود را وارد کنید!',
  'app.settings.basic.address': 'آدرس خیابان',
  'app.settings.basic.address-message': 'لطفا آدرس خود را وارد کنید!',
  'app.settings.basic.phone': 'شماره تلفن',
  'app.settings.basic.phone-message': 'لطفاً تلفن خود را وارد کنید!',
  'app.settings.basic.update': 'به روز رسانی اطلاعات',
  'app.settings.security.strong': 'قوی',
  'app.settings.security.medium': 'متوسط',
  'app.settings.security.weak': 'ضعیف',
  'app.settings.security.password': 'رمز عبور حساب کاربری',
  'app.settings.security.password-description': 'قدرت رمز عبور فعلی',
  'app.settings.security.phone': 'تلفن امنیتی',
  'app.settings.security.phone-description': 'تلفن مقید',
  'app.settings.security.question': 'سوال امنیتی',
  'app.settings.security.question-description': 'سوال امنیتی تنظیم نشده است و سیاست امنیتی می تواند به طور موثر از امنیت حساب محافظت کند',
  'app.settings.security.email': 'ایمیل پشتیبان',
  'app.settings.security.email-description': 'ایمیل مقید',
  'app.settings.security.mfa': 'دستگاه MFA',
  'app.settings.security.mfa-description': 'دستگاه MFA بسته نشده ، پس از اتصال ، می تواند دو بار تأیید شود',
  'app.settings.security.modify': 'تغییر',
  'app.settings.security.set': 'تنظیم',
  'app.settings.security.bind': 'بستن',
  'app.settings.binding.taobao': 'اتصال Taobao',
  'app.settings.binding.taobao-description': 'حساب Taobao در حال حاضر بسته نشده است',
  'app.settings.binding.alipay': 'اتصال Alipay',
  'app.settings.binding.alipay-description': 'حساب Alipay در حال حاضر بسته نشده است',
  'app.settings.binding.dingding': 'اتصال DingTalk',
  'app.settings.binding.dingding-description': 'حساب DingTalk در حال حاضر محدود نشده است',
  'app.settings.binding.bind': 'بستن',
  'app.settings.notification.password': 'رمز عبور حساب کاربری',
  'app.settings.notification.password-description': 'پیام های سایر کاربران در قالب یک نامه ایستگاهی اعلام خواهد شد',
  'app.settings.notification.messages': 'پیام های سیستم',
  'app.settings.notification.messages-description': 'پیام های سیستم به صورت نامه ایستگاه مطلع می شوند',
  'app.settings.notification.todo': 'اعلان کارها',
  'app.settings.notification.todo-description': 'لیست کارها به صورت نامه ای از ایستگاه اطلاع داده می شود',
  'app.settings.open': 'باز کن',
  'app.settings.close': 'بستن'
});

/***/ }),

/***/ "./src/locales/id-ID.ts":
/*!******************************!*\
  !*** ./src/locales/id-ID.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _id_ID_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./id-ID/component */ "./src/locales/id-ID/component.ts");
/* harmony import */ var _id_ID_globalHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./id-ID/globalHeader */ "./src/locales/id-ID/globalHeader.ts");
/* harmony import */ var _id_ID_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./id-ID/menu */ "./src/locales/id-ID/menu.ts");
/* harmony import */ var _id_ID_pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./id-ID/pages */ "./src/locales/id-ID/pages.ts");
/* harmony import */ var _id_ID_pwa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./id-ID/pwa */ "./src/locales/id-ID/pwa.ts");
/* harmony import */ var _id_ID_settingDrawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./id-ID/settingDrawer */ "./src/locales/id-ID/settingDrawer.ts");
/* harmony import */ var _id_ID_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./id-ID/settings */ "./src/locales/id-ID/settings.ts");








/* harmony default export */ __webpack_exports__["default"] = ((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)({
  'navbar.lang': 'Bahasa',
  'layout.user.link.help': 'Bantuan',
  'layout.user.link.privacy': 'Privasi',
  'layout.user.link.terms': 'Ketentuan',
  'app.preview.down.block': 'Unduh halaman ini dalam projek lokal anda',
  'app.welcome.link.fetch-blocks': 'Dapatkan semua blok',
  'app.welcome.link.block-list': 'Buat standar dengan cepat, halaman-halaman berdasarkan pengembangan `block`'
}, _id_ID_globalHeader__WEBPACK_IMPORTED_MODULE_2__.default), _id_ID_menu__WEBPACK_IMPORTED_MODULE_3__.default), _id_ID_settingDrawer__WEBPACK_IMPORTED_MODULE_6__.default), _id_ID_settings__WEBPACK_IMPORTED_MODULE_7__.default), _id_ID_pwa__WEBPACK_IMPORTED_MODULE_5__.default), _id_ID_component__WEBPACK_IMPORTED_MODULE_1__.default), _id_ID_pages__WEBPACK_IMPORTED_MODULE_4__.default));

/***/ }),

/***/ "./src/locales/id-ID/component.ts":
/*!****************************************!*\
  !*** ./src/locales/id-ID/component.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'component.tagSelect.expand': 'Perluas',
  'component.tagSelect.collapse': 'Lipat',
  'component.tagSelect.all': 'Semua'
});

/***/ }),

/***/ "./src/locales/id-ID/globalHeader.ts":
/*!*******************************************!*\
  !*** ./src/locales/id-ID/globalHeader.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'component.globalHeader.search': 'Pencarian',
  'component.globalHeader.search.example1': 'Contoh 1 Pencarian',
  'component.globalHeader.search.example2': 'Contoh 2 Pencarian',
  'component.globalHeader.search.example3': 'Contoh 3 Pencarian',
  'component.globalHeader.help': 'Bantuan',
  'component.globalHeader.notification': 'Notifikasi',
  'component.globalHeader.notification.empty': 'Anda telah membaca semua notifikasi',
  'component.globalHeader.message': 'Pesan',
  'component.globalHeader.message.empty': 'Anda telah membaca semua pesan.',
  'component.globalHeader.event': 'Acara',
  'component.globalHeader.event.empty': 'Anda telah melihat semua acara.',
  'component.noticeIcon.clear': 'Kosongkan',
  'component.noticeIcon.cleared': 'Berhasil dikosongkan',
  'component.noticeIcon.empty': 'Tidak ada pemberitahuan',
  'component.noticeIcon.view-more': 'Melihat lebih'
});

/***/ }),

/***/ "./src/locales/id-ID/menu.ts":
/*!***********************************!*\
  !*** ./src/locales/id-ID/menu.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'menu.welcome': 'Selamat Datang',
  'menu.more-blocks': 'Blocks Lainnya',
  'menu.home': 'Halaman Awal',
  'menu.admin': 'Admin',
  'menu.admin.sub-page': 'Sub-Halaman',
  'menu.login': 'Masuk',
  'menu.register': 'Pendaftaran',
  'menu.register-result': 'Hasil Pendaftaran',
  'menu.dashboard': 'Dasbor',
  'menu.dashboard.analysis': 'Analisis',
  'menu.dashboard.monitor': 'Monitor',
  'menu.dashboard.workplace': 'Workplace',
  'menu.exception.403': '403',
  'menu.exception.404': '404',
  'menu.exception.500': '500',
  'menu.form': 'Form',
  'menu.form.basic-form': 'Form Dasar',
  'menu.form.step-form': 'Form Bertahap',
  'menu.form.step-form.info': 'Form Bertahap(menulis informasi yang dibagikan)',
  'menu.form.step-form.confirm': 'Form Bertahap(konfirmasi informasi yang dibagikan)',
  'menu.form.step-form.result': 'Form Bertahap(selesai)',
  'menu.form.advanced-form': 'Form Lanjutan',
  'menu.list': 'Daftar',
  'menu.list.table-list': 'Tabel Pencarian',
  'menu.list.basic-list': 'Daftar Dasar',
  'menu.list.card-list': 'Daftar Kartu',
  'menu.list.search-list': 'Daftar Pencarian',
  'menu.list.search-list.articles': 'Daftar Pencarian(artikel)',
  'menu.list.search-list.projects': 'Daftar Pencarian(projek)',
  'menu.list.search-list.applications': 'Daftar Pencarian(aplikasi)',
  'menu.profile': 'Profil',
  'menu.profile.basic': 'Profil Dasar',
  'menu.profile.advanced': 'Profile Lanjutan',
  'menu.result': 'Hasil',
  'menu.result.success': 'Sukses',
  'menu.result.fail': 'Gagal',
  'menu.exception': 'Pengecualian',
  'menu.exception.not-permission': '403',
  'menu.exception.not-find': '404',
  'menu.exception.server-error': '500',
  'menu.exception.trigger': 'Jalankan',
  'menu.account': 'Akun',
  'menu.account.center': 'Detail Akun',
  'menu.account.settings': 'Pengaturan Akun',
  'menu.account.trigger': 'Mengaktivasi Error',
  'menu.account.logout': 'Keluar',
  'menu.editor': 'Penyusun Grafis',
  'menu.editor.flow': 'Penyusun Alur',
  'menu.editor.mind': 'Penyusun Mind',
  'menu.editor.koni': 'Penyusun Koni'
});

/***/ }),

/***/ "./src/locales/id-ID/pages.ts":
/*!************************************!*\
  !*** ./src/locales/id-ID/pages.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'pages.layouts.userLayout.title': 'Ant Design adalah spesifikasi desain Web yang paling berpengaruh di Kabupaten Xihu',
  'pages.login.accountLogin.tab': 'Login dengan akun',
  'pages.login.accountLogin.errorMessage': 'Nama pengguna dan kata sandi salah(admin/ant.design)',
  'pages.login.username.placeholder': 'nama pengguna: admin atau user',
  'pages.login.username.required': 'Nama pengguna harus diisi!',
  'pages.login.password.placeholder': 'kata sandi: ant.design',
  'pages.login.password.required': 'Kata sandi harus diisi!',
  'pages.login.phoneLogin.tab': 'Login dengan ponsel',
  'pages.login.phoneLogin.errorMessage': 'Kesalahan kode verifikasi',
  'pages.login.phoneNumber.placeholder': 'masukkan nomor telepon',
  'pages.login.phoneNumber.required': 'Nomor ponsel harus diisi!',
  'pages.login.phoneNumber.invalid': 'Nomor ponsel tidak valid!',
  'pages.login.captcha.placeholder': 'kode verifikasi',
  'pages.login.captcha.required': 'Kode verifikasi diperlukan!',
  'pages.login.phoneLogin.getVerificationCode': 'Dapatkan kode',
  'pages.getCaptchaSecondText': 'detik tersisa',
  'pages.login.rememberMe': 'Ingat saya',
  'pages.login.forgotPassword': 'Lupa Kata Sandi?',
  'pages.login.submit': 'Masuk',
  'pages.login.loginWith': 'Masuk dengan :',
  'pages.login.registerAccount': 'Daftar Akun',
  'pages.welcome.link': 'Selamat datang',
  'pages.welcome.alertMessage': 'Komponen heavy-duty yang lebih cepat dan lebih kuat telah dirilis.',
  'pages.admin.subPage.title': 'Halaman ini hanya dapat dilihat oleh admin',
  'pages.admin.subPage.alertMessage': 'umi ui telah dirilis, silahkan gunakan npm run ui untuk memulai pengalaman.',
  'pages.searchTable.createForm.newRule': 'Aturan baru',
  'pages.searchTable.updateForm.ruleConfig': 'Konfigurasi aturan',
  'pages.searchTable.updateForm.basicConfig': 'Informasi dasar',
  'pages.searchTable.updateForm.ruleName.nameLabel': 'Nama aturan',
  'pages.searchTable.updateForm.ruleName.nameRules': 'Harap masukkan nama aturan!',
  'pages.searchTable.updateForm.ruleDesc.descLabel': 'Deskripsi aturan',
  'pages.searchTable.updateForm.ruleDesc.descPlaceholder': 'Harap masukkan setidaknya lima karakter',
  'pages.searchTable.updateForm.ruleDesc.descRules': 'Harap masukkan deskripsi aturan setidaknya lima karakter!',
  'pages.searchTable.updateForm.ruleProps.title': 'Properti aturan',
  'pages.searchTable.updateForm.object': 'Objek pemantauan',
  'pages.searchTable.updateForm.ruleProps.templateLabel': 'Template aturan',
  'pages.searchTable.updateForm.ruleProps.typeLabel': 'Jenis aturan',
  'pages.searchTable.updateForm.schedulingPeriod.title': 'Periode penjadwalan',
  'pages.searchTable.updateForm.schedulingPeriod.timeLabel': 'Waktu mulai',
  'pages.searchTable.updateForm.schedulingPeriod.timeRules': 'Pilih waktu mulai!',
  'pages.searchTable.titleDesc': 'deskripsi',
  'pages.searchTable.ruleName': 'Nama aturan wajib diisi',
  'pages.searchTable.titleCallNo': 'Jumlah panggilan',
  'pages.searchTable.titleStatus': 'Status',
  'pages.searchTable.nameStatus.default': 'default',
  'pages.searchTable.nameStatus.running': 'menyala',
  'pages.searchTable.nameStatus.online': 'online',
  'pages.searchTable.nameStatus.abnormal': 'abnormal',
  'pages.searchTable.titleUpdatedAt': 'Waktu terjadwal',
  'pages.searchTable.exception': 'Harap masukkan alasan pengecualian!',
  'pages.searchTable.titleOption': 'Pengoperasian',
  'pages.searchTable.config': 'Konfigurasi',
  'pages.searchTable.subscribeAlert': 'Berlangganan notifikasi',
  'pages.searchTable.title': 'Formulir pertanyaan',
  'pages.searchTable.new': 'Baru',
  'pages.searchTable.chosen': 'Terpilih',
  'pages.searchTable.item': 'item',
  'pages.searchTable.totalServiceCalls': 'Jumlah total panggilan layanan',
  'pages.searchTable.tenThousand': '0000',
  'pages.searchTable.batchDeletion': 'Penghapusan batch',
  'pages.searchTable.batchApproval': 'Persetujuan batch'
});

/***/ }),

/***/ "./src/locales/id-ID/pwa.ts":
/*!**********************************!*\
  !*** ./src/locales/id-ID/pwa.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'app.pwa.offline': 'Koneksi anda terputus',
  'app.pwa.serviceworker.updated': 'Konten baru sudah tersedia',
  'app.pwa.serviceworker.updated.hint': 'Silahkan klik tombol "Refresh" untuk memuat ulang halaman ini',
  'app.pwa.serviceworker.updated.ok': 'Memuat ulang'
});

/***/ }),

/***/ "./src/locales/id-ID/settingDrawer.ts":
/*!********************************************!*\
  !*** ./src/locales/id-ID/settingDrawer.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'app.setting.pagestyle': 'Pengaturan style Halaman',
  'app.setting.pagestyle.dark': 'Style Gelap',
  'app.setting.pagestyle.light': 'Style Cerah',
  'app.setting.content-width': 'Lebar Konten',
  'app.setting.content-width.fixed': 'Tetap',
  'app.setting.content-width.fluid': 'Fluid',
  'app.setting.themecolor': 'Theme Color',
  'app.setting.themecolor.dust': 'Dust Red',
  'app.setting.themecolor.volcano': 'Volcano',
  'app.setting.themecolor.sunset': 'Sunset Orange',
  'app.setting.themecolor.cyan': 'Cyan',
  'app.setting.themecolor.green': 'Polar Green',
  'app.setting.themecolor.daybreak': 'Daybreak Blue (bawaan)',
  'app.setting.themecolor.geekblue': 'Geek Glue',
  'app.setting.themecolor.purple': 'Golden Purple',
  'app.setting.navigationmode': 'Mode Navigasi',
  'app.setting.sidemenu': 'Susunan Menu Samping',
  'app.setting.topmenu': 'Susunan Menu Atas',
  'app.setting.fixedheader': 'Header Tetap',
  'app.setting.fixedsidebar': 'Sidebar Tetap',
  'app.setting.fixedsidebar.hint': 'Berjalan pada Susunan Menu Samping',
  'app.setting.hideheader': 'Sembunyikan Header ketika gulir ke bawah',
  'app.setting.hideheader.hint': 'Bekerja ketika Header tersembunyi dimunculkan',
  'app.setting.othersettings': 'Pengaturan Lainnya',
  'app.setting.weakmode': 'Mode Lemah',
  'app.setting.copy': 'Salin Pengaturan',
  'app.setting.copyinfo': 'Berhasil disalin，tolong ubah defaultSettings pada src/models/setting.js',
  'app.setting.production.hint': 'Panel pengaturan hanya muncul pada lingkungan pengembangan, silahkan modifikasi secara menual'
});

/***/ }),

/***/ "./src/locales/id-ID/settings.ts":
/*!***************************************!*\
  !*** ./src/locales/id-ID/settings.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'app.settings.menuMap.basic': 'Pengaturan Dasar',
  'app.settings.menuMap.security': 'Pengaturan Keamanan',
  'app.settings.menuMap.binding': 'Pengikatan Akun',
  'app.settings.menuMap.notification': 'Notifikasi Pesan Baru',
  'app.settings.basic.avatar': 'Avatar',
  'app.settings.basic.change-avatar': 'Ubah avatar',
  'app.settings.basic.email': 'Email',
  'app.settings.basic.email-message': 'Tolong masukkan email!',
  'app.settings.basic.nickname': 'Nickname',
  'app.settings.basic.nickname-message': 'Tolong masukkan Nickname!',
  'app.settings.basic.profile': 'Profil Personal',
  'app.settings.basic.profile-message': 'Tolong masukkan profil personal!',
  'app.settings.basic.profile-placeholder': 'Perkenalan Singkat tentang Diri Anda',
  'app.settings.basic.country': 'Negara/Wilayah',
  'app.settings.basic.country-message': 'Tolong masukkan negara anda!',
  'app.settings.basic.geographic': 'Provinsi atau kota',
  'app.settings.basic.geographic-message': 'Tolong masukkan info geografis anda!',
  'app.settings.basic.address': 'Alamat Jalan',
  'app.settings.basic.address-message': 'Tolong masukkan Alamat Jalan anda!',
  'app.settings.basic.phone': 'Nomor Ponsel',
  'app.settings.basic.phone-message': 'Tolong masukkan Nomor Ponsel anda!',
  'app.settings.basic.update': 'Perbarui Informasi',
  'app.settings.security.strong': 'Kuat',
  'app.settings.security.medium': 'Sedang',
  'app.settings.security.weak': 'Lemah',
  'app.settings.security.password': 'Kata Sandi Akun',
  'app.settings.security.password-description': 'Kekuatan Kata Sandi saat ini',
  'app.settings.security.phone': 'Keamanan Ponsel',
  'app.settings.security.phone-description': 'Mengikat Ponsel',
  'app.settings.security.question': 'Pertanyaan Keamanan',
  'app.settings.security.question-description': 'Pertanyaan Keamanan belum diatur, dan kebijakan keamanan dapat melindungi akun secara efektif',
  'app.settings.security.email': 'Email Cadangan',
  'app.settings.security.email-description': 'Mengikat Email',
  'app.settings.security.mfa': 'Perangka MFA',
  'app.settings.security.mfa-description': 'Tidak mengikat Perangkat MFA, setelah diikat, dapat dikonfirmasi dua kali',
  'app.settings.security.modify': 'Modifikasi',
  'app.settings.security.set': 'Setel',
  'app.settings.security.bind': 'Ikat',
  'app.settings.binding.taobao': 'Mengikat Taobao',
  'app.settings.binding.taobao-description': 'Tidak mengikat akun Taobao saat ini',
  'app.settings.binding.alipay': 'Mengikat Alipay',
  'app.settings.binding.alipay-description': 'Tidak mengikat akun Alipay saat ini',
  'app.settings.binding.dingding': 'Mengikat DingTalk',
  'app.settings.binding.dingding-description': 'Tidak mengikat akun DingTalk',
  'app.settings.binding.bind': 'Ikat',
  'app.settings.notification.password': 'Kata Sandi Akun',
  'app.settings.notification.password-description': 'Pesan dari pengguna lain akan diberitahu dalam bentuk surat',
  'app.settings.notification.messages': 'Pesan Sistem',
  'app.settings.notification.messages-description': 'Pesan sistem akan diberitahu dalam bentuk surat',
  'app.settings.notification.todo': 'Notifikasi daftar To-do',
  'app.settings.notification.todo-description': 'Daftar to-do akan diberitahukan dalam bentuk surat dari stasiun',
  'app.settings.open': 'Buka',
  'app.settings.close': 'Tutup'
});

/***/ }),

/***/ "./src/locales/ja-JP.ts":
/*!******************************!*\
  !*** ./src/locales/ja-JP.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _ja_JP_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ja-JP/component */ "./src/locales/ja-JP/component.ts");
/* harmony import */ var _ja_JP_globalHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ja-JP/globalHeader */ "./src/locales/ja-JP/globalHeader.ts");
/* harmony import */ var _ja_JP_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ja-JP/menu */ "./src/locales/ja-JP/menu.ts");
/* harmony import */ var _ja_JP_pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ja-JP/pages */ "./src/locales/ja-JP/pages.ts");
/* harmony import */ var _ja_JP_pwa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ja-JP/pwa */ "./src/locales/ja-JP/pwa.ts");
/* harmony import */ var _ja_JP_settingDrawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ja-JP/settingDrawer */ "./src/locales/ja-JP/settingDrawer.ts");
/* harmony import */ var _ja_JP_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ja-JP/settings */ "./src/locales/ja-JP/settings.ts");








/* harmony default export */ __webpack_exports__["default"] = ((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)({
  'navBar.lang': '言語',
  'layout.user.link.help': 'ヘルプ',
  'layout.user.link.privacy': 'プライバシー',
  'layout.user.link.terms': '利用規約',
  'app.preview.down.block': 'このページをローカルプロジェクトにダウンロードしてください',
  'app.welcome.link.fetch-blocks': '',
  'app.welcome.link.block-list': ''
}, _ja_JP_globalHeader__WEBPACK_IMPORTED_MODULE_2__.default), _ja_JP_menu__WEBPACK_IMPORTED_MODULE_3__.default), _ja_JP_settingDrawer__WEBPACK_IMPORTED_MODULE_6__.default), _ja_JP_settings__WEBPACK_IMPORTED_MODULE_7__.default), _ja_JP_pwa__WEBPACK_IMPORTED_MODULE_5__.default), _ja_JP_component__WEBPACK_IMPORTED_MODULE_1__.default), _ja_JP_pages__WEBPACK_IMPORTED_MODULE_4__.default));

/***/ }),

/***/ "./src/locales/ja-JP/component.ts":
/*!****************************************!*\
  !*** ./src/locales/ja-JP/component.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'component.tagSelect.expand': '展開',
  'component.tagSelect.collapse': '折りたたむ',
  'component.tagSelect.all': 'すべて'
});

/***/ }),

/***/ "./src/locales/ja-JP/globalHeader.ts":
/*!*******************************************!*\
  !*** ./src/locales/ja-JP/globalHeader.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'component.globalHeader.search': '検索',
  'component.globalHeader.search.example1': '検索例1',
  'component.globalHeader.search.example2': '検索例2',
  'component.globalHeader.search.example3': '検索例3',
  'component.globalHeader.help': 'ヘルプ',
  'component.globalHeader.notification': '通知',
  'component.globalHeader.notification.empty': 'すべての通知を表示しました。',
  'component.globalHeader.message': 'メッセージ',
  'component.globalHeader.message.empty': 'すべてのメッセージを表示しました。',
  'component.globalHeader.event': 'イベント',
  'component.globalHeader.event.empty': 'すべてのイベントを表示しました。',
  'component.noticeIcon.clear': 'クリア',
  'component.noticeIcon.cleared': 'クリア済み',
  'component.noticeIcon.empty': '通知なし',
  'component.noticeIcon.view-more': 'もっと見る'
});

/***/ }),

/***/ "./src/locales/ja-JP/menu.ts":
/*!***********************************!*\
  !*** ./src/locales/ja-JP/menu.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'menu.welcome': 'ようこそ',
  'menu.more-blocks': 'その他のブロック',
  'menu.home': 'ホーム',
  'menu.admin': '管理者',
  'menu.admin.sub-page': 'サブページ',
  'menu.login': 'ログイン',
  'menu.register': '登録',
  'menu.register-result': '登録結果',
  'menu.dashboard': 'ダッシュボード',
  'menu.dashboard.analysis': '分析',
  'menu.dashboard.monitor': 'モニター',
  'menu.dashboard.workplace': '職場',
  'menu.exception.403': '403',
  'menu.exception.404': '404',
  'menu.exception.500': '500',
  'menu.form': 'フォーム',
  'menu.form.basic-form': '基本フォーム',
  'menu.form.step-form': 'ステップフォーム',
  'menu.form.step-form.info': 'ステップフォーム（転送情報の書き込み）',
  'menu.form.step-form.confirm': 'ステップフォーム（転送情報の確認）',
  'menu.form.step-form.result': 'ステップフォーム（完成）',
  'menu.form.advanced-form': '高度なフォーム',
  'menu.list': 'リスト',
  'menu.list.table-list': '検索テーブル',
  'menu.list.basic-list': '基本リスト',
  'menu.list.card-list': 'カードリスト',
  'menu.list.search-list': '検索リスト',
  'menu.list.search-list.articles': '検索リスト(記事)',
  'menu.list.search-list.projects': '検索リスト(プロジェクト)',
  'menu.list.search-list.applications': '検索リスト(アプリ)',
  'menu.profile': 'プロフィール',
  'menu.profile.basic': '基本プロフィール',
  'menu.profile.advanced': '高度なプロフィール',
  'menu.result': '結果',
  'menu.result.success': '成功',
  'menu.result.fail': '失敗',
  'menu.exception': '例外',
  'menu.exception.not-permission': '403',
  'menu.exception.not-find': '404',
  'menu.exception.server-error': '500',
  'menu.exception.trigger': 'トリガー',
  'menu.account': 'アカウント',
  'menu.account.center': 'アカウントセンター',
  'menu.account.settings': 'アカウント設定',
  'menu.account.trigger': 'トリガーエラー',
  'menu.account.logout': 'ログアウト',
  'menu.editor': 'グラフィックエディタ',
  'menu.editor.flow': 'フローエディタ',
  'menu.editor.mind': 'マインドエディター',
  'menu.editor.koni': 'コニエディター'
});

/***/ }),

/***/ "./src/locales/ja-JP/pages.ts":
/*!************************************!*\
  !*** ./src/locales/ja-JP/pages.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'pages.layouts.userLayout.title': 'Ant Designは、西湖区で最も影響力のあるWebデザイン仕様です。',
  'pages.login.accountLogin.tab': 'アカウントログイン',
  'pages.login.accountLogin.errorMessage': 'ユーザー名/パスワードが正しくありません(admin/ant.design)',
  'pages.login.username.placeholder': 'ユーザー名：adminまたはuser',
  'pages.login.username.required': 'ユーザー名を入力してください！',
  'pages.login.password.placeholder': 'パスワード：ant.design',
  'pages.login.password.required': 'パスワードを入力してください！',
  'pages.login.phoneLogin.tab': '電話ログイン',
  'pages.login.phoneLogin.errorMessage': '検証コードエラー',
  'pages.login.phoneNumber.placeholder': '電話番号',
  'pages.login.phoneNumber.required': '電話番号を入力してください！',
  'pages.login.phoneNumber.invalid': '電話番号が無効です！',
  'pages.login.captcha.placeholder': '確認コード',
  'pages.login.captcha.required': '確認コードを入力してください！',
  'pages.login.phoneLogin.getVerificationCode': '確認コードを取得',
  'pages.getCaptchaSecondText': '秒',
  'pages.login.rememberMe': 'Remember me',
  'pages.login.forgotPassword': 'パスワードをお忘れですか？',
  'pages.login.submit': 'ログイン',
  'pages.login.loginWith': 'その他のログイン方法：',
  'pages.login.registerAccount': 'アカウント登録',
  'pages.welcome.link': 'ようこそ',
  'pages.welcome.alertMessage': 'より高速で強力な頑丈なコンポーネントがリリースされました。',
  'pages.admin.subPage.title': 'このページは管理者のみが表示できます',
  'pages.admin.subPage.alertMessage': 'Umi uiがリリースされました。npm run uiを使用して体験してください。',
  'pages.searchTable.createForm.newRule': '新しいルール',
  'pages.searchTable.updateForm.ruleConfig': 'ルール構成',
  'pages.searchTable.updateForm.basicConfig': '基本情報',
  'pages.searchTable.updateForm.ruleName.nameLabel': 'ルール名',
  'pages.searchTable.updateForm.ruleName.nameRules': 'ルール名を入力してください！',
  'pages.searchTable.updateForm.ruleDesc.descLabel': 'ルールの説明',
  'pages.searchTable.updateForm.ruleDesc.descPlaceholder': '5文字以上入力してください',
  'pages.searchTable.updateForm.ruleDesc.descRules': '5文字以上のルールの説明を入力してください！',
  'pages.searchTable.updateForm.ruleProps.title': 'プロパティの構成',
  'pages.searchTable.updateForm.object': '監視対象',
  'pages.searchTable.updateForm.ruleProps.templateLabel': 'ルールテンプレート',
  'pages.searchTable.updateForm.ruleProps.typeLabel': 'ルールタイプ',
  'pages.searchTable.updateForm.schedulingPeriod.title': 'スケジュール期間の設定',
  'pages.searchTable.updateForm.schedulingPeriod.timeLabel': '開始時間',
  'pages.searchTable.updateForm.schedulingPeriod.timeRules': '開始時間を選択してください！',
  'pages.searchTable.titleDesc': '説明',
  'pages.searchTable.ruleName': 'ルール名が必要です',
  'pages.searchTable.titleCallNo': 'サービスコール数',
  'pages.searchTable.titleStatus': 'ステータス',
  'pages.searchTable.nameStatus.default': 'デフォルト',
  'pages.searchTable.nameStatus.running': '起動中',
  'pages.searchTable.nameStatus.online': 'オンライン',
  'pages.searchTable.nameStatus.abnormal': '異常',
  'pages.searchTable.titleUpdatedAt': '最終スケジュール',
  'pages.searchTable.exception': '例外の理由を入力してください！',
  'pages.searchTable.titleOption': 'オプション',
  'pages.searchTable.config': '構成',
  'pages.searchTable.subscribeAlert': 'アラートを購読する',
  'pages.searchTable.title': 'お問い合わせフォーム',
  'pages.searchTable.new': '新しい',
  'pages.searchTable.chosen': '選んだ項目',
  'pages.searchTable.item': '項目',
  'pages.searchTable.totalServiceCalls': 'サービスコールの総数',
  'pages.searchTable.tenThousand': '万',
  'pages.searchTable.batchDeletion': 'バッチ削除',
  'pages.searchTable.batchApproval': 'バッチ承認'
});

/***/ }),

/***/ "./src/locales/ja-JP/pwa.ts":
/*!**********************************!*\
  !*** ./src/locales/ja-JP/pwa.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'app.pwa.offline': 'あなたは今オフラインです',
  'app.pwa.serviceworker.updated': '新しいコンテンツが利用可能です',
  'app.pwa.serviceworker.updated.hint': '現在のページをリロードするには、「更新」ボタンを押してください',
  'app.pwa.serviceworker.updated.ok': 'リフレッシュ'
});

/***/ }),

/***/ "./src/locales/ja-JP/settingDrawer.ts":
/*!********************************************!*\
  !*** ./src/locales/ja-JP/settingDrawer.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'app.setting.pagestyle': 'ページスタイル設定',
  'app.setting.pagestyle.dark': 'ダークスタイル',
  'app.setting.pagestyle.light': 'ライトスタイル',
  'app.setting.content-width': 'コンテンツの幅',
  'app.setting.content-width.fixed': '固定',
  'app.setting.content-width.fluid': '流体',
  'app.setting.themecolor': 'テーマカラー',
  'app.setting.themecolor.dust': 'ダストレッド',
  'app.setting.themecolor.volcano': 'ボルケ-ノ',
  'app.setting.themecolor.sunset': 'サンセットオレンジ',
  'app.setting.themecolor.cyan': 'シアン',
  'app.setting.themecolor.green': 'ポーラーグリーン',
  'app.setting.themecolor.daybreak': '夜明けの青（デフォルト）',
  'app.setting.themecolor.geekblue': 'ギーク ブルー',
  'app.setting.themecolor.purple': 'ゴールデンパープル',
  'app.setting.navigationmode': 'ナビゲーションモード',
  'app.setting.sidemenu': 'サイドメニューのレイアウト',
  'app.setting.topmenu': 'トップメニューのレイアウト',
  'app.setting.fixedheader': '固定ヘッダー',
  'app.setting.fixedsidebar': '固定サイドバー',
  'app.setting.fixedsidebar.hint': 'サイドメニューのレイアウトで動作します',
  'app.setting.hideheader': 'スクロール時の非表示ヘッダー',
  'app.setting.hideheader.hint': '非表示ヘッダーが有効になっている場合に機能します',
  'app.setting.othersettings': 'その他の設定',
  'app.setting.weakmode': 'ウィークモード',
  'app.setting.copy': 'コピー設定',
  'app.setting.copyinfo': 'コピーが成功しました。src/models/setting.jsのdefaultSettingsを置き換えてください',
  'app.setting.production.hint': '設定パネルは開発環境でのみ表示されます。手動で変更してください'
});

/***/ }),

/***/ "./src/locales/ja-JP/settings.ts":
/*!***************************************!*\
  !*** ./src/locales/ja-JP/settings.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'app.settings.menuMap.basic': '基本設定',
  'app.settings.menuMap.security': 'セキュリティ設定',
  'app.settings.menuMap.binding': 'アカウントのバインド',
  'app.settings.menuMap.notification': '新しいメッセージの通知',
  'app.settings.basic.avatar': 'アバター',
  'app.settings.basic.change-avatar': 'アバターを変更する',
  'app.settings.basic.email': 'メール',
  'app.settings.basic.email-message': 'メールアドレスを入力してください！',
  'app.settings.basic.nickname': 'ニックネーム',
  'app.settings.basic.nickname-message': 'ニックネームを入力してください！',
  'app.settings.basic.profile': '個人プロフィール',
  'app.settings.basic.profile-message': '個人プロフィールを入力してください!',
  'app.settings.basic.profile-placeholder': '自己紹介',
  'app.settings.basic.country': '国/地域',
  'app.settings.basic.country-message': 'あなたの国を入力してください!',
  'app.settings.basic.geographic': '州または市',
  'app.settings.basic.geographic-message': '地理情報を入力してください!',
  'app.settings.basic.address': '住所',
  'app.settings.basic.address-message': '住所を入力してください!',
  'app.settings.basic.phone': '電話番号',
  'app.settings.basic.phone-message': '電話番号を入力してください!',
  'app.settings.basic.update': '更新情報',
  'app.settings.security.strong': '強い',
  'app.settings.security.medium': 'ミディアム',
  'app.settings.security.weak': '弱い',
  'app.settings.security.password': 'アカウントパスワード',
  'app.settings.security.password-description': '現在のパスワードの強度',
  'app.settings.security.phone': 'セキュリティ電話番号',
  'app.settings.security.phone-description': 'バインドされた電話番号',
  'app.settings.security.question': '秘密の質問',
  'app.settings.security.question-description': 'セキュリティの質問が設定されてません。セキュリティポリシーはアカウントのセキュリティを効果的に保護できます',
  'app.settings.security.email': 'バックアップメール',
  'app.settings.security.email-description': 'バインドされたメール',
  'app.settings.security.mfa': '多要素認証デバイス',
  'app.settings.security.mfa-description': 'バインドされていない多要素認証デバイスは、バインド後、2回確認できます',
  'app.settings.security.modify': '変更する',
  'app.settings.security.set': 'セットする',
  'app.settings.security.bind': 'バインド',
  'app.settings.binding.taobao': 'タオバオをバインドする',
  'app.settings.binding.taobao-description': '現在バインドされていないタオバオアカウント',
  'app.settings.binding.alipay': 'アリペイをバインドする',
  'app.settings.binding.alipay-description': '現在バインドされていないアリペイアカウント',
  'app.settings.binding.dingding': 'ディントークをバインドする',
  'app.settings.binding.dingding-description': '現在バインドされていないディントークアカウント',
  'app.settings.binding.bind': 'バインド',
  'app.settings.notification.password': 'アカウントパスワード',
  'app.settings.notification.password-description': '他のユーザーからのメッセージは、ステーションレターの形式で通知されます',
  'app.settings.notification.messages': 'システムメッセージ',
  'app.settings.notification.messages-description': 'システムメッセージは、ステーションレターの形式で通知されます',
  'app.settings.notification.todo': 'To Do（用事) 通知',
  'app.settings.notification.todo-description': 'To Doタスクは、内部レターの形式で通知されます',
  'app.settings.open': '開く',
  'app.settings.close': '閉じる'
});

/***/ }),

/***/ "./src/locales/pt-BR.ts":
/*!******************************!*\
  !*** ./src/locales/pt-BR.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _pt_BR_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pt-BR/component */ "./src/locales/pt-BR/component.ts");
/* harmony import */ var _pt_BR_globalHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pt-BR/globalHeader */ "./src/locales/pt-BR/globalHeader.ts");
/* harmony import */ var _pt_BR_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pt-BR/menu */ "./src/locales/pt-BR/menu.ts");
/* harmony import */ var _pt_BR_pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pt-BR/pages */ "./src/locales/pt-BR/pages.ts");
/* harmony import */ var _pt_BR_pwa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pt-BR/pwa */ "./src/locales/pt-BR/pwa.ts");
/* harmony import */ var _pt_BR_settingDrawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pt-BR/settingDrawer */ "./src/locales/pt-BR/settingDrawer.ts");
/* harmony import */ var _pt_BR_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pt-BR/settings */ "./src/locales/pt-BR/settings.ts");








/* harmony default export */ __webpack_exports__["default"] = ((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)({
  'navBar.lang': 'Idiomas',
  'layout.user.link.help': 'ajuda',
  'layout.user.link.privacy': 'política de privacidade',
  'layout.user.link.terms': 'termos de serviços',
  'app.preview.down.block': 'Download this page to your local project'
}, _pt_BR_globalHeader__WEBPACK_IMPORTED_MODULE_2__.default), _pt_BR_menu__WEBPACK_IMPORTED_MODULE_3__.default), _pt_BR_settingDrawer__WEBPACK_IMPORTED_MODULE_6__.default), _pt_BR_settings__WEBPACK_IMPORTED_MODULE_7__.default), _pt_BR_pwa__WEBPACK_IMPORTED_MODULE_5__.default), _pt_BR_component__WEBPACK_IMPORTED_MODULE_1__.default), _pt_BR_pages__WEBPACK_IMPORTED_MODULE_4__.default));

/***/ }),

/***/ "./src/locales/pt-BR/component.ts":
/*!****************************************!*\
  !*** ./src/locales/pt-BR/component.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'component.tagSelect.expand': 'Expandir',
  'component.tagSelect.collapse': 'Diminuir',
  'component.tagSelect.all': 'Todas'
});

/***/ }),

/***/ "./src/locales/pt-BR/globalHeader.ts":
/*!*******************************************!*\
  !*** ./src/locales/pt-BR/globalHeader.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'component.globalHeader.search': 'Busca',
  'component.globalHeader.search.example1': 'Exemplo de busca 1',
  'component.globalHeader.search.example2': 'Exemplo de busca 2',
  'component.globalHeader.search.example3': 'Exemplo de busca 3',
  'component.globalHeader.help': 'Ajuda',
  'component.globalHeader.notification': 'Notificação',
  'component.globalHeader.notification.empty': 'Você visualizou todas as notificações.',
  'component.globalHeader.message': 'Mensagem',
  'component.globalHeader.message.empty': 'Você visualizou todas as mensagens.',
  'component.globalHeader.event': 'Evento',
  'component.globalHeader.event.empty': 'Você visualizou todos os eventos.',
  'component.noticeIcon.clear': 'Limpar',
  'component.noticeIcon.cleared': 'Limpo',
  'component.noticeIcon.empty': 'Sem notificações',
  'component.noticeIcon.loaded': 'Carregado',
  'component.noticeIcon.view-more': 'Veja mais'
});

/***/ }),

/***/ "./src/locales/pt-BR/menu.ts":
/*!***********************************!*\
  !*** ./src/locales/pt-BR/menu.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'menu.welcome': 'Welcome',
  'menu.more-blocks': 'More Blocks',
  'menu.home': 'Início',
  'menu.login': 'Login',
  'menu.admin': 'Admin',
  'menu.admin.sub-page': 'Sub-Page',
  'menu.register': 'Registro',
  'menu.register-result': 'Resultado de registro',
  'menu.dashboard': 'Dashboard',
  'menu.dashboard.analysis': 'Análise',
  'menu.dashboard.monitor': 'Monitor',
  'menu.dashboard.workplace': 'Ambiente de Trabalho',
  'menu.exception.403': '403',
  'menu.exception.404': '404',
  'menu.exception.500': '500',
  'menu.form': 'Formulário',
  'menu.form.basic-form': 'Formulário Básico',
  'menu.form.step-form': 'Formulário Assistido',
  'menu.form.step-form.info': 'Formulário Assistido(gravar informações de transferência)',
  'menu.form.step-form.confirm': 'Formulário Assistido(confirmar informações de transferência)',
  'menu.form.step-form.result': 'Formulário Assistido(finalizado)',
  'menu.form.advanced-form': 'Formulário Avançado',
  'menu.list': 'Lista',
  'menu.list.table-list': 'Tabela de Busca',
  'menu.list.basic-list': 'Lista Básica',
  'menu.list.card-list': 'Lista de Card',
  'menu.list.search-list': 'Lista de Busca',
  'menu.list.search-list.articles': 'Lista de Busca(artigos)',
  'menu.list.search-list.projects': 'Lista de Busca(projetos)',
  'menu.list.search-list.applications': 'Lista de Busca(aplicações)',
  'menu.profile': 'Perfil',
  'menu.profile.basic': 'Perfil Básico',
  'menu.profile.advanced': 'Perfil Avançado',
  'menu.result': 'Resultado',
  'menu.result.success': 'Sucesso',
  'menu.result.fail': 'Falha',
  'menu.exception': 'Exceção',
  'menu.exception.not-permission': '403',
  'menu.exception.not-find': '404',
  'menu.exception.server-error': '500',
  'menu.exception.trigger': 'Disparar',
  'menu.account': 'Conta',
  'menu.account.center': 'Central da Conta',
  'menu.account.settings': 'Configurar Conta',
  'menu.account.trigger': 'Disparar Erro',
  'menu.account.logout': 'Sair',
  'menu.editor': 'Graphic Editor',
  'menu.editor.flow': 'Flow Editor',
  'menu.editor.mind': 'Mind Editor',
  'menu.editor.koni': 'Koni Editor'
});

/***/ }),

/***/ "./src/locales/pt-BR/pages.ts":
/*!************************************!*\
  !*** ./src/locales/pt-BR/pages.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'pages.layouts.userLayout.title': 'Ant Design é a especificação de web design mais influente no distrito de Xihu',
  'pages.login.accountLogin.tab': 'Login da conta',
  'pages.login.accountLogin.errorMessage': 'usuário/senha incorreto(admin/ant.design)',
  'pages.login.username.placeholder': 'Usuário: admin or user',
  'pages.login.username.required': 'Por favor insira seu usuário!',
  'pages.login.password.placeholder': 'Senha: ant.design',
  'pages.login.password.required': 'Por favor insira sua senha!',
  'pages.login.phoneLogin.tab': 'Login com Telefone',
  'pages.login.phoneLogin.errorMessage': 'Erro de Código de Verificação',
  'pages.login.phoneNumber.placeholder': 'Telefone',
  'pages.login.phoneNumber.required': 'Por favor entre com seu telefone!',
  'pages.login.phoneNumber.invalid': 'Telefone é inválido!',
  'pages.login.captcha.placeholder': 'Código de Verificação',
  'pages.login.captcha.required': 'Por favor entre com o código de verificação!',
  'pages.login.phoneLogin.getVerificationCode': 'Obter Código',
  'pages.getCaptchaSecondText': 'seg(s)',
  'pages.login.rememberMe': 'Lembre-me',
  'pages.login.forgotPassword': 'Perdeu a Senha ?',
  'pages.login.submit': 'Enviar',
  'pages.login.loginWith': 'Login com :',
  'pages.login.registerAccount': 'Registra Conta',
  'pages.welcome.link': 'Bem-vindo',
  'pages.welcome.alertMessage': 'Componentes pesados mais rápidos e mais fortes foram lançados.',
  'pages.admin.subPage.title': 'Esta página só pode ser vista pelo Admin',
  'pages.admin.subPage.alertMessage': 'O Umi ui foi lançado, bem-vindo ao usar o npm run ui para iniciar a experiência.',
  'pages.searchTable.createForm.newRule': 'Neva Regra',
  'pages.searchTable.updateForm.ruleConfig': 'Configuração de Regra',
  'pages.searchTable.updateForm.basicConfig': 'Informação básica',
  'pages.searchTable.updateForm.ruleName.nameLabel': 'Nome da Regra',
  'pages.searchTable.updateForm.ruleName.nameRules': 'Por favor entre com o nome da regra!',
  'pages.searchTable.updateForm.ruleDesc.descLabel': 'Descrição da Regra',
  'pages.searchTable.updateForm.ruleDesc.descPlaceholder': 'Por favor insira ao menos cinco caracteres',
  'pages.searchTable.updateForm.ruleDesc.descRules': 'Insira uma descrição de regra de pelo menos cinco caracteres!',
  'pages.searchTable.updateForm.ruleProps.title': 'Configurar Propriedades',
  'pages.searchTable.updateForm.object': 'Objeto de Monitoramento',
  'pages.searchTable.updateForm.ruleProps.templateLabel': 'Modelo de Regra',
  'pages.searchTable.updateForm.ruleProps.typeLabel': 'Tipo de Regra',
  'pages.searchTable.updateForm.schedulingPeriod.title': 'Definir Período de Agendamento',
  'pages.searchTable.updateForm.schedulingPeriod.timeLabel': 'Hora de Início',
  'pages.searchTable.updateForm.schedulingPeriod.timeRules': 'Por favor selecione um horáriod e início!',
  'pages.searchTable.titleDesc': 'Descrição',
  'pages.searchTable.ruleName': 'O nome da regra é obrigatório',
  'pages.searchTable.titleCallNo': 'Número de chamadas de serviço',
  'pages.searchTable.titleStatus': 'Status',
  'pages.searchTable.nameStatus.default': 'padrão',
  'pages.searchTable.nameStatus.running': 'executando',
  'pages.searchTable.nameStatus.online': 'online',
  'pages.searchTable.nameStatus.abnormal': 'anormal',
  'pages.searchTable.titleUpdatedAt': 'Última programação em',
  'pages.searchTable.exception': 'Por favor, indique o motivo da exceção!',
  'pages.searchTable.titleOption': 'Opção',
  'pages.searchTable.config': 'Configuração',
  'pages.searchTable.subscribeAlert': 'Inscreva-se para receber alertas',
  'pages.searchTable.title': 'Formulário de Consulta',
  'pages.searchTable.new': 'Novo',
  'pages.searchTable.chosen': 'selecionado',
  'pages.searchTable.item': 'item',
  'pages.searchTable.totalServiceCalls': 'Número total de chamadas de serviço',
  'pages.searchTable.tenThousand': '0000',
  'pages.searchTable.batchDeletion': 'deleção em lote',
  'pages.searchTable.batchApproval': 'aprovação em lote'
});

/***/ }),

/***/ "./src/locales/pt-BR/pwa.ts":
/*!**********************************!*\
  !*** ./src/locales/pt-BR/pwa.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'app.pwa.offline': 'Você está offline agora',
  'app.pwa.serviceworker.updated': 'Novo conteúdo está disponível',
  'app.pwa.serviceworker.updated.hint': 'Por favor, pressione o botão "Atualizar" para recarregar a página atual',
  'app.pwa.serviceworker.updated.ok': 'Atualizar'
});

/***/ }),

/***/ "./src/locales/pt-BR/settingDrawer.ts":
/*!********************************************!*\
  !*** ./src/locales/pt-BR/settingDrawer.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'app.setting.pagestyle': 'Configuração de estilo da página',
  'app.setting.pagestyle.dark': 'Dark style',
  'app.setting.pagestyle.light': 'Light style',
  'app.setting.content-width': 'Largura do conteúdo',
  'app.setting.content-width.fixed': 'Fixo',
  'app.setting.content-width.fluid': 'Fluido',
  'app.setting.themecolor': 'Cor do Tema',
  'app.setting.themecolor.dust': 'Dust Red',
  'app.setting.themecolor.volcano': 'Volcano',
  'app.setting.themecolor.sunset': 'Sunset Orange',
  'app.setting.themecolor.cyan': 'Cyan',
  'app.setting.themecolor.green': 'Polar Green',
  'app.setting.themecolor.daybreak': 'Daybreak Blue (default)',
  'app.setting.themecolor.geekblue': 'Geek Glue',
  'app.setting.themecolor.purple': 'Golden Purple',
  'app.setting.navigationmode': 'Modo de Navegação',
  'app.setting.sidemenu': 'Layout do Menu Lateral',
  'app.setting.topmenu': 'Layout do Menu Superior',
  'app.setting.fixedheader': 'Cabeçalho fixo',
  'app.setting.fixedsidebar': 'Barra lateral fixa',
  'app.setting.fixedsidebar.hint': 'Funciona no layout do menu lateral',
  'app.setting.hideheader': 'Esconder o cabeçalho quando rolar',
  'app.setting.hideheader.hint': 'Funciona quando o esconder cabeçalho está abilitado',
  'app.setting.othersettings': 'Outras configurações',
  'app.setting.weakmode': 'Weak Mode',
  'app.setting.copy': 'Copiar Configuração',
  'app.setting.copyinfo': 'copiado com sucesso，por favor trocar o defaultSettings em src/models/setting.js',
  'app.setting.production.hint': 'O painel de configuração apenas é exibido no ambiente de desenvolvimento, por favor modifique manualmente o'
});

/***/ }),

/***/ "./src/locales/pt-BR/settings.ts":
/*!***************************************!*\
  !*** ./src/locales/pt-BR/settings.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'app.settings.menuMap.basic': 'Configurações Básicas',
  'app.settings.menuMap.security': 'Configurações de Segurança',
  'app.settings.menuMap.binding': 'Vinculação de Conta',
  'app.settings.menuMap.notification': 'Mensagens de Notificação',
  'app.settings.basic.avatar': 'Avatar',
  'app.settings.basic.change-avatar': 'Alterar avatar',
  'app.settings.basic.email': 'Email',
  'app.settings.basic.email-message': 'Por favor insira seu email!',
  'app.settings.basic.nickname': 'Nome de usuário',
  'app.settings.basic.nickname-message': 'Por favor insira seu nome de usuário!',
  'app.settings.basic.profile': 'Perfil pessoal',
  'app.settings.basic.profile-message': 'Por favor insira seu perfil pessoal!',
  'app.settings.basic.profile-placeholder': 'Breve introdução sua',
  'app.settings.basic.country': 'País/Região',
  'app.settings.basic.country-message': 'Por favor insira país!',
  'app.settings.basic.geographic': 'Província, estado ou cidade',
  'app.settings.basic.geographic-message': 'Por favor insira suas informações geográficas!',
  'app.settings.basic.address': 'Endereço',
  'app.settings.basic.address-message': 'Por favor insira seu endereço!',
  'app.settings.basic.phone': 'Número de telefone',
  'app.settings.basic.phone-message': 'Por favor insira seu número de telefone!',
  'app.settings.basic.update': 'Atualizar Informações',
  'app.settings.security.strong': 'Forte',
  'app.settings.security.medium': 'Média',
  'app.settings.security.weak': 'Fraca',
  'app.settings.security.password': 'Senha da Conta',
  'app.settings.security.password-description': 'Força da senha',
  'app.settings.security.phone': 'Telefone de Seguraça',
  'app.settings.security.phone-description': 'Telefone vinculado',
  'app.settings.security.question': 'Pergunta de Segurança',
  'app.settings.security.question-description': 'A pergunta de segurança não está definida e a política de segurança pode proteger efetivamente a segurança da conta',
  'app.settings.security.email': 'Email de Backup',
  'app.settings.security.email-description': 'Email vinculado',
  'app.settings.security.mfa': 'Dispositivo MFA',
  'app.settings.security.mfa-description': 'O dispositivo MFA não vinculado, após a vinculação, pode ser confirmado duas vezes',
  'app.settings.security.modify': 'Modificar',
  'app.settings.security.set': 'Atribuir',
  'app.settings.security.bind': 'Vincular',
  'app.settings.binding.taobao': 'Vincular Taobao',
  'app.settings.binding.taobao-description': 'Atualmente não vinculado à conta Taobao',
  'app.settings.binding.alipay': 'Vincular Alipay',
  'app.settings.binding.alipay-description': 'Atualmente não vinculado à conta Alipay',
  'app.settings.binding.dingding': 'Vincular DingTalk',
  'app.settings.binding.dingding-description': 'Atualmente não vinculado à conta DingTalk',
  'app.settings.binding.bind': 'Vincular',
  'app.settings.notification.password': 'Senha da Conta',
  'app.settings.notification.password-description': 'Mensagens de outros usuários serão notificadas na forma de uma estação de letra',
  'app.settings.notification.messages': 'Mensagens de Sistema',
  'app.settings.notification.messages-description': 'Mensagens de sistema serão notificadas na forma de uma estação de letra',
  'app.settings.notification.todo': 'Notificação de To-do',
  'app.settings.notification.todo-description': 'A lista de to-do será notificada na forma de uma estação de letra',
  'app.settings.open': 'Aberto',
  'app.settings.close': 'Fechado'
});

/***/ }),

/***/ "./src/locales/zh-CN.ts":
/*!******************************!*\
  !*** ./src/locales/zh-CN.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _zh_CN_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zh-CN/component */ "./src/locales/zh-CN/component.ts");
/* harmony import */ var _zh_CN_globalHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zh-CN/globalHeader */ "./src/locales/zh-CN/globalHeader.ts");
/* harmony import */ var _zh_CN_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zh-CN/menu */ "./src/locales/zh-CN/menu.ts");
/* harmony import */ var _zh_CN_pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./zh-CN/pages */ "./src/locales/zh-CN/pages.ts");
/* harmony import */ var _zh_CN_pwa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./zh-CN/pwa */ "./src/locales/zh-CN/pwa.ts");
/* harmony import */ var _zh_CN_settingDrawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./zh-CN/settingDrawer */ "./src/locales/zh-CN/settingDrawer.ts");
/* harmony import */ var _zh_CN_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./zh-CN/settings */ "./src/locales/zh-CN/settings.ts");








/* harmony default export */ __webpack_exports__["default"] = ((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)({
  'navBar.lang': '语言',
  'layout.user.link.help': '帮助',
  'layout.user.link.privacy': '隐私',
  'layout.user.link.terms': '条款',
  'app.copyright.produced': '蚂蚁集团体验技术部出品',
  'app.preview.down.block': '下载此页面到本地项目',
  'app.welcome.link.fetch-blocks': '获取全部区块',
  'app.welcome.link.block-list': '基于 block 开发，快速构建标准页面'
}, _zh_CN_pages__WEBPACK_IMPORTED_MODULE_4__.default), _zh_CN_globalHeader__WEBPACK_IMPORTED_MODULE_2__.default), _zh_CN_menu__WEBPACK_IMPORTED_MODULE_3__.default), _zh_CN_settingDrawer__WEBPACK_IMPORTED_MODULE_6__.default), _zh_CN_settings__WEBPACK_IMPORTED_MODULE_7__.default), _zh_CN_pwa__WEBPACK_IMPORTED_MODULE_5__.default), _zh_CN_component__WEBPACK_IMPORTED_MODULE_1__.default));

/***/ }),

/***/ "./src/locales/zh-CN/component.ts":
/*!****************************************!*\
  !*** ./src/locales/zh-CN/component.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'component.tagSelect.expand': '展开',
  'component.tagSelect.collapse': '收起',
  'component.tagSelect.all': '全部'
});

/***/ }),

/***/ "./src/locales/zh-CN/globalHeader.ts":
/*!*******************************************!*\
  !*** ./src/locales/zh-CN/globalHeader.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'component.globalHeader.search': '站内搜索',
  'component.globalHeader.search.example1': '搜索提示一',
  'component.globalHeader.search.example2': '搜索提示二',
  'component.globalHeader.search.example3': '搜索提示三',
  'component.globalHeader.help': '使用文档',
  'component.globalHeader.notification': '通知',
  'component.globalHeader.notification.empty': '你已查看所有通知',
  'component.globalHeader.message': '消息',
  'component.globalHeader.message.empty': '您已读完所有消息',
  'component.globalHeader.event': '待办',
  'component.globalHeader.event.empty': '你已完成所有待办',
  'component.noticeIcon.clear': '清空',
  'component.noticeIcon.cleared': '清空了',
  'component.noticeIcon.empty': '暂无数据',
  'component.noticeIcon.view-more': '查看更多'
});

/***/ }),

/***/ "./src/locales/zh-CN/menu.ts":
/*!***********************************!*\
  !*** ./src/locales/zh-CN/menu.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'menu.welcome': '欢迎',
  'menu.more-blocks': '更多区块',
  'menu.home': '首页',
  'menu.admin': '管理页',
  'menu.admin.sub-page': '二级管理页',
  'menu.login': '登录',
  'menu.register': '注册',
  'menu.register-result': '注册结果',
  'menu.dashboard': 'Dashboard',
  'menu.dashboard.analysis': '分析页',
  'menu.dashboard.monitor': '监控页',
  'menu.dashboard.workplace': '工作台',
  'menu.exception.403': '403',
  'menu.exception.404': '404',
  'menu.exception.500': '500',
  'menu.form': '表单页',
  'menu.form.basic-form': '基础表单',
  'menu.form.step-form': '分步表单',
  'menu.form.step-form.info': '分步表单（填写转账信息）',
  'menu.form.step-form.confirm': '分步表单（确认转账信息）',
  'menu.form.step-form.result': '分步表单（完成）',
  'menu.form.advanced-form': '高级表单',
  'menu.list': '列表页',
  'menu.list.table-list': '查询表格',
  'menu.list.basic-list': '标准列表',
  'menu.list.card-list': '卡片列表',
  'menu.list.search-list': '搜索列表',
  'menu.list.search-list.articles': '搜索列表（文章）',
  'menu.list.search-list.projects': '搜索列表（项目）',
  'menu.list.search-list.applications': '搜索列表（应用）',
  'menu.profile': '详情页',
  'menu.profile.basic': '基础详情页',
  'menu.profile.advanced': '高级详情页',
  'menu.result': '结果页',
  'menu.result.success': '成功页',
  'menu.result.fail': '失败页',
  'menu.exception': '异常页',
  'menu.exception.not-permission': '403',
  'menu.exception.not-find': '404',
  'menu.exception.server-error': '500',
  'menu.exception.trigger': '触发错误',
  'menu.account': '个人页',
  'menu.account.center': '个人中心',
  'menu.account.settings': '个人设置',
  'menu.account.trigger': '触发报错',
  'menu.account.logout': '退出登录',
  'menu.editor': '图形编辑器',
  'menu.editor.flow': '流程编辑器',
  'menu.editor.mind': '脑图编辑器',
  'menu.editor.koni': '拓扑编辑器'
});

/***/ }),

/***/ "./src/locales/zh-CN/pages.ts":
/*!************************************!*\
  !*** ./src/locales/zh-CN/pages.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'pages.layouts.userLayout.title': 'Ant Design 是西湖区最具影响力的 Web 设计规范',
  'pages.login.accountLogin.tab': '账户密码登录',
  'pages.login.accountLogin.errorMessage': '错误的用户名和密码(admin/ant.design)',
  'pages.login.failure': '登录失败，请重试！',
  'pages.login.success': '登录成功！',
  'pages.login.username.placeholder': '用户名: admin or user',
  'pages.login.username.required': '用户名是必填项！',
  'pages.login.password.placeholder': '密码: ant.design',
  'pages.login.password.required': '密码是必填项！',
  'pages.login.phoneLogin.tab': '手机号登录',
  'pages.login.phoneLogin.errorMessage': '验证码错误',
  'pages.login.phoneNumber.placeholder': '请输入手机号！',
  'pages.login.phoneNumber.required': '手机号是必填项！',
  'pages.login.phoneNumber.invalid': '不合法的手机号！',
  'pages.login.captcha.placeholder': '请输入验证码！',
  'pages.login.captcha.required': '验证码是必填项！',
  'pages.login.phoneLogin.getVerificationCode': '获取验证码',
  'pages.getCaptchaSecondText': '秒后重新获取',
  'pages.login.rememberMe': '自动登录',
  'pages.login.forgotPassword': '忘记密码 ?',
  'pages.login.submit': '登录',
  'pages.login.loginWith': '其他登录方式 :',
  'pages.login.registerAccount': '注册账户',
  'pages.welcome.link': '欢迎使用',
  'pages.welcome.alertMessage': '更快更强的重型组件，已经发布。',
  'pages.admin.subPage.title': ' 这个页面只有 admin 权限才能查看',
  'pages.admin.subPage.alertMessage': 'umi ui 现已发布，欢迎使用 npm run ui 启动体验。',
  'pages.searchTable.createForm.newRule': '新建规则',
  'pages.searchTable.updateForm.ruleConfig': '规则配置',
  'pages.searchTable.updateForm.basicConfig': '基本信息',
  'pages.searchTable.updateForm.ruleName.nameLabel': '规则名称',
  'pages.searchTable.updateForm.ruleName.nameRules': '请输入规则名称！',
  'pages.searchTable.updateForm.ruleDesc.descLabel': '规则描述',
  'pages.searchTable.updateForm.ruleDesc.descPlaceholder': '请输入至少五个字符',
  'pages.searchTable.updateForm.ruleDesc.descRules': '请输入至少五个字符的规则描述！',
  'pages.searchTable.updateForm.ruleProps.title': '配置规则属性',
  'pages.searchTable.updateForm.object': '监控对象',
  'pages.searchTable.updateForm.ruleProps.templateLabel': '规则模板',
  'pages.searchTable.updateForm.ruleProps.typeLabel': '规则类型',
  'pages.searchTable.updateForm.schedulingPeriod.title': '设定调度周期',
  'pages.searchTable.updateForm.schedulingPeriod.timeLabel': '开始时间',
  'pages.searchTable.updateForm.schedulingPeriod.timeRules': '请选择开始时间！',
  'pages.searchTable.titleDesc': '描述',
  'pages.searchTable.ruleName': '规则名称为必填项',
  'pages.searchTable.titleCallNo': '服务调用次数',
  'pages.searchTable.titleStatus': '状态',
  'pages.searchTable.nameStatus.default': '关闭',
  'pages.searchTable.nameStatus.running': '运行中',
  'pages.searchTable.nameStatus.online': '已上线',
  'pages.searchTable.nameStatus.abnormal': '异常',
  'pages.searchTable.titleUpdatedAt': '上次调度时间',
  'pages.searchTable.exception': '请输入异常原因！',
  'pages.searchTable.titleOption': '操作',
  'pages.searchTable.config': '配置',
  'pages.searchTable.subscribeAlert': '订阅警报',
  'pages.searchTable.title': '查询表格',
  'pages.searchTable.new': '新建',
  'pages.searchTable.chosen': '已选择',
  'pages.searchTable.item': '项',
  'pages.searchTable.totalServiceCalls': '服务调用次数总计',
  'pages.searchTable.tenThousand': '万',
  'pages.searchTable.batchDeletion': '批量删除',
  'pages.searchTable.batchApproval': '批量审批'
});

/***/ }),

/***/ "./src/locales/zh-CN/pwa.ts":
/*!**********************************!*\
  !*** ./src/locales/zh-CN/pwa.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'app.pwa.offline': '当前处于离线状态',
  'app.pwa.serviceworker.updated': '有新内容',
  'app.pwa.serviceworker.updated.hint': '请点击“刷新”按钮或者手动刷新页面',
  'app.pwa.serviceworker.updated.ok': '刷新'
});

/***/ }),

/***/ "./src/locales/zh-CN/settingDrawer.ts":
/*!********************************************!*\
  !*** ./src/locales/zh-CN/settingDrawer.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'app.setting.pagestyle': '整体风格设置',
  'app.setting.pagestyle.dark': '暗色菜单风格',
  'app.setting.pagestyle.light': '亮色菜单风格',
  'app.setting.content-width': '内容区域宽度',
  'app.setting.content-width.fixed': '定宽',
  'app.setting.content-width.fluid': '流式',
  'app.setting.themecolor': '主题色',
  'app.setting.themecolor.dust': '薄暮',
  'app.setting.themecolor.volcano': '火山',
  'app.setting.themecolor.sunset': '日暮',
  'app.setting.themecolor.cyan': '明青',
  'app.setting.themecolor.green': '极光绿',
  'app.setting.themecolor.daybreak': '拂晓蓝（默认）',
  'app.setting.themecolor.geekblue': '极客蓝',
  'app.setting.themecolor.purple': '酱紫',
  'app.setting.navigationmode': '导航模式',
  'app.setting.sidemenu': '侧边菜单布局',
  'app.setting.topmenu': '顶部菜单布局',
  'app.setting.fixedheader': '固定 Header',
  'app.setting.fixedsidebar': '固定侧边菜单',
  'app.setting.fixedsidebar.hint': '侧边菜单布局时可配置',
  'app.setting.hideheader': '下滑时隐藏 Header',
  'app.setting.hideheader.hint': '固定 Header 时可配置',
  'app.setting.othersettings': '其他设置',
  'app.setting.weakmode': '色弱模式',
  'app.setting.copy': '拷贝设置',
  'app.setting.copyinfo': '拷贝成功，请到 config/defaultSettings.js 中替换默认配置',
  'app.setting.production.hint': '配置栏只在开发环境用于预览，生产环境不会展现，请拷贝后手动修改配置文件'
});

/***/ }),

/***/ "./src/locales/zh-CN/settings.ts":
/*!***************************************!*\
  !*** ./src/locales/zh-CN/settings.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'app.settings.menuMap.basic': '基本设置',
  'app.settings.menuMap.security': '安全设置',
  'app.settings.menuMap.binding': '账号绑定',
  'app.settings.menuMap.notification': '新消息通知',
  'app.settings.basic.avatar': '头像',
  'app.settings.basic.change-avatar': '更换头像',
  'app.settings.basic.email': '邮箱',
  'app.settings.basic.email-message': '请输入您的邮箱!',
  'app.settings.basic.nickname': '昵称',
  'app.settings.basic.nickname-message': '请输入您的昵称!',
  'app.settings.basic.profile': '个人简介',
  'app.settings.basic.profile-message': '请输入个人简介!',
  'app.settings.basic.profile-placeholder': '个人简介',
  'app.settings.basic.country': '国家/地区',
  'app.settings.basic.country-message': '请输入您的国家或地区!',
  'app.settings.basic.geographic': '所在省市',
  'app.settings.basic.geographic-message': '请输入您的所在省市!',
  'app.settings.basic.address': '街道地址',
  'app.settings.basic.address-message': '请输入您的街道地址!',
  'app.settings.basic.phone': '联系电话',
  'app.settings.basic.phone-message': '请输入您的联系电话!',
  'app.settings.basic.update': '更新基本信息',
  'app.settings.security.strong': '强',
  'app.settings.security.medium': '中',
  'app.settings.security.weak': '弱',
  'app.settings.security.password': '账户密码',
  'app.settings.security.password-description': '当前密码强度',
  'app.settings.security.phone': '密保手机',
  'app.settings.security.phone-description': '已绑定手机',
  'app.settings.security.question': '密保问题',
  'app.settings.security.question-description': '未设置密保问题，密保问题可有效保护账户安全',
  'app.settings.security.email': '备用邮箱',
  'app.settings.security.email-description': '已绑定邮箱',
  'app.settings.security.mfa': 'MFA 设备',
  'app.settings.security.mfa-description': '未绑定 MFA 设备，绑定后，可以进行二次确认',
  'app.settings.security.modify': '修改',
  'app.settings.security.set': '设置',
  'app.settings.security.bind': '绑定',
  'app.settings.binding.taobao': '绑定淘宝',
  'app.settings.binding.taobao-description': '当前未绑定淘宝账号',
  'app.settings.binding.alipay': '绑定支付宝',
  'app.settings.binding.alipay-description': '当前未绑定支付宝账号',
  'app.settings.binding.dingding': '绑定钉钉',
  'app.settings.binding.dingding-description': '当前未绑定钉钉账号',
  'app.settings.binding.bind': '绑定',
  'app.settings.notification.password': '账户密码',
  'app.settings.notification.password-description': '其他用户的消息将以站内信的形式通知',
  'app.settings.notification.messages': '系统消息',
  'app.settings.notification.messages-description': '系统消息将以站内信的形式通知',
  'app.settings.notification.todo': '待办任务',
  'app.settings.notification.todo-description': '待办任务将以站内信的形式通知',
  'app.settings.open': '开',
  'app.settings.close': '关'
});

/***/ }),

/***/ "./src/locales/zh-TW.ts":
/*!******************************!*\
  !*** ./src/locales/zh-TW.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _zh_TW_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zh-TW/component */ "./src/locales/zh-TW/component.ts");
/* harmony import */ var _zh_TW_globalHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zh-TW/globalHeader */ "./src/locales/zh-TW/globalHeader.ts");
/* harmony import */ var _zh_TW_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zh-TW/menu */ "./src/locales/zh-TW/menu.ts");
/* harmony import */ var _zh_TW_pwa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./zh-TW/pwa */ "./src/locales/zh-TW/pwa.ts");
/* harmony import */ var _zh_TW_settingDrawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./zh-TW/settingDrawer */ "./src/locales/zh-TW/settingDrawer.ts");
/* harmony import */ var _zh_TW_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./zh-TW/settings */ "./src/locales/zh-TW/settings.ts");







/* harmony default export */ __webpack_exports__["default"] = ((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)((0,_Users_quxiaohui_Desktop_projects_react_project_station_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__.default)({
  'navBar.lang': '語言',
  'layout.user.link.help': '幫助',
  'layout.user.link.privacy': '隱私',
  'layout.user.link.terms': '條款',
  'app.preview.down.block': '下載此頁面到本地項目'
}, _zh_TW_globalHeader__WEBPACK_IMPORTED_MODULE_2__.default), _zh_TW_menu__WEBPACK_IMPORTED_MODULE_3__.default), _zh_TW_settingDrawer__WEBPACK_IMPORTED_MODULE_5__.default), _zh_TW_settings__WEBPACK_IMPORTED_MODULE_6__.default), _zh_TW_pwa__WEBPACK_IMPORTED_MODULE_4__.default), _zh_TW_component__WEBPACK_IMPORTED_MODULE_1__.default));

/***/ }),

/***/ "./src/locales/zh-TW/component.ts":
/*!****************************************!*\
  !*** ./src/locales/zh-TW/component.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'component.tagSelect.expand': '展開',
  'component.tagSelect.collapse': '收起',
  'component.tagSelect.all': '全部'
});

/***/ }),

/***/ "./src/locales/zh-TW/globalHeader.ts":
/*!*******************************************!*\
  !*** ./src/locales/zh-TW/globalHeader.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'component.globalHeader.search': '站內搜索',
  'component.globalHeader.search.example1': '搜索提示壹',
  'component.globalHeader.search.example2': '搜索提示二',
  'component.globalHeader.search.example3': '搜索提示三',
  'component.globalHeader.help': '使用手冊',
  'component.globalHeader.notification': '通知',
  'component.globalHeader.notification.empty': '妳已查看所有通知',
  'component.globalHeader.message': '消息',
  'component.globalHeader.message.empty': '您已讀完所有消息',
  'component.globalHeader.event': '待辦',
  'component.globalHeader.event.empty': '妳已完成所有待辦',
  'component.noticeIcon.clear': '清空',
  'component.noticeIcon.cleared': '清空了',
  'component.noticeIcon.empty': '暫無資料',
  'component.noticeIcon.view-more': '查看更多'
});

/***/ }),

/***/ "./src/locales/zh-TW/menu.ts":
/*!***********************************!*\
  !*** ./src/locales/zh-TW/menu.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'menu.welcome': '歡迎',
  'menu.more-blocks': '更多區塊',
  'menu.home': '首頁',
  'menu.login': '登錄',
  'menu.admin': '权限',
  'menu.admin.sub-page': '二级管理页',
  'menu.exception.403': '403',
  'menu.exception.404': '404',
  'menu.exception.500': '500',
  'menu.register': '註冊',
  'menu.register-result': '註冊結果',
  'menu.dashboard': 'Dashboard',
  'menu.dashboard.analysis': '分析頁',
  'menu.dashboard.monitor': '監控頁',
  'menu.dashboard.workplace': '工作臺',
  'menu.form': '表單頁',
  'menu.form.basic-form': '基礎表單',
  'menu.form.step-form': '分步表單',
  'menu.form.step-form.info': '分步表單（填寫轉賬信息）',
  'menu.form.step-form.confirm': '分步表單（確認轉賬信息）',
  'menu.form.step-form.result': '分步表單（完成）',
  'menu.form.advanced-form': '高級表單',
  'menu.list': '列表頁',
  'menu.list.table-list': '查詢表格',
  'menu.list.basic-list': '標淮列表',
  'menu.list.card-list': '卡片列表',
  'menu.list.search-list': '搜索列表',
  'menu.list.search-list.articles': '搜索列表（文章）',
  'menu.list.search-list.projects': '搜索列表（項目）',
  'menu.list.search-list.applications': '搜索列表（應用）',
  'menu.profile': '詳情頁',
  'menu.profile.basic': '基礎詳情頁',
  'menu.profile.advanced': '高級詳情頁',
  'menu.result': '結果頁',
  'menu.result.success': '成功頁',
  'menu.result.fail': '失敗頁',
  'menu.account': '個人頁',
  'menu.account.center': '個人中心',
  'menu.account.settings': '個人設置',
  'menu.account.trigger': '觸發報錯',
  'menu.account.logout': '退出登錄',
  'menu.exception': '异常页',
  'menu.exception.not-permission': '403',
  'menu.exception.not-find': '404',
  'menu.exception.server-error': '500',
  'menu.exception.trigger': '触发错误',
  'menu.editor': '圖形編輯器',
  'menu.editor.flow': '流程編輯器',
  'menu.editor.mind': '腦圖編輯器',
  'menu.editor.koni': '拓撲編輯器'
});

/***/ }),

/***/ "./src/locales/zh-TW/pwa.ts":
/*!**********************************!*\
  !*** ./src/locales/zh-TW/pwa.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'app.pwa.offline': '當前處於離線狀態',
  'app.pwa.serviceworker.updated': '有新內容',
  'app.pwa.serviceworker.updated.hint': '請點擊“刷新”按鈕或者手動刷新頁面',
  'app.pwa.serviceworker.updated.ok': '刷新'
});

/***/ }),

/***/ "./src/locales/zh-TW/settingDrawer.ts":
/*!********************************************!*\
  !*** ./src/locales/zh-TW/settingDrawer.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'app.setting.pagestyle': '整體風格設置',
  'app.setting.pagestyle.dark': '暗色菜單風格',
  'app.setting.pagestyle.light': '亮色菜單風格',
  'app.setting.content-width': '內容區域寬度',
  'app.setting.content-width.fixed': '定寬',
  'app.setting.content-width.fluid': '流式',
  'app.setting.themecolor': '主題色',
  'app.setting.themecolor.dust': '薄暮',
  'app.setting.themecolor.volcano': '火山',
  'app.setting.themecolor.sunset': '日暮',
  'app.setting.themecolor.cyan': '明青',
  'app.setting.themecolor.green': '極光綠',
  'app.setting.themecolor.daybreak': '拂曉藍（默認）',
  'app.setting.themecolor.geekblue': '極客藍',
  'app.setting.themecolor.purple': '醬紫',
  'app.setting.navigationmode': '導航模式',
  'app.setting.sidemenu': '側邊菜單布局',
  'app.setting.topmenu': '頂部菜單布局',
  'app.setting.fixedheader': '固定 Header',
  'app.setting.fixedsidebar': '固定側邊菜單',
  'app.setting.fixedsidebar.hint': '側邊菜單布局時可配置',
  'app.setting.hideheader': '下滑時隱藏 Header',
  'app.setting.hideheader.hint': '固定 Header 時可配置',
  'app.setting.othersettings': '其他設置',
  'app.setting.weakmode': '色弱模式',
  'app.setting.copy': '拷貝設置',
  'app.setting.copyinfo': '拷貝成功，請到 config/defaultSettings.js 中替換默認配置',
  'app.setting.production.hint': '配置欄只在開發環境用於預覽，生產環境不會展現，請拷貝後手動修改配置文件'
});

/***/ }),

/***/ "./src/locales/zh-TW/settings.ts":
/*!***************************************!*\
  !*** ./src/locales/zh-TW/settings.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  'app.settings.menuMap.basic': '基本設置',
  'app.settings.menuMap.security': '安全設置',
  'app.settings.menuMap.binding': '賬號綁定',
  'app.settings.menuMap.notification': '新消息通知',
  'app.settings.basic.avatar': '頭像',
  'app.settings.basic.change-avatar': '更換頭像',
  'app.settings.basic.email': '郵箱',
  'app.settings.basic.email-message': '請輸入您的郵箱!',
  'app.settings.basic.nickname': '昵稱',
  'app.settings.basic.nickname-message': '請輸入您的昵稱!',
  'app.settings.basic.profile': '個人簡介',
  'app.settings.basic.profile-message': '請輸入個人簡介!',
  'app.settings.basic.profile-placeholder': '個人簡介',
  'app.settings.basic.country': '國家/地區',
  'app.settings.basic.country-message': '請輸入您的國家或地區!',
  'app.settings.basic.geographic': '所在省市',
  'app.settings.basic.geographic-message': '請輸入您的所在省市!',
  'app.settings.basic.address': '街道地址',
  'app.settings.basic.address-message': '請輸入您的街道地址!',
  'app.settings.basic.phone': '聯系電話',
  'app.settings.basic.phone-message': '請輸入您的聯系電話!',
  'app.settings.basic.update': '更新基本信息',
  'app.settings.security.strong': '強',
  'app.settings.security.medium': '中',
  'app.settings.security.weak': '弱',
  'app.settings.security.password': '賬戶密碼',
  'app.settings.security.password-description': '當前密碼強度',
  'app.settings.security.phone': '密保手機',
  'app.settings.security.phone-description': '已綁定手機',
  'app.settings.security.question': '密保問題',
  'app.settings.security.question-description': '未設置密保問題，密保問題可有效保護賬戶安全',
  'app.settings.security.email': '備用郵箱',
  'app.settings.security.email-description': '已綁定郵箱',
  'app.settings.security.mfa': 'MFA 設備',
  'app.settings.security.mfa-description': '未綁定 MFA 設備，綁定後，可以進行二次確認',
  'app.settings.security.modify': '修改',
  'app.settings.security.set': '設置',
  'app.settings.security.bind': '綁定',
  'app.settings.binding.taobao': '綁定淘寶',
  'app.settings.binding.taobao-description': '當前未綁定淘寶賬號',
  'app.settings.binding.alipay': '綁定支付寶',
  'app.settings.binding.alipay-description': '當前未綁定支付寶賬號',
  'app.settings.binding.dingding': '綁定釘釘',
  'app.settings.binding.dingding-description': '當前未綁定釘釘賬號',
  'app.settings.binding.bind': '綁定',
  'app.settings.notification.password': '賬戶密碼',
  'app.settings.notification.password-description': '其他用戶的消息將以站內信的形式通知',
  'app.settings.notification.messages': '系統消息',
  'app.settings.notification.messages-description': '系統消息將以站內信的形式通知',
  'app.settings.notification.todo': '待辦任務',
  'app.settings.notification.todo-description': '待辦任務將以站內信的形式通知',
  'app.settings.open': '開',
  'app.settings.close': '關'
});

/***/ }),

/***/ "?4f7e":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (function() {

/* (ignored) */

/***/ })

}]);