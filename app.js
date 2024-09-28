const express = require(`express`)
const bodyParser = require(`body-parser`)
const dotenv = require(`dotenv`) 
dotenv.config()
const connectMongodb = require(`./init/mongodb`)
const { authRoute } = require(`./routes`)


// init app
const app = express()



// database connection
connectMongodb()

// third-party middleware
app.use(express.json({ limit: `500mb` }))
app.use(bodyParser.urlencoded({ limit: `500mb`, extended: true}))


// define the base route for authentication
app.use(`/api/v1/auth`, authRoute)


module.exports = app