const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

const indexRouter = require('./routes/index');

app.set('view engine', 'ejs');
app.set('views', './views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

// mongoose 2vcd3prrIloBDKMV
const mongoose = require('mongoose');
mongoose.connect(
  'mongodb+srv://BookStore:2vcd3prrIloBDKMV@cluster0.gdxyh.mongodb.net/book_store?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    !err ? console.log('Database connected successfully!') : console.error('Error Database : ', err);
  },
);

app.use('/', indexRouter);

app.listen(process.env.PORT || 3000);
