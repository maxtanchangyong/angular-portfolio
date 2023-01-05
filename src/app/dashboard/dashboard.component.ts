import { Component, OnInit } from '@angular/core';
import { hoverUpToPortfolio, fadeInAnimationCustom, trackingInExpand } from '../animations';
import { trigger, transition, useAnimation } from '@angular/animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        useAnimation(fadeInAnimationCustom, {
          params: {
            opacity_before: 0,
            time: '3s 3s ease-in',
            opacity_after: 1
          }
        })
      ])
    ]),
    hoverUpToPortfolio,
    trackingInExpand
  ]
})
export class DashboardComponent implements OnInit {
  isHovering = false;

  constructor() { }

  ngOnInit(): void {
  }

  onHover() { this.isHovering = !this.isHovering; }

  onLeave() { this.isHovering = !this.isHovering; }
}
