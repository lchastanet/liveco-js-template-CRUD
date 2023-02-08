const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const knightController = require("./controllers/knightController");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/knights", knightController.browse);
router.get("/knights/:id", knightController.read);
router.put("/knights/:id", knightController.edit);
router.post("/knights", knightController.add);
router.delete("/knights/:id", knightController.destroy);

module.exports = router;
