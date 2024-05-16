import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';
import adminRouter from './routers/adminRouter.js';
dotenv.config();

const app = express();

// app.get('/', (req, res) => { // GET /
//   res.status(200).json({message: "Hello"});
// })
// app.get('/users', (req, res) => {
//   res.status(200).send('All users')
// })
// app.post('/users', (req, res) => {
//   res.status(200).send('Post OK')
// })
app.use('/admin', adminRouter) // route - routing - router
app.use('/users', userRouter)


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})