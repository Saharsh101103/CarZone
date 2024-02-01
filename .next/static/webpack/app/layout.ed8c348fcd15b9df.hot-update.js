"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./Utils/index.tsx":
/*!*************************!*\
  !*** ./Utils/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calculateCarRent: function() { return /* binding */ calculateCarRent; },\n/* harmony export */   deleteSearchParams: function() { return /* binding */ deleteSearchParams; },\n/* harmony export */   fetchCars: function() { return /* binding */ fetchCars; },\n/* harmony export */   generateCarImageUrl: function() { return /* binding */ generateCarImageUrl; },\n/* harmony export */   updateSearchParams: function() { return /* binding */ updateSearchParams; }\n/* harmony export */ });\nconst calculateCarRent = (city_mpg, year)=>{\n    const basePricePerDay = 50; // Base rental price per day in dollars\n    const mileageFactor = 0.1; // Additional rate per mile driven\n    const ageFactor = 0.05; // Additional rate per year of vehicle age\n    // Calculate additional rate based on mileage and age\n    const mileageRate = city_mpg * mileageFactor;\n    const ageRate = (new Date().getFullYear() - year) * ageFactor;\n    // Calculate total rental rate per day\n    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;\n    return rentalRatePerDay.toFixed(0);\n};\nconst updateSearchParams = (type, value)=>{\n    // Get the current URL search params\n    const searchParams = new URLSearchParams(window.location.search);\n    // Set the specified search parameter to the given value\n    searchParams.set(type, value);\n    // Set the specified search parameter to the given value\n    const newPathname = \"\".concat(window.location.pathname, \"?\").concat(searchParams.toString());\n    return newPathname;\n};\nconst deleteSearchParams = (type)=>{\n    // Set the specified search parameter to the given value\n    const newSearchParams = new URLSearchParams(window.location.search);\n    // Delete the specified search parameter\n    newSearchParams.delete(type.toLocaleLowerCase());\n    // Construct the updated URL pathname with the deleted search parameter\n    const newPathname = \"\".concat(window.location.pathname, \"?\").concat(newSearchParams.toString());\n    return newPathname;\n};\nasync function fetchCars(filters) {\n    const { manufacturer, year, model, limit, fuel } = filters;\n    // Set the required headers for the API request\n    const headers = {\n        \"X-RapidAPI-Key\": \"de885edc3amshc5c7a20e6c384b8p1743edjsnf1b3a2ff52f0\",\n        \"X-RapidAPI-Host\": \"cars-by-api-ninjas.p.rapidapi.com\"\n    };\n    // Set the required headers for the API request\n    const response = await fetch(\"https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=\".concat(manufacturer, \"&year=\").concat(year, \"&model=\").concat(model, \"&limit=\").concat(limit, \"&fuel_type=\").concat(fuel), {\n        headers: headers\n    });\n    // Parse the response as JSON\n    const result = await response.json();\n    return result;\n}\nconst generateCarImageUrl = (car, angle)=>{\n    const url = new URL(\"https://cdn.imagin.studio/getimage\");\n    const { make, model, year } = car;\n    url.searchParams.append(\"customer\", \"hrjavascript-mastery\");\n    url.searchParams.append(\"make\", make);\n    url.searchParams.append(\"modelFamily\", model.split(\" \")[0]);\n    url.searchParams.append(\"zoomType\", \"fullscreen\");\n    url.searchParams.append(\"modelYear\", \"\".concat(year));\n    // url.searchParams.append('zoomLevel', zoomLevel);\n    url.searchParams.append(\"angle\", \"\".concat(angle));\n    return \"\".concat(url);\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJQcm9wcywgZmlsdGVyUHJvcHMgfSBmcm9tIFwiQC90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZUNhclJlbnQgPSAoY2l0eV9tcGc6IG51bWJlciwgeWVhcjogbnVtYmVyKSA9PiB7XHJcbiAgY29uc3QgYmFzZVByaWNlUGVyRGF5ID0gNTA7IC8vIEJhc2UgcmVudGFsIHByaWNlIHBlciBkYXkgaW4gZG9sbGFyc1xyXG4gIGNvbnN0IG1pbGVhZ2VGYWN0b3IgPSAwLjE7IC8vIEFkZGl0aW9uYWwgcmF0ZSBwZXIgbWlsZSBkcml2ZW5cclxuICBjb25zdCBhZ2VGYWN0b3IgPSAwLjA1OyAvLyBBZGRpdGlvbmFsIHJhdGUgcGVyIHllYXIgb2YgdmVoaWNsZSBhZ2VcclxuXHJcbiAgLy8gQ2FsY3VsYXRlIGFkZGl0aW9uYWwgcmF0ZSBiYXNlZCBvbiBtaWxlYWdlIGFuZCBhZ2VcclxuICBjb25zdCBtaWxlYWdlUmF0ZSA9IGNpdHlfbXBnICogbWlsZWFnZUZhY3RvcjtcclxuICBjb25zdCBhZ2VSYXRlID0gKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAtIHllYXIpICogYWdlRmFjdG9yO1xyXG5cclxuICAvLyBDYWxjdWxhdGUgdG90YWwgcmVudGFsIHJhdGUgcGVyIGRheVxyXG4gIGNvbnN0IHJlbnRhbFJhdGVQZXJEYXkgPSBiYXNlUHJpY2VQZXJEYXkgKyBtaWxlYWdlUmF0ZSArIGFnZVJhdGU7XHJcblxyXG4gIHJldHVybiAocmVudGFsUmF0ZVBlckRheS50b0ZpeGVkKDApKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVTZWFyY2hQYXJhbXMgPSAodHlwZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiB7XHJcbiAgLy8gR2V0IHRoZSBjdXJyZW50IFVSTCBzZWFyY2ggcGFyYW1zXHJcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuXHJcbiAgLy8gU2V0IHRoZSBzcGVjaWZpZWQgc2VhcmNoIHBhcmFtZXRlciB0byB0aGUgZ2l2ZW4gdmFsdWVcclxuICBzZWFyY2hQYXJhbXMuc2V0KHR5cGUsIHZhbHVlKTtcclxuXHJcbiAgLy8gU2V0IHRoZSBzcGVjaWZpZWQgc2VhcmNoIHBhcmFtZXRlciB0byB0aGUgZ2l2ZW4gdmFsdWVcclxuICBjb25zdCBuZXdQYXRobmFtZSA9IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0/JHtzZWFyY2hQYXJhbXMudG9TdHJpbmcoKX1gO1xyXG5cclxuICByZXR1cm4gbmV3UGF0aG5hbWU7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlU2VhcmNoUGFyYW1zID0gKHR5cGU6IHN0cmluZykgPT4ge1xyXG4gIC8vIFNldCB0aGUgc3BlY2lmaWVkIHNlYXJjaCBwYXJhbWV0ZXIgdG8gdGhlIGdpdmVuIHZhbHVlXHJcbiAgY29uc3QgbmV3U2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuXHJcbiAgLy8gRGVsZXRlIHRoZSBzcGVjaWZpZWQgc2VhcmNoIHBhcmFtZXRlclxyXG4gIG5ld1NlYXJjaFBhcmFtcy5kZWxldGUodHlwZS50b0xvY2FsZUxvd2VyQ2FzZSgpKTtcclxuXHJcbiAgLy8gQ29uc3RydWN0IHRoZSB1cGRhdGVkIFVSTCBwYXRobmFtZSB3aXRoIHRoZSBkZWxldGVkIHNlYXJjaCBwYXJhbWV0ZXJcclxuICBjb25zdCBuZXdQYXRobmFtZSA9IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0/JHtuZXdTZWFyY2hQYXJhbXMudG9TdHJpbmcoKX1gO1xyXG5cclxuICByZXR1cm4gbmV3UGF0aG5hbWU7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hDYXJzKGZpbHRlcnM6IGZpbHRlclByb3BzKSB7XHJcbiAgY29uc3QgeyBtYW51ZmFjdHVyZXIsIHllYXIsIG1vZGVsLCBsaW1pdCwgZnVlbCB9ID0gZmlsdGVycztcclxuXHJcbiAgLy8gU2V0IHRoZSByZXF1aXJlZCBoZWFkZXJzIGZvciB0aGUgQVBJIHJlcXVlc3RcclxuICBjb25zdCBoZWFkZXJzOiBIZWFkZXJzSW5pdCA9IHtcclxuICAgIFwiWC1SYXBpZEFQSS1LZXlcIjogJ2RlODg1ZWRjM2Ftc2hjNWM3YTIwZTZjMzg0YjhwMTc0M2VkanNuZjFiM2EyZmY1MmYwJyxcclxuICAgIFwiWC1SYXBpZEFQSS1Ib3N0XCI6IFwiY2Fycy1ieS1hcGktbmluamFzLnAucmFwaWRhcGkuY29tXCIsXHJcbiAgfTtcclxuXHJcbiAgLy8gU2V0IHRoZSByZXF1aXJlZCBoZWFkZXJzIGZvciB0aGUgQVBJIHJlcXVlc3RcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgYGh0dHBzOi8vY2Fycy1ieS1hcGktbmluamFzLnAucmFwaWRhcGkuY29tL3YxL2NhcnM/bWFrZT0ke21hbnVmYWN0dXJlcn0meWVhcj0ke3llYXJ9Jm1vZGVsPSR7bW9kZWx9JmxpbWl0PSR7bGltaXR9JmZ1ZWxfdHlwZT0ke2Z1ZWx9YCxcclxuICAgIHtcclxuICAgICAgaGVhZGVyczogaGVhZGVycyxcclxuICAgIH1cclxuICApO1xyXG5cclxuICAvLyBQYXJzZSB0aGUgcmVzcG9uc2UgYXMgSlNPTlxyXG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlQ2FySW1hZ2VVcmwgPSAoY2FyOiBDYXJQcm9wcywgYW5nbGU/OiBzdHJpbmcpID0+IHtcclxuICBjb25zdCB1cmwgPSBuZXcgVVJMKFwiaHR0cHM6Ly9jZG4uaW1hZ2luLnN0dWRpby9nZXRpbWFnZVwiKTtcclxuICBjb25zdCB7IG1ha2UsIG1vZGVsLCB5ZWFyIH0gPSBjYXI7XHJcblxyXG4gIHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKCdjdXN0b21lcicsICdocmphdmFzY3JpcHQtbWFzdGVyeScpO1xyXG4gIHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKCdtYWtlJywgbWFrZSk7XHJcbiAgdXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoJ21vZGVsRmFtaWx5JywgbW9kZWwuc3BsaXQoXCIgXCIpWzBdKTtcclxuICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZCgnem9vbVR5cGUnLCAnZnVsbHNjcmVlbicpO1xyXG4gIHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKCdtb2RlbFllYXInLCBgJHt5ZWFyfWApO1xyXG4gIC8vIHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKCd6b29tTGV2ZWwnLCB6b29tTGV2ZWwpO1xyXG4gIHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKCdhbmdsZScsIGAke2FuZ2xlfWApO1xyXG5cclxuICByZXR1cm4gYCR7dXJsfWA7XHJcbn0gIl0sIm5hbWVzIjpbImNhbGN1bGF0ZUNhclJlbnQiLCJjaXR5X21wZyIsInllYXIiLCJiYXNlUHJpY2VQZXJEYXkiLCJtaWxlYWdlRmFjdG9yIiwiYWdlRmFjdG9yIiwibWlsZWFnZVJhdGUiLCJhZ2VSYXRlIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwicmVudGFsUmF0ZVBlckRheSIsInRvRml4ZWQiLCJ1cGRhdGVTZWFyY2hQYXJhbXMiLCJ0eXBlIiwidmFsdWUiLCJzZWFyY2hQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInNldCIsIm5ld1BhdGhuYW1lIiwicGF0aG5hbWUiLCJ0b1N0cmluZyIsImRlbGV0ZVNlYXJjaFBhcmFtcyIsIm5ld1NlYXJjaFBhcmFtcyIsImRlbGV0ZSIsInRvTG9jYWxlTG93ZXJDYXNlIiwiZmV0Y2hDYXJzIiwiZmlsdGVycyIsIm1hbnVmYWN0dXJlciIsIm1vZGVsIiwibGltaXQiLCJmdWVsIiwiaGVhZGVycyIsInJlc3BvbnNlIiwiZmV0Y2giLCJyZXN1bHQiLCJqc29uIiwiZ2VuZXJhdGVDYXJJbWFnZVVybCIsImNhciIsImFuZ2xlIiwidXJsIiwiVVJMIiwibWFrZSIsImFwcGVuZCIsInNwbGl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./Utils/index.tsx\n"));

/***/ })

});