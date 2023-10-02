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

/***/ "./Components/NavBar/NavBar.jsx":
/*!**************************************!*\
  !*** ./Components/NavBar/NavBar.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _NavBar_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NavBar.module.css */ \"./Components/NavBar/NavBar.module.css\");\n/* harmony import */ var _NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets */ \"./assets/index.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../index */ \"./Components/index.js\");\n/* harmony import */ var _Context_SwapContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Context/SwapContext */ \"./Context/SwapContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n// IMPORT INTERNAL\n\n\n\n\nconst NavBar = ()=>{\n    _s();\n    const { account , networkConnect , ether , connectWallet , tokenData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Context_SwapContext__WEBPACK_IMPORTED_MODULE_6__.SwapTokenContext);\n    const menuItems = [\n        {\n            name: \"Swap\",\n            link: \"/\"\n        },\n        {\n            name: \"Tokens\",\n            link: \"/\"\n        },\n        {\n            name: \"Pools\",\n            link: \"/\"\n        }\n    ];\n    //USESTATE\n    const [openModel, setOpenModel] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [openTokenBox, setOpenTokenBox] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // const [account, setAccount] = useState(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().NavBar),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().NavBar_box),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().NavBar_box_left),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().NavBar_box_left_img),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: _assets__WEBPACK_IMPORTED_MODULE_4__[\"default\"].uniswap,\n                                    alt: \"logo\",\n                                    width: 50,\n                                    height: 50\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 25\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().NavBar_box_left_menu),\n                                children: menuItems.map((el, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: {\n                                            pathname: \"\".concat(el.name)\n                                        },\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().NavBar_box_left_menu_item),\n                                            children: el.name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    }, i + 1, false, {\n                                        fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 29\n                                    }, undefined))\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().NavBar_box_middle),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().NavBar_box_middle_search),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().NavBar_box_middle_search_img),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                        src: _assets__WEBPACK_IMPORTED_MODULE_4__[\"default\"].search,\n                                        alt: \"search\",\n                                        width: 20,\n                                        height: 20\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 29\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 25\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    placeholder: \"Search Tokens\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 25\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n                            lineNumber: 67,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().NavBar_box_right),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: ()=>setOpenTokenBox(true),\n                                className: (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().NavBar_box_right_box),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_7___default().NavBar_box_right_box_img),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            src: _assets__WEBPACK_IMPORTED_MODULE_4__[\"default\"].ether,\n                                            alt: \"NetWork\",\n                                            height: 30,\n                                            width: 30\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n                                            lineNumber: 88,\n                                            columnNumber: 29\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 25\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: networkConnect\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n                                        lineNumber: 95,\n                                        columnNumber: 25\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n                                lineNumber: 83,\n                                columnNumber: 21\n                            }, undefined),\n                            account ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setOpenTokenBox(true),\n                                children: [\n                                    account.slice(0, 20),\n                                    \"...\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n                                lineNumber: 98,\n                                columnNumber: 25\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setOpenModel(true),\n                                children: \"Connect\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n                                lineNumber: 102,\n                                columnNumber: 25\n                            }, undefined),\n                            openModel && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_5__.Model, {\n                                setOpenModel: setOpenModel,\n                                connectWallet: connectWallet\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n                                lineNumber: 107,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n                        lineNumber: 82,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, undefined),\n            openTokenBox && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_5__.TokenList, {\n                tokenData: tokenData,\n                setOpenTokenBox: setOpenTokenBox\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n                lineNumber: 117,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\Components\\\\NavBar\\\\NavBar.jsx\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, undefined);\n};\n_s(NavBar, \"PaPwLKJ7YR281vpFZnUo75IytKY=\");\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0E3R01aO0tBQUFBO0FBK0dOLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvTmF2QmFyL05hdkJhci5qc3g/ZmYyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuLy8gSU1QT1JUIElOVEVSTkFMXHJcblxyXG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vTmF2QmFyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGltYWdlcyBmcm9tIFwiLi4vLi4vYXNzZXRzXCI7XHJcbmltcG9ydCB7IE1vZGVsLCBUb2tlbkxpc3QgfSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuaW1wb3J0IHsgU3dhcFRva2VuQ29udGV4dCB9IGZyb20gXCIuLi8uLi9Db250ZXh0L1N3YXBDb250ZXh0XCI7XHJcblxyXG5jb25zdCBOYXZCYXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB7IGFjY291bnQsIG5ldHdvcmtDb25uZWN0ICwgZXRoZXIgICwgY29ubmVjdFdhbGxldCAsIHRva2VuRGF0YSB9ID1cclxuICAgICAgICB1c2VDb250ZXh0KFN3YXBUb2tlbkNvbnRleHQpO1xyXG5cclxuICAgIGNvbnN0IG1lbnVJdGVtcyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiU3dhcFwiLFxyXG4gICAgICAgICAgICBsaW5rOiBcIi9cIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJUb2tlbnNcIixcclxuICAgICAgICAgICAgbGluazogXCIvXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiUG9vbHNcIixcclxuICAgICAgICAgICAgbGluazogXCIvXCIsXHJcbiAgICAgICAgfSxcclxuICAgIF07XHJcbiAgICAvL1VTRVNUQVRFXHJcbiAgICBjb25zdCBbb3Blbk1vZGVsLCBzZXRPcGVuTW9kZWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW29wZW5Ub2tlbkJveCwgc2V0T3BlblRva2VuQm94XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIC8vIGNvbnN0IFthY2NvdW50LCBzZXRBY2NvdW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5OYXZCYXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuTmF2QmFyX2JveH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuTmF2QmFyX2JveF9sZWZ0fT5cclxuICAgICAgICAgICAgICAgICAgICB7LyogLy9MT0dPIElNQUdFICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5OYXZCYXJfYm94X2xlZnRfaW1nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlcy51bmlzd2FwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwibG9nb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBNRU5VIElURU1TICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5OYXZCYXJfYm94X2xlZnRfbWVudX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHttZW51SXRlbXMubWFwKChlbCwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2kgKyAxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGAke2VsLm5hbWV9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e1N0eWxlLk5hdkJhcl9ib3hfbGVmdF9tZW51X2l0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWwubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogTUlERExFIFNFQ1RJT04gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuTmF2QmFyX2JveF9taWRkbGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtTdHlsZS5OYXZCYXJfYm94X21pZGRsZV9zZWFyY2h9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuTmF2QmFyX2JveF9taWRkbGVfc2VhcmNoX2ltZ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlcy5zZWFyY2h9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwic2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIC8vSU5QVVQgU0VDVElPTiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggVG9rZW5zXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIFJJR0hUIFNFQ1RJT04gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuTmF2QmFyX2JveF9yaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuVG9rZW5Cb3godHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17U3R5bGUuTmF2QmFyX2JveF9yaWdodF9ib3h9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17U3R5bGUuTmF2QmFyX2JveF9yaWdodF9ib3hfaW1nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2VzLmV0aGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIk5ldFdvcmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntuZXR3b3JrQ29ubmVjdH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2FjY291bnQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0T3BlblRva2VuQm94KHRydWUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthY2NvdW50LnNsaWNlKDAgLCAyMCl9Li4uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0T3Blbk1vZGVsKHRydWUpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbm5lY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICB7b3Blbk1vZGVsICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRPcGVuTW9kZWw9e3NldE9wZW5Nb2RlbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbm5lY3RXYWxsZXQ9e2Nvbm5lY3RXYWxsZXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiBUT0tFTkxJU1QgQ09NUE9ORU5UUyAqL31cclxuICAgICAgICAgICAge29wZW5Ub2tlbkJveCAmJiAoXHJcbiAgICAgICAgICAgICAgICA8VG9rZW5MaXN0IHRva2VuRGF0YT17dG9rZW5EYXRhfSBzZXRPcGVuVG9rZW5Cb3g9e3NldE9wZW5Ub2tlbkJveH0gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZCYXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsIkltYWdlIiwiTGluayIsIlN0eWxlIiwiaW1hZ2VzIiwiTW9kZWwiLCJUb2tlbkxpc3QiLCJTd2FwVG9rZW5Db250ZXh0IiwiTmF2QmFyIiwiYWNjb3VudCIsIm5ldHdvcmtDb25uZWN0IiwiZXRoZXIiLCJjb25uZWN0V2FsbGV0IiwidG9rZW5EYXRhIiwibWVudUl0ZW1zIiwibmFtZSIsImxpbmsiLCJvcGVuTW9kZWwiLCJzZXRPcGVuTW9kZWwiLCJvcGVuVG9rZW5Cb3giLCJzZXRPcGVuVG9rZW5Cb3giLCJkaXYiLCJjbGFzc05hbWUiLCJOYXZCYXJfYm94IiwiTmF2QmFyX2JveF9sZWZ0IiwiTmF2QmFyX2JveF9sZWZ0X2ltZyIsInNyYyIsInVuaXN3YXAiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsIk5hdkJhcl9ib3hfbGVmdF9tZW51IiwibWFwIiwiZWwiLCJpIiwiaHJlZiIsInBhdGhuYW1lIiwicCIsIk5hdkJhcl9ib3hfbGVmdF9tZW51X2l0ZW0iLCJOYXZCYXJfYm94X21pZGRsZSIsIk5hdkJhcl9ib3hfbWlkZGxlX3NlYXJjaCIsIk5hdkJhcl9ib3hfbWlkZGxlX3NlYXJjaF9pbWciLCJzZWFyY2giLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIk5hdkJhcl9ib3hfcmlnaHQiLCJvbkNsaWNrIiwiTmF2QmFyX2JveF9yaWdodF9ib3giLCJOYXZCYXJfYm94X3JpZ2h0X2JveF9pbWciLCJidXR0b24iLCJzbGljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/NavBar/NavBar.jsx\n"));

/***/ })

});