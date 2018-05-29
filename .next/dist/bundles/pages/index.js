module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return setMetaAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setLocation; });
/* unused harmony export getLocationAsync */
var actionTypes = {
  SET_META: 'Set meta for header',
  SET_META_ASYNC: 'Set meta for header (async)',
  SET_ADDRESS: 'Set user\'s address',
  SET_LOCATION: 'Set location from address',
  GET_LOCATION_ASYNC: 'Get location from address (async)'
};
var setMeta = function setMeta(data) {
  return {
    type: actionTypes.SET_META,
    data: data
  };
};
var setMetaAsync = function setMetaAsync() {
  return {
    type: actionTypes.SET_META_ASYNC
  };
};
var setAddress = function setAddress(data) {
  return {
    type: actionTypes.SET_ADDRESS,
    data: data
  };
};
var setLocation = function setLocation(data) {
  return {
    type: actionTypes.SET_LOCATION,
    data: data
  };
};
var getLocationAsync = function getLocationAsync(data) {
  return {
    type: actionTypes.GET_LOCATION_ASYNC,
    data: data
  };
};

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions__ = __webpack_require__("./actions.js");
var _jsxFileName = "D:\\NamiDorama\\React_Radux_Nextjs\\pages\\index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        address: ''
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "changeInput", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(_ref2) {
        var target = _ref2.target;
        var address = target.value;

        _this.setState({
          address: address
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "setUsersAddress", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        e.preventDefault();

        _this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__actions__["b" /* setAddress */])(_this.state.address));

        __WEBPACK_IMPORTED_MODULE_4_next_router___default.a.push("/map/".concat(_this.state.address));
      }
    }), _temp));
  }

  _createClass(Index, [{
    key: "componentDidMount",
    // static async getInitialProps() {
    //   const res = await fetch('https://jsonplaceholder.typicode.com/users');
    //   const data = await res.json();
    //
    //   return {
    //     data: data[0]
    //   }
    // }
    value: function componentDidMount() {
      this.props.dispatch(Object(__WEBPACK_IMPORTED_MODULE_7__actions__["e" /* setMetaAsync */])());
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var meta = this.props.meta;
      return meta.length > 0 && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        className: "jsx-710731268"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        className: "jsx-710731268"
      }, "Title"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        name: "description",
        content: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        className: "jsx-710731268"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        name: "keywords",
        content: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        className: "jsx-710731268"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        className: "jsx-710731268" + " " + "content"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        className: "jsx-710731268"
      }, "\u041F\u0440\u0438\u0432\u0435\u0442, \u044E\u0437\u0435\u0440!"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form", {
        onSubmit: function onSubmit(e) {
          return _this2.setUsersAddress(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        className: "jsx-710731268"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        className: "jsx-710731268"
      }, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0443, \u0433\u043E\u0440\u043E\u0434, \u0443\u043B\u0438\u0446\u0443"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        className: "jsx-710731268"
      }, "\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: \u0423\u043A\u0440\u0430\u0438\u043D\u0430, \u0433. \u0425\u0430\u0440\u044C\u043A\u043E\u0432, \u0443\u043B. \u0413\u0432.\u0428\u0438\u0440\u043E\u043D\u0438\u043D\u0446\u0435\u0432"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "text",
        placeholder: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043D\u0443, \u0433\u043E\u0440\u043E\u0434, \u0443\u043B\u0438\u0446\u0443",
        value: this.state.address,
        onChange: function onChange(e) {
          return _this2.changeInput(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        className: "jsx-710731268"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        className: "jsx-710731268"
      }, "\u041F\u0440\u043E\u043B\u043E\u0436\u0438\u0442\u044C \u043C\u0430\u0440\u0448\u0440\u0443\u0442"))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "710731268",
        css: ".content.jsx-710731268{margin:20px auto;max-width:1024px;}h1.jsx-710731268{color:red;}input.jsx-710731268{display:inline-block;padding:5px 15px;margin:10px 0;border:1px solid lightgrey;box-shadow:0 0 3px lightgrey;border-radius:4px;min-width:300px;}button.jsx-710731268{display:block;width:200px;padding:5px 15px;margin:10px 0;border:1px solid #757575;border-radius:4px;background-color:white;}button.jsx-710731268:hover{background-color:#efefef;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRVcsQUFHZ0MsQUFLcEIsQUFFd0IsQUFTUCxBQVVXLFVBckIzQixJQVljLEdBaEJLLElBT0EsSUFtQkYsQ0FURSxRQWhCbkIsSUFPZ0IsRUFtQmhCLEdBVGdCLFNBVGEsS0FVRixzQkFUSSxHQVVYLGtCQUNLLFFBVkwsZUFXcEIsR0FWa0IsZ0JBQ2xCIiwiZmlsZSI6InBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZVJvb3QiOiJEOlxcTmFtaURvcmFtYVxcUmVhY3RfUmFkdXhfTmV4dGpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQgeyBzZXRBZGRyZXNzLCBzZXRNZXRhQXN5bmMgfSBmcm9tICcuLi9hY3Rpb25zJ1xyXG5cclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRlID0ge1xyXG4gICAgYWRkcmVzczogJydcclxuICB9O1xyXG5cclxuICAvLyBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xyXG4gIC8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2VycycpO1xyXG4gIC8vICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgLy9cclxuICAvLyAgIHJldHVybiB7XHJcbiAgLy8gICAgIGRhdGE6IGRhdGFbMF1cclxuICAvLyAgIH1cclxuICAvLyB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChzZXRNZXRhQXN5bmMoKSk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VJbnB1dCA9ICh7IHRhcmdldCB9KSA9PiB7XHJcbiAgICBjb25zdCBhZGRyZXNzID0gdGFyZ2V0LnZhbHVlO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFkZHJlc3MgfSlcclxuICB9O1xyXG5cclxuICBzZXRVc2Vyc0FkZHJlc3MgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChzZXRBZGRyZXNzKHRoaXMuc3RhdGUuYWRkcmVzcykpO1xyXG4gICAgUm91dGVyLnB1c2goYC9tYXAvJHt0aGlzLnN0YXRlLmFkZHJlc3N9YCk7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBtZXRhIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIG1ldGEubGVuZ3RoID4gMCAmJlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPlRpdGxlPC90aXRsZT5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJjb250ZW50XCIgLz5cclxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJjb250ZW50XCIgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICA8aDE+0J/RgNC40LLQtdGCLCDRjtC30LXRgCE8L2gxPlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiB0aGlzLnNldFVzZXJzQWRkcmVzcyhlKX0+XHJcbiAgICAgICAgICAgIDxwPtCS0LLQtdC00LjRgtC1INGB0YLRgNCw0L3Rgywg0LPQvtGA0L7QtCwg0YPQu9C40YbRgzwvcD5cclxuICAgICAgICAgICAgPHA+0J3QsNC/0YDQuNC80LXRgDog0KPQutGA0LDQuNC90LAsINCzLiDQpdCw0YDRjNC60L7Qsiwg0YPQuy4g0JPQsi7QqNC40YDQvtC90LjQvdGG0LXQsjwvcD5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0JLQstC10LTQuNGC0LUg0YHRgtGA0LDQvdGDLCDQs9C+0YDQvtC0LCDRg9C70LjRhtGDXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hZGRyZXNzfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5jaGFuZ2VJbnB1dChlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgey8qPExpbmsgaHJlZj17YC9tYXAvJHt0aGlzLnN0YXRlLmFkZHJlc3N9YH0gPiovfVxyXG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICAgICAgICDQn9GA0L7Qu9C+0LbQuNGC0Ywg0LzQsNGA0YjRgNGD0YJcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgey8qPC9MaW5rPiovfVxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTAyNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICBjb2xvcjogcmVkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHggMTVweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDNweCBsaWdodGdyZXk7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzc1NzU3NTtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcclxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KCh7IG1ldGEgfSkgPT4gKHsgbWV0YTogbWV0YSB9KSkoSW5kZXgpO1xyXG4iXX0= */\n/*@ sourceURL=pages\\index.js */"
      }));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_6_react_redux__["connect"])(function (_ref3) {
  var meta = _ref3.meta;
  return {
    meta: meta
  };
})(Index));

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map