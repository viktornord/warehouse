declare module warehouse {
    interface IProduct {
        title:string;
        weight:number;
        children:IProduct[];
        setTitle(title:string):void;
        setWeight(weight:string | number):void;
        calculateWeight():number;
        addRelatedProduct(product:IProduct):this;
        hasRelatedProducts():boolean;
    }
}