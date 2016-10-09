/**
 * Created by djavrell on 16/08/16.
 */

import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';

import {
  ENV_PROVIDERS,
  DIRECTIVES,
  PIPES,
  PROVIDERS,
  MODULES
}                           from '../platform';

import { AppComponent }     from './app.component';
import { COMPONENT }        from './components';

@NgModule({
  declarations: [                 // Component
    AppComponent,
    COMPONENT
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
  ],
  providers: [
    ENV_PROVIDERS,
    PROVIDERS
  ]
})
export class AppModule {
}
