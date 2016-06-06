import './app.scss';
import 'es6-shim';
import 'zone.js/dist/zone';
import 'reflect-metadata';

import {ROUTER_PROVIDERS} from '@angular/router'
import {HTTP_PROVIDERS} from '@angular/http'
import {MATERIAL_PROVIDERS} from 'ng2-material'
import {OVERLAY_PROVIDERS} from '@angular2-material/core/overlay/overlay';
import { bootstrap }    from '@angular/platform-browser-dynamic';
import {AppComponent} from './components/app.component';

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    MATERIAL_PROVIDERS,
    OVERLAY_PROVIDERS
]);
