const { check } = require(`express-validator`)

const signupValidation = [
    check(`name`)
    .notEmpty()
    .withMessage(`Name is required`), 


    check(`email`)
    .isEmail()
    .withMessage(`Invalid Email`)
    .notEmpty()
    .withMessage(`Email is required`),


    check(`password`)
    .isLength({min: 6})
    .withMessage(`Password length must be greater than 6`)
    .notEmpty()
    .withMessage(`Password is required`),

]

module.exports = { signupValidation }