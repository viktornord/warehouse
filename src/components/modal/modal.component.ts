import {Component, ViewChild, ElementRef, ComponentResolver, ViewContainerRef, ComponentRef} from '@angular/core';
import {ModalService} from 'src/components/modal/modal.service';
import {MdDialog} from 'ng2-material';
import ModalData = warehouse.ModalData;

const template = require('./modal.tpl.html') as string;

@Component({
    selector: 'warehouse-modal',
    template,
    directives: [MdDialog]
})

export class ModalComponent {
    @ViewChild('dialog') private dialog:MdDialog;
    @ViewChild('modalContent', {read: ViewContainerRef}) private modalContent;
    cmpRef:ComponentRef<{}>;
    private isViewInitialized = false;
    closeModal:Function;

    constructor(private modalService:ModalService, private elRef:ElementRef, private compResolver:ComponentResolver) {
        this.modalService.modalOpened$.subscribe((modalData:ModalData) => this.isViewInitialized && this.openModal(modalData));
    }

    ngAfterViewInit() {
        this.isViewInitialized = true;
    }

    private openModal(modalData:ModalData) {
        this.compResolver.resolveComponent(this.createDynamicComponent(modalData.template))
            .then(factory => this.cmpRef = this.modalContent.createComponent(factory));
        this.dialog.show();
        this.closeModal = (data) => {
            modalData.onClose(data);
            this.cmpRef.destroy();
        };
    }

    private createDynamicComponent(template) {
        const dialog = this.dialog;
        @Component({
            selector: 'dynamic-component',
            template: `
                ${template}
                <md-dialog-actions>
                    <button md-raised-button (click)="closeModal()">Add a product</button>
                    <button md-raised-button (click)="closeModal(false)"> Cancel</button>
                </md-dialog-actions>
            `
        })
        class DynamicComponent {
            data = {};

            closeModal(resolve = true) {
                dialog.close(resolve && this.data)
            }
        }

        return DynamicComponent;
    }
}