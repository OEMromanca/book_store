import { NextFunction, Request, Response } from 'express';
import UserModel from '../models/user.model';
import bcrypt from 'bcrypt' 
import passport from 'passport';
import { IResponse, IUser } from '../interfaces';


export async function getUsers(_req: Request, res: Response<IResponse>) {
  try {
    // throw new Error('Simulated error');
    const users: IUser[] = await UserModel.find();
    const response: IResponse = { users, message: 'Users fetched successfully.' };
    res.json(response);
 
  } catch (error) {
    console.error(error);
    const response: IResponse = { users: [], message: 'Error while fetching users.' };
    res.status(500).json(response);
  }
}

export async function registerUser(req: Request<{}, { message: string }, IUser, {}, { user: IUser }>, res: Response<{ message: string }, { user: IUser }>)  {
  try {
    const hashSalt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(req.body.password, hashSalt)
    const existingUser: IUser | null = await UserModel.findOne({ email: req.body.email});

    const newUser = new UserModel({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: hashedPassword   
      ,
    });
 
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    await newUser.save();

    return res.status(200).json({ message: 'User has been created succesfully.' });

   } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error to create a new user.' });
  }
};

export async function loginUser(req: Request<{}, { message: string }, IUser, {}, { user: IUser }>, res: Response<{ message: string }, { user: IUser }>, next:NextFunction ) {
  
  passport.authenticate('local', (err: Error, user: IUser) => {
     
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.status(401).json({ message: 'Authentication failed' });
    }

    req.logIn(user, (loginErr:Error) => {
      if (loginErr) {
        return next(loginErr);
      }
      return res.status(200).json({ message: 'Login successful' });
    });
  })(req, res, next);
 
}

 

 



 