const express = require("express");
const messageController = require("../controllers/message.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/", authMiddleware, messageController.sendMessage);
router.get("/:conversationId", authMiddleware, messageController.getMessages);


module.exports = router;