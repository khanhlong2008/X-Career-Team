const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')

const voucherHunter = require('./routes')

const app = express()
dotenv.config()

app.use(cors());
app.use(cookieParser())
app.use(express.json())

// endponit 
app.use('/v1/voucherHunter', voucherHunter)
mongoose
    .connect('mongodb://localhost/voucherHunter',
        { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('🚀🚀🚀 Connected database from mongodb.');
        app.listen(5000, () => {
            console.log(`📦📦📦 Server is running on port 5000`);
        });
    })
    .catch((err) => {
        console.log('err', err);
    });



