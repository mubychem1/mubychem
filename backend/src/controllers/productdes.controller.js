import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Product_description } from "../models/product_description.model.js";


// export const product_description = asyncHandler(async (req, res) => {
//     const product_descriptions = await Product_description.find()


//     if (!product_descriptions || product_descriptions === 0) {
//         throw new ApiError(404, "no products descriptions ")
//     }
//     res.status(200).json(new ApiResponse(200, product_descriptions, "Product list fetched successfully"));
// })


// export const get_product_description_by_id = asyncHandler(async (req, res) => {
//     const { id } = req.params;

//     const product_description = await Product_description.findById(id);

//     if (!product_description) {
//         throw new ApiError(404, "Product description not found");
//     }

//     res.status(200).json(new ApiResponse(200, product_description, "Product description fetched successfully"));
// });


export const product_description = asyncHandler(async(req,res)=>{
    const { commonId } = req.params;
    const product_descriptions = await Product_description.findOne({ commonId: commonId })
    if(!product_descriptions){
        throw new ApiError(404,"Product description not found ")
    }

    res.status(200).json(new ApiResponse(200,product_descriptions,"Product description fetched successfully"))
});