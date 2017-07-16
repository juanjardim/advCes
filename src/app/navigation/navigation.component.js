"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var NavigationComponent = (function () {
    function NavigationComponent(router, _eref) {
        this.router = router;
        this._eref = _eref;
        this.isCollapsed = true;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (evt) {
            if (!(evt instanceof router_1.NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
            _this.isCollapsed = true;
        });
    };
    ;
    NavigationComponent.prototype.onClick = function (event) {
        if (!this._eref.nativeElement.contains(event.target) && !this.isCollapsed)
            this.isCollapsed = true;
    };
    ;
    NavigationComponent = __decorate([
        core_1.Component({
            selector: 'cs-navigation',
            templateUrl: 'app/navigation/navigation.component.html',
            host: {
                '(document:click)': 'onClick($event)',
            },
        }), 
        __metadata('design:paramtypes', [router_1.Router, core_1.ElementRef])
    ], NavigationComponent);
    return NavigationComponent;
}());
exports.NavigationComponent = NavigationComponent;
//# sourceMappingURL=navigation.component.js.map