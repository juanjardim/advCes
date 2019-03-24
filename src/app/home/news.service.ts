import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Socket } from 'ng-socket-io';
import { INews } from './news';

@Injectable()
export class NewsService {
    newsCollection: Observable<INews[]>;
    constructor(private socket: Socket) {
    }

    getNews(): Observable<INews[]> {
        this.socket.emit('set room', "oaNews");
        this.newsCollection = this.socket
            .fromEvent<any>("news")
            .map(data => data);

        return this.newsCollection;
    }
}