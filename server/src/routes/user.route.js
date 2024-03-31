const express = require("express");
const router = express.Router();
const controller = require("../controllers/user.controller");

router.get("/", controller.index);
router.post("/signup", controller.signup);
router.post("/signin", controller.signin);
router.get("/signout", controller.signout);

module.exports = router;