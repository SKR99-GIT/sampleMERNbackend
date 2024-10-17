const express = require('express'); /* Import the express module*/
const app = express();/*Create an instance of the express app*/
const cors = require('cors');
const port = 3001;
const host = 'localhost'
const mongoose = require('mongoose');
const router = require('./router')

app.use(cors());
app.use(express.json());

const uri = 'mongodb://localhost:27017';

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('connected to MongoDB');
        
    } catch (error) {
        console.log('MongoDB Error ', error );
        
    }
}

connect();

/* node js ek runkrnn server ekk hadann puluwn menn mehema */
const server = app.listen(3001, '127.0.0.1',() => {
    console.log(`Node Server is Listning to ${server.address().port}`);
    
}); /* request responce share wena express apllication ekat listen krnn kiyl command ekk denn puluwn */

/* samanyen mehema kallak dagann mek api url ekk kiyl specify krnnd */
app.use('/api', router)