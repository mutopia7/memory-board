const express = require("express");
const formRouter = express.Router();
const controller = require("../controllers/messageController");

formRouter.get("/", controller.formRender);
formRouter.post("/", controller.postForm);

module.exports = formRouter;

