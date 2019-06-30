const mongoose = require('mongoose');
// DB Config
const db = require('./config/keys').mongoURI;
// Connect to Mongo
mongoose.connect(db)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));