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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets */ \"./assets/index.js\");\n/* harmony import */ var _PoolAdd_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PoolAdd.module.css */ \"./Components/PoolAdd/PoolAdd.module.css\");\n/* harmony import */ var _PoolAdd_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_PoolAdd_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Components_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/index.js */ \"./Components/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n// INTERNAL IMPORT\n\n\n\nconst PoolAdd = ()=>{\n    _s();\n    const [openModel, setOpenModel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [openTokenModel, setOpenTokenModel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [openFee, setOpenFee] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [minPrice, setMinPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [maxPrice, setMaxPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const feePairs = [\n        {\n            fee: \"0.05%\",\n            info: \"Best for stable pairs\",\n            number: \"0% Select\"\n        },\n        {\n            fee: \"0.3%\",\n            info: \"Best for stable pairs\",\n            number: \"0% Select\"\n        },\n        {\n            fee: \"1%\",\n            info: \"Best for stable pairs\",\n            number: \"0% Select\"\n        }\n    ];\n    const minPriceRange = (text)=>{\n        if (text == \"+\") {\n            setMinPrice(minPrice + 1);\n        } else if (text == \"-\") {\n            setMinPrice(minPrice - 1);\n        }\n    };\n    const maxPriceRange = (text)=>{\n        if (text == \"+\") {\n            setMaxPrice(maxPrice + 1);\n        } else if (text == \"-\") {\n            setMaxPrice(maxPrice - 1);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_PoolAdd_module_css__WEBPACK_IMPORTED_MODULE_5___default().PoolAdd),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_PoolAdd_module_css__WEBPACK_IMPORTED_MODULE_5___default().PoolAdd_box),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_PoolAdd_module_css__WEBPACK_IMPORTED_MODULE_5___default().PoolAdd_box_header),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_PoolAdd_module_css__WEBPACK_IMPORTED_MODULE_5___default().PoolAdd_box_header_left),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        src: _assets__WEBPACK_IMPORTED_MODULE_3__[\"default\"].arrowLeft,\n                        alt: \"image\",\n                        width: 30,\n                        height: 30\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\PoolAdd\\\\PoolAdd.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 25\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\PoolAdd\\\\PoolAdd.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\PoolAdd\\\\PoolAdd.jsx\",\n                lineNumber: 52,\n                columnNumber: 17\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\PoolAdd\\\\PoolAdd.jsx\",\n            lineNumber: 51,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\PoolAdd\\\\PoolAdd.jsx\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, undefined);\n};\n_s(PoolAdd, \"hQxd58CpQqHTl7rC/Sn041rzpvg=\");\n_c = PoolAdd;\nvar _c;\n$RefreshReg$(_c, \"PoolAdd\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL1Bvb2xBZGQvUG9vbEFkZC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBb0Q7QUFDckI7QUFFL0Isa0JBQWtCO0FBQ2U7QUFDUTtBQUN1QjtBQUVoRSxNQUFNUSxVQUFVLElBQU07O0lBQ2xCLE1BQU0sQ0FBQ0MsV0FBWUMsYUFBYSxHQUFHVCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ2pELE1BQU0sQ0FBQ1UsZ0JBQWlCQyxrQkFBa0IsR0FBR1gsK0NBQVFBLENBQUMsS0FBSztJQUMzRCxNQUFNLENBQUNZLFFBQVNDLFVBQVUsR0FBR2IsK0NBQVFBLENBQUM7SUFDdEMsTUFBTSxDQUFDYyxTQUFVQyxXQUFXLEdBQUdmLCtDQUFRQSxDQUFDLEtBQUs7SUFDN0MsTUFBTSxDQUFDZ0IsVUFBV0MsWUFBWSxHQUFHakIsK0NBQVFBLENBQUM7SUFDMUMsTUFBTSxDQUFDa0IsVUFBV0MsWUFBWSxHQUFHbkIsK0NBQVFBLENBQUM7SUFDMUMsTUFBTW9CLFdBQVc7UUFDYjtZQUNJQyxLQUFJO1lBQ0pDLE1BQUs7WUFDTEMsUUFBTztRQUNYO1FBQ0E7WUFDSUYsS0FBSTtZQUNKQyxNQUFLO1lBQ0xDLFFBQU87UUFDWDtRQUNBO1lBQ0lGLEtBQUs7WUFDTEMsTUFBTTtZQUNOQyxRQUFRO1FBQ1o7S0FDSDtJQUdELE1BQU1DLGdCQUFnQixDQUFDQyxPQUFTO1FBQzVCLElBQUdBLFFBQVEsS0FBSztZQUNaUixZQUFZRCxXQUFXO1FBQzNCLE9BQU8sSUFBSVMsUUFBUSxLQUFNO1lBQ3JCUixZQUFZRCxXQUFXO1FBQzNCLENBQUM7SUFDTDtJQUNBLE1BQU1VLGdCQUFnQixDQUFDRCxPQUFTO1FBQzVCLElBQUdBLFFBQVEsS0FBSztZQUNaTixZQUFZRCxXQUFXO1FBQzNCLE9BQU8sSUFBSU8sUUFBUSxLQUFNO1lBQ3JCTixZQUFZRCxXQUFXO1FBQzNCLENBQUM7SUFDTDtJQUNBLHFCQUNJLDhEQUFDUztRQUFJQyxXQUFXeEIsb0VBQWE7a0JBQ3pCLDRFQUFDdUI7WUFBSUMsV0FBV3hCLHdFQUFpQjtzQkFDN0IsNEVBQUN1QjtnQkFBSUMsV0FBV3hCLCtFQUF3QjswQkFDcEMsNEVBQUN1QjtvQkFBSUMsV0FBV3hCLG9GQUE2Qjs4QkFDekMsNEVBQUNGLG1EQUFLQTt3QkFBQzhCLEtBQUs3Qix5REFBZ0I7d0JBQUUrQixLQUFJO3dCQUFRQyxPQUFPO3dCQUFJQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFyRjtHQXJETTdCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvUG9vbEFkZC9Qb29sQWRkLmpzeD82MzUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSAsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbi8vIElOVEVSTkFMIElNUE9SVFxyXG5pbXBvcnQgaW1hZ2VzIGZyb20gXCIuLi8uLi9hc3NldHNcIlxyXG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vUG9vbEFkZC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IFRva2VuICwgU2VhcmNoVG9rZW4gfSBmcm9tIFwiLi4vLi4vQ29tcG9uZW50cy9pbmRleC5qc1wiO1xyXG5cclxuY29uc3QgUG9vbEFkZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtvcGVuTW9kZWwgLCBzZXRPcGVuTW9kZWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW29wZW5Ub2tlbk1vZGVsICwgc2V0T3BlblRva2VuTW9kZWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2FjdGl2ZSAsIHNldEFjdGl2ZV0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFtvcGVuRmVlICwgc2V0T3BlbkZlZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbbWluUHJpY2UgLCBzZXRNaW5QcmljZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFttYXhQcmljZSAsIHNldE1heFByaWNlXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgZmVlUGFpcnMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmZWU6XCIwLjA1JVwiLFxyXG4gICAgICAgICAgICBpbmZvOlwiQmVzdCBmb3Igc3RhYmxlIHBhaXJzXCIsXHJcbiAgICAgICAgICAgIG51bWJlcjpcIjAlIFNlbGVjdFwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBmZWU6XCIwLjMlXCIsXHJcbiAgICAgICAgICAgIGluZm86XCJCZXN0IGZvciBzdGFibGUgcGFpcnNcIixcclxuICAgICAgICAgICAgbnVtYmVyOlwiMCUgU2VsZWN0XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZlZTogXCIxJVwiLFxyXG4gICAgICAgICAgICBpbmZvOiBcIkJlc3QgZm9yIHN0YWJsZSBwYWlyc1wiLFxyXG4gICAgICAgICAgICBudW1iZXI6IFwiMCUgU2VsZWN0XCIsXHJcbiAgICAgICAgfVxyXG4gICAgXTtcclxuXHJcblxyXG4gICAgY29uc3QgbWluUHJpY2VSYW5nZSA9ICh0ZXh0KSA9PiB7XHJcbiAgICAgICAgaWYodGV4dCA9PSAnKycpIHtcclxuICAgICAgICAgICAgc2V0TWluUHJpY2UobWluUHJpY2UgKyAxKTtcclxuICAgICAgICB9IGVsc2UgaWYoIHRleHQgPT0gXCItXCIgKSB7XHJcbiAgICAgICAgICAgIHNldE1pblByaWNlKG1pblByaWNlIC0gMSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBtYXhQcmljZVJhbmdlID0gKHRleHQpID0+IHtcclxuICAgICAgICBpZih0ZXh0ID09ICcrJykge1xyXG4gICAgICAgICAgICBzZXRNYXhQcmljZShtYXhQcmljZSArIDEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiggdGV4dCA9PSBcIi1cIiApIHtcclxuICAgICAgICAgICAgc2V0TWF4UHJpY2UobWF4UHJpY2UgLSAxKVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5Qb29sQWRkfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLlBvb2xBZGRfYm94fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5Qb29sQWRkX2JveF9oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5Qb29sQWRkX2JveF9oZWFkZXJfbGVmdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlcy5hcnJvd0xlZnR9IGFsdD1cImltYWdlXCIgd2lkdGg9ezMwfSBoZWlnaHQ9ezMwfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxuXHJcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkltYWdlIiwiaW1hZ2VzIiwiU3R5bGUiLCJUb2tlbiIsIlNlYXJjaFRva2VuIiwiUG9vbEFkZCIsIm9wZW5Nb2RlbCIsInNldE9wZW5Nb2RlbCIsIm9wZW5Ub2tlbk1vZGVsIiwic2V0T3BlblRva2VuTW9kZWwiLCJhY3RpdmUiLCJzZXRBY3RpdmUiLCJvcGVuRmVlIiwic2V0T3BlbkZlZSIsIm1pblByaWNlIiwic2V0TWluUHJpY2UiLCJtYXhQcmljZSIsInNldE1heFByaWNlIiwiZmVlUGFpcnMiLCJmZWUiLCJpbmZvIiwibnVtYmVyIiwibWluUHJpY2VSYW5nZSIsInRleHQiLCJtYXhQcmljZVJhbmdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiUG9vbEFkZF9ib3giLCJQb29sQWRkX2JveF9oZWFkZXIiLCJQb29sQWRkX2JveF9oZWFkZXJfbGVmdCIsInNyYyIsImFycm93TGVmdCIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/PoolAdd/PoolAdd.jsx\n"));

/***/ })

});