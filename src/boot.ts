/// <reference path="../typings/browser.d.ts" />
/// <reference path="../typings/main.d.ts" />

import './app.scss';
import {ROUTER_PROVIDERS} from '@angular/router'
import {HTTP_PROVIDERS} from '@angular/http'
import { bootstrap }    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS
]);
