import { Router } from "express";
import {auth} from "../middlewares/auth.middleware.js"
import {role} from "../middlewares/role.middleware.js"
import {upload} from "../middlewares/multer.js"
import {addStudent} from "../controllers/student.controller.js"

const router = Router();

router.route("/addstudent").post(auth,role("admin"),upload.single("avatar"),addStudent)

export default router;
