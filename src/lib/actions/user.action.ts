"use server"

import User, { IUser } from "@/database/user.model";
import { connectMongoooseDb } from "../mongoose"
import { TcreateUserParam } from "@/types";

export default async function createUser(params : TcreateUserParam){
    try {
        connectMongoooseDb();
        const newUser = User.create(params);
        return newUser;
    } catch (error) {
        
    }
} 