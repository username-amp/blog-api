const mongoose = require(`mongoose`)
const { connectionUrl } = require(`../config/keys`)

const connectMongodb = async () => {
    try{
        await mongoose.connect(connectionUrl)
        console.log(`Database Connection Successfully`)
    }catch(error) {
        console.log(error.message)
        process.exit(1)
    }
}

module.exports = connectMongodb