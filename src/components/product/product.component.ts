import {Component, Input, OnInit, Output} from '@angular/core';
import {MdDialog} from 'ng2-material';
import {MdCard} from '@angular2-material/card';
import {MdSlideToggle} from '@angular2-material/slide-toggle';
import {MdButton} from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {EditableComponent} from 'src/components/editable/editable.component';
import {Product} from './product-model';
import IProduct = warehouse.IProduct;

const template = require('./product.tpl.html') as string;

@Component({
    selector: 'warehouse-product',
    template,
    directives: [ProductComponent, MdCard, MdButton, MdIcon, MdSlideToggle, MdDialog, EditableComponent],
    viewProviders: [MdIconRegistry]
})

export class ProductComponent implements OnInit {
    @Input() product:IProduct;
    expanded:boolean = false;
    
    ngOnInit():void {
        Object.setPrototypeOf(this.product, Product.prototype);
    }

    toggle() {
        this.expanded = !this.expanded;
    }

    addProduct(productData) {
        if (productData) {
            this.product.addRelatedProduct(productData as IProduct);
            this.expanded = true;
        }
    }



}