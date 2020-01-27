const Presupuesto = require('../models/presupuesto');
const presupuestoCtrl = {}

presupuestoCtrl.getPresupuestos = async (req, res) => {
    const presupuestos = await Presupuesto.find();
    res.json(presupuestos);
};

presupuestoCtrl.createPresupuesto = async (req, res) => {
    const presupuesto = new Presupuesto(req.body);
    // console.log(presupuesto);
    await presupuesto.save();
    res.json({
        'status': 'Presupuesto Saved'
    });
};

presupuestoCtrl.getPresupuesto = async (req, res) =>{
    const presupuesto = await Presupuesto.findById(req.params.numero);
    res.json(presupuesto);
};

presupuestoCtrl.editPresupuesto = async (req, res) =>{
    const { id } = req.params;
    const presupuesto = {
        numero: req.body.numero,
        fechaIngreso: req.body.fechaIngreso,
        prductor: req.body.prductor,
        sala: req.body.sala,
        muestras: req.body.muestras
    };
    await Presupuesto.findByIdAndUpdate(id, {$set: presupuesto}, {new: true});
    res.json({status: 'Presupuesto Updated'});
};

presupuestoCtrl.deletePresupuesto = async (req, res) =>{
    await Presupuesto.findByIdAndRemove(req.params.id);
    res.json({status: 'Presupuesto Deleted'});
};

module.exports = presupuestoCtrl;
