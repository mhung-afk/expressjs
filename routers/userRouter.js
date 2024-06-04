import { Router } from "express";
import User from '../models/User.js';

// Route /users
const userRouter = Router()

// GET list of users
userRouter.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Error')
    }
})

// GET user by id
userRouter.get('/:id', async (req, res) => {
    try {
        // const user = await User.findOne({_id: req.params.id})
        const user = await User.findById(req.params.id)
        // const user = await User.findOne({_id: req.params.id}).select(['name', 'email', '-_id'])
        // const user = await User.findOne({_id: req.params.id}).select('-email')

        // handle date
        // const date = new Date(user.birthday);
        // date.setHours(date.getHours() + 7)

        res.status(200).json(user)
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Error')
    }
})

// POST user
userRouter.post('/', async (req, res) => {
    const {name, email, birthday} = req.body
    try {
        const user = await User.create({
            name: name,
            email: email,
            birthday: birthday,
        })
        res.status(200).json(user)
    } catch (error) {}
})

// PUT user by id
userRouter.put('/:id', async (req, res) => {
    const {name, email, birthday} = req.body
    try {
        const user = await User.findByIdAndUpdate(req.params.id, {
            name: name,
            email: email,
            birthday: birthday,
        })
        if (name) {
            user.name = name
        }
        if (email) {
            user.email = email
        }
        if (birthday) {
            user.birthday = birthday
        }
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Error')
    }
})

// DELETE user by id
userRouter.delete('/:id', (req, res) => {
    res.status(200).send('Delete User')
})

export default userRouter