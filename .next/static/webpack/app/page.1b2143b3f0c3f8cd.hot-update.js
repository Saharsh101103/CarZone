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

/***/ "(app-pages-browser)/./Utils/index.tsx":
/*!*************************!*\
  !*** ./Utils/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calculateCarRent: function() { return /* binding */ calculateCarRent; },\n/* harmony export */   deleteSearchParams: function() { return /* binding */ deleteSearchParams; },\n/* harmony export */   fetchCars: function() { return /* binding */ fetchCars; },\n/* harmony export */   generateCarImageUrl: function() { return /* binding */ generateCarImageUrl; },\n/* harmony export */   updateSearchParams: function() { return /* binding */ updateSearchParams; }\n/* harmony export */ });\nconst calculateCarRent = (city_mpg, year)=>{\n    const basePricePerDay = 50; // Base rental price per day in dollars\n    const mileageFactor = 0.1; // Additional rate per mile driven\n    const ageFactor = 0.05; // Additional rate per year of vehicle age\n    // Calculate additional rate based on mileage and age\n    const mileageRate = city_mpg * mileageFactor;\n    const ageRate = (new Date().getFullYear() - year) * ageFactor;\n    // Calculate total rental rate per day\n    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;\n    return parseInt(rentalRatePerDay.toFixed(0)) * 80;\n};\nconst updateSearchParams = (type, value)=>{\n    // Get the current URL search params\n    const searchParams = new URLSearchParams(window.location.search);\n    // Set the specified search parameter to the given value\n    searchParams.set(type, value);\n    // Set the specified search parameter to the given value\n    const newPathname = \"\".concat(window.location.pathname, \"?\").concat(searchParams.toString());\n    return newPathname;\n};\nconst deleteSearchParams = (type)=>{\n    // Set the specified search parameter to the given value\n    const newSearchParams = new URLSearchParams(window.location.search);\n    // Delete the specified search parameter\n    newSearchParams.delete(type.toLocaleLowerCase());\n    // Construct the updated URL pathname with the deleted search parameter\n    const newPathname = \"\".concat(window.location.pathname, \"?\").concat(newSearchParams.toString());\n    return newPathname;\n};\nasync function fetchCars(filters) {\n    const { manufacturer, year, model, limit, fuel } = filters;\n    // Set the required headers for the API request\n    const headers = {\n        \"X-RapidAPI-Key\": \"de885edc3amshc5c7a20e6c384b8p1743edjsnf1b3a2ff52f0\",\n        \"X-RapidAPI-Host\": \"cars-by-api-ninjas.p.rapidapi.com\"\n    };\n    // Set the required headers for the API request\n    const response = await fetch(\"https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=\".concat(manufacturer, \"&year=\").concat(year, \"&model=\").concat(model, \"&limit=\").concat(limit, \"&fuel_type=\").concat(fuel), {\n        headers: headers\n    });\n    // Parse the response as JSON\n    const result = await response.json();\n    return result;\n}\nconst generateCarImageUrl = (car, angle)=>{\n    const url = new URL(\"https://cdn.imagin.studio/getimage\");\n    const { make, model, year } = car;\n    url.searchParams.append(\"customer\", \"hrjavascript-mastery\");\n    url.searchParams.append(\"make\", make);\n    url.searchParams.append(\"modelFamily\", model.split(\" \")[0]);\n    url.searchParams.append(\"zoomType\", \"fullscreen\");\n    url.searchParams.append(\"modelYear\", \"\".concat(year));\n    // url.searchParams.append('zoomLevel', zoomLevel);\n    url.searchParams.append(\"angle\", \"\".concat(angle));\n    return \"\".concat(url);\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LnRzeD9hZTFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhclByb3BzLCBmaWx0ZXJQcm9wcyB9IGZyb20gXCJAL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlQ2FyUmVudCA9IChjaXR5X21wZzogbnVtYmVyLCB5ZWFyOiBudW1iZXIpID0+IHtcclxuICBjb25zdCBiYXNlUHJpY2VQZXJEYXkgPSA1MDsgLy8gQmFzZSByZW50YWwgcHJpY2UgcGVyIGRheSBpbiBkb2xsYXJzXHJcbiAgY29uc3QgbWlsZWFnZUZhY3RvciA9IDAuMTsgLy8gQWRkaXRpb25hbCByYXRlIHBlciBtaWxlIGRyaXZlblxyXG4gIGNvbnN0IGFnZUZhY3RvciA9IDAuMDU7IC8vIEFkZGl0aW9uYWwgcmF0ZSBwZXIgeWVhciBvZiB2ZWhpY2xlIGFnZVxyXG5cclxuICAvLyBDYWxjdWxhdGUgYWRkaXRpb25hbCByYXRlIGJhc2VkIG9uIG1pbGVhZ2UgYW5kIGFnZVxyXG4gIGNvbnN0IG1pbGVhZ2VSYXRlID0gY2l0eV9tcGcgKiBtaWxlYWdlRmFjdG9yO1xyXG4gIGNvbnN0IGFnZVJhdGUgPSAobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpIC0geWVhcikgKiBhZ2VGYWN0b3I7XHJcblxyXG4gIC8vIENhbGN1bGF0ZSB0b3RhbCByZW50YWwgcmF0ZSBwZXIgZGF5XHJcbiAgY29uc3QgcmVudGFsUmF0ZVBlckRheSA9IGJhc2VQcmljZVBlckRheSArIG1pbGVhZ2VSYXRlICsgYWdlUmF0ZTtcclxuXHJcbiAgcmV0dXJuIHBhcnNlSW50KHJlbnRhbFJhdGVQZXJEYXkudG9GaXhlZCgwKSkqODA7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlU2VhcmNoUGFyYW1zID0gKHR5cGU6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4ge1xyXG4gIC8vIEdldCB0aGUgY3VycmVudCBVUkwgc2VhcmNoIHBhcmFtc1xyXG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcblxyXG4gIC8vIFNldCB0aGUgc3BlY2lmaWVkIHNlYXJjaCBwYXJhbWV0ZXIgdG8gdGhlIGdpdmVuIHZhbHVlXHJcbiAgc2VhcmNoUGFyYW1zLnNldCh0eXBlLCB2YWx1ZSk7XHJcblxyXG4gIC8vIFNldCB0aGUgc3BlY2lmaWVkIHNlYXJjaCBwYXJhbWV0ZXIgdG8gdGhlIGdpdmVuIHZhbHVlXHJcbiAgY29uc3QgbmV3UGF0aG5hbWUgPSBgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9PyR7c2VhcmNoUGFyYW1zLnRvU3RyaW5nKCl9YDtcclxuXHJcbiAgcmV0dXJuIG5ld1BhdGhuYW1lO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZVNlYXJjaFBhcmFtcyA9ICh0eXBlOiBzdHJpbmcpID0+IHtcclxuICAvLyBTZXQgdGhlIHNwZWNpZmllZCBzZWFyY2ggcGFyYW1ldGVyIHRvIHRoZSBnaXZlbiB2YWx1ZVxyXG4gIGNvbnN0IG5ld1NlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcblxyXG4gIC8vIERlbGV0ZSB0aGUgc3BlY2lmaWVkIHNlYXJjaCBwYXJhbWV0ZXJcclxuICBuZXdTZWFyY2hQYXJhbXMuZGVsZXRlKHR5cGUudG9Mb2NhbGVMb3dlckNhc2UoKSk7XHJcblxyXG4gIC8vIENvbnN0cnVjdCB0aGUgdXBkYXRlZCBVUkwgcGF0aG5hbWUgd2l0aCB0aGUgZGVsZXRlZCBzZWFyY2ggcGFyYW1ldGVyXHJcbiAgY29uc3QgbmV3UGF0aG5hbWUgPSBgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9PyR7bmV3U2VhcmNoUGFyYW1zLnRvU3RyaW5nKCl9YDtcclxuXHJcbiAgcmV0dXJuIG5ld1BhdGhuYW1lO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQ2FycyhmaWx0ZXJzOiBmaWx0ZXJQcm9wcykge1xyXG4gIGNvbnN0IHsgbWFudWZhY3R1cmVyLCB5ZWFyLCBtb2RlbCwgbGltaXQsIGZ1ZWwgfSA9IGZpbHRlcnM7XHJcblxyXG4gIC8vIFNldCB0aGUgcmVxdWlyZWQgaGVhZGVycyBmb3IgdGhlIEFQSSByZXF1ZXN0XHJcbiAgY29uc3QgaGVhZGVyczogSGVhZGVyc0luaXQgPSB7XHJcbiAgICBcIlgtUmFwaWRBUEktS2V5XCI6ICdkZTg4NWVkYzNhbXNoYzVjN2EyMGU2YzM4NGI4cDE3NDNlZGpzbmYxYjNhMmZmNTJmMCcsXHJcbiAgICBcIlgtUmFwaWRBUEktSG9zdFwiOiBcImNhcnMtYnktYXBpLW5pbmphcy5wLnJhcGlkYXBpLmNvbVwiLFxyXG4gIH07XHJcblxyXG4gIC8vIFNldCB0aGUgcmVxdWlyZWQgaGVhZGVycyBmb3IgdGhlIEFQSSByZXF1ZXN0XHJcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgIGBodHRwczovL2NhcnMtYnktYXBpLW5pbmphcy5wLnJhcGlkYXBpLmNvbS92MS9jYXJzP21ha2U9JHttYW51ZmFjdHVyZXJ9JnllYXI9JHt5ZWFyfSZtb2RlbD0ke21vZGVsfSZsaW1pdD0ke2xpbWl0fSZmdWVsX3R5cGU9JHtmdWVsfWAsXHJcbiAgICB7XHJcbiAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgLy8gUGFyc2UgdGhlIHJlc3BvbnNlIGFzIEpTT05cclxuICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUNhckltYWdlVXJsID0gKGNhcjogQ2FyUHJvcHMsIGFuZ2xlPzogc3RyaW5nKSA9PiB7XHJcbiAgY29uc3QgdXJsID0gbmV3IFVSTChcImh0dHBzOi8vY2RuLmltYWdpbi5zdHVkaW8vZ2V0aW1hZ2VcIik7XHJcbiAgY29uc3QgeyBtYWtlLCBtb2RlbCwgeWVhciB9ID0gY2FyO1xyXG5cclxuICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZCgnY3VzdG9tZXInLCAnaHJqYXZhc2NyaXB0LW1hc3RlcnknKTtcclxuICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZCgnbWFrZScsIG1ha2UpO1xyXG4gIHVybC5zZWFyY2hQYXJhbXMuYXBwZW5kKCdtb2RlbEZhbWlseScsIG1vZGVsLnNwbGl0KFwiIFwiKVswXSk7XHJcbiAgdXJsLnNlYXJjaFBhcmFtcy5hcHBlbmQoJ3pvb21UeXBlJywgJ2Z1bGxzY3JlZW4nKTtcclxuICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZCgnbW9kZWxZZWFyJywgYCR7eWVhcn1gKTtcclxuICAvLyB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZCgnem9vbUxldmVsJywgem9vbUxldmVsKTtcclxuICB1cmwuc2VhcmNoUGFyYW1zLmFwcGVuZCgnYW5nbGUnLCBgJHthbmdsZX1gKTtcclxuXHJcbiAgcmV0dXJuIGAke3VybH1gO1xyXG59ICJdLCJuYW1lcyI6WyJjYWxjdWxhdGVDYXJSZW50IiwiY2l0eV9tcGciLCJ5ZWFyIiwiYmFzZVByaWNlUGVyRGF5IiwibWlsZWFnZUZhY3RvciIsImFnZUZhY3RvciIsIm1pbGVhZ2VSYXRlIiwiYWdlUmF0ZSIsIkRhdGUiLCJnZXRGdWxsWWVhciIsInJlbnRhbFJhdGVQZXJEYXkiLCJwYXJzZUludCIsInRvRml4ZWQiLCJ1cGRhdGVTZWFyY2hQYXJhbXMiLCJ0eXBlIiwidmFsdWUiLCJzZWFyY2hQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInNldCIsIm5ld1BhdGhuYW1lIiwicGF0aG5hbWUiLCJ0b1N0cmluZyIsImRlbGV0ZVNlYXJjaFBhcmFtcyIsIm5ld1NlYXJjaFBhcmFtcyIsImRlbGV0ZSIsInRvTG9jYWxlTG93ZXJDYXNlIiwiZmV0Y2hDYXJzIiwiZmlsdGVycyIsIm1hbnVmYWN0dXJlciIsIm1vZGVsIiwibGltaXQiLCJmdWVsIiwiaGVhZGVycyIsInJlc3BvbnNlIiwiZmV0Y2giLCJyZXN1bHQiLCJqc29uIiwiZ2VuZXJhdGVDYXJJbWFnZVVybCIsImNhciIsImFuZ2xlIiwidXJsIiwiVVJMIiwibWFrZSIsImFwcGVuZCIsInNwbGl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./Utils/index.tsx\n"));

/***/ })

});