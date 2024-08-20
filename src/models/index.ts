import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    username:String,
    email:String,
    password:String
});

export const User=mongoose.models.User||mongoose.model('User',UserSchema);