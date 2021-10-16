import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxIntersectObserverModule } from 'ngx-intersect-observer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxIntersectObserverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
