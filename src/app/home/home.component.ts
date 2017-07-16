import { Component, OnInit, Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';
import { INews } from './news';

@Component({
    templateUrl: './home.component.html'
})

@Injectable()
export class HomeComponent implements OnInit {
    newsCollection: INews[];

    constructor(private socket: Socket) { }
    ngOnInit() {
        this.socket.emit('set room', "oaNews");
        this.socket.on('news', function (data: INews[]) {
            this.newsCollection = data;
            // NewsCollection.set("content", data);
            // handlerScroll();
        });

        this.socket.on('disconnect', function () {
            console.log("Server Disconnect");
            this.disconnect();
        });

        this.socket.on('connection', function (data: any) {
            console.log("message: " + data);
        })

        this.socket.on('error', function (reason: any) {
            console.log('Unable to connect Socket.IO', reason);
        });
    }
}