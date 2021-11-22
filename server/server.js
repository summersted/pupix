//exports we need
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const config = require('config');
const mongoose = require('mongoose');

const app = express();

const PORT = config.get('port') || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//connect auth and update user data router
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/update', require('./routes/updateData.routes'));
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