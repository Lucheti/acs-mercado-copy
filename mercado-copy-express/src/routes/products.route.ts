import Route from '../interfaces/routes.interface'
import { Router } from 'express'
import { ProductsController } from '../controllers/products.controller'

export class ProductsRoute implements Route {
  public path = '/products';
  public router = Router();
  public productsController = new ProductsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.productsController.getAll);
    this.router.post(`${this.path}`, this.productsController.add);
  }
}

export default ProductsRoute;