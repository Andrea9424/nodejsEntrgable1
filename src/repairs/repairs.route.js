const express = require("express")
const router = express.Router()
const {
    findAll,
    create,
    findOne,
    patch,
    delet,
} = require("./repairs.controller")

router.get("/api/v1/repairs", findAll),
router.get("/api/v1/repairs/:id", findOne),
router.post("/api/v1/repairs", create);

router.patch("/api/v1/repairs/:id", patch);

router.delete("/api/v1/repairs/:id", delet);

module.exports = router;
