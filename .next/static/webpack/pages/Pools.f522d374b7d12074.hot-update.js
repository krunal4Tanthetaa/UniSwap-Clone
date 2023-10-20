"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Pools",{

/***/ "./pages/Pools.js":
/*!************************!*\
  !*** ./pages/Pools.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets */ \"./assets/index.js\");\n/* harmony import */ var _styles_Pools_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Pools.module.css */ \"./styles/Pools.module.css\");\n/* harmony import */ var _styles_Pools_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Pools_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Components_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/index */ \"./Components/index.js\");\n/* harmony import */ var _Context_SwapContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Context/SwapContext */ \"./Context/SwapContext.js\");\n\nvar _s = $RefreshSig$();\n\n\n// INTERNAL IMPORT\n\n\n\n\nconst Pool = ()=>{\n    _s();\n    const { account , createLiquidityAndPool , tokenData , getAllLiquidity , connectWallet  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_Context_SwapContext__WEBPACK_IMPORTED_MODULE_5__.SwapTokenContext);\n    const [closePool, setClosePool] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Pools_module_css__WEBPACK_IMPORTED_MODULE_6___default().Pool),\n        children: closePool ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_index__WEBPACK_IMPORTED_MODULE_4__.PoolAdd, {\n            account: account,\n            setClosePool: setClosePool,\n            tokenData: tokenData,\n            createLiquidityAndPool: createLiquidityAndPool\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\pages\\\\Pools.js\",\n            lineNumber: 20,\n            columnNumber: 17\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_index__WEBPACK_IMPORTED_MODULE_4__.PoolConnect, {\n            setClosePool: setClosePool,\n            getAllLiquidity: getAllLiquidity,\n            account: account\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\pages\\\\Pools.js\",\n            lineNumber: 27,\n            columnNumber: 17\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Levis\\\\Desktop\\\\KRUNAL2\\\\ALL YOUTUBE TUTORIAL\\\\UniSwap-Clone-Starter-File\\\\pages\\\\Pools.js\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Pool, \"Q+mV5amugvFpLhFh7oC9+XmBE80=\");\n_c = Pool;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pool);\nvar _c;\n$RefreshReg$(_c, \"Pool\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Qb29scy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBcUQ7QUFDdEI7QUFFL0Isa0JBQWtCO0FBQ2E7QUFDZ0I7QUFFWTtBQUNEO0FBRTFELE1BQU1TLE9BQU8sSUFBTTs7SUFDZixNQUFNLEVBQUVDLFFBQU8sRUFBRUMsdUJBQXNCLEVBQUVDLFVBQVMsRUFBRUMsZ0JBQWUsRUFBR0MsY0FBYSxFQUFFLEdBQ2pGYixpREFBVUEsQ0FBQ08sa0VBQWdCQTtJQUUvQixNQUFNLENBQUNPLFdBQVdDLGFBQWEsR0FBR2QsK0NBQVFBLENBQUMsS0FBSztJQUVoRCxxQkFDSSw4REFBQ2U7UUFBSUMsV0FBV2Isc0VBQVU7a0JBQ3JCVSwwQkFDRyw4REFBQ1Qsc0RBQU9BO1lBQ0pJLFNBQVNBO1lBQ1RNLGNBQWNBO1lBQ2RKLFdBQVdBO1lBQ1hELHdCQUF3QkE7Ozs7O3NDQUc1Qiw4REFBQ0osMERBQVdBO1lBQ1JTLGNBQWNBO1lBQ2RILGlCQUFpQkE7WUFDakJILFNBQVNBOzs7OztxQkFFaEI7Ozs7OztBQUdiO0dBeEJNRDtLQUFBQTtBQTBCTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9Qb29scy5qcz9lNmMyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0ICwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG4vLyBJTlRFUk5BTCBJTVBPUlRcclxuaW1wb3J0IGltYWdlcyBmcm9tIFwiLi4vYXNzZXRzXCI7XHJcbmltcG9ydCBTdHlsZSBmcm9tIFwiLi4vc3R5bGVzL1Bvb2xzLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCB7IFBvb2xBZGQsIFBvb2xDb25uZWN0IH0gZnJvbSBcIi4uL0NvbXBvbmVudHMvaW5kZXhcIjtcclxuaW1wb3J0IHsgU3dhcFRva2VuQ29udGV4dCB9IGZyb20gXCIuLi9Db250ZXh0L1N3YXBDb250ZXh0XCI7XHJcblxyXG5jb25zdCBQb29sID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBhY2NvdW50LCBjcmVhdGVMaXF1aWRpdHlBbmRQb29sLCB0b2tlbkRhdGEsIGdldEFsbExpcXVpZGl0eSAsIGNvbm5lY3RXYWxsZXQgfSA9XHJcbiAgICAgICAgdXNlQ29udGV4dChTd2FwVG9rZW5Db250ZXh0KTtcclxuXHJcbiAgICBjb25zdCBbY2xvc2VQb29sLCBzZXRDbG9zZVBvb2xdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1N0eWxlLlBvb2x9PlxyXG4gICAgICAgICAgICB7Y2xvc2VQb29sID8gKFxyXG4gICAgICAgICAgICAgICAgPFBvb2xBZGRcclxuICAgICAgICAgICAgICAgICAgICBhY2NvdW50PXthY2NvdW50fVxyXG4gICAgICAgICAgICAgICAgICAgIHNldENsb3NlUG9vbD17c2V0Q2xvc2VQb29sfVxyXG4gICAgICAgICAgICAgICAgICAgIHRva2VuRGF0YT17dG9rZW5EYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUxpcXVpZGl0eUFuZFBvb2w9e2NyZWF0ZUxpcXVpZGl0eUFuZFBvb2x9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPFBvb2xDb25uZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2xvc2VQb29sPXtzZXRDbG9zZVBvb2x9XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0QWxsTGlxdWlkaXR5PXtnZXRBbGxMaXF1aWRpdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgYWNjb3VudD17YWNjb3VudH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9vbDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJpbWFnZXMiLCJTdHlsZSIsIlBvb2xBZGQiLCJQb29sQ29ubmVjdCIsIlN3YXBUb2tlbkNvbnRleHQiLCJQb29sIiwiYWNjb3VudCIsImNyZWF0ZUxpcXVpZGl0eUFuZFBvb2wiLCJ0b2tlbkRhdGEiLCJnZXRBbGxMaXF1aWRpdHkiLCJjb25uZWN0V2FsbGV0IiwiY2xvc2VQb29sIiwic2V0Q2xvc2VQb29sIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Pools.js\n"));

/***/ })

});