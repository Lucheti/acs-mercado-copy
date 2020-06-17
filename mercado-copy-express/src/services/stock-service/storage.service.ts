import { Storage } from '../../interfaces/storage.interface'
import storages from '../../models/stock.model'

export class StorageService {
  public storages = storages;

  public getStockForProductAtAnyStorage(productId:number): Promise<number> {
    let totalStock = 0;
    this.storages.forEach((store) => {
      const products = store.products;
      totalStock += products.filter(e => e.productId === productId).length;
    });
    return Promise.resolve(totalStock);
  }

  public getStockForProductAtStorage(productId:number, storageId:number): Promise<number> {
    const actualStorage: Storage = this.storages.find(e => e.storageId === storageId);
    if (!actualStorage) return Promise.resolve(0);
    return Promise.resolve(actualStorage.products.filter(e => e.productId === productId).length);
  }

  public async getStoragesForProduct(productId:number): Promise<Storage[]> {
    const availableStorages: Storage[] = [];
    for (const st of this.storages) {
      const stockAtStorage = await this.getStockForProductAtStorage(productId, st.storageId);
      if (stockAtStorage > 0) availableStorages.push(st);
    }
    return Promise.resolve(availableStorages);
  }
}
