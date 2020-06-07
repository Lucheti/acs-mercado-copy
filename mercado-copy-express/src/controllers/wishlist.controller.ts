import { NextFunction, Request, Response } from 'express'
import { Product } from '../../../common/Product'
import { WishlistService } from '../services/wishlist.service'

class WishlistController {
  private wishlistService: WishlistService = new WishlistService();

  public getAll = (req: Request, res: Response, next: NextFunction) => {
    const user: string = req.cookies['userId']
    this.wishlistService.getAll(user)
      .then( data => res.send(data) )
  }

  public add = (req: Request, res: Response, next: NextFunction) => {
    const userId: string = req.cookies['userId']
    this.wishlistService.add({...req.body}, userId);
    res.send({ message: 'added' });
  }

  public delete = (req: Request, res: Response, next: NextFunction) => {
    const userId: string = req.cookies['userId']
    this.wishlistService.delete({...req.body}, userId)
    res.send({ message: 'deleted, but not really' });
  }
}

export default WishlistController;
