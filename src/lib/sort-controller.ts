export class SortController {
    sortProperty:string;
    sortOrder:string = 'asc';

    sortBy(sortProperty:string) {
        sortProperty === this.sortProperty
            ? (this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc')
            : (this.sortProperty = sortProperty);
    }

    isSortedBy(sortProperty:string):boolean {

        return this.sortProperty === sortProperty;
    }

    get sortArrowDirection() {

        return this.sortOrder === 'asc' ? 'up' : 'down';
    }
}