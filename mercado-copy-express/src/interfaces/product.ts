export class Product {
    productId: number;
    name: string;
    brand: string;

    constructor(productId: number, name: string, brand: string) {
        if (name == "" || brand == "" || name == null || brand == null|| productId==null) {
            throw new Error("Error");
        }
        this.productId = productId;
        this.name = name;
        this.brand = brand;
    }
}
