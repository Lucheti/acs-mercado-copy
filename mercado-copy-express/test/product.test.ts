import {Product} from '../src/interfaces/product';
import assert = require('assert');

let product: Product;

// TODO: implements tests
describe('when creating a product', () => {
    it('the name should not be empty', function () {
        assert.throws(()=>new Product(1,"","papita"), Error, "Error");
    });
    it('the brand should not be empty', function () {
        assert.throws(()=>new Product(1,"papas",""), Error, "Error");
    });
    it('the name should not be null', function () {
        assert.throws(()=>new Product(1,null,"papita"), Error, "Error");
    });
    it('the brand should not be null', function () {
        assert.throws(()=>new Product(1,"papas",null), Error, "Error");
    });
    it('the id should not be null', function () {
        assert.throws(()=>new Product(null,"papas","papita"), Error, "Error");
    });
});
