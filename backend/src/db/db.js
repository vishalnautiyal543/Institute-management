import mongoose from "mongoose"



const connectDB = async ()=>{
    try {

        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`mongodb connected on host ${conn.connection.host}`);
        
    } catch (error) {
        console.error("mongodb connection error:",error);
        process.exit(1);
    }
}

export {connectDB}