const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://0.0.0.0:27017/nosql-challenge', {
    // useFindAndModify: false,
    // useNewURLParser: true,
    // useUnifiedTopology: true
});

mongoose.set('debug', true);

app.use(require('./routes'));
app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`))