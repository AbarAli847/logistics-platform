const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

 
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Backend server is running'
  });
});

 
app.use('/api/v1', routes);

module.exports = app;
