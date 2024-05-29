import mongoose from "mongoose";

const connectMongoDB = async () => {
    try{
        console.log('Connecting to mongo')
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('connected to mongoDB');
    }
    catch (error){
        console.log (error);
        throw error;
    }
}

export default connectMongoDB;