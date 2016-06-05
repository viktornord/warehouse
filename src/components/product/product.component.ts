import {Component, Input, OnInit, Output} from '@angular/core';
import {MdCard} from '@angular2-material/card';
import {MdSlideToggle} from '@angular2-material/slide-toggle';
import {MdButton} from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {EditableComponent} from 'src/components/editable/editable.component';

const template = require('./product.tpl.html') as string;

@Component({
    selector: 'warehouse-product',
    template,
    directives: [ProductComponent, MdCard, MdButton, MdIcon, MdSlideToggle, EditableComponent],
    viewProviders: [MdIconRegistry]
})

export class ProductComponent {
    @Input() product:any;
    expanded:boolean = false;

    toggle() {
        this.expanded = !this.expanded;
    }

    addProduct() {
        this.product.children = this.product.children || [];
        this.product.children.push({
            title: 'New Product',
            weight: 0
        });
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

    updateWeight(newWeight:string) {
        const weight:number = Number(newWeight);
        !Number.isNaN(weight) && (this.product.weight = weight);
    }

    updateTitle(newTitle:string) {
        this.product.title = newTitle;
    }

    hasRelatedProducts() {

        return !_.isEmpty(this.product.children);
    }



}