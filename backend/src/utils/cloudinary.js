import cloudinary from "cloudinary";
import fs from "fs";
import path from "path";

cloudinary.v2.config({
    cloud_name: 'dthyhlub7', 
    api_key: '255261529955362', 
    api_secret: 'bRqTI2u9GctXfyvWrRyomYOejV0',
});

export const uploadOnCloudinary = async (filePath) => {
    try {
        if (!filePath) throw new Error("File path is missing");

        const absolutePath = path.resolve(filePath); // Ensure correct path format
        console.log("Uploading to Cloudinary:", absolutePath); // Debugging log

        const result = await cloudinary.v2.uploader.upload(absolutePath, {
            folder: "resumes",
            resource_type: "auto",
        });

        fs.unlinkSync(filePath); // Delete local file after upload
        return result;
    } catch (error) {
        console.error("Cloudinary Upload Error:", error.message);
        throw new Error(error.message); // Throw actual error
    }
};
