import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js"
import companyRoute from "./routes/company.route.js"
import jobRoute from "./routes/job.route.js"
import applicationroute from "./routes/application.routee.js"
dotenv.config({});

 const app= express();
 app.get("/home",(req,res)=>{
    return res.status(200).json({
        message :"This message is coming from backend",
        success:true,
    })
 });
 app.use(express.json());
 app.use(express.urlencoded({extended:true}));
 
app.use(cookieParser());
const corsOptions = {
    origin:'http://localhost:5173',
    credentials:true
}

 app.use(cors(corsOptions));
 


 const port = process.env.port || 4000;

app.use("/api/v1/user",userRoute);
app.use("/api/v1/company",companyRoute);
app.use("/api/v1/job",jobRoute);
app.use("/api/v1/application",applicationroute);
 app.listen (port,()=>{
    connectDB();

    console.log(`Server running at ${port}`);
 });
 