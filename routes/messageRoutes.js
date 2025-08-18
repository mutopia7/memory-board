// mesageRouter.js

const express = require("express");
const messageRouter = express.Router();
const controller = require("../controllers/messageController");

messageRouter.get("/:messageId", controller.controller.detailRender);

module.exports = messageRouter;