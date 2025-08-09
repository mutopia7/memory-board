// messageController.js

const messages = require("../models/messageModel");

const controller = {
    render: (req,res) => {res.render( "layouts/layout", {messages : messages})}
};


module.exports = controller;