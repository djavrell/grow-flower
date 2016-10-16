/**
 * Created by djavrell on 16/08/16.
 */

import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';

import { ChartsModule }     from 'ng2-charts/ng2-charts';

import {
  ENV_PROVIDERS,
  DIRECTIVES,
  PIPES,
  PROVIDERS,
  MODULES
}                           from '../platform';

import { AppComponent }     from './app.component';
import { COMPONENT }        from './components';
import { GraphComponent }   from './shared';

import { DataService }      from '../service/data.service';

@NgModule({
  declarations: [                 // Component
    AppComponent,
    COMPONENT,
    GraphComponent
  ],
  bootstrap   : [ AppComponent ], // Component to launch at bootstrap
  imports     : [                 // import other modules
    // modules
    BrowserModule,
    MODULES,

    // Router
    // Forms
    // Application
    DIRECTIVES,
    PIPES,

    // Other
    ENV_PROVIDERS,
    PROVIDERS,
    ChartsModule
  ],
  providers: [
    DataService
  ]
})
export class AppModule {
}
