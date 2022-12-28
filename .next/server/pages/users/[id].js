/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/users/[id]";
exports.ids = ["pages/users/[id]"];
exports.modules = {

/***/ "./style/user.module.scss":
/*!********************************!*\
  !*** ./style/user.module.scss ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"block\": \"user_block__3qhOf\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZS91c2VyLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dF9qcy8uL3N0eWxlL3VzZXIubW9kdWxlLnNjc3M/MmMzYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJibG9ja1wiOiBcInVzZXJfYmxvY2tfXzNxaE9mXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./style/user.module.scss\n");

/***/ }),

/***/ "./pages/users/[id].js":
/*!*****************************!*\
  !*** ./pages/users/[id].js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ User),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_user_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../style/user.module.scss */ \"./style/user.module.scss\");\n/* harmony import */ var _style_user_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_user_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction User({ user  }) {\n    console.log(\"this is user\", user);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { query  } = router;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_style_user_module_scss__WEBPACK_IMPORTED_MODULE_2___default().block),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: `Пользователь number ${query.id}`\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\VS_Code_ALL\\\\VS_Code_ALL\\\\next_js\\\\pages\\\\users\\\\[id].js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: `Name User: ${user.name}`\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\VS_Code_ALL\\\\VS_Code_ALL\\\\next_js\\\\pages\\\\users\\\\[id].js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\VS_Code_ALL\\\\VS_Code_ALL\\\\next_js\\\\pages\\\\users\\\\[id].js\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, this);\n}\nasync function getServerSideProps({ params  }) {\n    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);\n    const user = await response.json();\n    return {\n        props: {\n            user\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBc0M7QUFDVTtBQUVqQyxTQUFTRSxLQUFNLEVBQUNDLEtBQUksRUFBQyxFQUFFO0lBQ2xDQyxRQUFRQyxHQUFHLENBQUMsZ0JBQWdCRjtJQUM1QixNQUFNRyxTQUFTTixzREFBU0E7SUFDeEIsTUFBTSxFQUFDTyxNQUFLLEVBQUMsR0FBR0Q7SUFDaEIscUJBQ0ksOERBQUNFO1FBQUlDLFdBQVdSLHNFQUFXOzswQkFDdkIsOERBQUNVOzBCQUNJLENBQUMsb0JBQW9CLEVBQUVKLE1BQU1LLEVBQUUsQ0FBQyxDQUFDOzs7Ozs7MEJBRXRDLDhEQUFDSjswQkFDSSxDQUFDLFdBQVcsRUFBRUwsS0FBS1UsSUFBSSxDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQUsxQyxDQUFDO0FBRU0sZUFBZUMsbUJBQW1CLEVBQUNDLE9BQU0sRUFBQyxFQUFFO0lBQy9DLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxDQUFDLDJDQUEyQyxFQUFFRixPQUFPSCxFQUFFLENBQUMsQ0FBQztJQUN0RixNQUFNVCxPQUFPLE1BQU1hLFNBQVNFLElBQUk7SUFFaEMsT0FBTztRQUNIQyxPQUFPO1lBQUNoQjtRQUFJO0lBQ2hCO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRfanMvLi9wYWdlcy91c2Vycy9baWRdLmpzPzE3ODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uLy4uL3N0eWxlL3VzZXIubW9kdWxlLnNjc3NcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlciAoe3VzZXJ9KSB7XHJcbiAgICBjb25zb2xlLmxvZygndGhpcyBpcyB1c2VyJywgdXNlcilcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCB7cXVlcnl9ID0gcm91dGVyO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYmxvY2t9PlxyXG4gICAgICAgICAgICA8aDE+XHJcbiAgICAgICAgICAgICAgICB7YNCf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCBudW1iZXIgJHtxdWVyeS5pZH1gfVxyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAge2BOYW1lIFVzZXI6ICR7dXNlci5uYW1lfWB9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7cGFyYW1zfSkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzLyR7cGFyYW1zLmlkfWApXHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge3VzZXJ9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJzdHlsZSIsIlVzZXIiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsInJvdXRlciIsInF1ZXJ5IiwiZGl2IiwiY2xhc3NOYW1lIiwiYmxvY2siLCJoMSIsImlkIiwibmFtZSIsImdldFNlcnZlclNpZGVQcm9wcyIsInBhcmFtcyIsInJlc3BvbnNlIiwiZmV0Y2giLCJqc29uIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/users/[id].js"));
module.exports = __webpack_exports__;

})();