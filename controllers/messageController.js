// messageController.js

const messages = require("../models/messageModel");

const controller = {
    render: (req, res) => {res.render( "layouts/layout", {messages : messages})},
    detailRender: (req, res) => {
        const id = parseInt(req.params.messageId, 10); 
        if (isNaN(id)) return res.status(400).send("Invalid message ID");

        const message = messages.find((m) => m.id === id);

        if (!message) {
            return res.status(404).render("layouts/404", { id });
        }

        res.render("layouts/messageDetail", { message });
    }
};


module.exports = controller;