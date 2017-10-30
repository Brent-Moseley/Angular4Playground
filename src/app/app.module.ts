// All modules to import on app start up
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';   // import Hero service


// Main Angular module
@NgModule({
  imports:      [ 
  	BrowserModule,
  	FormsModule,
  	RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      }
    ],
    { enableTracing: true }) // <-- debugging purposes only)
  ],
  declarations: [ 			// Register these components
  	AppComponent,
  	HeroesComponent,
  	HeroDetailComponent 
  ],
  providers: [HeroService],    // create a new instance of this service when creating this component.
  bootstrap:    [ AppComponent ]		// what component to bootstrap on app start up
})
export class AppModule { }
