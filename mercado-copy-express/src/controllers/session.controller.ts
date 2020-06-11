import { NextFunction, Request, Response } from 'express'
import { encode } from '../utils/enconding'

const asd = [1,2,3,4]

export class SessionController {
  public register = (req: Request, res: Response, next: NextFunction) => {
    console.log(encode(`${Date.now()}`))
    res.cookie('userId', encode(`${Date.now()}`))
    res.send({})
  }
}