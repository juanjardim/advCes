import { Component, OnInit, Injectable } from '@angular/core';

import { INews } from './news';
import { NewsService } from './news.service';

@Component({
    templateUrl: './home.component.html'
})

@Injectable()
export class HomeComponent implements OnInit {
    newsCollection: INews[];

    /* Methods */
    constructor(private _newsService: NewsService) { }

    ngOnInit() {
        this._newsService.getNews().subscribe(
            newsCollection => this.newsCollection = newsCollection
        );
    }
}