import IProduct = warehouse.IProduct;

export class Product implements warehouse.IProduct {
    title:string = 'New Product';
    weight:number = 0;
    children:IProduct[];
    
    constructor(data) {
        this.isValidWeight(data.weight) && (data.weight = Number(data.weight));
        Object.assign(this, data);
    }

    calculateWeight():number {
        const weight = !this.children ?
            this.weight :
            _.map(this.children, 'weight').reduce((totalWeight:number, weight:number) => totalWeight + weight, 0) as number;

        return weight ? (this.weight = weight) : 0;
    }
    
    setWeight(newWeight:string | number):void {
        const weight:number = Number(newWeight);
        !Number.isNaN(weight) && (this.weight = weight);
    }
    
    setTitle(title:string) {
        this.title = title;
    }

    hasRelatedProducts():boolean {

        return !_.isEmpty(this.children);
    }
    
    addRelatedProduct(product:IProduct):this {
        !this.hasRelatedProducts() && (this.children = []);
        this.children.unshift(product);

        return this;
    }

    private isValidWeight(weight) {

        return !Number.isNaN(Number(weight));
    }
}