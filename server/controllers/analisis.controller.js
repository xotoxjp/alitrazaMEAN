const Analisis = require('../models/analisis');
const analisisCtrl = {}

analisisCtrl.getAnalisis = async (req, res) => {
    const analisis = await Analisis.find();
    res.json(analisis);
};

analisisCtrl.createAnalisis = async (req, res) => {
    const analisis = new Analisis(req.body);
    // console.log(analisis);
    await analisis.save();
    res.json({
        'status': 'Analisis Saved'
    });
};

analisisCtrl.getOneAnalisis = async (req, res) =>{
    const analisis = await Analisis.findById(req.params.id);
    res.json(analisis);
};

analisisCtrl.editAnalisis = async (req, res) =>{
    const { id } = req.params;
    const analisis = {
        nombre: req.body.nombre,
        valor: req.body.valor,
        valorMIN: req.body.valorMIN,
        valorMAX: req.body.valorMAX,
        aprobado: req.body.aprobado
    };
    await Analisis.findByIdAndUpdate(id, {$set: analisis}, {new: true});
    res.json({status: 'Analisis Updated'});
};

analisisCtrl.deleteAnalisis = async (req, res) =>{
    await Analisis.findByIdAndRemove(req.params.id);
    res.json({status: 'Analisis Deleted'});
};

module.exports = analisisCtrl;