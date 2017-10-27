import { Component, Input } from '@angular/core';
import { Hero } from './hero';			// Connect in Hero definition

// Define hero component for use in UI, similar to Angular 1.x directives.
@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.html'
})
export class HeroDetailComponent {
	@Input() hero: Hero;		// This is an input property, a form of DI, will be used in the template for this component.
}
/* “Inputs”, specify which properties 
  you can set on a component whereas “outputs” identify the events a component can fire to send information 
  up the hierarchy to its parent.
*/
// https://angular.io/tutorial/toh-pt3
// https://angular.io/guide/component-interaction
// https://www.sitepoint.com/getting-past-hello-world-angular-2/ 