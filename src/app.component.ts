import {Component} from '@angular/core';
import {ProductsService} from './services/products.service';
const data = require('./data.json');

@Component({
    selector: 'warehouse-app',
    template: `
        <h1>Hello world!</h1>
    `,
    providers: [ProductsService]
})
export class AppComponent {
    products:any;
    constructor(private _producsService:ProductsService) {
        this.products = _producsService.getAll();
        console.log(this.products);
    }

    // does an item have children
    isCategory(item) {

        return !Array.isArray(item);
    }

    calculateWeight() {

    }
}