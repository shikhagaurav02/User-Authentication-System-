import express from "express";
import mongoose from 'mongoose';
import dotenv from "dotenv";
import authRoutes from './routes/authRoutes.js';
dotenv.config();
const app =express();
app.use(express.json());
mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err));

  app.use("api/auth",authRoutes);
  app.listen(5000,()=>{
    console.log("server running on port 5000");
    
  });
  