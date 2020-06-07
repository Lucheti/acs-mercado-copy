import { NextFunction, Request, Response } from 'express'
import { encode } from '../utils/enconding'

export class SessionController {
  public register = (req: Request, res: Response, next: NextFunction) => {
    console.log(encode(`${Date.now()}`))
    res.cookie('userId', encode(`${Date.now()}`))
    res.send({})
  }
}