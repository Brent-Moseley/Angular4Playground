import { Component } from '@angular/core';
import { Hero } from './hero';                  // import Hero class definition
import { HeroService } from './hero.service';   // import Hero service
import { OnInit } from '@angular/core';

@Component({                  // https://docs.angularjs.org/guide/component
  selector: 'my-heroes',
  templateUrl: './hero.html' // Probably could have also used @View
})
export class HeroesComponent implements OnInit { 
  constructor(private heroService: HeroService) { }   // define a private heroService property and identify this class as 
                                                      // a HeroService injection point.  Angular will use the constructor as
                                                      // the list of services to inject.

  selectedHero: Hero;          // member variable with type hero, uninitialized. 
	name = 'Angular';            // member variable, type is inferred by the compiler as string.
  heroes: Hero[];             // member variable with memory model for hero data. 

  getHeroes(): void {         // member method, populates the heroes local member.
      this.heroService.getHeroes().then(heroes => this.heroes = heroes);  // get heros passing function to handle then.
  }  

  ngOnInit(): void {          // on init handler for Angular to call, returns void
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

// https://angular.io/guide/setup 
// parens in an html file indicates an event handler (listener)
// Surrounding an attribute with square brackets tells Angular to parse the attribute value as an expression and 
//    assign the result of the expression to a property on the target component. 
// https://www.sitepoint.com/getting-past-hello-world-angular-2/
// https://www.sitepoint.com/angular-2-components-inputs-outputs/

