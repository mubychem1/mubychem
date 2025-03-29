import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    category:{
        type:String,
    },
    cas_no:{
        type:Number
    },
    product_name:{
        type:String
    },
    img:{
        type:String
    },
    id:{
        type:Number
    }
})

export const Product_list = mongoose.model("Product_list", productSchema)