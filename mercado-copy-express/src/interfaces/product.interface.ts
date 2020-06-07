export class Product {
  productId: number;
  name: string;
  brand: string;

  constructor(productId: number, name: string, brand: string) {
    this.productId = productId;
    this.name = name;
    this.brand = brand;
  }
}
