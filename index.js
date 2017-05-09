const express = require('express');
const routes = require('./routes/routes.js');
const app = express();


app.use('/', routes);
app.use(express.static('public'));

app.listen(3000);