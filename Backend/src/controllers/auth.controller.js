const userModel = require("../models/userModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


async function registerUser(req,res){

    const {username, email, password} = req.body

    const isUserAlreadyExists = await userModel.findOne({
        $or: [
            {username},
            {email}
        ]
    })

    if(isUserAlreadyExists){
        return res.status(401).json({
            message: "User already exists"
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await userModel.create({
        username,
        email,
        password: hashedPassword,
    })

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(200).json({
        message: "User registered successfully",
        user:{
            id: user._id,
            username: user.username,
            email: user.email
        }
    })

}


async function loginUser(req,res) {
    
    const {email, username, password} = req.body

    //is username ya email se koi user hai ya nahi
    const user = await userModel.findOne({
        $or:[
            {username},
            {email}
        ]
    })

    if(!user){
        return res.status(401).json({
            message: "Invalid credentials"
        })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if(!isPasswordValid){
        return res.status(401).json({message: "invalid Credentials"})
    }

    const token = jwt.sign({
        id: user._id,
    },process.env.JWT_SECRET)

    res.cookie("token", token)

    res.status(200).json({
        message: "User logged in successfully",
        user:{
            id: user._id,
            username: user.username,
            email: user.email,
        }
    })
}




module.exports = {registerUser, loginUser}