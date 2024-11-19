const express = require('express')
const router = express.Router()
const controller = require('../controllers/controller')
  
router.get('/', async (req, res) => {
  const messages = await controller.getAllMessages();
    res.render("index", { messages })
});

router.get('/new', (req, res) => {
    res.render('form')
});

router.post('/new', async (req, res) =>{
    await controller.postMessage(req.body)
    res.redirect('/');
})

module.exports = router