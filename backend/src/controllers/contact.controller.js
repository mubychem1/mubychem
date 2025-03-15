import { Contact } from "../models/contact.model.js";
import {asyncHandler} from "../utils/asyncHandler.js"

export const submitContactForm = asyncHandler(async (req, res) => {
    const { name, email, phone, subject, message } = req.body;

    const newContact = new Contact({ name, email, phone, subject, message });
    await newContact.save();

    res.status(201).json({ success: true, message: "Form submitted successfully" });
});