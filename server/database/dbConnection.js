import mongoose from "mongoose"
import { config } from "dotenv";

 const dbConnection = async() => {
    // const uri = 'mongodb://localhost:27017/techStudio';
    try {
      await mongoose.connect(process.env.URL); 
      console.log('MongoDB connected!');
    } catch (error) {
      console.error('MongoDB connection error:', error.message);
      process.exit(1);
    }
}

export default dbConnection