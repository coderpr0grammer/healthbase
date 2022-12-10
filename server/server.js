const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
const { default: mongoose } = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/database', require('./routes/database'));
// app.use('/login', require('./routes/auth'));
// app.use('/signup', require('./routes/auth'));


const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Connected to MongoDB');
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});