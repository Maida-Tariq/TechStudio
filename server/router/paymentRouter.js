import express from "express";
const router = express.Router();
const app = express()
import {
    paymentNow
  } from "../controller/paymentController.js";
  
  router.post('/process-payment',paymentNow);

  export default router;