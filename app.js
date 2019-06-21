const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');

const app = express();

app.get('/', function(req, res){
    res.send('hello from express');
});

app.listen(3000, function(){
    debug(chalk.green('listening on 3000'));
});