import {Component} from '@angular/core';
const data = require('./data.json');

@Component({
    selector: 'warehouse-app',
    template: `
        <h1>Hello world!</h1>
    `
})

export class AppComponent {
    constructor() {
        console.log(data);
    }
}