import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';   // import the actual data into the service.

@Injectable()     // use the Injectable decorator to let Angular know a class should be registered with dependency injection.
export class HeroService {
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  getHeroes(): Promise<Hero[]> {   // returns a Promise of type Hero array.
    //return Promise.resolve(HEROES);
    return new Promise(resolve => {
        // Simulate server latency with 2 second delay
        setTimeout(() => resolve(HEROES), 2000);
      });
  }
}



// https://angular.io/tutorial/toh-pt4
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
// https://angular.io/guide/lifecycle-hooks   Lifecyle hooks