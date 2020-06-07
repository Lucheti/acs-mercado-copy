import { Product } from '../../../common/Product'
import { database } from '../server'

export class ProductsService {
  public getAll(): Promise<Product[]> {
    let productsResolve: (products: Product[]) => void;
    let products: Promise<Product[]> = new Promise(((resolve) => { productsResolve = resolve; }));

    database.find<Product>({user: { $exists: false }, wishlist: { $exists: false }, cart: { $exists: false }}, (err: any, data: Product[]) => {
      productsResolve(data)
    });
    return products;
  }

  public add(product: Product): void {
    database.insert<Product>({ ...product});
  }
}