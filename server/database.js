const mongoose = require('mongoose');

const URI = 'mongodb://localhost/alitrazadb';

mongoose.connect(URI, 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,  
        useNewUrlParser: true,
        useCreateIndex: true, 
        useFindAndModify: false 
    } )
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;