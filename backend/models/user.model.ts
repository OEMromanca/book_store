import mongoose, {  Model } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose'
import { IUser } from '../interfaces';
 
const userSchema = new mongoose.Schema<IUser>({
 
    firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  
});

userSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
});
 
const UserModel: Model<IUser> = mongoose.model<IUser>('User', userSchema);

export default UserModel;  
