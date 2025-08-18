const express = require("express");
const formRouter = express.Router();
const controller = require("../controllers/messageController");

formRouter.get("/", controller.controller.formRender);
formRouter.post("/", controller.controller.postForm);

module.exports = formRouter;

