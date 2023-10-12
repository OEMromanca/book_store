import { NextFunction, Request,Response } from "express";
import { IUser } from "../interfaces";
 
  export function  isAuthenticated(req: Request<{}, { message: string }, IUser, {}, { user: IUser }>, res: Response<{ message: string }, { user: IUser }>, next: NextFunction){
      if (req.isAuthenticated()) {
        return next()
      }
      res.status(200).json({ message: 'Logout successful' });

}