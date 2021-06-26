const router = require("express").Router()

const userController = require("../controllers/users")

// Update
router.put("/:id", userController.update)
// Delete
router.delete("/:id", userController.delete)
// Get
router.get("/:id", userController.get)

module.exports = router