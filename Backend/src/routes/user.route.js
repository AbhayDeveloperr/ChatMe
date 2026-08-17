const express = require('express');

const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.get("/search?username=guru", authMiddleware, userController.searchUsers);

module.exports = router;