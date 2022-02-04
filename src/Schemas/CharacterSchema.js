const mongoose = require('mongoose')

const CharacterSchema = new mongoose.Schema({
  url: String,
  name: String,
  gender: String,
  culture: String,
  born: String,
  died: String,
  titles: [String],
  aliases: [String],
  father: String,
  mother: String,
  spouse: String,
  allegiences: [String],
  books: [String],
  tvSeries: [String],
  playedBy: [String]
})

module.exports = mongoose.model('Character', CharacterSchema)