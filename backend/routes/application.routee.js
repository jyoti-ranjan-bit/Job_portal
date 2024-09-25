import express from "express";
import isAuthenticated from "../middleware/isAuthenticated.js";
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from "../controllers/application.controller.js";
const router = express.Router();

router.route("/applyjob/:id").get(isAuthenticated,applyJob);
router.route("/getAppliedJobs").get(isAuthenticated,getAppliedJobs);
router.route("/:id/Applicants").get(isAuthenticated,getApplicants);
router.route("/:id/updateStatus").post( isAuthenticated , updateStatus);
export default router;