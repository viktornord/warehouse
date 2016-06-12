import {Injectable} from '@angular/core';
const products = require('src/data.json');

@Injectable()
export class ProductsService {

    getAll() {
        // assuming we get completely new object from the BE via API
        return _.cloneDeep(products);
    }
}