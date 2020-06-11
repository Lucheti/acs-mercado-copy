import {Product} from './product';

//TODO: add userId to CART

export class Cart {
    cartId: number;
    products: Product[];

    constructor() {
        this.products = [];
    }

    public isEmpty(): boolean {
        return this.products.length === 0;
    }

    public addProduct(product:Product):void {
        this.products.push(product)
    }

    public removeProduct(productId:number):void {
        this.products = this.products.filter(p => p.productId !== productId)
    }

    public removeAllProducts():void {
        this.products = []
    }

    public quantityOf(productId:number): number {
        return this.products.filter( p => p.productId === productId ).length
    }

    public size(): number {
        return this.products.length
    }
}
