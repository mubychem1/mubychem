import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
 
export const app = express()

app.use(cors())

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())
// app.use(cors())
import userRouter from './routes/contact.route.js'
import applyRouter from './routes/apply.route.js'


app.use("/api", userRouter)
app.use("/api",applyRouter)

