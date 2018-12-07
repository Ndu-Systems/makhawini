(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["candidates-candidates-module"],{

/***/ "./src/app/views/candidates/candidates.component.html":
/*!************************************************************!*\
  !*** ./src/app/views/candidates/candidates.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  candidates works!\n</p>\n"

/***/ }),

/***/ "./src/app/views/candidates/candidates.component.scss":
/*!************************************************************!*\
  !*** ./src/app/views/candidates/candidates.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/candidates/candidates.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/candidates/candidates.component.ts ***!
  \**********************************************************/
/*! exports provided: CandidatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidatesComponent", function() { return CandidatesComponent; });
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

var CandidatesComponent = /** @class */ (function () {
    function CandidatesComponent() {
    }
    CandidatesComponent.prototype.ngOnInit = function () {
    };
    CandidatesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-candidates',
            template: __webpack_require__(/*! ./candidates.component.html */ "./src/app/views/candidates/candidates.component.html"),
            styles: [__webpack_require__(/*! ./candidates.component.scss */ "./src/app/views/candidates/candidates.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CandidatesComponent);
    return CandidatesComponent;
}());



/***/ }),

/***/ "./src/app/views/candidates/candidates.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/candidates/candidates.module.ts ***!
  \*******************************************************/
/*! exports provided: CandidatesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidatesModule", function() { return CandidatesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _candidates_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./candidates.component */ "./src/app/views/candidates/candidates.component.ts");
/* harmony import */ var _candidates_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./candidates.routing.module */ "./src/app/views/candidates/candidates.routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CandidatesModule = /** @class */ (function () {
    function CandidatesModule() {
    }
    CandidatesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _candidates_routing_module__WEBPACK_IMPORTED_MODULE_3__["CandidateRoutingModule"]
            ],
            declarations: [_candidates_component__WEBPACK_IMPORTED_MODULE_2__["CandidatesComponent"]]
        })
    ], CandidatesModule);
    return CandidatesModule;
}());



/***/ }),

/***/ "./src/app/views/candidates/candidates.routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/candidates/candidates.routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CandidateRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateRoutingModule", function() { return CandidateRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _candidates_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./candidates.component */ "./src/app/views/candidates/candidates.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _candidates_component__WEBPACK_IMPORTED_MODULE_2__["CandidatesComponent"]
    }
];
var CandidateRoutingModule = /** @class */ (function () {
    function CandidateRoutingModule() {
    }
    CandidateRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CandidateRoutingModule);
    return CandidateRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=candidates-candidates-module.js.map