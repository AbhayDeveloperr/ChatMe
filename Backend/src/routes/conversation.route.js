const express = require("express");
const conversationController = require("../controllers/conversation.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/", authMiddleware, conversationController.createConversation);
router.get("/", authMiddleware, conversationController.getConversations);

module.exports = router;