const dotenv = require('dotenv').config({ path: './config/config.env' });
const path = require('path')
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const connectDB = require('./config/db');
const getInitialDBData = require(`./config/getInitialDBData`);

const app = express();
app.use(cors());

//logs
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

//handlebars
app.engine('.hbs', engine({
  extname: '.hbs',
  defaultLayout: 'main'
}));
app.set('view engine', '.hbs');
app.set('views', './views');


//Static folder
app.use(express.static(path.join(__dirname, 'public')))

//Routes

app.use('/', require('./routes/index'))
app.use('/', require('./routes/books'))
app.use('/', require('./routes/characters'))
app.use('/', require('./routes/houses'))

const PORT = process.env.PORT || 3000;

(() => {
  try {
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    })
    connectDB()
    getInitialDBData();
  } catch (error) {
    console.log(error);
  }
})()

