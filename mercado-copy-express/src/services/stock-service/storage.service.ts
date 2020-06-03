import { Storage } from '../../interfaces/storage.interface';
import storages from '../../models/stock.model';

export class StorageService {

  public storages = storages;

  public async getStockForProductAtAnyStorage(productId:number) {
    let totalStock = 0;
    this.storages.forEach((store) => {
      const products = store.products;
      totalStock += products.filter(e => e.productId === productId).length;
    });
    return totalStock;
  }

  public async getStockForProductAtStorage(productId:number, storageId:number) {
    const actualStorage: Storage = this.storages.find(e => e.storageId === storageId);
    if (!actualStorage)return 0;
    return actualStorage.products.filter(e => e.productId === productId).length;
  }

  public async getStoragesForProduct(productId:number) {
    const availableStorages: Storage[] = [];
    for (const st of this.storages) {
      const stockAtStorage = await this.getStockForProductAtStorage(productId, st.storageId);
      if (stockAtStorage > 0) availableStorages.push(st);
    }
    return availableStorages;
  }
}
