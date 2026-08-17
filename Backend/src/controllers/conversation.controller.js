const conversationModel = require("../models/conversationModel");

async function createConversation(req, res) {

    const { receiverId } = req.body;

    const existingConversation = await conversationModel.findOne({
        participants: {
            $all: [
                req.user.id,
                receiverId
            ]
        }
    });

    if (existingConversation) {
        return res.status(200).json({
            message: "Conversation already exists",
            conversation: existingConversation
        });
    }

    const conversation = await conversationModel.create({
        participants: [
            req.user.id,
            receiverId
        ]
    });

    res.status(201).json({
        message: "Conversation created successfully",
        conversation
    });
}




module.exports = {createConversation};