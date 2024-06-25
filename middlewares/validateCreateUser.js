import { Validator } from "../common/Validator.js"

export function validateCreateUser(req, res, next) {
    const {name, email, birthday} = req.body

    // if (!name || name.length < 6 || name.length > 12) {
    //     return res.status(400).json({
    //         message: 'Invalid username'
    //     })
    // }

    // // email: "abc@xyz.com"
    // // email.split("@"): ["abc", "xyz.com"]
    // if (!email || !(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i).test(email)) {
    //     return res.status(400).json({
    //         message: 'Invalid email'
    //     })
    // }

    // if (birthday && ((new Date(birthday)).toString() === 'Invalid Date')) {
    //     return res.status(400).json({
    //         message: 'Invalid birthday'
    //     })
    // }

    const errors = new Validator(req.body, 'CreateUser data')
                        .isRequired('name')
                        .isRequired('email')
                        .matchStringLength('name', 6, 12)
                        .isValidPattern()
                        .isValidDate('birthday')
                        .validate()
    console.log(errors);

    next()
}