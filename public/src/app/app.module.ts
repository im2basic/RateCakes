import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//---IMPORT---
import{HttpService} from './http.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
//------------

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowComponent } from './show/show.component';
import { NewRatingComponent } from './new-rating/new-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    NewRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
        //---Add----
        HttpClientModule,
        FormsModule
        //----------
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
