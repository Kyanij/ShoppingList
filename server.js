const express = require('express');
const bodyParser = require('body-parser');
const dbconnect = require('./dbconnect');
const cors = require('cors');
const path = require('path');
const items = require('./routes/api/items');

const app = express()
const port = process.env.PORT || 5000;
// Bodyparser Middleware
app.use(bodyParser.json());

app.use(cors());

// Use Routes
app.use('/api/items', items);

// Serve static assets if in production
if(process.env.NODE_ENV == 'production'){

// Set static folder
app.use(express.static('client/build'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
})
}

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Server running  on port ${port}!`))