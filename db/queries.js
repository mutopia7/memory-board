const pool = require("./pool");

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows
}

async function getDetailMessage(id) {
    const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
    return rows[0];
}

async function createMessage(id,user_name, text, bg_color, date) {
    await pool.query("INSERT INTO messages (user_name, text, bg_color, date) VALUES ($1, $2, $3, $4, $5)", [id,user_name, text, bg_color, date])
}


module.exports = {
    getAllMessages,
    getDetailMessage,
    createMessage
}