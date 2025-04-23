import { Router } from "express"
import {contactFormProductDecscription} from "../controllers/contact.controller.js"

const router = Router()

router.route("/productForm").post(contactFormProductDecscription)

export default router