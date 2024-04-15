const express = require("express");
const router = express.Router();
const auth = require("./auth");
const detailProfileWorker = require("./detail_profile_worker");
const skills = require("./skills");
const workExperience = require("./work_experience");
const portofolio = require("./portofolio");

router.use("/auth", auth);
router.use("/detailProfileWorker", detailProfileWorker);
router.use("/skills", skills);
router.use("/workExperience", workExperience);
router.use("/portofolio", portofolio);

module.exports = router;
