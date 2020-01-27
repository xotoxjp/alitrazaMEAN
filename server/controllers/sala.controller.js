const Sala = require('../models/sala');
const salaCtrl = {}

salaCtrl.getSalas = async (req, res) => {
    const salas = await Sala.find();
    res.json(salas);
};

salaCtrl.createSala = async (req, res) => {
    const sala = new Sala(req.body);
    // console.log(sala);
    await sala.save();
    res.json({
        'status': 'Sala Saved'
    });
};

salaCtrl.getSala = async (req, res) =>{
    const sala = await Sala.findById(req.params.codigo);
    res.json(sala);
};

salaCtrl.editSala = async (req, res) =>{
    const { id } = req.params;
    const sala = {
        codigo: req.body.codigo
    };
    await Sala.findByIdAndUpdate(id, {$set: sala}, {new: true});
    res.json({status: 'Sala Updated'});
};

salaCtrl.deleteSala = async (req, res) =>{
    await Sala.findByIdAndRemove(req.params.id);
    res.json({status: 'Sala Deleted'});
};

module.exports = salaCtrl;