import {Cart} from '../src/interfaces/cart';
import {Product} from '../src/interfaces/product';

describe('cart tests', () => {
    let cart: Cart;

    describe('when creating cart', () => {
        beforeAll(() => {
            cart = new Cart();
        });
        it('should be empty', function () {
            expect(cart.isEmpty()).toBeTruthy()
        });
    })

    describe('when adding items to the cart', () => {
        const productToAdd: Product = new Product(1,"some name", "some brand");

        describe('when adding a single product', () => {
            beforeAll(() => {
                cart = new Cart();
                cart.addProduct(productToAdd)
            });

            it('should have added the product correctly', () => {
                expect(cart.quantityOf(productToAdd.productId)).toEqual(1)
            })

            it('should not be empty', () => {
                expect(cart.isEmpty()).toBeFalsy()
            })
        })

        describe('when adding 3 times a single product', () => {
            beforeAll(() => {
                cart = new Cart();
                cart.addProduct(productToAdd)
                cart.addProduct(productToAdd)
                cart.addProduct(productToAdd)
            });

            it('should have added the product correctly', () => {
                expect(cart.quantityOf(productToAdd.productId)).toEqual(3)
            })

            it('should not be empty', () => {
                expect(cart.isEmpty()).toBeFalsy()
            })
        })

        describe('when adding 5 times a single product', () => {
            beforeAll(() => {
                cart = new Cart();
                cart.addProduct(productToAdd)
                cart.addProduct(productToAdd)
                cart.addProduct(productToAdd)
                cart.addProduct(productToAdd)
                cart.addProduct(productToAdd)
            });

            it('should have added the product correctly', () => {
                expect(cart.quantityOf(productToAdd.productId)).toEqual(5)
            })

            it('should not be empty', () => {
                expect(cart.isEmpty()).toBeFalsy()
            })
        })
    })

    describe('when removing from cart', () => {
        describe('when product is not on the cart', () => {
            beforeAll(() => {
                cart = new Cart();
                cart.addProduct(new Product(1,"some name", "some brand"))
                cart.removeProduct(2)
            })

            it('should not have deleted other item', () => {
                expect(cart.quantityOf(1)).toEqual(1)
            })

            it('should have expected length', () => {
                expect(cart.size()).toEqual(1)
            })
        })

        describe('when removing that exists in the cart', () => {
            beforeAll(() => {
                cart = new Cart();
                cart.addProduct(new Product(1,"some name", "some brand"))
                cart.removeProduct(1)
            })

            it('should not have deleted other item', () => {
                expect(cart.quantityOf(1)).toEqual(0)
            })

            it('should have expected length', () => {
                expect(cart.size()).toEqual(0)
            })
        })

        describe('when removing all products', () => {
            beforeAll(() => {
                cart = new Cart();
                cart.addProduct(new Product(1,"some name", "some brand"))
                cart.addProduct(new Product(2,"some name", "some brand"))
                cart.addProduct(new Product(3,"some name", "some brand"))
                cart.addProduct(new Product(4,"some name", "some brand"))
                cart.removeAllProducts()
            })

            it('should have expected length', () => {
                expect(cart.size()).toEqual(0)
            })
        })
    })

})