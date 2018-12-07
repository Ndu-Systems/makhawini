(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vacancies-vacancies-module"],{

/***/ "./src/app/views/vacancies/vacancies.component.html":
/*!**********************************************************!*\
  !*** ./src/app/views/vacancies/vacancies.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  vacancies works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/vacancies/vacancies.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/views/vacancies/vacancies.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/vacancies/vacancies.component.ts":
/*!********************************************************!*\
  !*** ./src/app/views/vacancies/vacancies.component.ts ***!
  \********************************************************/
/*! exports provided: VacanciesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VacanciesComponent", function() { return VacanciesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VacanciesComponent = /** @class */ (function () {
    function VacanciesComponent() {
    }
    VacanciesComponent.prototype.ngOnInit = function () {
    };
    VacanciesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vacancies',
            template: __webpack_require__(/*! ./vacancies.component.html */ "./src/app/views/vacancies/vacancies.component.html"),
            styles: [__webpack_require__(/*! ./vacancies.component.scss */ "./src/app/views/vacancies/vacancies.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], VacanciesComponent);
    return VacanciesComponent;
}());



/***/ }),

/***/ "./src/app/views/vacancies/vacancies.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/vacancies/vacancies.module.ts ***!
  \*****************************************************/
/*! exports provided: VacanciesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VacanciesModule", function() { return VacanciesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _vacancies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vacancies.component */ "./src/app/views/vacancies/vacancies.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var VacanciesModule = /** @class */ (function () {
    function VacanciesModule() {
    }
    VacanciesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_vacancies_component__WEBPACK_IMPORTED_MODULE_2__["VacanciesComponent"]]
        })
    ], VacanciesModule);
    return VacanciesModule;
}());



/***/ })

}]);
//# sourceMappingURL=vacancies-vacancies-module.js.map