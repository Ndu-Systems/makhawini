(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["candidates-candidates-module"],{

/***/ "./src/app/views/candidates/candidates.component.html":
/*!************************************************************!*\
  !*** ./src/app/views/candidates/candidates.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\r\n  <app-page-header [heading]=\"'Candidates'\" [icon]=\"'fa-users'\"></app-page-header>\r\n  <div class=\"row\">\r\n    <div class=\"col col-xl-12 col-lg-12 col-md-12 col-sm-12\">\r\n      <div class=\"card card-table mb-3\">\r\n        <div class=\"card-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <a class=\"btn rounded-btn-success\" (click)=\"showAdd()\">Add Candidate </a>\r\n            </div>\r\n            <div class=\"input-group mb-3 col-md-6\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\" id=\"basic-addon1\">\r\n                  <li class=\"fa fa-search\"></li>\r\n                </span>\r\n              </div>\r\n              <input type=\"text\" [(ngModel)]=\"searchText\" [ngModelOptions]=\"{standalone: true}\" class=\"form-control Search\"\r\n                placeholder=\"Search...\" aria-label=\"Search\" aria-describedby=\"basic-addon1\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body table-responsive\">\r\n          <table class=\"table \" *ngIf=\"candidates$ | async as candidates\">\r\n            <thead>\r\n              <tr>\r\n                <th>#</th>\r\n                <th>First Name</th>\r\n                <th>Surname</th>\r\n                <th>Email</th>\r\n                <th>Cellphone</th>\r\n                <th>City</th>\r\n                <th>Actions</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let item of candidates | filter: searchText | paginate: { itemsPerPage: 10, currentPage: p }\">\r\n                <td>{{item.PatientId}}</td>\r\n                <td>{{item.FirstName}}</td>\r\n                <td>{{item.Surname}}</td>\r\n                <td>{{item.Email}}</td>\r\n                <td>{{item.Cellphone}}</td>\r\n                <td>{{item.City}}</td>\r\n                <td><a class=\"btn rounded-btn-info\" [routerLink]=\"['/patients/view']\" (click)=\"view(item)\">View</a></td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <div class=\"justify-content-center\">\r\n            <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div> \r\n\r\n    <p-dialog header=\"Add Patient\" [(visible)]=\"showAddModal\" [width]=\"800\" [height]=\"800\" [modal]=\"true\">        \r\n        <!-- <app-add-patient  (closePopupEmitter)=\"onCloseAdd($event)\" ></app-add-patient>     -->\r\n    </p-dialog>\r\n  </div>\r\n</div>"

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
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
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
            styles: [__webpack_require__(/*! ./candidates.component.scss */ "./src/app/views/candidates/candidates.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
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
/* harmony import */ var _candidates_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./candidates.component */ "./src/app/views/candidates/candidates.component.ts");
/* harmony import */ var _candidates_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./candidates.routing.module */ "./src/app/views/candidates/candidates.routing.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _candidates_routing_module__WEBPACK_IMPORTED_MODULE_1__["CandidateRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__["Ng2SearchPipeModule"]
            ].concat(_shared__WEBPACK_IMPORTED_MODULE_4__["PrimeNg"], [
                ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"]
            ]),
            exports: _shared__WEBPACK_IMPORTED_MODULE_4__["PrimeNg"].slice(),
            declarations: [_candidates_component__WEBPACK_IMPORTED_MODULE_0__["CandidatesComponent"]]
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