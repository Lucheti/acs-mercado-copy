export class Product {
    productId: number;
    name: string;
    brand: string;
    amount: number;

    constructor(productId: number, name: string, brand: string) {
        this.productId = productId;
        this.name = name;
        this.brand = brand;
        this.amount = 1;
    }

    public add():void{
        this.amount += 1
    }

    public remove():void{
        if (this.amount) this.amount -= 1
    }
}
