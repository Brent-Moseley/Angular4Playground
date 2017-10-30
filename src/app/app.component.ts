import { Component, Input } from '@angular/core';

@Component({                  // https://docs.angularjs.org/guide/component
  selector: 'my-app',
  template: `
   <h1>{{title}}</h1>
   <a routerLink="/heroes">Heroes</a>
   <router-outlet></router-outlet>
  `,
  // providers: [HeroService]    // create a new instance of this service when creating this component.
})
export class AppComponent {
	title = 'Tour of Heroes';    // member variable with default value.

}

// https://angular.io/tutorial/toh-pt5  Routing