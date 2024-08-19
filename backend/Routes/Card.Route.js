const express = require("express");
const cardController = require('../Controllers/Card.Controller')
const router = new express.Router();


router.post('/cards', cardController.createCard);
router.get('/cards', cardController.getAllCard);
router.get('/cards/:title', cardController.getCardByTitle);
router.get('/search', cardController.searchByTitle);

module.exports = router; 