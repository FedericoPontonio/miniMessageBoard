const queries = require('../database/queries');

async function getAllMessages(req, res) {
    const usernames = await queries.getAllMessages();
    return usernames
  };

module.exports={
    getAllMessages,
};