"use server"
import mongoose from "mongoose";

let isConnect = false;
export const connectMongoooseDb = async () =>{
    if(!process.env.MONGODB_URL){
        throw Error("MONGODB_URL is not set");
    }
    if(isConnect){
        console.log("Ready Connect");
        
    }
    try {
        await mongoose.connect(process.env.MONGODB_URL , {dbName : "ucademy"});
        isConnect = true;
        console.log("Using new db connection");
        
    } catch (error) {
        console.log("Error db connection");
    }
}