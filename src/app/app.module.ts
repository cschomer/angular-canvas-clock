import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CanvasClockComponent } from './canvas-clock/canvas-clock.component';


@NgModule({
  declarations: [
    AppComponent,
    CanvasClockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
