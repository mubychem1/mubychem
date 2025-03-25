import { Router } from "express";
import { applyForm } from "../controllers/apply.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
const router = Router()

// router.route("/apply").post(applyForm)
router.route('/apply').post(upload.single('resume'),applyForm)
// router.route("/apply").post(
//   upload.single('avatar'),
//   applyForm
//     )
  export default router;