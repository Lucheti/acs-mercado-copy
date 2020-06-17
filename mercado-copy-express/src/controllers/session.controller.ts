import { NextFunction, Request, Response } from 'express'
import { encode } from '../utils/enconding'

const sessions = Array.from(Array(100).keys()).map( i => encode(`${(i + 827136) * 238746382467826 * Math.random()}`))
let sessionCounter = 0;

export class SessionController {
  public register = (req: Request, res: Response, next: NextFunction) => {
    const id = sessions[sessionCounter % 100]
    sessionCounter += 1
    res.cookie('userId', id)
    res.send({ id })
  }
}