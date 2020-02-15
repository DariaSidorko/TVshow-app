import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrentShowComponent } from './current-show/current-show.component';
import { ShowService } from './show.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    CurrentShowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ShowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
