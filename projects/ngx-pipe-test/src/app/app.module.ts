import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxPipeModule} from '../../../ngx-pipe/src/lib/pipe/ngx-pipe.module';
import {VLAHIO_DATE_PIPE_CONFIG} from '../../../ngx-pipe/src/lib/service/injection-token';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPipeModule
  ],
  providers: [
    {
      provide: VLAHIO_DATE_PIPE_CONFIG,
      useValue: {date_format: 'dd-MM-yyyy', date_timezone: '+0200'}
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
