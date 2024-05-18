import { Router } from "express";

const userRouter = Router()

// userRouter.all('/', (req, res) => {
//     res.status(200).send('All methods')
// })

const testUserMiddleware = (req, res, next) => {
    if (true) {
        console.log('match /api/users')
        next()
    }
    else {
        res.status(403).send('Forbidden')
    }
}

userRouter.get('/', testUserMiddleware, (req, res) => {
    res.status(200).send('All users')
})

userRouter.post('/', (req, res) => {
    res.status(200).send('Post OK')
})

export default userRouter