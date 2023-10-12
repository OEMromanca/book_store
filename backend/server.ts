import express, { Express } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { userRouter } from './routes/userRoutes';
import session from 'express-session'
import passport from './utils/passport-config';
   
const app: Express = express();
const port = 4000;

app.use(cors());
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
   cookie: {
    maxAge: 1000 * 60 * 60 * 24
  }
}))


 
mongoose.connect("mongodb://localhost/bookStoreDb");
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});


app.use(passport.initialize());
app.use(passport.session());
app.use("/users", userRouter);


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export default app
