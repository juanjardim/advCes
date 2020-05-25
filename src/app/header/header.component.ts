import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isCollapsed: boolean = true;
  animationClass: string = '';

  constructor() {}

  ngOnInit(): void {}

  changeCollapse() {
    this.animationClass = 'collapsing';
    setTimeout(() => {
      this.animationClass = '';
      this.isCollapsed = !this.isCollapsed;
    }, 150);
  }

  close() {
    if (!this.isCollapsed) {
      this.isCollapsed = true;
    }
  }
}
