import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        await mongoose.connect('')
        console.log("DataBase is connected ");
    } catch (error) {
        console.log("MongoDB connection failed ", error);
        process.exit(1)
    }
}