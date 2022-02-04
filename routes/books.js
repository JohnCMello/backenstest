const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

const BookModel = require('../src/Schemas/BookSchema');

const getBooks = () => BookModel.find({})
const getBooksById = (id) => BookModel.findOne({ _id: ObjectId(id) })

router.get('/books', async (req, res) => {
  try {
    res.send(await getBooks())
  } catch (error) {
    console.log(error)
  }
});

router.get('/books/:id', async (req, res) => {
  try {
    const id = req.params.id;
    res.send(await getBooksById(id));
  } catch (error) {
    console.log(error)
    return res.send(`Sorry, but the book you are looking for doesn't exist.`)
  }
});

router.get('/books/:id/chars', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await getBooksById(id);
    res.send(data.characters)
  } catch (error) {
    console.log(error)
  }
});

router.get('/books/:id/mainchars', async (req, res) => {
  try {
    const id = req.params.id;
    const data = await getBooksById(id);
    res.send(data.povCharacters)
  } catch (error) {
    console.log(error)
  }
});

module.exports = router;
