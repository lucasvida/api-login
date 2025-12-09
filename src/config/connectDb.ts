import mongoose from "mongoose";
import env from "dotenv";
env.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI as string);
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export default connectDB;