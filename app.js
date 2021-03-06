const path = require('path');

const express = require('express');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const generalRoutes = require('./routes/general');

app.use(express.static(path.join(__dirname, 'public')));

app.use(generalRoutes);

app.use(errorController.get404);

app.listen(3200);
