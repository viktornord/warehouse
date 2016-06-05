import {Component, Input, OnInit, Output} from '@angular/core';
import {MdCard} from '@angular2-material/card';
import {MdSlideToggle} from '@angular2-material/slide-toggle';
import {MdButton} from '@angular2-material/button';

const template = require('./product.tpl.html') as string;

@Component({
    selector: 'warehouse-product',
    template,
    directives: [ProductComponent, MdCard, MdButton, MdSlideToggle]
})

export class ProductComponent implements OnInit {
    @Input() product:any;
    expanded:boolean = false;

    ngOnInit():void {
    }

    toggle() {
        this.expanded = !this.expanded;
    }

    addChildProduct() {

    }

    getProductWeight():number {
        const weight:number = this.calculateProductWeight(this.product);

        return weight ? (this.product.weight = weight) : 0;
    }

    calculateProductWeight(product) {

        return !this.product.children ?
            this.product.weight :
            _.map(product.children, 'weight').reduce((totalWeight:number, weight:number) => totalWeight + weight, 0) as number;
    }



}