import {Product} from '../src/interfaces/product';
import {Wishlist} from "../src/interfaces/wishlist";

describe('wishlist tests', () => {
    let wishlist: Wishlist;

    describe('when creating a wishlist', () => {
        beforeAll(() => {
            wishlist = new Wishlist();
        });
        it('should be empty', function () {
            expect(wishlist.isEmpty()).toBeTruthy()
        });
    })

    describe('when adding items to the wishlist', () => {
        const productToAdd: Product = new Product(1,"some name", "some brand");

        describe('when adding a single product', () => {
            beforeAll(() => {
                wishlist = new Wishlist();
                wishlist.addProduct(productToAdd)
            });

            it('should have added the product correctly', () => {
                expect(wishlist.quantityOf(productToAdd.productId)).toEqual(1)
            })

            it('should not be empty', () => {
                expect(wishlist.isEmpty()).toBeFalsy()
            })
        })

        describe('when adding 3 times a single product', () => {
            beforeAll(() => {
                wishlist = new Wishlist();
                wishlist.addProduct(productToAdd)
                wishlist.addProduct(productToAdd)
                wishlist.addProduct(productToAdd)
            });

            it('should have added the product correctly once', () => {
                expect(wishlist.quantityOf(productToAdd.productId)).toEqual(1)
            })

            it('should not be empty', () => {
                expect(wishlist.isEmpty()).toBeFalsy()
            })
        })

        describe('when adding 5 times a single product', () => {
            beforeAll(() => {
                wishlist = new Wishlist();
                wishlist.addProduct(productToAdd)
                wishlist.addProduct(productToAdd)
                wishlist.addProduct(productToAdd)
                wishlist.addProduct(productToAdd)
                wishlist.addProduct(productToAdd)
            });

            it('should have added the product correctly once', () => {
                expect(wishlist.quantityOf(productToAdd.productId)).toEqual(1)
            })

            it('should not be empty', () => {
                expect(wishlist.isEmpty()).toBeFalsy()
            })
        })
    })

    describe('when removing from wishlist', () => {
        describe('when product is not on the wishlist', () => {
            beforeAll(() => {
                wishlist = new Wishlist();
                wishlist.addProduct(new Product(1,"some name", "some brand"))
                wishlist.removeProduct(2)
            })

            it('should not have deleted other item', () => {
                expect(wishlist.quantityOf(1)).toEqual(1)
            })

            it('should have expected length', () => {
                expect(wishlist.size()).toEqual(1)
            })
        })

        describe('when removing a product that exists in the wishlist', () => {
            beforeAll(() => {
                wishlist = new Wishlist();
                wishlist.addProduct(new Product(1,"some name", "some brand"))
                wishlist.removeProduct(1)
            })

            it('should not have deleted other item', () => {
                expect(wishlist.quantityOf(1)).toEqual(0)
            })

            it('should have expected length', () => {
                expect(wishlist.size()).toEqual(0)
            })
        })

        describe('when removing all products', () => {
            beforeAll(() => {
                wishlist = new Wishlist();
                wishlist.addProduct(new Product(1,"some name", "some brand"))
                wishlist.addProduct(new Product(2,"some name", "some brand"))
                wishlist.addProduct(new Product(3,"some name", "some brand"))
                wishlist.addProduct(new Product(4,"some name", "some brand"))
                wishlist.removeAllProducts()
            })

            it('should have expected length', () => {
                expect(wishlist.size()).toEqual(0)
            })
        })
    })

})
