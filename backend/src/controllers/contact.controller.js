import { Contact } from "../models/contact.model.js";
import {asyncHandler} from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import {ContactProductDescription} from "../models/contactdesc.model.js"

export const submitContactForm = asyncHandler(async (req, res) => {
    const { name, email, phone, product, message } = req.body;

    const newContact = new Contact({ name, email, phone, product, message });
    await newContact.save();

    res.status(201).json({ success: true, message: "Form submitted successfully" });
});


export const contactFormProductDecscription = asyncHandler (async(req,res)=>{
    const { fullName, email , mobile , companyName , productName , message } = req.body 
  
    if(!fullName || !email || !message) {
      throw new ApiError(400,"Full Name , Email , and Message are required ")
    }
  
    const newContact = await ContactProductDescription.create({
      fullName,
      email,
      mobile,
      companyName,
      productName,
      message
    })
  
     return res.status(201)
     .json(
      new ApiResponse(201, newContact , "Form submitted Successfully ")
     )
  })