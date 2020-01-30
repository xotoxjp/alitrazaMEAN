const express = require ('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');

const { mongoose } = require('./database');

// Initilizations


// settings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http//localhost:4200'}));


// routes
app.use('/productores', require('./routes/productor.routes'));
app.use('/salas', require('./routes/sala.routes'));
app.use('/presupuestos', require('./routes/presupuesto.routes'));
app.use('/muestras', require('./routes/muestra.routes'));
app.use('/laboratorios', require('./routes/laboratorio.routes'));
app.use('/productos', require('./routes/producto.routes'));
app.use('/analisis', require('./routes/analisis.routes'));

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});