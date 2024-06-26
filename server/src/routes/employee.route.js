const express = require("express");
const router = express.Router();
const controller = require("../controllers/employee.controller")

router.get("/", controller.index);
router.get("/:employeeID", controller.detail);
router.post("/create", controller.create);
router.patch("/update", controller.update);
router.delete("/delete", controller.delete);

module.exports = router;