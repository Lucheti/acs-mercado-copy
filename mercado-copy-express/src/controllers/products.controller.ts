import { NextFunction, Request, Response } from 'express'
import { ProductsService } from '../services/products.service'

export class ProductsController {
  private productsService = new ProductsService();

  public getAll = (req: Request, res: Response, next: NextFunction) => {
    this.productsService.getAll()
      .then( data => res.send(data) )
  }

  public add = (req: Request, res: Response, next: NextFunction) => {
    this.productsService.add({...req.body});
    res.send({ message: 'added' });
  }
}