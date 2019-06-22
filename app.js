/* eslint-disable linebreak-style */
const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const bankTransactions = [{
  account_id: 'vokyE5Rn6vHKqDLRXEn5fne7LwbKPLIXGK98d',
  amount: 2307.21,
  iso_currency_code: 'USD',
  unofficial_currency_code: null,
  category: [
    'Shops',
    'Computers and Electronics',
  ],
  category_id: '19013000',
  date: '2017-01-29',
  location: {
    address: '300 Post St',
    city: 'San Francisco',
    region: 'CA',
    postal_code: '94108',
    country: 'US',
    lat: null,
    lon: null,
  },
  name: 'Apple Store',
  payment_meta: Object,
  pending: false,
  pending_transaction_id: null,
  account_owner: null,
  transaction_id: 'lPNjeW1nR6CDn5okmGQ6hEpMo4lLNoSrzqDje',
  transaction_type: 'place',
}, {
  account_id: 'XA96y1wW3xS7wKyEdbRzFkpZov6x1ohxMXwep',
  amount: 78.5,
  iso_currency_code: 'USD',
  unofficial_currency_code: null,
  category: [
    'Food and Drink',
    'Restaurants',
  ],
  category_id: '13005000',
  date: '2017-01-29',
  location: {
    address: '262 W 15th St',
    city: 'New York',
    region: 'NY',
    postal_code: '10011',
    country: 'US',
    lat: 40.740352,
    lon: -74.001761,
  },
  name: 'Golden Crepes',
  payment_meta: Object,
  pending: false,
  pending_transaction_id: null,
  account_owner: null,
  transaction_id: '4WPD9vV5A1cogJwyQ5kVFB3vPEmpXPS3qvjXQ',
  transaction_type: 'place',
}];

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index',
    {
      bankTransactions,
    });
});

app.listen(port, () => {
  debug(chalk.green(`listening on ${port}`));
});
