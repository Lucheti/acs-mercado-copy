import Route from '../interfaces/routes.interface'
import { Router } from 'express'
import CartController from '../controllers/cart.controller'

export class CartRoute implements Route {
  public path = '/cart';
  public router = Router();
  public cartController = new CartController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.cartController.getAll);
    this.router.post(`${this.path}`, this.cartController.add);
    this.router.delete(`${this.path}`, this.cartController.delete);
  }
}

export default CartRoute;