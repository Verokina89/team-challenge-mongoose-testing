const mongoose = require('mongoose')

require('dotenv').config()

const dbConnection = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Database is working on.");
        
    } catch (error) {
        throw new Error("Error starting connection with DB");
        
    }

}

module.exports = dbConnection