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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets */ \"./assets/index.js\");\n/* harmony import */ var _PoolAdd_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PoolAdd.module.css */ \"./Components/PoolAdd/PoolAdd.module.css\");\n/* harmony import */ var _PoolAdd_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_PoolAdd_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Components_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/index.js */ \"./Components/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n// INTERNAL IMPORT\n\n\n\nconst PoolAdd = ()=>{\n    _s();\n    const [openModel, setOpenModel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [openTokenModel, setOpenTokenModel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const [openFee, setOpenFee] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [minPrice, setMinPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [maxPrice, setMaxPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const feePairs = [\n        {\n            fee: \"0.05%\",\n            info: \"Best for stable pairs\",\n            number: \"0% Select\"\n        },\n        {\n            fee: \"0.3%\",\n            info: \"Best for stable pairs\",\n            number: \"0% Select\"\n        },\n        {\n            fee: \"1%\",\n            info: \"Best for stable pairs\",\n            number: \"0% Select\"\n        }\n    ];\n    const minPriceRange = (text)=>{\n        if (text == \"+\") {\n            setMinPrice(minPrice + 1);\n        } else if (text == \"-\") {\n            setMinPrice(minPrice - 1);\n        }\n    };\n    const maxPriceRange = (text)=>{\n        if (text == \"+\") {\n            setMaxPrice(maxPrice + 1);\n        } else if (text == \"-\") {\n            setMaxPrice(maxPrice - 1);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_PoolAdd_module_css__WEBPACK_IMPORTED_MODULE_5___default().PoolAdd),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_PoolAdd_module_css__WEBPACK_IMPORTED_MODULE_5___default().PoolAdd_box),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_PoolAdd_module_css__WEBPACK_IMPORTED_MODULE_5___default().PoolAdd_box_header),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_PoolAdd_module_css__WEBPACK_IMPORTED_MODULE_5___default().PoolAdd_box_header_left),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: _assets__WEBPACK_IMPORTED_MODULE_3__[\"default\"].arrowLeft,\n                                alt: \"image\",\n                                width: 30,\n                                height: 30\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\PoolAdd\\\\PoolAdd.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\PoolAdd\\\\PoolAdd.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_PoolAdd_module_css__WEBPACK_IMPORTED_MODULE_5___default().PoolAdd_box_header_middle),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Add Liqudity\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\PoolAdd\\\\PoolAdd.jsx\",\n                                lineNumber: 61,\n                                columnNumber: 25\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\PoolAdd\\\\PoolAdd.jsx\",\n                            lineNumber: 60,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_PoolAdd_module_css__WEBPACK_IMPORTED_MODULE_5___default().PoolAdd_box_header_right),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: \"Clear All\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\PoolAdd\\\\PoolAdd.jsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: _assets__WEBPACK_IMPORTED_MODULE_3__[\"default\"].close,\n                                    alt: \"image\",\n                                    width: 50,\n                                    height: 50,\n                                    onClick: ()=>setOpenModel(true)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\PoolAdd\\\\PoolAdd.jsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\PoolAdd\\\\PoolAdd.jsx\",\n                            lineNumber: 63,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\PoolAdd\\\\PoolAdd.jsx\",\n                    lineNumber: 51,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_PoolAdd_module_css__WEBPACK_IMPORTED_MODULE_5___default().PoolAdd_box_price),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_PoolAdd_module_css__WEBPACK_IMPORTED_MODULE_5___default().Pool)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\PoolAdd\\\\PoolAdd.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 21\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\PoolAdd\\\\PoolAdd.jsx\",\n                    lineNumber: 76,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\PoolAdd\\\\PoolAdd.jsx\",\n            lineNumber: 50,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\PoolAdd\\\\PoolAdd.jsx\",\n        lineNumber: 49,\n        columnNumber: 9\n    }, undefined);\n};\n_s(PoolAdd, \"LKgsV/hMLA3R3VDzn9w/P9KzWt4=\");\n_c = PoolAdd;\nvar _c;\n$RefreshReg$(_c, \"PoolAdd\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL1Bvb2xBZGQvUG9vbEFkZC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBbUQ7QUFDcEI7QUFFL0Isa0JBQWtCO0FBQ2dCO0FBQ087QUFDc0I7QUFFL0QsTUFBTVEsVUFBVSxJQUFNOztJQUNsQixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUMsS0FBSztJQUNoRCxNQUFNLENBQUNVLGdCQUFnQkMsa0JBQWtCLEdBQUdYLCtDQUFRQSxDQUFDLEtBQUs7SUFDMUQsTUFBTSxDQUFDWSxRQUFRQyxVQUFVLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ2MsU0FBU0MsV0FBVyxHQUFHZiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzVDLE1BQU0sQ0FBQ2dCLFVBQVVDLFlBQVksR0FBR2pCLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ2tCLFVBQVVDLFlBQVksR0FBR25CLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU1vQixXQUFXO1FBQ2I7WUFDSUMsS0FBSztZQUNMQyxNQUFNO1lBQ05DLFFBQVE7UUFDWjtRQUNBO1lBQ0lGLEtBQUs7WUFDTEMsTUFBTTtZQUNOQyxRQUFRO1FBQ1o7UUFDQTtZQUNJRixLQUFLO1lBQ0xDLE1BQU07WUFDTkMsUUFBUTtRQUNaO0tBQ0g7SUFFRCxNQUFNQyxnQkFBZ0IsQ0FBQ0MsT0FBUztRQUM1QixJQUFJQSxRQUFRLEtBQUs7WUFDYlIsWUFBWUQsV0FBVztRQUMzQixPQUFPLElBQUlTLFFBQVEsS0FBSztZQUNwQlIsWUFBWUQsV0FBVztRQUMzQixDQUFDO0lBQ0w7SUFDQSxNQUFNVSxnQkFBZ0IsQ0FBQ0QsT0FBUztRQUM1QixJQUFJQSxRQUFRLEtBQUs7WUFDYk4sWUFBWUQsV0FBVztRQUMzQixPQUFPLElBQUlPLFFBQVEsS0FBSztZQUNwQk4sWUFBWUQsV0FBVztRQUMzQixDQUFDO0lBQ0w7SUFDQSxxQkFDSSw4REFBQ1M7UUFBSUMsV0FBV3hCLG9FQUFhO2tCQUN6Qiw0RUFBQ3VCO1lBQUlDLFdBQVd4Qix3RUFBaUI7OzhCQUM3Qiw4REFBQ3VCO29CQUFJQyxXQUFXeEIsK0VBQXdCOztzQ0FDcEMsOERBQUN1Qjs0QkFBSUMsV0FBV3hCLG9GQUE2QjtzQ0FDekMsNEVBQUNGLG1EQUFLQTtnQ0FDRjhCLEtBQUs3Qix5REFBZ0I7Z0NBQ3JCK0IsS0FBSTtnQ0FDSkMsT0FBTztnQ0FDUEMsUUFBUTs7Ozs7Ozs7Ozs7c0NBR2hCLDhEQUFDVDs0QkFBSUMsV0FBV3hCLHNGQUErQjtzQ0FDM0MsNEVBQUNrQzswQ0FBRTs7Ozs7Ozs7Ozs7c0NBRVAsOERBQUNYOzRCQUFJQyxXQUFXeEIscUZBQThCOzs4Q0FDMUMsOERBQUNrQzs4Q0FBRTs7Ozs7OzhDQUNILDhEQUFDcEMsbURBQUtBO29DQUNGOEIsS0FBSzdCLHFEQUFZO29DQUNqQitCLEtBQUk7b0NBQ0pDLE9BQU87b0NBQ1BDLFFBQVE7b0NBQ1JLLFNBQVMsSUFBTWhDLGFBQWEsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQU01Qyw4REFBQ2tCO29CQUFJQyxXQUFXeEIsOEVBQXVCOzhCQUVuQyw0RUFBQ3VCO3dCQUFJQyxXQUFXeEIsaUVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLOUM7R0ExRU1HO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvUG9vbEFkZC9Qb29sQWRkLmpzeD82MzUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuLy8gSU5URVJOQUwgSU1QT1JUXHJcbmltcG9ydCBpbWFnZXMgZnJvbSBcIi4uLy4uL2Fzc2V0c1wiO1xyXG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vUG9vbEFkZC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IFRva2VuLCBTZWFyY2hUb2tlbiB9IGZyb20gXCIuLi8uLi9Db21wb25lbnRzL2luZGV4LmpzXCI7XHJcblxyXG5jb25zdCBQb29sQWRkID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW29wZW5Nb2RlbCwgc2V0T3Blbk1vZGVsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtvcGVuVG9rZW5Nb2RlbCwgc2V0T3BlblRva2VuTW9kZWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW29wZW5GZWUsIHNldE9wZW5GZWVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW21pblByaWNlLCBzZXRNaW5QcmljZV0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFttYXhQcmljZSwgc2V0TWF4UHJpY2VdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBmZWVQYWlycyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZlZTogXCIwLjA1JVwiLFxyXG4gICAgICAgICAgICBpbmZvOiBcIkJlc3QgZm9yIHN0YWJsZSBwYWlyc1wiLFxyXG4gICAgICAgICAgICBudW1iZXI6IFwiMCUgU2VsZWN0XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZlZTogXCIwLjMlXCIsXHJcbiAgICAgICAgICAgIGluZm86IFwiQmVzdCBmb3Igc3RhYmxlIHBhaXJzXCIsXHJcbiAgICAgICAgICAgIG51bWJlcjogXCIwJSBTZWxlY3RcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZmVlOiBcIjElXCIsXHJcbiAgICAgICAgICAgIGluZm86IFwiQmVzdCBmb3Igc3RhYmxlIHBhaXJzXCIsXHJcbiAgICAgICAgICAgIG51bWJlcjogXCIwJSBTZWxlY3RcIixcclxuICAgICAgICB9LFxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCBtaW5QcmljZVJhbmdlID0gKHRleHQpID0+IHtcclxuICAgICAgICBpZiAodGV4dCA9PSBcIitcIikge1xyXG4gICAgICAgICAgICBzZXRNaW5QcmljZShtaW5QcmljZSArIDEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGV4dCA9PSBcIi1cIikge1xyXG4gICAgICAgICAgICBzZXRNaW5QcmljZShtaW5QcmljZSAtIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBtYXhQcmljZVJhbmdlID0gKHRleHQpID0+IHtcclxuICAgICAgICBpZiAodGV4dCA9PSBcIitcIikge1xyXG4gICAgICAgICAgICBzZXRNYXhQcmljZShtYXhQcmljZSArIDEpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGV4dCA9PSBcIi1cIikge1xyXG4gICAgICAgICAgICBzZXRNYXhQcmljZShtYXhQcmljZSAtIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5Qb29sQWRkfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLlBvb2xBZGRfYm94fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5Qb29sQWRkX2JveF9oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5Qb29sQWRkX2JveF9oZWFkZXJfbGVmdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZXMuYXJyb3dMZWZ0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuUG9vbEFkZF9ib3hfaGVhZGVyX21pZGRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkFkZCBMaXF1ZGl0eTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuUG9vbEFkZF9ib3hfaGVhZGVyX3JpZ2h0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2xlYXIgQWxsPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VzLmNsb3NlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE9wZW5Nb2RlbCh0cnVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiAvLyBTRUxFQ1QgUFJJQ0UgUkFOR0UgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuUG9vbEFkZF9ib3hfcHJpY2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiAvL0xFRlQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLlBvb2x9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsImltYWdlcyIsIlN0eWxlIiwiVG9rZW4iLCJTZWFyY2hUb2tlbiIsIlBvb2xBZGQiLCJvcGVuTW9kZWwiLCJzZXRPcGVuTW9kZWwiLCJvcGVuVG9rZW5Nb2RlbCIsInNldE9wZW5Ub2tlbk1vZGVsIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwib3BlbkZlZSIsInNldE9wZW5GZWUiLCJtaW5QcmljZSIsInNldE1pblByaWNlIiwibWF4UHJpY2UiLCJzZXRNYXhQcmljZSIsImZlZVBhaXJzIiwiZmVlIiwiaW5mbyIsIm51bWJlciIsIm1pblByaWNlUmFuZ2UiLCJ0ZXh0IiwibWF4UHJpY2VSYW5nZSIsImRpdiIsImNsYXNzTmFtZSIsIlBvb2xBZGRfYm94IiwiUG9vbEFkZF9ib3hfaGVhZGVyIiwiUG9vbEFkZF9ib3hfaGVhZGVyX2xlZnQiLCJzcmMiLCJhcnJvd0xlZnQiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsIlBvb2xBZGRfYm94X2hlYWRlcl9taWRkbGUiLCJwIiwiUG9vbEFkZF9ib3hfaGVhZGVyX3JpZ2h0IiwiY2xvc2UiLCJvbkNsaWNrIiwiUG9vbEFkZF9ib3hfcHJpY2UiLCJQb29sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/PoolAdd/PoolAdd.jsx\n"));

/***/ })

});