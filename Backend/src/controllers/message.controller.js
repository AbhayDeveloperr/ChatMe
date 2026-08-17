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

async function getMessages(req, res) {

    const { conversationId } = req.params;

    const messages = await messageModel.find({
        conversation: conversationId
    }).sort({
        createdAt: 1           //ye messages ko oldest se newest form me dikhayega
    });

    res.status(200).json({
        messages
    });
}


module.exports = {sendMessage, getMessages};