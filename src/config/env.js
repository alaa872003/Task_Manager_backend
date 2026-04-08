import dotenv  from "dotenv"

dotenv.config();


export const config ={
    PORT :process.env.PORT,
    MONGOBD_URI:process.env.MONGOBD_URI
}