const express = require('express')
const router = express.Router()

//@desc   Login - Landing page
//@route  GET /
router.get('/', (req, res) => {
  res.render('home', {
    layout: 'main'
  })
})

module.exports = router