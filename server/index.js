const express = require ('express');
const app = express();
const morgan = require('morgan');

const { mongoose } = require('./database');

// Initilizations


// settings
app.set('port', process.env.PORT || 3000);
// app.set('json spaces', 2);

// middlewares
app.use(morgan('dev'));
//app.use(express.urlencoded({extended: false}));
app.use(express.json());


// routes
app.use('/productores', require('./routes/productor.routes'));


// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});