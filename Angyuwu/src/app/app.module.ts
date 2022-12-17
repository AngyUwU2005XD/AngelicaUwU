import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Componenteuwu1Component } from './componenteuwu1/componenteuwu1.component';
import { Componenteuwu2Component } from './componenteuwu2/componenteuwu2.component';
import { Componenteuwu3Component } from './componenteuwu3/componenteuwu3.component';

@NgModule({
  declarations: [
    AppComponent,
    Componenteuwu1Component,
    Componenteuwu2Component,
    Componenteuwu3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
