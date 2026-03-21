import express from "express"
import cors from "cors"


const app = express();




// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


//import routes
import studentRoutes from "./routes/student.route.js"

// use routes

app.use("/api/v1",studentRoutes)


export {app}