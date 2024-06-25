// Design pattern Buider
export class Validator {
    constructor(obj, alias) {
        // this -> new Validator
        this.obj = obj // req.body
        this.alias = alias // 'CreateUser data'
        this.errors = []
    }

    isRequired(key) { // 'name'
        if (!this.obj[key]) { // req.body.name
            this.errors.push(`${key} is required in ${this.alias}`)
        }
        return this
    }

    matchStringLength(key, min=6, max=12) { // key: "name"
        if (this.obj[key].length < min || this.obj[key].length > max) {
            this.errors.push(`${key} must lengthen ${min}-${max} in ${this.alias}`)
        }
        return this
    }

    isValidRegex() {
        return this
    }

    isValidDate(key) {
        console.log(new Date(this.obj[key]))
        if ((new Date(this.obj[key])).toString() === 'Invalid Date') {
            this.errors.push(`${key} must have valid format in ${this.alias}`)
        }
        return this
    }

    isInEnum(key, _enum) {

        return this
    }

    validate() {
        return this.errors
    }
}