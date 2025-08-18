const pool = require("./pool");

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    console.log(rows);
    return rows
}



console.log(getAllMessages())

module.exports = {
    getAllMessages
}