const express = require("express");
const router = express.Router();
const {
  findAll,
  create,
  findOne,
  patch,
  delet,
} = require("./users.controller");

router.get("/api/v1/user", findAll), 
router.post("/api/v1/user", create);
router.get("/api/v1/user/:id", findOne);

router.patch("/api/v1/user/:id", patch);

router.delete("/api/v1/user/:id", delet);

module.exports = router;
