import { Router } from "express";
import {productList} from "../controllers/product.controller.js"


const router = Router()
router.route("/product").get(productList)

export default router