import Route from '../interfaces/routes.interface'
import { Router } from 'express'
import WishlistController from '../controllers/wishlist.controller'
import { SessionController } from '../controllers/session.controller'

export class SessionRoute implements Route {
  public path = '/session';
  public router = Router();
  public sessionController = new SessionController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.sessionController.register);
  }
}

export default SessionRoute;