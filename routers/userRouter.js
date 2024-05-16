import { Router } from "express";

const userRouter = Router()

// userRouter.all('/', (req, res) => {
//     res.status(200).send('All methods')
// })

userRouter.get('/', (req, res) => {
    res.status(200).send('All users')
})

userRouter.post('/123', (req, res) => {
    res.status(200).send('Post OK')
})

export default userRouter