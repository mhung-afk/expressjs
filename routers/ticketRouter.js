import { Router } from "express";
import Ticket from "../models/Ticket.js";
import { Schema } from "mongoose";
const ticketRouter = Router()

ticketRouter.post('/', async (req, res) => {
    const { title, ticketType, date, refUser } = req.body
    try {
        const tickets = await Ticket.create({
            title: title,
            ticketType: ticketType,
            date: date,
            refUser: refUser,
        })
        res.status(200).json(tickets)
    } catch (error) {

    }

})

ticketRouter.get('/', async (req, res) => {
    const userID = req.query.userID
    try {
        const tickets = await Ticket.find({refUser: userID})
        res.status(200).json(tickets)
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal Error')
    }
})

export default ticketRouter
