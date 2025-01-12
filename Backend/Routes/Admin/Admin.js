const express = require("express");
const router = express.Router();
const AdminController = require("../../Controllers/AdminController");
const AdminAuth = require("../../Middleware/AdminAuth");

router
  .route("/settings", AdminAuth)
  .put(AdminController.UpdateSettings)
  .get(AdminController.GetSettings);

module.exports = router;
