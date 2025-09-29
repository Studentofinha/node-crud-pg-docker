import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pool from "./config/db.js";
import userRoutes from "./routes/userRoutes.js"
import errorHandling from "./middleware/errorHandler.js";

import createUserTable from "./data/createUserTable.js";

dotenv.config()

const app=express()
const port=process.env.PORT || 3001;

// Middlewares
app.use(express.json());
app.use(cors());

// Routes 
app.use("/api",userRoutes);


// Error handling middleware
app.use(errorHandling)

createUserTable()

//Testing Database connection
app.use("/",async(req,res)=>{
    const result=await pool.query("SELECT current_database()")
    res.send(`The Database name is : ${result.rows[0].current_database}`)
})

// Server running
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
})