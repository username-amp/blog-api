const express = require(`express`)
const router = express.Router()
const { authController } = require(`../controllers`)
const { signupValidation } = require(`../validators/auth`)
const validate = require(`../validators/validate`)

router.post(`/signup`,signupValidation,validate, authController.signup)

module.exports = router