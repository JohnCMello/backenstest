const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

const CharacterModel = require('../src/Schemas/CharacterSchema');

const getCharacter = () => CharacterModel.find({})
const getCharacterById = (id) => CharacterModel.findOne({ _id: ObjectId(id) })


router.get('/characters', async (req, res) => {
  try {
    res.send(await getCharacter())
  } catch (error) {
    console.log(error)
  }
});

router.get('/characters/:id', async (req, res) => {
  try {
    const id = req.params.id;
    res.send(await getCharacterById(id))
  } catch (error) {
    return res.send(`Sorry, but this character you are looking for doesn't exist.`)
  }
});

module.exports = router;
