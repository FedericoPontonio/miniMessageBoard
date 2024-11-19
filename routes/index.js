const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller')


// const messages  = [
//     {
//       text: "Hi there!",
//       user: "Amando",
//       added: new Date()
//     },
//     {
//       text: "Hello World!",
//       user: "Charles",
//       added: new Date()
//     }
//   ];
  

router.get('/', async (req, res) => {
  const messages = await controller.getAllMessages();
    res.render("index", { title: "Mini Messageboard", messages: messages })
});

router.get('/new', (req, res) => {
    res.render('form')
});

router.post('/new', (req, res) =>{
    messages.push({ text: req.body.message, user: req.body.author, added: new Date() });
    res.redirect('/');
})

module.exports = router