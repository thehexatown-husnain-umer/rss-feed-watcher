const UpWorkModel = require("../model/upWorkJobs");
const UpWorkService = require("../services/upWork.service");
const express = require("express");
const router = express.Router();

//get all answers
router.get("/upwork-jobs", UpWorkService.getAllJobs);

module.exports = router;
