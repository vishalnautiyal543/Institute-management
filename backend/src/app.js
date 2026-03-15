import express from "express"


const app = express();


// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//import routes
import studentRoutes from "./routes/student.route.js"

// use routes

app.use("/api/v1",studentRoutes)


export {app}