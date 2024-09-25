import express from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { getAdminJobs, getAlljobs, getJobById, postJob } from "../controllers/job.controller.js";
const router = express.Router();

router.route("/post").post(isAuthenticated,postJob);
router.route("/getJobs").get(isAuthenticated,getAlljobs);
router.route("/getAdmin").get(isAuthenticated,getAdminJobs);
router.route("/get/:id").get( isAuthenticated , getJobById);
export default router;