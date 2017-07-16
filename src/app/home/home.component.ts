import { Component, OnInit } from '@angular/core';

//import { Socket } from 'ng2-socket-io';


@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    NewsCollection: any[];

   //constructor(private socket: Socket) { }


    ngOnInit() {
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
    }
}