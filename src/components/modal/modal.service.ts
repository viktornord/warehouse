import {Injectable} from '@angular/core'
import {Subject} from 'rxjs/Subject';
import ModalData = warehouse.ModalData;

@Injectable()
export class ModalService {
    private openModalSource = new Subject<ModalData>();
    modalOpened$ = this.openModalSource.asObservable();

    openModal(modalData:ModalData) {
        this.openModalSource.next(modalData);
    }
}
