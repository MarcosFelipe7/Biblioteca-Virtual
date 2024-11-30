const express = require('express');
const router = express.Router();
const Book = require('../models/Book'); 

router.post('/add', async (req, res) => {
    try {
        const { title, author, description, publishedDate, genre } = req.body;

        if (!title || !author) {
            return res.status(400).json({ message: 'Título e autor são obrigatórios.' });
        }

        const newBook = new Book({
            title,
            author,
            description,
            publishedDate,
            genre,
        });

        await newBook.save();
        res.status(201).json({ message: 'Livro adicionado com sucesso!', book: newBook });
    } catch (error) {
        res.status(500).json({ message: 'Erro ao adicionar o livro.', error });
    }
});

module.exports = router;
