import express from "express";
import contactRouter from "./router/contactRouter.js";
import paymentRouter from "./router/paymentRouter.js";
import dbConnection from "./database/dbConnection.js"
import { errorMiddleware } from "./middleware/error.js";
import { config } from "dotenv";

import cors from "cors";
const app = express()

config({path:"./config/config.env"})

const corsOptions = {
    origin: "http://localhost:5173", 
    methods: "GET,POST,DELETE,PUT", 
    credentials: true,   
    optionsSuccessStatus: 200 
  };
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/contact", contactRouter);
app.use("/api/v1/payment", paymentRouter);

dbConnection();
app.use(errorMiddleware);
export default app;