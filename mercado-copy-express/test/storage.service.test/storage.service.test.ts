import { StorageService } from '../../src/services/stock-service/storage.service'

let storageService;

describe('StorageService', () => {
  describe('when finding stock for a given product', () => {
    describe('when looking on any storage available', () => {
      describe('when product exists', () => {
        let result: number
        beforeAll(() => {
          storageService = new StorageService()
          result = storageService.getStockForProductAtAnyStorage(1)
        })

        it('should return expected amount for given productId', () => {
          expect(result).toEqual(14)
        })
      })

      describe('when product doesn`t exist', () => {
        let result: number
        beforeAll(() => {
          storageService = new StorageService()
          result = storageService.getStockForProductAtAnyStorage(-1)
        })

        it('should return expected amount for given productId', () => {
          expect(result).toEqual(0)
        })
      })
    })

    describe('when looking at a specific storage', () => {
      describe('when storage exists', () => {
        let result: number

        beforeAll(() => {
          storageService = new StorageService()
          result = storageService.getStockForProductAtStorage(2, -1)
        })

        it('should return expected value', () => {
          expect(result).toEqual(0)
        })
      })

      describe('when storage doesn`t exist', () => {
        let result: number

        beforeAll(() => {
          storageService = new StorageService()
          result = storageService.getStockForProductAtStorage(2, -1)
        })

        it('should return expected value', () => {
          expect(result).toEqual(0)
        })
      })
    })
  })



})

test('Stock of product 2 at a certain storage', async () => {
  let stock = await storageService.getStockForProductAtStorage(2, -1);
  expect(stock).toBe(0);
  stock = await storageService.getStockForProductAtStorage(2, 1);
  expect(stock).toBe(2);
});

test('Storage of testion Notepad For Geeks (id 12345) should be storage 1 and array length = 1', async() => {
  const storage = await storageService.getStoragesForProduct(12345);
  expect(storage.length).toBe(1);
  expect(storage[0].storageId).toBe(1);
});
