"use server"

import User, { IUser } from "@/database/user.model";
import { connectMongoooseDb } from "../mongoose"
import { TcreateUserParam } from "@/types";

export async function createUser(params : TcreateUserParam){
    try {
        connectMongoooseDb();
        const newUser = User.create(params);
        return newUser;
    } catch (error) {
        
    }
} 
export async function deleteAllUser(){
    try {
        connectMongoooseDb();
        const result = await User.deleteMany({});
        return result;
    } catch (error) {
        console.error("Error deleting users:", error);
        throw new Error("Deleting all users failed");
    }
} 