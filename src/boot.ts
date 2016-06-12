import './app.scss';
import 'es6-shim';
import 'zone.js/dist/zone';
import 'reflect-metadata';

import {ROUTER_PROVIDERS} from '@angular/router';
import {MATERIAL_PROVIDERS} from 'ng2-material';
import {OVERLAY_PROVIDERS} from '@angular2-material/core/overlay/overlay';
import { bootstrap }    from '@angular/platform-browser-dynamic';
import {AppComponent} from './components/app.component';
import {MdRadioDispatcher} from "@angular2-material/radio/radio_dispatcher";

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    MATERIAL_PROVIDERS,
    OVERLAY_PROVIDERS,
    MdRadioDispatcher
]);
