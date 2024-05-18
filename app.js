import express from 'express';
import dotenv from 'dotenv';
import userRouter from './routers/userRouter.js';
import adminRouter from './routers/adminRouter.js';
dotenv.config();

const app = express();


const testMiddleware = (req, res, next) => {
  if (true) {
    console.log('match /api')
    next()
  }
  else {
    res.status(403).send('Forbidden')
  }
}
// app.use(testMiddleware) // run middleware global
app.use('/api', testMiddleware) // only run for /api

// app.get('/', (req, res) => { // GET /
//   res.status(200).json({message: "Hello"});
// })
// app.get('/users', (req, res) => {
//   res.status(200).send('All users')
// })
// app.post('/users', (req, res) => {
//   res.status(200).send('Post OK')
// })
app.use('/api/admin', adminRouter) // route - routing - router
app.use('/api/users', userRouter)

/* middlewares - xử lý trung gian, trước khi request tới đc hàm xử lý cuối
 * thêm data cho request, xử lý header, verify token, cookie, session
 * 
 * có thể thao tác với req và res
 * 
 * client --> backend middleware cho /api --> backend /api/product
 * 
 * có gọi hàm next() để tiếp tục routing
 */

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})