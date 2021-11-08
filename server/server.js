//exports we need
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const app = express();

// getting PORT from config file 
const PORT = config.get('port') || 5000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/auth', require('./routes/auth.routes'));

/* 
{
     email: 'test@test.com',
     password: '123123'
 }
 */

//async start server function with connection to mongoDB inside
async function start() {
    try {
        //connection to cluster
        await mongoose.connect(config.get('mongoUri'));
        // listenning app
        app.listen(PORT, () => {
            console.log(`app is listenning on port ${PORT}...`);
        });
    } catch (error) {
        //exit if app crashed
        console.log(`server error ${error.message}`);
        process.exit(1);
    }
}
start();