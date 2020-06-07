import { Router } from 'express';
import Route from '../interfaces/routes.interface';
import WishlistController from '../controllers/wishlist.controller';

export class WishlistRoute implements Route {
  public path = '/wishlist';
  public router = Router();
  public wishlistController = new WishlistController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.wishlistController.getAll);
    this.router.post(`${this.path}`, this.wishlistController.add);
    this.router.delete(`${this.path}`, this.wishlistController.delete);
  }
}

export default WishlistRoute;