import mongoose from 'mongoose';

export const mongoDBConnect = async ()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Connected`.bgBlue.black);
    } catch (error) {
        console.log(`${error.message}`.bgRed.black);
    }
};