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

    public add(){
        this.amount += 1
    }

    public remove(){
        if (this.amount) this.amount -= 1
    }
}
