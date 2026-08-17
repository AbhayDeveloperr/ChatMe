const userModel = require("../models/userModel");

async function searchUsers(req, res) {

    const { username } = req.query;

    const users = await userModel.find({
        username: {
            $regex: username,
            $options: "i"
        },
        _id: {
            $ne: req.user.id
        }
    }).select("-password");

    res.status(200).json({
        users
    });
}



module.exports = {searchUsers};