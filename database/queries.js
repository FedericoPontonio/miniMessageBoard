const pool = require('./pool')

async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
  };

async function postMessage(requestBody) {
    await pool.query('INSERT INTO messages (user_name, text, date) VALUES ($1, $2, $3)', [requestBody.author, requestBody.message, requestBody.date])
}

module.exports = {
    getAllMessages,
    postMessage,
};