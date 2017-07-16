import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'cs-navigation',
    templateUrl: './navigation.component.html',
    host: {
        '(document:click)': 'onClick($event)',
    },
})
export class NavigationComponent implements OnInit {
    isCollapsed: boolean = true;
    constructor(private router: Router, private _eref: ElementRef) { }

    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
            this.isCollapsed = true;
        });
    };

    onClick(event: any) {        
        if (!this._eref.nativeElement.contains(event.target) && !this.isCollapsed)
            this.isCollapsed = true;
    };
}
