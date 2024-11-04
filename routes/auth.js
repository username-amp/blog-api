const express = require(`express`)
const router = express.Router()
const { authController } = require(`../controllers`)
const { signupValidation } = require(`../validators/auth`)

router.post(`/signup`,signupValidation, authController.signup)

module.exports = router