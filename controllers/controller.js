const queries = require('../database/queries');

async function getAllMessages(req, res) {
    const usernames = await queries.getAllMessages();
    return usernames
  };

async function postMessage(requestBody) {
    const requestBodyWithDate = {...requestBody, date:new Date()}
    await queries.postMessage(requestBodyWithDate);
}

module.exports={
    getAllMessages,
    postMessage,
};