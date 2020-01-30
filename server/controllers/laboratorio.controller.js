const Laboratorio = require('../models/laboratorio');
const laboratorioCtrl = {}

laboratorioCtrl.getLaboratorios = async (req, res) => {
    const laboratorios = await Laboratorio.find();
    res.json(laboratorios);
};

laboratorioCtrl.createLaboratorio = async (req, res) => {
    const laboratorio = new Laboratorio(req.body);
    // console.log(sala);
    await laboratorio.save();
    res.json({
        'status': 'Laboratorio Saved'
    });
};

laboratorioCtrl.getLaboratorio = async (req, res) =>{
    const laboratorio = await Laboratorio.findById(req.params.id);
    res.json(laboratorio);
};

laboratorioCtrl.editLaboratorio = async (req, res) =>{
    const { id } = req.params;
    const laboratorio = {
        nombre: req.body.nombre,
        direccion: req.body.direccion
    };
    await Laboratorio.findByIdAndUpdate(id, {$set: laboratorio}, {new: true});
    res.json({status: 'Laboratorio Updated'});
};

laboratorioCtrl.deleteLaboratorio = async (req, res) =>{
    await Laboratorio.findByIdAndRemove(req.params.id);
    res.json({status: 'Laboratorio Deleted'});
};

module.exports = laboratorioCtrl;