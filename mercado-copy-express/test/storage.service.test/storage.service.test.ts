import { StorageService } from '../../src/services/stock-service/storage.service'

let storageService: StorageService;

describe('StorageService', () => {
  describe('when finding stock for a given product', () => {
    describe('when looking on any storage available', () => {
      describe('when product exists', () => {
        let result: Promise<number>
        beforeAll(() => {
          storageService = new StorageService()
          result = storageService.getStockForProductAtAnyStorage(1)
        })

        it('should return expected amount for given productId', () => {
          expect(result).resolves.toEqual(14)
        })
      })

      describe('when product doesn`t exist', () => {
        let result: Promise<number>
        beforeAll(() => {
          storageService = new StorageService()
          result = storageService.getStockForProductAtAnyStorage(-1)
        })

        it('should return expected amount for given productId', () => {
          expect(result).resolves.toEqual(0)
        })
      })
    })

    describe('when looking at a specific storage', () => {
      describe('when storage exists', () => {
        let result: Promise<number>

        beforeAll(() => {
          storageService = new StorageService()
          result = storageService.getStockForProductAtStorage(2, -1)
        })

        it('should return expected value', () => {
          expect(result).resolves.toEqual(0)
        })
      })

      describe('when storage doesn`t exist', () => {
        let result: Promise<number>

        beforeAll(() => {
          storageService = new StorageService()
          result = storageService.getStockForProductAtStorage(2, -1)
        })

        it('should return expected value', () => {
          expect(result).resolves.toEqual(0)
        })
      })
    })
  })
})
