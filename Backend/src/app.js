const express = require('express');
const cookieParser = require("cookie-parser");
const cors = require("cors")

const authRoutes = require('./routes/auth.route');
const userRoutes = require('./routes/user.route');
const conversationRoutes = require('./routes/conversation.route');
const messageRoutes = require("./routes/message.route")

const app = express();


const corsOptions = {
origin: ['http://localhost:5173','http://localhost:5174' ],
credentials: true,
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/conversations', conversationRoutes);
app.use('/api/messages', messageRoutes)


module.exports = app;