"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./Components/PoolAdd/PoolAdd.jsx":
/*!****************************************!*\
  !*** ./Components/PoolAdd/PoolAdd.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets */ \"./assets/index.js\");\n/* harmony import */ var _PoolAdd_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PoolAdd.module.css */ \"./Components/PoolAdd/PoolAdd.module.css\");\n/* harmony import */ var _PoolAdd_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_PoolAdd_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Components_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/index.js */ \"./Components/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n// INTERNAL IMPORT\n\n\n\nconst PoolAdd = ()=>{\n    _s();\n    const [openModel, setOpenModel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [openTokenModel, setOpenTokenModel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [openFee, setOpenFee] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [minPrice, setMinPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [maxPrice, setMaxPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const feePairs = [\n        {\n            fee: \"0.05%\",\n            info: \"Best for stable pairs\",\n            number: \"0% Select\"\n        },\n        {\n            fee: \"0.3%\",\n            info: \"Best for stable pairs\",\n            number: \"0% Select\"\n        },\n        {\n            fee: \"1%\",\n            info: \"Best for stable pairs\",\n            number: \"0% Select\"\n        }\n    ];\n    const minPriceRange = (text)=>{\n        if (text == \"+\") {\n            setMinPrice(minPrice + 1);\n        } else if (text == \"-\") {\n            setMinPrice(minPrice - 1);\n        }\n    };\n    const maxPriceRange = (text)=>{\n        if (text == \"+\") {\n            setMaxPrice(maxPrice + 1);\n        } else if (text == \"-\") {\n            setMaxPrice(maxPrice - 1);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_PoolAdd_module_css__WEBPACK_IMPORTED_MODULE_5___default().PoolAdd),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_PoolAdd_module_css__WEBPACK_IMPORTED_MODULE_5___default().PoolAdd_box),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_PoolAdd_module_css__WEBPACK_IMPORTED_MODULE_5___default().PoolAdd_box_header)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\PoolAdd\\\\PoolAdd.jsx\",\n                lineNumber: 52,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\PoolAdd\\\\PoolAdd.jsx\",\n            lineNumber: 51,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\PoolAdd\\\\PoolAdd.jsx\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, undefined);\n};\n_s(PoolAdd, \"hQxd58CpQqHTl7rC/Sn041rzpvg=\");\n_c = PoolAdd;\nvar _c;\n$RefreshReg$(_c, \"PoolAdd\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL1Bvb2xBZGQvUG9vbEFkZC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBb0Q7QUFDckI7QUFFL0Isa0JBQWtCO0FBQ2U7QUFDUTtBQUN1QjtBQUVoRSxNQUFNUSxVQUFVLElBQU07O0lBQ2xCLE1BQU0sQ0FBQ0MsV0FBWUMsYUFBYSxHQUFHVCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ2pELE1BQU0sQ0FBQ1UsZ0JBQWlCQyxrQkFBa0IsR0FBR1gsK0NBQVFBLENBQUMsS0FBSztJQUMzRCxNQUFNLENBQUNZLFFBQVNDLFVBQVUsR0FBR2IsK0NBQVFBLENBQUM7SUFDdEMsTUFBTSxDQUFDYyxTQUFVQyxXQUFXLEdBQUdmLCtDQUFRQSxDQUFDLEtBQUs7SUFDN0MsTUFBTSxDQUFDZ0IsVUFBV0MsWUFBWSxHQUFHakIsK0NBQVFBLENBQUM7SUFDMUMsTUFBTSxDQUFDa0IsVUFBV0MsWUFBWSxHQUFHbkIsK0NBQVFBLENBQUM7SUFDMUMsTUFBTW9CLFdBQVc7UUFDYjtZQUNJQyxLQUFJO1lBQ0pDLE1BQUs7WUFDTEMsUUFBTztRQUNYO1FBQ0E7WUFDSUYsS0FBSTtZQUNKQyxNQUFLO1lBQ0xDLFFBQU87UUFDWDtRQUNBO1lBQ0lGLEtBQUs7WUFDTEMsTUFBTTtZQUNOQyxRQUFRO1FBQ1o7S0FDSDtJQUdELE1BQU1DLGdCQUFnQixDQUFDQyxPQUFTO1FBQzVCLElBQUdBLFFBQVEsS0FBSztZQUNaUixZQUFZRCxXQUFXO1FBQzNCLE9BQU8sSUFBSVMsUUFBUSxLQUFNO1lBQ3JCUixZQUFZRCxXQUFXO1FBQzNCLENBQUM7SUFDTDtJQUNBLE1BQU1VLGdCQUFnQixDQUFDRCxPQUFTO1FBQzVCLElBQUdBLFFBQVEsS0FBSztZQUNaTixZQUFZRCxXQUFXO1FBQzNCLE9BQU8sSUFBSU8sUUFBUSxLQUFNO1lBQ3JCTixZQUFZRCxXQUFXO1FBQzNCLENBQUM7SUFDTDtJQUNBLHFCQUNJLDhEQUFDUztRQUFJQyxXQUFXeEIsb0VBQWE7a0JBQ3pCLDRFQUFDdUI7WUFBSUMsV0FBV3hCLHdFQUFpQjtzQkFDN0IsNEVBQUN1QjtnQkFBSUMsV0FBV3hCLCtFQUF3Qjs7Ozs7Ozs7Ozs7Ozs7OztBQU14RDtHQWpETUc7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb29sQWRkL1Bvb2xBZGQuanN4PzYzNTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlICwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuLy8gSU5URVJOQUwgSU1QT1JUXHJcbmltcG9ydCBpbWFnZXMgZnJvbSBcIi4uLy4uL2Fzc2V0c1wiXHJcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi9Qb29sQWRkLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgVG9rZW4gLCBTZWFyY2hUb2tlbiB9IGZyb20gXCIuLi8uLi9Db21wb25lbnRzL2luZGV4LmpzXCI7XHJcblxyXG5jb25zdCBQb29sQWRkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW29wZW5Nb2RlbCAsIHNldE9wZW5Nb2RlbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbb3BlblRva2VuTW9kZWwgLCBzZXRPcGVuVG9rZW5Nb2RlbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbYWN0aXZlICwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW29wZW5GZWUgLCBzZXRPcGVuRmVlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFttaW5QcmljZSAsIHNldE1pblByaWNlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW21heFByaWNlICwgc2V0TWF4UHJpY2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBmZWVQYWlycyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZlZTpcIjAuMDUlXCIsXHJcbiAgICAgICAgICAgIGluZm86XCJCZXN0IGZvciBzdGFibGUgcGFpcnNcIixcclxuICAgICAgICAgICAgbnVtYmVyOlwiMCUgU2VsZWN0XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZlZTpcIjAuMyVcIixcclxuICAgICAgICAgICAgaW5mbzpcIkJlc3QgZm9yIHN0YWJsZSBwYWlyc1wiLFxyXG4gICAgICAgICAgICBudW1iZXI6XCIwJSBTZWxlY3RcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZmVlOiBcIjElXCIsXHJcbiAgICAgICAgICAgIGluZm86IFwiQmVzdCBmb3Igc3RhYmxlIHBhaXJzXCIsXHJcbiAgICAgICAgICAgIG51bWJlcjogXCIwJSBTZWxlY3RcIixcclxuICAgICAgICB9XHJcbiAgICBdO1xyXG5cclxuXHJcbiAgICBjb25zdCBtaW5QcmljZVJhbmdlID0gKHRleHQpID0+IHtcclxuICAgICAgICBpZih0ZXh0ID09ICcrJykge1xyXG4gICAgICAgICAgICBzZXRNaW5QcmljZShtaW5QcmljZSArIDEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiggdGV4dCA9PSBcIi1cIiApIHtcclxuICAgICAgICAgICAgc2V0TWluUHJpY2UobWluUHJpY2UgLSAxKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IG1heFByaWNlUmFuZ2UgPSAodGV4dCkgPT4ge1xyXG4gICAgICAgIGlmKHRleHQgPT0gJysnKSB7XHJcbiAgICAgICAgICAgIHNldE1heFByaWNlKG1heFByaWNlICsgMSk7XHJcbiAgICAgICAgfSBlbHNlIGlmKCB0ZXh0ID09IFwiLVwiICkge1xyXG4gICAgICAgICAgICBzZXRNYXhQcmljZShtYXhQcmljZSAtIDEpXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLlBvb2xBZGR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuUG9vbEFkZF9ib3h9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLlBvb2xBZGRfYm94X2hlYWRlcn0+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxuXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkltYWdlIiwiaW1hZ2VzIiwiU3R5bGUiLCJUb2tlbiIsIlNlYXJjaFRva2VuIiwiUG9vbEFkZCIsIm9wZW5Nb2RlbCIsInNldE9wZW5Nb2RlbCIsIm9wZW5Ub2tlbk1vZGVsIiwic2V0T3BlblRva2VuTW9kZWwiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJvcGVuRmVlIiwic2V0T3BlbkZlZSIsIm1pblByaWNlIiwic2V0TWluUHJpY2UiLCJtYXhQcmljZSIsInNldE1heFByaWNlIiwiZmVlUGFpcnMiLCJmZWUiLCJpbmZvIiwibnVtYmVyIiwibWluUHJpY2VSYW5nZSIsInRleHQiLCJtYXhQcmljZVJhbmdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiUG9vbEFkZF9ib3giLCJQb29sQWRkX2JveF9oZWFkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/PoolAdd/PoolAdd.jsx\n"));

/***/ })

});