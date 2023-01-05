import { Component, HostBinding } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideTopAndBottom } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideTopAndBottom
  ]
})
export class AppComponent {
  // @HostBinding('@.disabled')
  // public animationsDisabled = false;
  title = 'angular-portfolio';

  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
