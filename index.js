const express = require('express');
const routes = require('./routes/routes.js');
const app = express();


app.use('/', routes);
app.use(express.static(__dirname + '/public'));
app.set('views', './views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.listen(3000);