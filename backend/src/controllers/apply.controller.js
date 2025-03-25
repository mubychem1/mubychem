import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Apply } from "../models/apply.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import path from "path"


export const applyForm = asyncHandler(async (req, res) => {
    const { fullName, email, phone } = req.body;

    if (!fullName || !email || !phone) {
        throw new ApiError(400, "All fields are required");
    }

    if (!req.file) {
        throw new ApiError(400, "Resume file is required. Please upload a file.");
    }

    console.log("Received file:", req.file);
    const resumeLocalPath = path.resolve(req.file.path); // Convert to absolute path
    console.log("Uploading file:", resumeLocalPath); // Debugging log

    const resume = await uploadOnCloudinary(resumeLocalPath).catch((error) => {
        console.error("Cloudinary Upload Error:", error);
        throw new ApiError(500, "Failed to upload file to Cloudinary");
    });
    if (!resume) {
        throw new ApiError(400, "Error uploading resume to Cloudinary");
    }

    const apply = await Apply.create({
        fullName,
        resume: resume.url,
        email,
        phone,
    });

    return res.status(201).json(new ApiResponse(200, apply, "User registered successfully"));
});