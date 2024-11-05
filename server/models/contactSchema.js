import mongoose from "mongoose";
import validator from "validator";
const contactSchema = new mongoose.Schema({
    name:{ 
        type: String,
        required: [true, "First Name Is Required!"],
        minLength: [3, "First Name Must Contain At Least 3 Characters!"],
    },
    email:{
        type: String,
        required: [true, "Email Is Required!"],
        validate: [validator.isEmail, "Provide A Valid Email!"],
    },
    phone:{
        type: String,
        required: [true, "Phone Is Required!"],
        minLength: [11, "Phone Number Must Contain Exact 11 Digits!"],
        maxLength: [11, "Phone Number Must Contain Exact 11 Digits!"],
    },
    country:{
        type:String,
        required:true
    },
    projectDescription:{
        type: String,
        required: true,
        minLength: [10, "Message Must Contain At Least 10 Characters!"],
    },
});

export const Contact = mongoose.model("Contact", contactSchema);