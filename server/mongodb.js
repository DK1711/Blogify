// const mongoose=require('mongoose');
import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();

export const connection=async()=>{
    try{
    await mongoose.connect(
      process.env.MONGO_URL
       , { useNewUrlparser: true }
    );
     console.log("database connection successfull");
    }
    catch(err){
        console.log('database connection failed:',err);
    }

}

const schema =mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const model=mongoose.model('blogapp',schema);
export default model;
