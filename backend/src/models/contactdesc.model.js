import mongoose from "mongoose";

const contactFormProductDescriptionSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    companyName:{
        type:String,
        required:true
    },
    productName:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    }
})

export const ContactProductDescription  = mongoose.model("ContactProductDescription",contactFormProductDescriptionSchema)
