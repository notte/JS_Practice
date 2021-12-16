/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/1_Practice.ts":
/*!***************************!*\
  !*** ./src/1_Practice.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// 指令 node 1_Practice.js\n// # Simple Exercise I\n// Write a function called \"printMany\" that prints out integers 1, 2, 3, ..., 100.\nfunction printMany() {\n    for (let i = 1; i <= 100; i++) {\n        console.log(i);\n    }\n}\n// printMany();\n// Write a function called \"printEvery3\" that prints out integers 1, 4, 7, 10, ..., 88.\nfunction printEvery3() {\n    for (let i = 1; i <= 88; i += 3) {\n        console.log(i);\n    }\n}\n// printEvery3();\n// Write a function called \"stars\" that takes an integer as input, and returns the concatenation of n continuous \"*\".\nfunction stars(star) {\n    let result = [];\n    let i = 0;\n    while (i < star) {\n        result.push('*');\n        i++;\n    }\n    console.log(result.join(''));\n}\n// stars(10);\n// Write a function called \"isUpperCase\" that checks if the first letter of the string is uppercase.\nfunction isUpperCase(str) {\n    console.log(/[A-Z]/.test(str[0]));\n}\n// isUpperCase(\"C\");\n// Write a function called \"isAllUpperCase\" that checks if all letters in the given string is uppercase.\nfunction isAllUpperCase(str) {\n    for (let item of str) {\n        if (/[A-Z]/.test(item) === false) {\n            console.log(false);\n            return;\n        }\n    }\n    console.log(true);\n}\nisAllUpperCase('AVCS');\n\n\n\n//# sourceURL=webpack://javascript/./src/1_Practice.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/1_Practice.ts"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;