
import app from "./app.js";
import mongoose from "mongoose"

// const PORT =4040
app.listen(process.env.PORT,()=>
console.log(`Server is Running At the Port ${process.env.PORT}`)
)

