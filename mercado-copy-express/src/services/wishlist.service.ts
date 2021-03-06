import { Product } from '../../../common/Product';
import { database } from '../server';

export class WishlistService {
  public getAll(userId: string): Promise<Product[]> {
    let productsResolve: (products: Product[]) => void;
    let products: Promise<Product[]> = new Promise(((resolve) => { productsResolve = resolve; }));

    database.find<Product>({user: userId, wishlist: true}, (err: any, data: Product[]) => {
      productsResolve(data)
    });
    return products;
  }

  public add(product: Product, userId: string): void {
    database.insert<Product>({ ...product, user: userId, wishlist: true});
  }

  public delete(product: Product, userId: string): void {
    database.remove({...product, user: userId, wishlist: true})
  }
}
