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
//import { Socket } from 'ng2-socket-io';
var HomeComponent = (function () {
    function HomeComponent() {
    }
    //constructor(private socket: Socket) { }
    HomeComponent.prototype.ngOnInit = function () {
        // this.socket.emit('set room', "oaNews");
        //  var socket = io.connect('http://nodejsjuanprojects-tweetnode.rhcloud.com/', {reconnect: false});
        // //var socket = io.connect('http://127.0.0.1:8080/', {reconnect: false});
        // this.socket.emit('set room', "oaNews");
        // this.socket.on('news', function (data: any) {
        //     this.NewsCollection = data;
        //     // NewsCollection.set("content", data);
        //     // handlerScroll();
        // });
        // this.socket.on('disconnect', function () {
        //     console.log("Server Disconnect");
        //     this.disconnect();
        // });
        // this.socket.on('connection', function (data: any) {
        //     console.log("message: " + data);
        // })
        // this.socket.on('error', function (reason: any) {
        //     console.log('Unable to connect Socket.IO', reason);
        // });
    };
    HomeComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/home/home.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map