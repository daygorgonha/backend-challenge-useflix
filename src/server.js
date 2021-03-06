require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const cors = require('cors');

require('./database');

const app = express();

app.use(express.json());
app.use(cors({
  origin: '*'
}));
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log('Server is running!')
});