const Muestra = require('../models/muestra');
const muestraCtrl = {}

muestraCtrl.getMuestras = async (req, res) => {
    const muestras = await Muestra.find();
    res.json(muestras);
};

muestraCtrl.createMuestra = async (req, res) => {
    const muestra = new Muestra(req.body);
    // console.log(productor);
    await muestra.save();
    res.json({
        'status': 'Muestra Saved'
    });
};

muestraCtrl.getMuestra = async (req, res) =>{
    const muestra = await Muestra.findById(req.params.id);
    res.json(muestra);
};

muestraCtrl.editMuestra = async (req, res) =>{
    const { id } = req.params;
    const muestra = {
        numero: req.body.muestra,
        prductor: req.body.prductor,
        valorHMF: req.body.valorHMF,
        valorColor: req.body.valorColor,
        valorHumedad: req.body.valorHumedad,
        valorAcidez: req.body.valorAcidez,
        resultado: req.body.resultado,
        fechaAnalisis: req.body.fechaAnalisis,
    };
    await Muestra.findByIdAndUpdate(id, {$set: muestra}, {new: true});
    res.json({status: 'Muestra Updated'});
};

muestraCtrl.deleteMuestra = async (req, res) =>{
    await Muestra.findByIdAndRemove(req.params.id);
    res.json({status: 'Muestra Deleted'});
};

module.exports = muestraCtrl;