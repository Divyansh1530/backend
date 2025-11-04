// require('dotenv').config({path:'./env'}) //ye bhi ek method hai dotenv ko import krne ka

import dotenv from 'dotenv'

import connectDB from './db/index.js'

dotenv.config({
    path: './env'
})

// ye ek experimental tarika hai dotenv import krne ka , iske baad package.json me jaake bhi changes krne hai



connectDB()






















// import express from 'express'
// const app = express()

// (async()=>{
//     try {
//         mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("ERROR: " , error);
//             throw error
            
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`App is listening on port ${process.env.PORT}`);
            
//         })
//     } catch (error) {
//         console.error("ERROR: ",error)
//         throw error
//     }
// })()