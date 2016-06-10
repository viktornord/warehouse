import {Pipe, PipeTransform} from '@angular/core';
import IProduct = warehouse.IProduct;

@Pipe({
    name: 'warehouseSort',
    pure: false
})
export class SortPipe implements PipeTransform {
    transform(products:IProduct[], sortProperty:string, sortOrder:string):any {

        return _.orderBy(products, [sortProperty], [sortOrder]);
    }

}