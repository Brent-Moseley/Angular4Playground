// All modules to import on app start up
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

// Main Angular module
@NgModule({
  imports:      [ 
  	BrowserModule,
  	FormsModule
  ],
  declarations: [ 
  	AppComponent,
  	HeroDetailComponent 
  ],
  bootstrap:    [ AppComponent ]		// what component to bootstrap on app start up
})
export class AppModule { }
