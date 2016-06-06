import {Component} from '@angular/core';
import {ProductsService} from 'src/services/products.service';
import {ProductComponent} from './product/product.component';

const template = require('./app.tpl.html') as string;

@Component({
    selector: 'warehouse-app',
    template,
    directives: [ProductComponent],
    providers: [ProductsService]
})
export class AppComponent {
    products:any;
    constructor(private _producsService:ProductsService) {
        this.products = _producsService.getAll();
    }
}