const pool = require("./pool");

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    console.log(rows);
    return rows
}

async function getDetailMessage(id) {
    const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [id]);
    return rows[0];
}



module.exports = {
    getAllMessages,
    getDetailMessage
}