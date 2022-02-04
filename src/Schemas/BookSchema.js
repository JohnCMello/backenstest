const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
  url: String,
  name: String,
  isbn: String,
  Authors: [String],
  numberOfPages: Number,
  publisher: String,
  country: String,
  mediaType: String,
  released: Date,
  characters: [String],
  povCharacters: [String]
})

module.exports = mongoose.model('Book', BookSchema)