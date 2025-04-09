import { Router } from "express";
import {product_description} from "../controllers/productdes.controller.js"

const router = Router()
router.route("/productdes/:commonId").get(product_description);


export default router