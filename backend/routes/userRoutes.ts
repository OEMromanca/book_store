import { Router } from 'express';
import {getUsers, logOutUser, loginUser, registerUser, } from '../controllers/userController';
import { isAuthenticated } from '../utils';
  
export const userRouter = Router();

userRouter.get('/',isAuthenticated, getUsers);
userRouter.post('/register',registerUser);
userRouter.post('/login', loginUser);
userRouter.delete('/logout', logOutUser)

 

