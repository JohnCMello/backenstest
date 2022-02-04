const axios = require('axios');

const connectDB = require('./db');

const BookModel = require('../src/Schemas/BookSchema')
const CharacterModel = require('../src/Schemas/CharacterSchema')
const HouseModel = require('../src/Schemas/HouseSchema')

const getDataFromApi = async (model, resource) => {
  try {
    const { data } = await axios(`https://anapioficeandfire.com/api/${resource}`)
    await model.insertMany(data);
  } catch (error) {
    console.log(error)
  }
}

const getInitialDBData = () => {
  getDataFromApi(BookModel, "books");
  getDataFromApi(CharacterModel, "characters");
  getDataFromApi(HouseModel, "houses");
}

module.exports = getInitialDBData;