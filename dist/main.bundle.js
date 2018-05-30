webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-emp/add-emp.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-emp/add-emp.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col-sm-6\">\n<form>\n    <div class=\"form-group row\">\n      <label for=\"employeeName\" class=\"col-sm-2 col-form-label\">Name</label>\n        <div class=\"col-sm-8\">\n          <input type=\"text\" class=\"form-control\" #empName id=\"employeeName\" placeholder=\"Enter name\" ngModel />\n        </div>\n      </div>\n    <div class=\"form-group row\">\n      <label for=\"employeeEmail\" class=\"col-sm-2 col-form-label\">Email</label>\n      <div class=\"col-sm-8\">\n        <input type=\"text\" class=\"form-control\" #empEmail id=\"employeeEmail\" placeholder=\"Enter Email\" ngModel />\n      </div>\n    </div>\n    <div class=\"form-group row\">\n        <label for=\"employeeAge\" class=\"col-sm-2 col-form-label\">Age</label>\n        <div class=\"col-sm-8\">\n          <input type=\"text\" class=\"form-control\" #empAge id=\"employeeAge\" placeholder=\"Enter Age\" ngModel />\n        </div>\n      </div>\n    <button type=\"button\" id=\"submit1\" (click)=\"addEmployee(empName.value, empEmail.value, empAge.value)\" class=\"btn btn-primary\">Add Employee</button>\n    <div class=\"alert alert-success alert-dismissable\" style=\"Display:none\" id=\"alert3\">\n      <a class=\"close\" data-dismiss=\"alert\">&times;</a>\n      Success! message sent successfully.\n  </div>\n  <div>\n    <br>\n        \t<button type=\"submit\" id=\"submit3\">Show Message</button>\n\n        <br><br>\n        <div class=\"alert alert-success alert-dismissable\" style=\"Display:none\" id=\"alert4\">\n        <a class=\"close\" data-dismiss=\"alert\">&times;</a>\n        Success! message sent successfully.\n  </div>"

/***/ }),

/***/ "./src/app/add-emp/add-emp.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEmpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddEmpComponent = /** @class */ (function () {
    function AddEmpComponent(db) {
        this.employeeRef = db.list('employee');
        this.employees = this.employeeRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    AddEmpComponent.prototype.ngOnInit = function () {
    };
    AddEmpComponent.prototype.addEmployee = function (newName, email, age) {
        var obj = {
            "name": newName,
            "email": email,
            "age": age
        };
        this.employeeRef.push(obj);
    };
    AddEmpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-emp',
            template: __webpack_require__("./src/app/add-emp/add-emp.component.html"),
            styles: [__webpack_require__("./src/app/add-emp/add-emp.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AddEmpComponent);
    return AddEmpComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n\n<div class=\"container-fluid\">    \n  <div class=\"row\">\n    <div class=\"col-sm-12\"> \n                <!--left-->        \n                <app-sidebar></app-sidebar>\n                \n<section> \n  <router-outlet></router-outlet>\n</section>\n                <!--/left--><!--  <br>\n        <h1>\n          {{ title }}!\n        </h1>\n        <h5><a target=\"_blank\"  href=\"https://angular.io/tutorial\">Tour of Heroes | </a>\n          <a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation | </a>\n          <a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a>\n        </h5><br> -->\n\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Employee Management System';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__emp_data_emp_data_component__ = __webpack_require__("./src/app/emp-data/emp-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sidebar_sidebar_component__ = __webpack_require__("./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__add_emp_add_emp_component__ = __webpack_require__("./src/app/add-emp/add-emp.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_datatable__ = __webpack_require__("./node_modules/angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__datatable_datatable_component__ = __webpack_require__("./src/app/datatable/datatable.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    { path: "add_emp", component: __WEBPACK_IMPORTED_MODULE_10__add_emp_add_emp_component__["a" /* AddEmpComponent */] },
    { path: "manage_emp", component: __WEBPACK_IMPORTED_MODULE_3__emp_data_emp_data_component__["a" /* EmpDataComponent */] },
    { path: "manage_emp2", component: __WEBPACK_IMPORTED_MODULE_13__datatable_datatable_component__["a" /* DatatableComponent */] },
    { path: "**", component: __WEBPACK_IMPORTED_MODULE_3__emp_data_emp_data_component__["a" /* EmpDataComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__emp_data_emp_data_component__["a" /* EmpDataComponent */],
                __WEBPACK_IMPORTED_MODULE_7__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__add_emp_add_emp_component__["a" /* AddEmpComponent */],
                __WEBPACK_IMPORTED_MODULE_13__datatable_datatable_component__["a" /* DatatableComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_14__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_12_angular2_datatable__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_4_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_11__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/datatable/datatable.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/datatable/datatable.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"isVisible = !isVisible\">Angular DataTable....</button>\n<div class=\"col-sm-10\" [@visibilityChanged]=\"visibility\">\n<table class=\"table table-striped\" [mfData]=\"Data\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"5\">\n    <thead>\n    <tr>\n        <th >\n            <mfDefaultSorter by=\"ID\">ID</mfDefaultSorter>\n        </th>\n        <th >\n            <mfDefaultSorter by=\"city\">Name</mfDefaultSorter>\n        </th>\n        <th >\n            <mfDefaultSorter by=\"name\">Email</mfDefaultSorter>\n        </th>\n        <th >\n            <mfDefaultSorter by=\"email\">Age</mfDefaultSorter>\n        </th>\n        <th >\n            <mfDefaultSorter by=\"age\">Actions</mfDefaultSorter>\n        </th>\n       \n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let employee1 of employees | async\">\n        <td>1</td>\n        <td>{{employee1.name}}</td>\n        <td>{{employee1.email}}</td>\n        <td>{{employee1.age}}</td>\n        <td>\n          <button class=\"btn btn-danger\" (click)=\"deleteEmployee(employee.key)\">Delete</button>\n          <a href=\"#myModal\" role=\"button\" class=\"btn btn-default\" data-toggle=\"modal\">Modal Update</a>\n        </td>\n    </tr>\n    </tbody>\n    <tfoot>\n    <tr>\n        <td colspan=\"4\">\n            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\n        </td>\n    </tr>\n    </tfoot>\n</table>\n</div>\n"

/***/ }),

/***/ "./src/app/datatable/datatable.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatatableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_2_data_table__ = __webpack_require__("./node_modules/angular-2-data-table/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_2_data_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_2_data_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DatatableComponent = /** @class */ (function () {
    function DatatableComponent(db) {
        this.isVisible = false;
        this.visibility = 'shown';
        this.Data = [
            { name: 'vin', email: 'Vin', age: '21' },
            { name: 'year', email: 'Year', age: '21' },
            { name: 'brand', email: 'Brand', age: '21' },
            { name: 'color', email: 'Color', age: '21' }
        ];
        this.employeeRef = db.list('employee');
        this.employees = this.employeeRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    DatatableComponent.prototype.ngOnChanges = function () {
        this.visibility = this.isVisible ? 'shown' : 'hidden';
    };
    DatatableComponent.prototype.ngOnInit = function () {
    };
    DatatableComponent.prototype.addEmployee = function (newName, email, age) {
        var obj = {
            "name": newName,
            "email": email,
            "age": age
        };
        this.employeeRef.push(obj);
    };
    DatatableComponent.prototype.updateEmployee = function (key, newText) {
        this.employeeRef.update(key, { text: newText });
    };
    DatatableComponent.prototype.deleteEmployee = function (key) {
        this.employeeRef.remove(key);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], DatatableComponent.prototype, "isVisible", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_angular_2_data_table__["DataTable"]),
        __metadata("design:type", Object)
    ], DatatableComponent.prototype, "filmsTable", void 0);
    DatatableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-datatable',
            template: __webpack_require__("./src/app/datatable/datatable.component.html"),
            styles: [__webpack_require__("./src/app/datatable/datatable.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('visibilityChanged', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('shown', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1 })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('hidden', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => *', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('.5s'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], DatatableComponent);
    return DatatableComponent;
}());



/***/ }),

/***/ "./src/app/emp-data/emp-data.component.css":
/***/ (function(module, exports) {

module.exports = "input[type=text] {\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/emp-data/emp-data.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<ul>\n  <li *ngFor=\"let item of items | async\">\n    <input type=\"text\" #updatetext [value]=\"item.text\" />\n    <button (click)=\"updateItem(item.key, updatetext.value)\">Update</button>\n    <button (click)=\"deleteItem(item.key)\">Delete</button>\n  </li>\n</ul>\n<input type=\"text\" #newitem />\n<button (click)=\"addItem(newitem.value)\">Add</button>\n<button (click)=\"deleteEverything()\">Delete All</button>\n-->\n\n\n<!--\n  <div style=\"text-align: left\">\n    <input type=\"text\" #newitem /> &nbsp; \n    <button type=\"button\" class=\"btn btn-primary \" (click)=\"addItem(newitem.value)\">Add</button> &nbsp;\n    <button type=\"button\" class=\"btn btn-primary \" (click)=\"deleteEverything()\" >Delete All</button>\n</div><br>\n<table class=\"table table-hover\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Emp ID</th>\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\">Email</th>\n      <th scope=\"col\">Department</th>\n      <th scope=\"col\">Actions</th>\n    </tr>\n  </thead>\n  <tbody style=\"text-align: left\" *ngFor=\"let item of items | async\">\n      <tr>\n        <th scope=\"row\">1</th>\n        <td><input type=\"text\" #updatetext [value]=\"item.text\" /></td>\n        <td>Otto</td>\n        <td>@mdo</td>\n        <td>\n            <div>\n              <button type=\"button\" class=\"btn btn-primary \" (click)=\"updateItem(item.key, updatetext.value)\">Update</button>\n              <button type=\"button\" class=\"btn btn-primary \" (click)=\"deleteItem(item.key)\" >Delete</button>\n            </div>\n        </td>\n      </tr>\n       </tbody>\n</table>\n\n-->\n<div class=\"col-sm-10\">\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Emp ID</th>\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\">Email</th>\n      <th scope=\"col\">Age</th>\n      <th scope=\"col\">Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let employee of employees | async\">\n      <th scope=\"row\">1</th>  <!--<input type=\"text\" #empname value=\"{{employee.name}}\" /> -->\n      <td>{{employee.name}}</td>\n      <td>{{employee.email}}</td>\n      <td>{{employee.age}}</td>\n      <td>\n          <button class=\"btn btn-default\">Update</button>\n        <button class=\"btn btn-danger\" (click)=\"deleteEmployee(employee.key)\">Delete</button>\n        <a href=\"#myModal\" role=\"button\" class=\"btn btn-default\" data-toggle=\"modal\">Modal Update</a>\n\n      </td>  \n        <div id=\"myModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n          <div class=\"modal-dialog\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</button>\n                <h3 id=\"myModalLabel\">Update Details</h3>\n            </div>\n            <div class=\"modal-body\">\n                <p>One fine body…</p>\n                <!-- <table>\n                    <tr *ngFor=\"let employee of employees | async\">\n                      <td>Name: {{employee.name}}</td><br>\n                      <td>Email: {{employee.email}}</td><br>\n                      <td>Age: {{employee.age}}</td>\n                      </tr>\n                </table> -->\n                <input type=\"text\" value=\"{{employee.name}}\"/>\n                <input type=\"text\" value=\"{{employee.email}}\"/>\n                <input type=\"text\" value=\"{{employee.age}}\"/>        \n            </div>\n            <div class=\"modal-footer\">\n              <button class=\"btn\" data-dismiss=\"modal\" aria-hidden=\"true\">Close</button>\n              <button class=\"btn btn-primary\" (click)=\"updateEmployee(employee.key, employee.value)\" >Save changes</button>\n            </div>\n          </div>\n          </div>\n          </div>\n\n        </tr>\n        </tbody>\n        </table>\n      \n       "

/***/ }),

/***/ "./src/app/emp-data/emp-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmpDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("./node_modules/angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmpDataComponent = /** @class */ (function () {
    function EmpDataComponent(db) {
        this.itemsRef = db.list('demo');
        // Use snapshotChanges().map() to store the key
        this.items = this.itemsRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        this.employeeRef = db.list('employee');
        this.employees = this.employeeRef.snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
    }
    EmpDataComponent.prototype.addItem = function (newName) {
        this.itemsRef.push({ text: newName });
    };
    EmpDataComponent.prototype.updateItem = function (key, newText) {
        this.itemsRef.update(key, { text: newText });
    };
    EmpDataComponent.prototype.deleteItem = function (key) {
        this.itemsRef.remove(key);
    };
    EmpDataComponent.prototype.deleteEverything = function () {
        this.itemsRef.remove();
    };
    EmpDataComponent.prototype.ngOnInit = function () {
    };
    EmpDataComponent.prototype.addEmployee = function (newName, email, age) {
        var obj = {
            "name": newName,
            "email": email,
            "age": age
        };
        this.employeeRef.push(obj);
    };
    EmpDataComponent.prototype.updateEmployee = function (key, newText) {
        this.employeeRef.update(key, { text: newText });
    };
    EmpDataComponent.prototype.deleteEmployee = function (key) {
        this.employeeRef.remove(key);
    };
    EmpDataComponent.prototype.getEmployeeById = function (id) {
        this.emp1 = this.employees.filter(function (e) {
            //return e.key == id;
            console.log(e);
            return this.emp1;
        });
    };
    EmpDataComponent.prototype.getEmployeeByIdi = function (id) {
        this.emp = this.employees.filter(function (e) { return id; });
        console.log(this.emp);
        return this.emp;
    };
    EmpDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-emp-data',
            template: __webpack_require__("./src/app/emp-data/emp-data.component.html"),
            styles: [__webpack_require__("./src/app/emp-data/emp-data.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], EmpDataComponent);
    return EmpDataComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "footer {\r\n    background-color: #555;\r\n    color: white;\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n  }"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"container-fluid bg-4 text-center\">\n    <p>Employee Management By <a href=\"https://www.felixits.com\">www.felixits.com</a></p> \n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\" role=\"banner\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button class=\"navbar-toggle\" type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a href=\"/\" class=\"navbar-brand\">ManageEmployee</a>\n    </div>\n    <nav class=\"collapse navbar-collapse\" role=\"navigation\">\n      <ul class=\"nav navbar-nav\">\n        <li>\n          <a [routerLink]=\"['manage_emp']\">Manage Employee</a>\n        </li>\n        <li>\n          <a [routerLink]=\"['add_emp']\">Add Employee</a>\n        </li>\n        <li>\n          <a [routerLink]=\"['manage_emp2']\">Manage Employee 2</a>\n        </li>\n        <li>\n          <a href=\"#sec\">Prototype</a>\n        </li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a href=\"#\"><span class=\"glyphicon glyphicon-user\"></span> Sign Up</a></li>\n        <li><a href=\"#\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n      </ul>\n    </nav>\n  </div>\n</nav>\n  \n  \n  "

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/***/ (function(module, exports) {

module.exports = ".col-md-3 {\r\n    width: 17%; \r\n    text-align: left;\r\n}\r\nhr {\r\n    -webkit-box-align: top;\r\n        -ms-flex-align: top;\r\n            align-items: top;\r\n}\r\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "\n        <br><br><br><br>\n        <div class=\"col-md-2\" id=\"leftCol\" style=\"border: azure\">\n          <nav class=\"navbar navbar-expand-sm bg-success navbar-dark\">\n          <ul class=\"nav nav-stacked-left\" id=\"sidebar\">\n            <li><a [routerLink]=\"['manage_emp']\">Manage Employee</a></li>\n            <li><a [routerLink]=\"['add_emp']\">Add Employee</a></li>\n            <li><a [routerLink]=\"['manage_emp2']\">Manage Employee 2</a></li>\n            <li><a href=\"#sec3\">Section 3</a></li>\n            <li><a href=\"#sec4\">Section 4</a></li>\n          </ul></nav>\n        </div><!--/left-->\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBAp9hPNwpvG5thNMdVufuI1UE44iP1qJ0",
        authDomain: "employee-management-1c086.firebaseapp.com",
        databaseURL: "https://employee-management-1c086.firebaseio.com",
        projectId: "employee-management-1c086",
        storageBucket: "",
        messagingSenderId: "227699858353"
    }
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map