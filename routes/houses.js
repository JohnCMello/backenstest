const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId;

const HouseModel = require('../src/Schemas/HouseSchema');

const getHouses = () => HouseModel.find({})
const getHousesById = (id) => HouseModel.findOne({ _id: ObjectId(id) })

router.get('/houses', async (req, res) => {
  try {
    res.send(await getHouses())
  } catch (error) {
    console.log(error)
  }
});

router.get('/houses/:id', async (req, res) => {
  try {
    const id = req.params.id;
    res.send(await getHousesById(id))
  } catch (error) {
    return res.send(`Sorry, but the house you are looking for doesn't exist.`)
  }
});

module.exports = router;