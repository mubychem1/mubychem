// const mongoose = require('mongoose');

// const productSchema = new mongoose.Schema({
//   name: String,
//   casNo: String,
//   dosageForm: String,
//   therapeuticCategory: String,
//   regulatoryFiling: String,
//   productStatus: String,
//   image: String,         // Image URL
//   background: String,    // Background Image URL
//   application: [{
//     title: String,
//     description: String
//   }]
// });

// module.exports = mongoose.model('Product', productSchema);

import mongoose from "mongoose";
const product_descriptionSchema = new mongoose.Schema({
  
    name:{
        type:String,
        required:true,
    },
    casNo:{
        type:String
    },
    dosageForm:{
        type:String
    },
    therapeuticCategory:{
        type:String
    },
    regulatoryFiling:{
        type:String
    },
    productStatus:{
        type:String
    },
    image:{
        type:String,
        required:true
    },
   


    // application: [{
    //     title: String,
    //     description: String
    // }],
    
})

export const Product_description = mongoose.model("Product_description", product_descriptionSchema)
