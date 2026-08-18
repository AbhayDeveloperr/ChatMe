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


async function getConversations(req, res) {
    
    const conversations = await conversationModel
    .find({
        participants: req.user.id
    })
    .populate("participants", "username email");
    
    // Logged-in user ko chhodkar saamne wala user nikalna.
    const result = conversations.map((conversation) => {

        const otherUser = conversation.participants.find(
            (user) => user._id.toString() !== req.user.id
        );

        return {
            conversationId: conversation._id,
            user: otherUser
        };
    });

    res.status(200).json({
        conversations: result
    });
}


module.exports = {createConversation, getConversations};