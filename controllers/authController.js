import user from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const registerUser =async(req,res)=>
{
    const {name,email,password}=req.body;
    const userExists=await user.findOne({email});
    if(userExists){
        return res.status(400).json({message:"user already exists"});

    }
    const hashedPassword= await bcrypt.hash(password,10);
    await user.create({
        name,
        email,
        password:hashedPassword
    });
    res.status(201).json({message:"user registered succesfully"});
};
