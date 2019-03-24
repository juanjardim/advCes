import { Component } from '@angular/core';

import { NewsService } from './home/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [NewsService]
})
export class AppComponent {
  title = 'app';
}
