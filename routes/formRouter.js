const express = require("express");
const formRouter = express.Router();
const controller = require("../controllers/messageController");

formRouter.get("/", controller.formRender);

module.exports = formRouter;

