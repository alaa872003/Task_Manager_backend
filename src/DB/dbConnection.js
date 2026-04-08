import mongoose from "mongoose"
import { config } from "../config/env.js"

export const connectiondb = async ()=>{
    try{
        await mongoose.connect(config.MONGOBD_URI);
        console.log(`✅ Database Connected`);
        
    }catch(err){
         console.error('❌ Database Connection Failed:', err);
         process.exit(0);
    }
}