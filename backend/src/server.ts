import express, { Express, Request, Response } from 'express';
import cors from 'cors';




const app: Express = express();
const port = 3001;

app.use(cors());


app.get('/', (req:Request, res:Response) => {
  res.send('Hello from the backend server!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
