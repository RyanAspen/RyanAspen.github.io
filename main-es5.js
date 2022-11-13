(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-layout center>\n  <nb-layout-header>\n   <strong>HACK UTD </strong>\n    <img src=\"../assets/images/eoglogo.png\" height=\"50px\" width=\"150px\">\n  </nb-layout-header>\n\n  <nb-layout-column>\n    <app-main></app-main>\n  </nb-layout-column>\n\n  <nb-layout-footer>Contact us</nb-layout-footer>\n</nb-layout>\n\n<!-- <router-outlet></router-outlet> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main/main.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main/main.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row d-flex\">\n    <div class=\"col-md-12\">\n      <app-ego-chart-one *ngIf=\"loadWidOne\"\n        [xAxisLabel]=\"xAxisDataOne\"\n        [initOpts]=\"initOptionOne\"\n        [seriesData]=\"seriesDataOne\"\n        [enableSlider]=\"true\"\n        [enableDropDown]=\"false\"\n        (range) = setRange($event)\n        [value]=\"sliderRange\"\n        [title]=\"'Economic Status'\"\n      ></app-ego-chart-one>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <app-ego-chart-one *ngIf=\"loadWidTwo\"\n        [xAxisLabel]=\"xAxisDataTwo\"\n        [initOpts]=\"initOptionTwo\"\n        [seriesData]=\"seriesDataTwo\"\n        [enableSlider]=\"false\"\n        [enableDropDown]=\"true\"\n        [chartType]=\"'1'\"\n        [title]=\"'Drill Efficiency'\"\n        (astroid)=\"fetchEfficiency($event)\"\n        [efficiencyType]=\"graph2kind\"\n        [astroidId]=\"graph2aid\"\n\n      ></app-ego-chart-one>\n    </div>\n    <div class=\"col-md-6\">\n      <app-ego-chart-one\n        [xAxisLabel]=\"xAxisDataTwo\"\n        [initOpts]=\"initOptionTwo\"\n        [seriesData]=\"seriesDataThree\"\n        [enableSlider]=\"false\"\n        [enableDropDown]=\"false\"\n        [enableDropDown2]=\"false\"\n        [enableDropDown3] = \"true\"\n        [chartType]=\"'1'\"\n        [title]=\"'Drill Parameter Behaviour'\"\n      ></app-ego-chart-one>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/widgets/ego-chart-one/ego-chart-one.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/widgets/ego-chart-one/ego-chart-one.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nb-card  class=\"ego-dim\">\n    <nb-card-header>{{title}}</nb-card-header>\n    <nb-card-body>\n      <div class=\"row \">\n        <div class=\"col-md-4 d-flex justify-content-start tile-1\">\n            <ngx-slider class=\"customer-slider\" *ngIf=\"enableSlider\" [(value)]=\"value\" [options]=\"options\" (valueChange)=\"sendRange($event)\"></ngx-slider>\n            <nb-select *ngIf=\"enableDropDown\" placeholder=\"Efficiency Type\" [selected]=\"efficiencyType\" (selectedChange)=\"changeAstroidKind($event)\">\n                <nb-option value=\"time\">Depth-Time</nb-option>\n                <nb-option value=\"cost\">Depth-Cost</nb-option>\n            </nb-select>\n\n            <nb-select *ngIf=\"enableDropDown3\" placeholder=\"Parameter\" [selected]=\"parameter\" (selectedChange)=\"changeParameter($event)\">\n                <nb-option value=\"BIT_DEPTH\">Bit Depth</nb-option>\n                <nb-option value=\"RATE_OF_PENETRATION\">Rate of Penetration</nb-option>\n                <nb-option value=\"HOOK_LOAD\">Hook Load</nb-option>\n                <nb-option value=\"DIFFERENTIAL_PRESSURE\">Differential Pressure</nb-option>\n                <nb-option value=\"WEIGHT_ON_BIT\">Weight On Bit</nb-option>\n            </nb-select>\n\n            \n            \n        </div>\n        <div class=\"col-md-4 d-flex justify-content-start\">\n            <nb-select *ngIf=\"enableDropDown\" placeholder=\"Astroid Id\" [selected]=\"astroidId\" (selectedChange)=\"changeAstroid($event)\">\n                <nb-option value=\"1\">Astroid 1</nb-option>\n                <nb-option value=\"2\">Astroid 2</nb-option>\n                <nb-option value=\"3\">Astroid 3</nb-option>\n                <nb-option value=\"4\">Astroid 4</nb-option>\n                <nb-option value=\"5\">Astroid 5</nb-option>\n            </nb-select>\n\n            <nb-select *ngIf=\"enableDropDown3\" placeholder=\"Astroid Id\" [selected]=\"astroidId2\" (selectedChange)=\"changeAstroidParamter($event)\">\n                <nb-option value=\"1\">Astroid 1</nb-option>\n                <nb-option value=\"2\">Astroid 2</nb-option>\n                <nb-option value=\"3\">Astroid 3</nb-option>\n                <nb-option value=\"4\">Astroid 4</nb-option>\n                <nb-option value=\"5\">Astroid 5</nb-option>\n            </nb-select>\n           \n        </div>\n        <div class=\"col-md-4 d-flex justify-content-end tile-3\">\n            <nb-select placeholder=\"Graph Type\" [selected]=\"chartType\" (selectedChange)=\"changeGraph($event)\">\n                <nb-option value=\"0\">Bar</nb-option>\n                <nb-option value=\"1\">Line</nb-option>\n                <nb-option value=\"2\">Pie</nb-option>\n            </nb-select>\n        </div>\n      </div>\n      <div class=\"row col-md-12\">\n        <echarts class=\"d-flex justify-content-center chart-dim\" [initOpts]=\"initOpts\" [options]=\"chartOptions\"></echarts>\n      </div>\n    </nb-card-body>\n</nb-card>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .nb-theme-default nb-layout .layout .layout-container .content.center{\n    flex: 0 100 100% !important;\n    background:#09598e;\n    /* background:#295979 */\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5uYi10aGVtZS1kZWZhdWx0IG5iLWxheW91dCAubGF5b3V0IC5sYXlvdXQtY29udGFpbmVyIC5jb250ZW50LmNlbnRlcntcbiAgICBmbGV4OiAwIDEwMCAxMDAlICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDojMDk1OThlO1xuICAgIC8qIGJhY2tncm91bmQ6IzI5NTk3OSAqL1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    //url ='http://ec2-3-233-250-124.compute-1.amazonaws.com:8899/'
    // url = 'http://localhost:4000/api/'
    // astroidDetails;
    function AppComponent() {
        this.title = 'hackdfw';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/fesm5/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _widgets_ego_chart_one_ego_chart_one_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./widgets/ego-chart-one/ego-chart-one.component */ "./src/app/widgets/ego-chart-one/ego-chart-one.component.ts");
/* harmony import */ var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular-slider/ngx-slider */ "./node_modules/@angular-slider/ngx-slider/fesm5/angular-slider-ngx-slider.js");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm5/ngx-echarts.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ego_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ego-service.service */ "./src/app/ego-service.service.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
                _widgets_ego_chart_one_ego_chart_one_component__WEBPACK_IMPORTED_MODULE_7__["EgoChartOneComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbCardModule"],
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbThemeModule"].forRoot(),
                _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbSelectModule"],
                _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_8__["NgxSliderModule"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_9__["NgxEchartsModule"].forRoot({
                    echarts: function () { return __webpack_require__.e(/*! import() | echarts */ "echarts").then(__webpack_require__.bind(null, /*! echarts */ "./node_modules/echarts/index.js")); }
                }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"]
            ],
            providers: [
                _ego_service_service__WEBPACK_IMPORTED_MODULE_11__["EgoServiceService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/ego-service.service.ts":
/*!****************************************!*\
  !*** ./src/app/ego-service.service.ts ***!
  \****************************************/
/*! exports provided: EgoServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgoServiceService", function() { return EgoServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var EgoServiceService = /** @class */ (function () {
    function EgoServiceService(http) {
        this.http = http;
        this.url = 'http://ec2-3-233-250-124.compute-1.amazonaws.com:8899/';
    }
    EgoServiceService.prototype.getAstroidCostDetails = function () {
        // return this.http.get('/api/get_cost_and_time_all')
        return this.http.get(this.url + 'get_cost_and_time_all');
    };
    EgoServiceService.prototype.getAstroidEfficiency = function (id) {
        // return this.http.get('/api/get_efficiencies?asteroid_id='+id)
        return this.http.get(this.url + 'get_efficiencies?asteroid_id=' + id);
    };
    EgoServiceService.prototype.getAstroidParameters = function (id, parameter) {
        // return this.http.get('/api/get_column?asteroid_id='+2+'&column_name='+parameter)
        // return this.http.get(this.url+'get_efficiencies?asteroid_id='+id)
    };
    EgoServiceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    EgoServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EgoServiceService);
    return EgoServiceService;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ego_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ego-service.service */ "./src/app/ego-service.service.ts");



var MainComponent = /** @class */ (function () {
    function MainComponent(egoService) {
        this.egoService = egoService;
        this.allTabs = [1, 2];
        this.xAxisDataOne = [];
        this.seriesDataOne = [{
                name: 'Value',
                type: 'bar',
                barWidth: '60%',
                data: []
            }];
        this.initOptionOne = {
            renderer: 'svg',
            width: 1400,
            height: 300
        };
        this.xAxisDataTwo = ['Buzz Drilldrin', 'AstroBit', 'Apollo', 'ChallengDriller'];
        this.seriesDataTwo = [{
                name: 'Value',
                type: 'line',
                barWidth: '60%',
                data: [10, 52, 200, 334, 390, 330, 220]
            }];
        this.initOptionTwo = {
            renderer: 'svg',
            width: 650,
            height: 300
        };
        this.seriesDataThree = [{
                name: 'Value',
                type: 'line',
                barWidth: '60%',
                data: [10, 52, 200, 334, 390, 330, 220]
            }];
        this.sliderRange = 0.5;
        this.graph2aid = "2";
        this.graph2kind = "cost";
        this.loadWidOne = false;
        this.loadWidTwo = false;
        this.loadWidThree = false;
    }
    MainComponent.prototype.ngOnInit = function () {
        this.loadGraphOne(0.5);
        this.fetchEfficiency({ e: 2, kind: 'cost' });
        // this.fetchParameterBehaviour({e:2, param:})
    };
    MainComponent.prototype.loadGraphOne = function (range) {
        var _this = this;
        var xAxisData1 = [];
        var seriesData = [];
        this.loadWidOne = false;
        this.egoService.getAstroidCostDetails().subscribe(function (records) {
            _this.economicRecords = records;
            for (var i = 1; i <= 20; i++) {
                var c = (records[i.toString()]['total_cost']) * range;
                var t = (1 - range) * (records[i.toString()]['total_time']);
                seriesData.push(Math.round(c + t));
                xAxisData1.push(i.toString());
            }
            _this.seriesDataOne[0].data = seriesData;
            _this.xAxisDataOne = xAxisData1;
            _this.loadWidOne = true;
            _this.sliderRange = range;
            console.log('xero ', seriesData);
        });
    };
    MainComponent.prototype.ngOnChanges = function () {
    };
    MainComponent.prototype.setRange = function (range) {
        this.loadGraphOne(range);
    };
    MainComponent.prototype.fetchEfficiency = function (_a) {
        var _this = this;
        var e = _a.e, kind = _a.kind;
        this.loadWidTwo = false;
        this.egoService.getAstroidEfficiency(e).subscribe(function (records) {
            var depth = [records[e]['bit_stats']['Buzz Drilldrin'][0], records[e]['bit_stats']['AstroBit'][0], records[e]['bit_stats']['Apollo'][0], records[e]['bit_stats']['ChallengDriller'][0]];
            var cost = [records[e]['bit_stats']['Buzz Drilldrin'][1], records[e]['bit_stats']['AstroBit'][1], records[e]['bit_stats']['Apollo'][1], records[e]['bit_stats']['ChallengDriller'][1]];
            var time = [records[e]['bit_stats']['Buzz Drilldrin'][2], records[e]['bit_stats']['AstroBit'][2], records[e]['bit_stats']['Apollo'][2], records[e]['bit_stats']['ChallengDriller'][2]];
            console.log(depth);
            console.log(cost);
            console.log(time);
            _this.seriesDataTwo[0].data = [];
            if (kind == 'cost') {
                for (var i = 0; i < 4; i++) {
                    if (depth[i] > 0 && cost[i] > 0) {
                        _this.seriesDataTwo[0].data.push(depth[i] / cost[i]);
                    }
                    else {
                        _this.seriesDataTwo[0].data.push(0);
                    }
                }
            }
            else {
                for (var i = 0; i < 4; i++) {
                    if (depth[i] > 0 && time[i] > 0) {
                        _this.seriesDataTwo[0].data.push(depth[i] / time[i]);
                    }
                    else {
                        _this.seriesDataTwo[0].data.push(0);
                    }
                }
            }
            console.log(_this.seriesDataTwo[0].data);
            _this.graph2aid = e;
            _this.graph2kind = kind;
            _this.loadWidTwo = true;
        });
    };
    MainComponent.ctorParameters = function () { return [
        { type: _ego_service_service__WEBPACK_IMPORTED_MODULE_2__["EgoServiceService"] }
    ]; };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ego_service_service__WEBPACK_IMPORTED_MODULE_2__["EgoServiceService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/widgets/ego-chart-one/ego-chart-one.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/widgets/ego-chart-one/ego-chart-one.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ego-dim{\n    width: 100%;\n    border-radius:1.25rem\n}\n\n.chart-dim{\n    height: 300px;\n}\n\n.tile-1{\n    /* padding-left: 2.3rem; */\n}\n\n.tile-3{\n    /* padding-right: 2.6rem; */\n}\n\n.customer-slider{\n    margin-left:0.9rem\n}\n\n::ng-deep .ngx-slider .ngx-slider-pointer {\n    width: 1.2rem !important;\n    height: 1.2rem !important;\n    top: -8px !important;\n}\n\n::ng-deep .ngx-slider .ngx-slider-pointer:after{\n    top: 5.5px !important;\n    left: 5.5px !important;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2lkZ2V0cy9lZ28tY2hhcnQtb25lL2Vnby1jaGFydC1vbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWDtBQUNKOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC93aWRnZXRzL2Vnby1jaGFydC1vbmUvZWdvLWNoYXJ0LW9uZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVnby1kaW17XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czoxLjI1cmVtXG59XG5cbi5jaGFydC1kaW17XG4gICAgaGVpZ2h0OiAzMDBweDtcbn1cblxuLnRpbGUtMXtcbiAgICAvKiBwYWRkaW5nLWxlZnQ6IDIuM3JlbTsgKi9cbn1cblxuLnRpbGUtM3tcbiAgICAvKiBwYWRkaW5nLXJpZ2h0OiAyLjZyZW07ICovXG59XG5cbi5jdXN0b21lci1zbGlkZXJ7XG4gICAgbWFyZ2luLWxlZnQ6MC45cmVtXG59XG5cbjo6bmctZGVlcCAubmd4LXNsaWRlciAubmd4LXNsaWRlci1wb2ludGVyIHtcbiAgICB3aWR0aDogMS4ycmVtICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxLjJyZW0gIWltcG9ydGFudDtcbiAgICB0b3A6IC04cHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5uZ3gtc2xpZGVyIC5uZ3gtc2xpZGVyLXBvaW50ZXI6YWZ0ZXJ7XG4gICAgdG9wOiA1LjVweCAhaW1wb3J0YW50O1xuICAgIGxlZnQ6IDUuNXB4ICFpbXBvcnRhbnQ7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/widgets/ego-chart-one/ego-chart-one.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/widgets/ego-chart-one/ego-chart-one.component.ts ***!
  \******************************************************************/
/*! exports provided: EgoChartOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EgoChartOneComponent", function() { return EgoChartOneComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EgoChartOneComponent = /** @class */ (function () {
    function EgoChartOneComponent() {
        this.title = "";
        this.enableSlider = true;
        this.enableDropDown = false;
        this.enableDropDown2 = false;
        this.enableDropDown3 = false;
        this.xAxisLabel = [];
        this.seriesData = [];
        this.initOpts = {
            renderer: 'svg',
            width: 300,
            height: 300
        };
        this.chartType = "0";
        this.range = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.astroid = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.parameterSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.efficiencyType = "cost";
        this.parameter = "BIT_DEPTH";
        this.astroidId = "2";
        this.astroidId2 = "2";
        this.value = 0.5;
        this.options = {
            floor: 0,
            ceil: 1,
            step: 0.1,
        };
        this.chartOptions = {
            color: ['#3398DB'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: [],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [{
                    type: 'value'
                }],
            series: []
        };
    }
    EgoChartOneComponent.prototype.ngOnInit = function () {
    };
    EgoChartOneComponent.prototype.ngOnChanges = function () {
        this.chartOptions.xAxis[0].data = this.xAxisLabel;
        this.chartOptions.series = this.seriesData;
    };
    EgoChartOneComponent.prototype.changeGraph = function (e) {
        switch (e) {
            case '0':
                this.chartOptions.series[0].type = 'bar';
            case '1':
                this.chartOptions.series[0].type = 'line';
            case '2':
                this.chartOptions.series[0].type = 'pie';
        }
        this.ngOnChanges();
        console.log(this.chartOptions.series[0]);
    };
    EgoChartOneComponent.prototype.changeAstroid = function (e) {
        console.log(e);
        this.astroid.emit({ e: e, kind: this.efficiencyType });
    };
    EgoChartOneComponent.prototype.changeAstroidKind = function (e) {
        console.log(e);
        this.astroid.emit({ e: this.astroidId, kind: e });
    };
    EgoChartOneComponent.prototype.sendRange = function (e) {
        console.log('range ' + e);
        this.range.emit(e);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EgoChartOneComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EgoChartOneComponent.prototype, "enableSlider", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EgoChartOneComponent.prototype, "enableDropDown", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EgoChartOneComponent.prototype, "enableDropDown2", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EgoChartOneComponent.prototype, "enableDropDown3", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EgoChartOneComponent.prototype, "xAxisLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EgoChartOneComponent.prototype, "seriesData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EgoChartOneComponent.prototype, "initOpts", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EgoChartOneComponent.prototype, "chartType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EgoChartOneComponent.prototype, "range", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EgoChartOneComponent.prototype, "astroid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EgoChartOneComponent.prototype, "parameterSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EgoChartOneComponent.prototype, "efficiencyType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EgoChartOneComponent.prototype, "astroidId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EgoChartOneComponent.prototype, "value", void 0);
    EgoChartOneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ego-chart-one',
            template: __webpack_require__(/*! raw-loader!./ego-chart-one.component.html */ "./node_modules/raw-loader/index.js!./src/app/widgets/ego-chart-one/ego-chart-one.component.html"),
            styles: [__webpack_require__(/*! ./ego-chart-one.component.css */ "./src/app/widgets/ego-chart-one/ego-chart-one.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EgoChartOneComponent);
    return EgoChartOneComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/xingyunxue/hackutd/ffte/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map