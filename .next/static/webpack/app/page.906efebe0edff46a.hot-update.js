"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/ShowMore.tsx":
/*!*********************************!*\
  !*** ./components/ShowMore.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Utils */ \"(app-pages-browser)/./Utils/index.tsx\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components */ \"(app-pages-browser)/./components/index.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst ShowMore = (param)=>{\n    let { pageNumber, isNext } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const handleNavigation = ()=>{\n        const newLimit = (pageNumber + 1) * 10;\n        const newPathname = (0,_Utils__WEBPACK_IMPORTED_MODULE_2__.updateSearchParams)(\"limit\", \"\".concat(newLimit));\n        router.push(newPathname);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full flex-center gap-5 mt-10\",\n        children: !isNext && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_3__.CustomButton, {\n            btnType: \"button\",\n            title: \"Show More\",\n            containerStyles: \"bg-primary-blue rounded-full text-white\",\n            handleClick: handleNavigation\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\saksh\\\\OneDrive\\\\Desktop\\\\Web Dev\\\\NextJS\\\\CarZone\\\\components\\\\ShowMore.tsx\",\n            lineNumber: 25,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\saksh\\\\OneDrive\\\\Desktop\\\\Web Dev\\\\NextJS\\\\CarZone\\\\components\\\\ShowMore.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ShowMore, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = ShowMore;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShowMore);\nvar _c;\n$RefreshReg$(_c, \"ShowMore\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU2hvd01vcmUudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRTRDO0FBR0M7QUFDRDtBQUU1QyxNQUFNRyxXQUFXO1FBQUMsRUFBRUMsVUFBVSxFQUFFQyxNQUFNLEVBQWlCOztJQUNyRCxNQUFNQyxTQUFTTiwwREFBU0E7SUFFeEIsTUFBTU8sbUJBQW1CO1FBRXZCLE1BQU1DLFdBQVcsQ0FBQ0osYUFBYSxLQUFLO1FBR3BDLE1BQU1LLGNBQWNSLDBEQUFrQkEsQ0FBQyxTQUFTLEdBQVksT0FBVE87UUFFbkRGLE9BQU9JLElBQUksQ0FBQ0Q7SUFDZDtJQUVBLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVO2tCQUNaLENBQUNQLHdCQUNBLDhEQUFDSCxxREFBWUE7WUFDWFcsU0FBUTtZQUNSQyxPQUFNO1lBQ05DLGlCQUFnQjtZQUNoQkMsYUFBYVQ7Ozs7Ozs7Ozs7O0FBS3ZCO0dBekJNSjs7UUFDV0gsc0RBQVNBOzs7S0FEcEJHO0FBMkJOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2hvd01vcmUudHN4PzRhYTQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcblxyXG5pbXBvcnQgeyBTaG93TW9yZVByb3BzIH0gZnJvbSBcIkAvdHlwZXNcIjtcclxuaW1wb3J0IHsgdXBkYXRlU2VhcmNoUGFyYW1zIH0gZnJvbSBcIkAvVXRpbHNcIjtcclxuaW1wb3J0IHsgQ3VzdG9tQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgU2hvd01vcmUgPSAoeyBwYWdlTnVtYmVyLCBpc05leHQgfTogU2hvd01vcmVQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBoYW5kbGVOYXZpZ2F0aW9uID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IG5ld0xpbWl0ID0gKHBhZ2VOdW1iZXIgKyAxKSAqIDEwO1xyXG5cclxuXHJcbiAgICBjb25zdCBuZXdQYXRobmFtZSA9IHVwZGF0ZVNlYXJjaFBhcmFtcyhcImxpbWl0XCIsIGAke25ld0xpbWl0fWApO1xyXG4gICAgXHJcbiAgICByb3V0ZXIucHVzaChuZXdQYXRobmFtZSwgKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleC1jZW50ZXIgZ2FwLTUgbXQtMTBcIj5cclxuICAgICAgeyFpc05leHQgJiYgKFxyXG4gICAgICAgIDxDdXN0b21CdXR0b25cclxuICAgICAgICAgIGJ0blR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgdGl0bGU9XCJTaG93IE1vcmVcIlxyXG4gICAgICAgICAgY29udGFpbmVyU3R5bGVzPVwiYmctcHJpbWFyeS1ibHVlIHJvdW5kZWQtZnVsbCB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgIGhhbmRsZUNsaWNrPXtoYW5kbGVOYXZpZ2F0aW9ufVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvd01vcmU7Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVwZGF0ZVNlYXJjaFBhcmFtcyIsIkN1c3RvbUJ1dHRvbiIsIlNob3dNb3JlIiwicGFnZU51bWJlciIsImlzTmV4dCIsInJvdXRlciIsImhhbmRsZU5hdmlnYXRpb24iLCJuZXdMaW1pdCIsIm5ld1BhdGhuYW1lIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsImJ0blR5cGUiLCJ0aXRsZSIsImNvbnRhaW5lclN0eWxlcyIsImhhbmRsZUNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ShowMore.tsx\n"));

/***/ })

});