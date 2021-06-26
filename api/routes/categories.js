const router = require("express").Router()
const categoryController = require("../controllers/category")

// Create
router.post("/", categoryController.create)
// Get
router.get("/", categoryController.get)


module.exports = router