import {Product} from '../src/interfaces/product.interface';

let product: Product;

// TODO: implements tests
describe('when creating a product', () => {
    it('the name should not be empty', function () {
        product = new Product(1,"","papita")
        expect(product).not.toBeTruthy()
    });
    it('the brand should not be empty', function () {
        product = new Product(1,"papas","")
        expect(product).not.toBeTruthy()
    });
    it('the name should not be null', function () {
        product = new Product(1,null,"papita")
        expect(product).not.toBeTruthy()
    });
    it('the brand should not be null', function () {
        product = new Product(1,"papas",null)
        expect(product).not.toBeTruthy()
    });
});
