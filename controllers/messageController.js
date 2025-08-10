// messageController.js

const messages = require("../models/messageModel");

const controller = {
    render: (req, res) => {res.render( "layouts/layout", {messages : messages})},
    detailRender: (req, res) => {res.render("layouts/messageDetail", {message : messages.filter((m) => m.id == req.params.messageId)[0]})}
};


module.exports = controller;