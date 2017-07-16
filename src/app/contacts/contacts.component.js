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
var ContactsComponent = (function () {
    function ContactsComponent() {
    }
    ContactsComponent.prototype.ngOnInit = function () {
        var element = document.getElementById('varzinLocation');
        if (!element)
            return;
        var map = new GMaps({
            zoom: 16,
            div: '#varzinLocation',
            lat: 41.381856,
            lng: -8.76329
        });
        map.addMarker({
            lat: 41.381856,
            lng: -8.76329,
            title: 'Cesár Pires -Advogado',
            infoWindow: {
                content: '<p>Cesár Pires - Advogado</p> <p>Rua Frei Sebastião de São Luís Nº 1A, 1º Andar Sala E 4490-639 Póvoa de Varzim - Portugal</p>'
            }
        });
    };
    ContactsComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/contacts/contacts.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], ContactsComponent);
    return ContactsComponent;
}());
exports.ContactsComponent = ContactsComponent;
//# sourceMappingURL=contacts.component.js.map