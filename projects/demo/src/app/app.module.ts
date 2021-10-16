import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxIntersectObserverModule } from 'projects/ngx-intersect-observer/src/public-api';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

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
