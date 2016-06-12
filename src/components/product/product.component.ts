import {Component, Input, OnInit, Output} from '@angular/core';
import {ModalService} from 'src/components/modal/modal.service';
import {MdButton, MdIcon} from 'ng2-material';
import {MD_RADIO_DIRECTIVES} from '@angular2-material/radio';
import {MdCard} from '@angular2-material/card';
import {MdSlideToggle} from '@angular2-material/slide-toggle';
import {EditableComponent} from 'src/components/editable/editable.component';
import {Product} from './product-model';
import IProduct = warehouse.IProduct;
import {SortPipe} from 'src/pipes/sort.pipe';
import {SortController} from 'src/lib/sort-controller';

const
    template = require('./product.tpl.html') as string,
    productModalTpl = require('./product-modal.tpl.html') as string;

@Component({
    selector: 'warehouse-product',
    template,
    directives: [ProductComponent, MdCard, MdButton, MdIcon, MdSlideToggle, EditableComponent, MD_RADIO_DIRECTIVES],
    pipes: [SortPipe]
})

export class ProductComponent extends SortController implements OnInit {
    @Input() product:IProduct;
    expanded:boolean = false;
    sortProperty:string = 'title';

    constructor(private modalService:ModalService) {
        super();
    }

    ngOnInit():void {
        Object.setPrototypeOf(this.product, Product.prototype);
    }

    toggle() {
        this.expanded = !this.expanded;
    }

    addProduct() {
        this.modalService.openModal({
            onClose: productData => this.onNewProductCreated(productData),
            template: productModalTpl
        });
    }

    private onNewProductCreated(productData) {
        if (productData) {
            this.product.addRelatedProduct(new Product(productData));
            this.expanded = true;
        }
    }
}