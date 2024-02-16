const mongoose = require("mongoose");
const dotenv = require('dotenv');


dotenv.config();
// const colors = require("colors");

MONGO_URI="mongodb+srv://harshshukla:chatapppass123@cluster0.iaigczo.mongodb.net/?retryWrites=true&w=majority"


const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;