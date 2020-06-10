import {Cart} from '../src/interfaces/cart';
import {Product} from '../src/interfaces/product';

let cart: Cart;
let product1: Product;
let product2: Product;

describe('when creating a cart', () => {
    beforeAll(() => {
        cart = new Cart();
    });
    it('should be empty', function () {
        expect(cart.isEmpty()).toBeTruthy()
    });
});

describe('when an item is added to a cart', () => {
    beforeEach(() => {
        cart = new Cart();
        product1 = new Product(1,"Aceitunas", "Pepito");
        product2 = new Product(2,"Papas", "Papita");
    });
    it('should not be empty', function () {
        cart.addProduct(product1)
        expect(cart.isEmpty()).not.toBeTruthy()
    });
    it('can be removed from the cart', function () {
        cart.removeProduct(product1.productId)
        expect(cart.isEmpty()).toBeTruthy()
    });
});

describe('when removing a product that is not in the cart', () => {
    beforeEach(() => {
        cart = new Cart();
        product1 = new Product(1,"Aceitunas", "Pepito");
        product2 = new Product(2,"Papas", "Papita");
    });
    it('should not be empty', function () {
        cart.addProduct(product1)
        cart.removeProduct(product2.productId)
        expect(cart.isEmpty()).not.toBeTruthy()
    });
});

describe('when removing all the products in the cart', () => {
    beforeAll(() => {
        cart = new Cart();
        product1 = new Product(1,"Aceitunas", "Pepito");
        product2 = new Product(2,"Papas", "Papita");
    });
    it('should be empty', function () {
        cart.addProduct(product1)
        cart.addProduct(product2)
        cart.removeAllProducts()
        expect(cart.isEmpty()).toBeTruthy()
    });
});

describe('when adding 3 many equal products', () => {
    beforeEach(() => {
        cart = new Cart();
        product1 = new Product(1,"Aceitunas", "Pepito");
        product2 = new Product(2,"Papas", "Papita");
    });
    it('should have a quantity of 3', function () {
        cart.addProduct(product1)
        cart.addProduct(product1)
        cart.addProduct(product1)
        expect(cart.quantityOf(product1.productId)).toBe(3)
    });
});

// Triangulation test is used to re triangulate the result of the previous test
// It can be commented
describe('when adding 5 many equal products', () => {
    beforeAll(() => {
        cart = new Cart();
        product1 = new Product(1,"Aceitunas", "Pepito");
    });
    it('should have a quantity of 3', function () {
        cart.addProduct(product1)
        cart.addProduct(product1)
        cart.addProduct(product1)
        cart.addProduct(product1)
        cart.addProduct(product1)
        expect(cart.quantityOf(product1.productId)).toBe(5)
    });
});
