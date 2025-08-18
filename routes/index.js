// index.js

const express = require('express');
const indexRouter = express.Router();
const controller = require('../controllers/messageController')

indexRouter.get('/', controller.getMessages)

module.exports = indexRouter;