import mongoose from 'mongoose';

export const connectDB = async () => {
  try{
    const conn = await mongoose.connect(process.env.MONGO_URI, );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  }catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // proccess code 1 code means failure , 0 means success
  }
}