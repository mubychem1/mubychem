import { Router } from "express";
import {submitContactForm} from "../controllers/contact.controller.js"
const router = Router()

router.post("/contact", submitContactForm);


export default router