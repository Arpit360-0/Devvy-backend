import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
});


export const UserModel = mongoose.model("User", Schema);