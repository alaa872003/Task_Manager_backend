import { bootstrap } from "./src/app.js";
import express from 'express'
import { config } from "./src/config/env.js";
import { connectiondb } from "./src/DB/dbConnection.js";

const app = express()

// db connection
connectiondb();

bootstrap(app);

app.listen(config.PORT,()=>{
    console.log(`task management project connected ${config.PORT}`);
    
})