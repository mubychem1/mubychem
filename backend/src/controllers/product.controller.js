import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Product } from "../models/product.model.js";


export const productList = asyncHandler(async (req, res) => {
    const products = await Product.find(); // Fetch all products

    if (!products || products.length === 0) {
        throw new ApiError(404, "No products found");
    }

    res.status(200).json(new ApiResponse(200, products, "Product list fetched successfully"));
});

// const productList = [
//     {
//         _id: "67e66de2a99839d316992ea3",
//         category: "iron",
//         product_name: "Sucoferric Oxyhydroxide",
//         img: "https://example.com/images/iron.jpg",
//         id: "2",
//         cas_no: "12345678"
//     },
//     {
//         _id: "67e66de2a99839d316992ea4",
//         category: "copper",
//         product_name: "Copper Sulfate",
//         img: "https://example.com/images/copper.jpg",
//         id: "3",
//         cas_no: "87654321"
//     },
//     {
//         _id: "67e66de2a99839d316992ea5",
//         category: "zinc",
//         product_name: "Zinc Oxide",
//         img: "https://example.com/images/zinc.jpg",
//         id: "4",
//         cas_no: "23456789"
//     }
// ];

// Controller to insert the predefined list of products
// export const insertProductList = asyncHandler(async (req, res) => {
//     try {
//         const insertedProducts = await Product.insertMany(productList);
//         res.status(201).json(new ApiResponse(201, insertedProducts, "Predefined products added successfully"));
//     } catch (error) {
//         throw new ApiError(500, "Error inserting predefined products");
//     }
// });