import mongoose from "mongoose";

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URI!)  // "!" used to guarantee to have value of MONGO_URI
        const connection = mongoose.connection
        connection.on('connected',()=>{
            console.log('MongoDB is connected')
        })
        connection.on('error', (err)=>{
            console.log('MongoDB connection error, please make sure DB is up and running' + err)
            process.exit()
        })
    } catch (error) {
        console.log('Something went wrong in connecting to MongoDB');
        console.log(error);
        
    }
}