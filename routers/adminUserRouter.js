import { Router } from "express";

const adminUserRouter = Router()

adminUserRouter.post('/123', (req, res) => {
    res.status(200).send('Post OK By Admin')
})

export default adminUserRouter