import {Product} from '../src/interfaces/product';

describe('product tests', () => {
    let product: Product

    describe('when creating a product', () => {
        describe('when no name is provided', () => {
            beforeAll(() => {
                product = new Product(1,undefined,"some brand")
            })

            it('should return undefined', function () {
                expect(product.name).toBeUndefined()
            });
        })

        describe('when no id is provided', () => {
            beforeAll(() => {
                product = new Product(undefined,"some name","some brand")
            })

            it('should return undefined', function () {
                expect(product.productId).toBeUndefined()
            });
        })

        describe('when no brand is provided', () => {
            beforeAll(() => {
                product = new Product(1,"some name",undefined)
            })

            it('should return undefined', function () {
                expect(product.brand).toBeUndefined()
            });
        })
    })

    describe('when adding to product', () => {
        beforeAll(() => {
            product = new Product(1, "some name", "some brand")
            product.add()
        })

        it('should have added 1 to products amount', () => {
            expect(product.amount).toEqual(2)
        })
    })

    describe('when removing from product', () => {
        describe('when there is enough amount of that product', () => {
            beforeAll(() => {
                product = new Product(1, "some name", "some brand")
                product.remove()
            })

            it('should have added 1 to products amount', () => {
                expect(product.amount).toEqual(0)
            })
        })

        describe('when products amount is 0', () => {
            beforeAll(() => {
                product = new Product(1, "some name", "some brand")
                product.remove()
                product.remove()
            })

            it('should still be 0', () => {
                expect(product.amount).toEqual(0)
            })
        })
    })
})
