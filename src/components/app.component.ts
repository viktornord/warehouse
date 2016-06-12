import {Component} from '@angular/core';
import {ProductsService} from './product/products.service';
import {ProductComponent} from './product/product.component';
import {ModalComponent} from './modal/modal.component';
import {ModalService} from './modal/modal.service';

const template = require('./app.tpl.html') as string;

@Component({
    selector: 'warehouse-app',
    template,
    directives: [ProductComponent, ModalComponent],
    providers: [ProductsService, ModalService]
})
export class AppComponent {
    products:any;
    constructor(private _producsService:ProductsService) {
        this.products = _producsService.getAll();
    }
}