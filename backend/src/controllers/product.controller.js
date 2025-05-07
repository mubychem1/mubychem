import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Product } from "../models/product.model.js";
// import { Product_description } from "../models/product_description.model.js";

// export const productList = asyncHandler(async (req, res) => {
//     const products = await Product.find(); // Fetch all products

//     if (!products || products.length === 0) {
//         throw new ApiError(404, "No products found");
//     }

//     res.status(200).json(new ApiResponse(200, products, "Product list fetched successfully"));
// });

// export const product_description = asyncHandler(async (req, res) => {
//     const product_descriptions = await Product_description.find()

//     if (!product_descriptions || product_descriptions === 0) {
//         throw new ApiError(404, "no products descriptions ")
//     }
//     res.status(200).json(new ApiResponse(200, products, "Product list fetched successfully"));
// })

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

// export const productList = asyncHandler(async (req, res) => {
//     const page = parseInt(req.query.page) || 1; // Current page number, defaults to 1
//     const limit = parseInt(req.query.limit) || 10; // Number of products per page, defaults to 10
//     const skip = (page - 1) * limit; // Number of products to skip for pagination
  
//     // console.log("Fetching products:", { page, limit, skip });
  
//     // Get total number of products
//     const total = await Product.countDocuments();
//     console.log("Total products:", total);
  
//     // Fetch products with pagination
//     const products = await Product.find().skip(skip).limit(limit);
  
//     // Check if products exist
//     if (!products || products.length === 0) {
//       return res.status(404).json({
//         statusCode: 404,
//         data: [],
//         message: "No products found."
//       });
//     }
  
//     // Calculate total pages
//     const totalPages = Math.ceil(total / limit);
  
//     console.log("Total pages:", totalPages);
  
//     // Return response with product data and pagination metadata
//     res.status(200).json({
//       statusCode: 200,
//       data: products,
//       message: "Product list fetched successfully",
//       meta: {
//         total,
//         currentPage: page,
//         totalPages
//       }
//     });
//   });


export const productList = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  const { dosageForm } = req.query; // Get the dosageForm query parameter

  const filters = {}; // Initialize an empty filter object

  if (dosageForm) {
    // If dosageForm is provided, create a filter
    const selectedForms = dosageForm.split(',').map(form => form.trim().toLowerCase());
    // Assuming your Product model has a 'dosageForm' field that is a string
    // with comma-separated values. We'll use a $in operator with a regex
    // to find products where any of the selected forms (case-insensitive)
    // are present as whole words.
    filters.dosageForm = { $in: selectedForms.map(form => new RegExp(`\\b${form}\\b`, 'i')) };
  }

  console.log("Fetching products with filters:", { page, limit, skip, filters });

  const total = await Product.countDocuments(filters); // Apply filters to count
  console.log("Total products matching filter:", total);

  const products = await Product.find(filters).skip(skip).limit(limit); // Apply filters to find

  if (!products || products.length === 0) {
    return res.status(404).json({
      statusCode: 404,
      data: [],
      message: "No products found matching the criteria.",
    });
  }

  const totalPages = Math.ceil(total / limit);
  console.log("Total pages matching filter:", totalPages);

  res.status(200).json({
    statusCode: 200,
    data: products,
    message: "Product list fetched successfully",
    meta: {
      total,
      currentPage: page,
      totalPages,
    },
  });
});