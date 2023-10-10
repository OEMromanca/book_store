import passport from "passport";
import UserModel from "../models/user.model";
import bcrypt from 'bcrypt';
import { Strategy as LocalStrategy } from 'passport-local';
import { IUser, UserId } from "../interfaces";
 
 

passport.use(new LocalStrategy(
  {
    usernameField: 'email',
  },
  async (email, password, done): Promise<void> => {
    try {
      const user: IUser | null = await UserModel.findOne({ email });

      if (!user) {
        return done(null, false, { message: 'User not found' });
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return done(null, false, { message: 'Incorrect password' });
      }

      return done(null, user);
    } catch (error) {
      return done(error);
    }
  }
));

passport.serializeUser((user:UserId, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (_id: UserId, done) => {
  try {
    const user = await UserModel.findById(_id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

export default passport;
