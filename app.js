import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';
import mongoose from 'mongoose';
dotenv.config();

try {
  await mongoose.connect('mongodb://127.0.0.1:27017/learning-expressjs');
  console.log('MongoDB connected successfully.')
} catch (error) {
  console.log(error);
}

const app = express();
app.use(express.json())

app.use('/api/users', userRouter)

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})