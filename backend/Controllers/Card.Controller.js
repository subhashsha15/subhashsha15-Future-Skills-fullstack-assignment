const Card = require('../Models/Card.Model');

// Create a new card
const createCard = async (req, res) => {
    try {
        const { title, description } = req.body;
        const newCard = new Card({ title, description });
        await newCard.save();
        res.status(201).json(newCard);
    } catch (error) {
        res.status(500).json({ error: 'Card not created.Try again later' });
    }
}

// Get all cards
const getAllCard = async (req, res) => {
    try {
        const cards = await Card.find();
        res.status(200).json(cards);
    } catch (error) {
        res.status(500).json({ error: 'Cards not found' });
    }
}

// Get a specific card by title
const getCardByTitle = async (req, res) => {
    try {
        const card = await Card.findOne({ title: req.params.title });
        if (!card) return res.status(404).json({ error: 'Card not found' });
        res.status(200).json(card);
    } catch (error) {
        res.status(500).json({ error: 'card not found' });
    }
}

// Search cards by title
const searchByTitle = async (req, res) => {
    try {
        const { title } = req.query;
        const cards = await Card.find({ title: { $regex: title, $options: 'i' } });
        if (!cards) {
            return res.status(404).json({ error: 'Card not found' });
        }
        res.json(cards);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
module.exports = {
    createCard,
    getAllCard,
    getCardByTitle,
    searchByTitle
}
