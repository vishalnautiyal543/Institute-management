import {app} from "./app.js"
import {connectDB} from "./db/db.js"
import dotenv from "dotenv"


dotenv.config()



connectDB()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server is running on port ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.error("mongodb connection error:",err); 
})





