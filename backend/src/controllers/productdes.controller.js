import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Product_description } from "../models/product_description.model.js";


export const product_description = asyncHandler(async (req, res) => {
    const product_descriptions = await Product_description.find()


    if (!product_descriptions || product_descriptions === 0) {
        throw new ApiError(404, "no products descriptions ")
    }
    res.status(200).json(new ApiResponse(200, product_descriptions, "Product list fetched successfully"));
})
