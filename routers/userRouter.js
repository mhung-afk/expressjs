import { Router } from "express";
import User from '../models/User.js';

const userRouter = Router()

userRouter.get('/', (req, res) => {
    res.status(200).send('All users')
})

export default userRouter