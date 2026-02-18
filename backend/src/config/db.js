const mongoose = require('mongoose')

const connectDB = async () => {
   try {
    await mongoose.connect('mongodb://localhost:27017/logisticsDB')
    console.log("MongoDB connected Successfully")
   } catch (error) {
     console.log("MongoDB connection Failed",error)
     process.exit(1);

   }
}

module.exports = connectDB