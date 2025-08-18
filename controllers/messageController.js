// messageController.js
const crypto = require("crypto")
const db = require("../db/queries")


async function getMessages(req,res) {
    const dbMessages = await db.getAllMessages();
    res.render("layouts/layout", { messages: dbMessages })
}


async function getDetailMessage(req,res) {
    const id = req.params.messageId;
    const message = await db.getDetailMessage(id);

    if (!message) {
            return res.status(404).render("layouts/404", { id });
    }

    res.render("layouts/messageDetail", { message });    
}


function formRender(req,res) {
    res.render("layouts/form")
}


async function createMessagePost(req,res) {
    try {
        const user_name = req.body.user;
        const text = req.body.text;
        const bg_color = req.body.bgColor;
        const date = req.body.date;
        const id = crypto.randomUUID();
        await db.createMessage(id,user_name, text, bg_color, date);
        res.redirect("/")
    } catch (err){
        console.error("Error in postForm:", err);
        res.status(500).send("Internal Server Error");
    }
}


module.exports = {
    getMessages,
    getDetailMessage,
    formRender,
    createMessagePost
}