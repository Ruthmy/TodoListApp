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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_crud_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/crud.js */ \"./src/modules/crud.js\");\n/* harmony import */ var _modules_deleteCompletedTasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/deleteCompletedTasks.js */ \"./src/modules/deleteCompletedTasks.js\");\n\n\n\n\n//# sourceURL=webpack://todolistapp/./src/index.js?");

/***/ }),

/***/ "./src/modules/addTask.js":
/*!********************************!*\
  !*** ./src/modules/addTask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// addTasks.js\n// Tasks on the local storage\nvar ItemsArray = JSON.parse(localStorage.getItem('tasks')) || [];\n\n// Add functionality\nfunction addTask() {\n  var input = document.getElementById('add-item');\n  var description = input.value;\n  var index = ItemsArray.length + 1;\n  var completed = false;\n  var newItem = {\n    index: index,\n    description: description,\n    completed: completed\n  };\n  ItemsArray.push(newItem);\n  localStorage.setItem('tasks', JSON.stringify(ItemsArray));\n  document.getElementById('add-form').reset();\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addTask);\n\n//# sourceURL=webpack://todolistapp/./src/modules/addTask.js?");

/***/ }),

/***/ "./src/modules/changeTaskStatus.js":
/*!*****************************************!*\
  !*** ./src/modules/changeTaskStatus.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// changeTaskStatus.js\n// Tasks on the local storage\n\nfunction changeTaskStatus(taskIndex, taskStatus, ItemsArray) {\n  // Update the status of the task in the array\n  ItemsArray[taskIndex].completed = taskStatus;\n  localStorage.setItem('tasks', JSON.stringify(ItemsArray));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeTaskStatus);\n\n//# sourceURL=webpack://todolistapp/./src/modules/changeTaskStatus.js?");

/***/ }),

/***/ "./src/modules/crud.js":
/*!*****************************!*\
  !*** ./src/modules/crud.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _deleteCompletedTasks_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deleteCompletedTasks.js */ \"./src/modules/deleteCompletedTasks.js\");\n/* harmony import */ var _addTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTask.js */ \"./src/modules/addTask.js\");\n/* harmony import */ var _deleteTask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deleteTask.js */ \"./src/modules/deleteTask.js\");\n/* harmony import */ var _editTask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editTask.js */ \"./src/modules/editTask.js\");\n/* harmony import */ var _changeTaskStatus_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./changeTaskStatus.js */ \"./src/modules/changeTaskStatus.js\");\n\n\n\n\n\n\n// Get HTML elements\nvar addButton = document.getElementById('add-button');\nvar input = document.getElementById('add-item');\n\n// Tasks on the local storage\nvar ItemsArray = JSON.parse(localStorage.getItem('tasks')) || [];\nfunction displayTasks() {\n  // Get the ul element\n  var list = document.querySelector('#list');\n  list.innerHTML = '';\n\n  // Loop through the items and add them to the ul\n  ItemsArray.forEach(function (task) {\n    // Create the li element\n    var li = document.createElement('li');\n    li.classList.add('item');\n\n    // Create the <input> element\n    var checkbox = document.createElement('input');\n    checkbox.setAttribute('type', 'checkbox');\n    checkbox.setAttribute('name', 'item');\n    checkbox.setAttribute('id', \"item-\".concat(task.index));\n    checkbox.setAttribute('data-index', task.index);\n    checkbox.checked = task.completed;\n    li.appendChild(checkbox);\n\n    // Create the <label> element\n    var label = document.createElement('label');\n    label.setAttribute('for', \"item-\".concat(task.index));\n    label.textContent = task.description;\n    li.appendChild(label);\n\n    // Create the edit button\n    var editButton = document.createElement('button');\n    editButton.classList.add('btn');\n    li.appendChild(editButton);\n\n    // Create the delete button\n    var deleteButton = document.createElement('button');\n    deleteButton.classList.add('btn-delete');\n    li.appendChild(deleteButton);\n\n    // Add the li to the ul\n    list.appendChild(li);\n\n    // Add event listeners for editing and deleting\n    label.addEventListener('dblclick', function (event) {\n      // Replace the label with an input field\n      var input = document.createElement('input');\n      input.setAttribute('type', 'text');\n      input.setAttribute('class', 'edit');\n      input.value = task.description;\n      li.replaceChild(input, label);\n\n      // Change the edit button to a save button\n      editButton.classList.replace('btn', 'delete');\n\n      // Set focus on the input field\n      input.focus();\n\n      // Add event listener to save changes on enter or blur\n      input.addEventListener('keydown', function (event) {\n        if (event.key === 'Enter' || event.keyCode === 13 || event.type === 'blur') {\n          event.preventDefault();\n\n          // Update the task description in the array\n          var _taskIndex = task.index - 1;\n          (0,_editTask_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_taskIndex, input.value, ItemsArray);\n\n          // Replace the input field with the label\n          li.replaceChild(label, input);\n\n          // Change the save button back to an edit button\n          editButton.classList.replace('btn', 'delete');\n          displayTasks();\n        }\n      });\n\n      // Delete a task when user click the delete button\n      var taskIndex = task.index;\n      deleteButton.addEventListener('click', function () {\n        (0,_deleteTask_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(taskIndex);\n        window.location.reload();\n      });\n    });\n    checkbox.addEventListener('click', function (event) {\n      var index = event.target.dataset.index - 1;\n      var status = event.target.checked;\n      (0,_changeTaskStatus_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(index, status, ItemsArray);\n    });\n  });\n}\ndisplayTasks();\n\n// Add a new task when user hit the add button\naddButton.addEventListener('click', function (event) {\n  event.preventDefault();\n  (0,_addTask_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  window.location.reload();\n});\n\n// Add a new task when user hit enter key\ninput.addEventListener('keydown', function (event) {\n  if (event.key === 'Enter') {\n    (0,_addTask_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    window.location.reload();\n  }\n});\nvar clearButton = document.querySelector('#clear-button');\nclearButton.addEventListener('click', function () {\n  ItemsArray = (0,_deleteCompletedTasks_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(ItemsArray);\n  displayTasks();\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayTasks);\n\n//# sourceURL=webpack://todolistapp/./src/modules/crud.js?");

/***/ }),

/***/ "./src/modules/deleteCompletedTasks.js":
/*!*********************************************!*\
  !*** ./src/modules/deleteCompletedTasks.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// deleteTasks.js\nfunction deleteCompletedTasks(ItemsArray) {\n  ItemsArray = ItemsArray.filter(function (task) {\n    return !task.completed;\n  });\n\n  // Update the index property of remaining tasks\n  ItemsArray.forEach(function (task, index) {\n    task.index = index + 1;\n  });\n  localStorage.setItem('tasks', JSON.stringify(ItemsArray));\n  return ItemsArray;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteCompletedTasks);\n\n//# sourceURL=webpack://todolistapp/./src/modules/deleteCompletedTasks.js?");

/***/ }),

/***/ "./src/modules/deleteTask.js":
/*!***********************************!*\
  !*** ./src/modules/deleteTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// deleteTasks.js\n// Tasks on the local storage\nvar ItemsArray = JSON.parse(localStorage.getItem('tasks')) || [];\nfunction deleteTask(taskIndex) {\n  ItemsArray.splice(taskIndex - 1, 1);\n\n  // Update the index property of the remaining tasks\n  ItemsArray.forEach(function (task, index) {\n    task.index = index + 1;\n  });\n  localStorage.setItem('tasks', JSON.stringify(ItemsArray));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteTask);\n\n//# sourceURL=webpack://todolistapp/./src/modules/deleteTask.js?");

/***/ }),

/***/ "./src/modules/editTask.js":
/*!*********************************!*\
  !*** ./src/modules/editTask.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// editTaks.js\n\n// Edit functionality\nfunction editTask(indexTask, taskDescription, ItemsArray) {\n  // Update the task description in the array\n  ItemsArray[indexTask].description = taskDescription;\n  localStorage.setItem('tasks', JSON.stringify(ItemsArray));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editTask);\n\n//# sourceURL=webpack://todolistapp/./src/modules/editTask.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/arrow-enter.svg */ \"./src/images/arrow-enter.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/vertical-dots-icon.svg */ \"./src/images/vertical-dots-icon.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/delete.svg */ \"./src/images/delete.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Global Styles */\r\n\r\n:root {\r\n  --text: #414856;\r\n  --check: #4f29f0;\r\n  --disabled: #c3c8de;\r\n  --todo-background: #fff;\r\n  --background: #e8e8e8;\r\n  --hover-task: #f7f7f7;\r\n  --font: \"Montserrat\", sans-serif;\r\n}\r\n\r\nhtml {\r\n  box-sizing: border-box;\r\n  line-height: 1.15;\r\n  -webkit-text-size-adjust: 100%;\r\n  font-size: 62.5%;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: inherit;\r\n  margin: 0;\r\n  padding: 0;\r\n\r\n  /* outline: 1px solid red !important; */\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: var(--background);\r\n  width: 100vw;\r\n  height: 100vh;\r\n  font-family: var(--font);\r\n}\r\n\r\nbutton,\r\ninput {\r\n  font-family: var(--font);\r\n  font-size: 1.6rem;\r\n}\r\n\r\nh1 {\r\n  font-size: 2.5rem;\r\n}\r\n\r\np,\r\nlabel {\r\n  font-size: 1.6rem;\r\n}\r\n\r\nli {\r\n  list-style: none;\r\n}\r\n\r\n#checklist {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-wrap: wrap;\r\n  align-content: space-between;\r\n  background: var(--todo-background);\r\n  border-radius: 0.5rem;\r\n  border: 1px solid rgba(0, 0, 0, 0.08);\r\n  box-shadow: 0 10px 30px rgba(65, 72, 86, 0.05);\r\n  max-width: 25rem;\r\n  width: 100%;\r\n  max-height: none;\r\n  transition: max-height 0s;\r\n}\r\n\r\n#checklist .header {\r\n  width: 100%;\r\n  padding: 1.5rem 1rem 1rem 1rem;\r\n  align-self: flex-start;\r\n}\r\n\r\n#add-form {\r\n  position: relative;\r\n  width: 100%;\r\n}\r\n\r\n#add-form input[type=\"text\"] {\r\n  width: 100%;\r\n  padding: 0.9rem 1.5rem 0.9rem 0.9rem;\r\n  font-family: var(--font);\r\n  font-style: italic;\r\n  border: 1px solid rgba(0, 0, 0, 0.08);\r\n  border-style: solid none solid none;\r\n  -webkit-backface-visibility: hidden;\r\n  backface-visibility: hidden;\r\n}\r\n\r\n#add-form input[type=\"text\"]:focus {\r\n  outline: none;\r\n  border: 1px solid #949494;\r\n}\r\n\r\n#add-form button[type=\"button\"] {\r\n  position: absolute;\r\n  margin-left: -1.5rem;\r\n  height: 100%;\r\n  width: 1.5rem;\r\n  cursor: pointer;\r\n  border: none;\r\n  background: no-repeat center/60% url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n}\r\n\r\n#items ul {\r\n  width: 100%;\r\n  position: relative;\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.item {\r\n  width: 100%;\r\n  padding: 0.9rem 1.5rem 0.9rem 0.9rem;\r\n  position: relative;\r\n  border: 1px solid rgba(0, 0, 0, 0.08);\r\n  border-style: none none solid none;\r\n}\r\n\r\n.item:hover {\r\n  background-color: #f7f7f7;\r\n}\r\n\r\n.checkbox:checked {\r\n  background-color: var(--disabled);\r\n}\r\n\r\ninput[type=\"checkbox\"]:checked + label {\r\n  color: var(--disabled);\r\n  animation: move 0.4s ease forwards;\r\n}\r\n\r\n@keyframes move {\r\n  50% {\r\n    padding-left: 1rem;\r\n    padding-right: 0;\r\n  }\r\n\r\n  100% {\r\n    padding-right: 0.5rem;\r\n  }\r\n}\r\n\r\n#list label {\r\n  cursor: pointer;\r\n  padding-left: 0.5rem;\r\n}\r\n\r\n#items .btn {\r\n  display: block;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 1.5rem;\r\n  cursor: pointer;\r\n  border: none;\r\n  opacity: 0.6;\r\n  background: no-repeat center/20% url(${___CSS_LOADER_URL_REPLACEMENT_1___});\r\n}\r\n\r\n#items .btn-delete {\r\n  display: block;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 1.5rem;\r\n  cursor: pointer;\r\n  border: none;\r\n  opacity: 0.6;\r\n}\r\n\r\n.delete {\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  width: 1.5rem;\r\n  cursor: pointer;\r\n  border: none;\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  fill: currentColor;\r\n  background: no-repeat center/50% url(${___CSS_LOADER_URL_REPLACEMENT_2___});\r\n}\r\n\r\ninput[type=\"text\"].edit {\r\n  width: 90%;\r\n  padding: 0.2rem 1rem 0.2rem 0.2rem;\r\n  font-family: var(--font);\r\n}\r\n\r\ninput[type=\"text\"].edit:focus {\r\n  outline: none;\r\n  border-radius: 0.5rem;\r\n  border: 1px solid #949494;\r\n}\r\n\r\n.task-item .delete-button {\r\n  display: none;\r\n}\r\n\r\n.task-item:hover .delete-button {\r\n  display: inline-block;\r\n}\r\n\r\n#clear button {\r\n  width: 100%;\r\n  height: 2.5rem;\r\n  border: none;\r\n  font-size: 1rem;\r\n  color: gray;\r\n  cursor: pointer;\r\n}\r\n\r\n#clear button:hover {\r\n  color: darkslategray;\r\n  text-decoration: darkslategray underline;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolistapp/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todolistapp/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://todolistapp/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolistapp/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolistapp/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolistapp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolistapp/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolistapp/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolistapp/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolistapp/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolistapp/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/images/arrow-enter.svg":
/*!************************************!*\
  !*** ./src/images/arrow-enter.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d0555cec48d3ea8a3051.svg\";\n\n//# sourceURL=webpack://todolistapp/./src/images/arrow-enter.svg?");

/***/ }),

/***/ "./src/images/delete.svg":
/*!*******************************!*\
  !*** ./src/images/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"171453614849373b8cca.svg\";\n\n//# sourceURL=webpack://todolistapp/./src/images/delete.svg?");

/***/ }),

/***/ "./src/images/vertical-dots-icon.svg":
/*!*******************************************!*\
  !*** ./src/images/vertical-dots-icon.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2b9d327dccb65150ac7f.svg\";\n\n//# sourceURL=webpack://todolistapp/./src/images/vertical-dots-icon.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;