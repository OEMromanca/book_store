import { Router } from 'express';
import {getUsers, loginUser, registerUser, } from '../controllers/userController';
  
export const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.post('/register',registerUser);
userRouter.post('/login', loginUser);
 

