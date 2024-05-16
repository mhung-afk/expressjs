import { Router } from "express";
import adminUserRouter from "./adminUserRouter.js";

const adminRouter = Router()

adminRouter.use('/users', adminUserRouter)

export default adminRouter