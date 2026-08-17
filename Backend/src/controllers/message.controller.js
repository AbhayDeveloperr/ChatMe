const messageModel = require("../models/messageModel");

async function sendMessage(req, res) {

    const { conversationId, message } = req.body;

    const newMessage = await messageModel.create({
        conversation: conversationId,
        sender: req.user.id,
        message: message
    });

    res.status(201).json({
        message: "Message sent successfully",
        newMessage
    });
}

module.exports = {sendMessage};