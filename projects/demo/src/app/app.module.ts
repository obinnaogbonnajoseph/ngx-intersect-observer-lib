import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxIntersectObserverModule } from 'projects/ngx-intersect-observer/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxIntersectObserverModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
