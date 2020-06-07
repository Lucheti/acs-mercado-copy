import { NextFunction, Request, Response } from 'express'
import { CartService } from '../services/cart.service'

class CartController {
  private cartService: CartService = new CartService();

  public getAll = (req: Request, res: Response, next: NextFunction) => {
    const user: string = req.cookies['userId']
    this.cartService.getAll(user)
      .then( data => res.send(data) )
  }

  public add = (req: Request, res: Response, next: NextFunction) => {
    const userId: string = req.cookies['userId']
    this.cartService.add({...req.body}, userId);
    res.send({ message: 'added' });
  }

  public delete = (req: Request, res: Response, next: NextFunction) => {
    const userId: string = req.cookies['userId']
    this.cartService.delete({...req.body}, userId)
    res.send({ message: 'deleted, but not really' });
  }
}

export default CartController;
