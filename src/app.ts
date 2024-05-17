import express, { Application } from 'express';
import cors from 'cors';
// import { getAcontroller } from '../src/app/modules/student/student.route';
import { StudentRoutes } from '../src/app/modules/student/student.route';
const app: Application = express();

//parsers

app.use(express.json());

app.use(cors());

//application routes
app.use('/api/v1/students', StudentRoutes);

// const getAcontroller = (req: Request, res: Response) => {
//   const a = 10;
//   res.send(a);
// };

// app.get('/', getAcontroller);

// console.log(process.cwd())

export default app;
