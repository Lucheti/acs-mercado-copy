import { StorageService } from '../../src/services/stock-service/storage.service';

const storages = new StorageService();
test('storageService get storages not null', () => {
  expect(storages.storages).not.toBeNull();
});

test('All storages products not to be null', () => {
  storages.storages.forEach((st) => {
    expect(st.products).not.toBeNull();
  });
});

test('Different existing products general stock', async () => {
  const stock = await storages.getStockForProductAtAnyStorage(1);
  expect(stock).toBe(14);
  const stock2 = await storages.getStockForProductAtAnyStorage(2);
  expect(stock2).toBe(25);
});

test('Invalid Product Id stock to be 0', async () => {
  const stock = await storages.getStockForProductAtAnyStorage(-1);
  const stock2 = await storages.getStockForProductAtAnyStorage(123912);
  expect(stock).toBe(0);
  expect(stock).toBe(0);
});

test('Stock of product 2 at a certain storage', async () => {
  let stock = await storages.getStockForProductAtStorage(2, -1);
  expect(stock).toBe(0);
  stock = await storages.getStockForProductAtStorage(2, 1);
  expect(stock).toBe(2);
});

test('Storage of testion Notepad For Geeks (id 12345) should be storage 1 and array length = 1', async() => {
  const storage = await storages.getStoragesForProduct(12345);
  expect(storage.length).toBe(1);
  expect(storage[0].storageId).toBe(1);
});
