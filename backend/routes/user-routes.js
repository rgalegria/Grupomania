"use strict";

// Middleware Imports

const express = require("express");
const router = express.Router();

// Routes

const userCtrl = require("../controllers/user");

// router.get("/profile/:id", auth, userCtrl.getUserProfile);
router.get("/profile/:id", userCtrl.getUserProfile);

// router.put("/profile/:id", auth, userCtrl.updateUserProfile);
router.put("/profile/update", userCtrl.updateUserProfile);

// router.put("/profile/updatepassword", auth, userCtrl.updatePassword);
router.put("/profile/password-update", userCtrl.updatePassword);

// router.delete("/profile/:id", auth, userCtrl.deleteProfile);
router.delete("/profile/:id", userCtrl.deleteProfile);

// Execution

module.exports = router;