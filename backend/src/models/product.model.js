import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    dosageForm: {
        type: String,
        required: true,
        trim: true
    },
    product_name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    cas_no: {
        type: String,
        required: true
    },
    therapeuticCategory:{
        type: String,
        required:true
    },
    
    commonId: {
        type: String,
        required: true
    }
})


export const Product = mongoose.model("Product", productSchema);
