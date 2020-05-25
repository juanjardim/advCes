import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { filter } from "rxjs/operators";
import { Router, NavigationEnd } from '@angular/router';

declare var gtag

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'César Pires - Advogado';
  public constructor(private titleService:Title, private router: Router) {
    this.titleService.setTitle(this.title);
    const navEndEvent$ = router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    );

    navEndEvent$.subscribe((e:NavigationEnd) => {
      gtag('config', 'MY_ID', {'page_path': e.urlAfterRedirects})
    })
  }
}
