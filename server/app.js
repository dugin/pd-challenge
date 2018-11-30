const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');
const Record = require('./models/record');
const Music = require('./models/music');

const app = express();

const recordRoutes = require('./routes/record');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(recordRoutes);
Record.hasMany(Music);

startApp();

async function startApp() {
  try {
    await sequelize
      // .sync({ force: true })
      .sync();

    app.listen(8000);
  } catch (e) {
    console.log('e ', e);
  }
}
