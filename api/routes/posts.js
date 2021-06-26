const express = require("express")
const router = express.Router()

const postController = require("../controllers/posts")

// Create
router.post("/", postController.create)
// Update
router.put("/:id", postController.update)
// Delete
router.delete("/:id", postController.delete)
// Get
router.get("/:id", postController.get)
// Get All
router.get("/", postController.getAll)

module.exports = router