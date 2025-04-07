import { Router } from "express";
import {productList} from "../controllers/product.controller.js"
// import {product_description} from "../controllers/product.controller.js"

const router = Router()
router.route("/product").get(productList)
// router.route("/productdes").get(product_description)

export default router