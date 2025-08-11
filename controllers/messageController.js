// messageController.js

const messages = require("../models/messageModel");

const controller = {
    render: (req, res) => {res.render( "layouts/layout", {messages : messages})},

    detailRender: (req, res) => {
        const id = req.params.messageId;
        const message = messages.find((m) => m.id == id);

        if (!message) {
            return res.status(404).render("layouts/404", { id });
        }

        res.render("layouts/messageDetail", { message });
    },

    formRender: (req,res) => {
        res.render("layouts/form");
    },

    postForm: (req,res) => {
        const user = req.body.user;
        const text = req.body.text;
        const bgColor = req.body.bgColor;
        messages.push({user,text,bgColor, id: crypto.randomUUID(), date: new Date()});
        res.redirect("/")
    }
};




module.exports = controller;