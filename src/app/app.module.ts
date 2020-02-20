import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrentShowComponent } from './current-show/current-show.component';
import { ShowService } from './show.service';
import { HttpClientModule } from '@angular/common/http';

import { MaterialDesignModule} from './material-design/material-design.module';
import { ShowSearchComponent } from './show-search/show-search.component';
import { CastComponent } from './cast/cast.component';
import { FrontPageComponent } from './front-page/front-page.component';


@NgModule({
  declarations: [
    AppComponent,
    CurrentShowComponent,
    ShowSearchComponent,
    CastComponent,
    FrontPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialDesignModule,
  ],
  providers: [ShowService],
  bootstrap: [AppComponent]
})
export class AppModule { }
