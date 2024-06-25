export function validateUpdateUser(req, res, next) {
    const {name, email, birthday} = req.body

    if (name && (name.length < 6 || name.length > 12)) {
        return res.status(400).json({
            message: 'Invalid username'
        })
    }

    // email: "abc@xyz.com"
    // email.split("@"): ["abc", "xyz.com"]
    if (email && !(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i).test(email)) {
        return res.status(400).json({
            message: 'Invalid email'
        })
    }

    if (birthday && ((new Date(birthday)).toString() === 'Invalid Date')) {
        return res.status(400).json({
            message: 'Invalid birthday'
        })
    }

    next()
}