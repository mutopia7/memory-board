const pool = require("./pool");

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows
}

async function getDetailMessage(id) {
    const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
    return rows[0];
}

async function createMessage(user_name, text, bg_color) {
    await pool.query("INSERT INTO messages (user_name, text, bg_color) VALUES ($1, $2, $3)", [user_name, text, bg_color])
}


module.exports = {
    getAllMessages,
    getDetailMessage,
    createMessage
}