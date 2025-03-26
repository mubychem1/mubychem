import mongoose, { Schema } from "mongoose";

const applySchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    position:{
        type: String,
        required:true
    },
    resume: {
        type: String, 
        required: true,
    }

}, { timestamps: true })

export const Apply = mongoose.model("apply", applySchema)