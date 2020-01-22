const Productor = require('../models/productor');
const productorCtrl = {}

productorCtrl.getProductores = async (req, res) => {
    const productores = await Productor.find();
    res.json(productores);
};

productorCtrl.createProductor = async (req, res) => {
    const productor = new Productor(req.body);
    // console.log(productor);
    await productor.save();
    res.json({
        'status': 'Employee Saved'
    });
};

productorCtrl.getProductor = async (req, res) =>{
    const productor = await Productor.findById(req.params.id);
    res.json(productor);
};

productorCtrl.editProductor = async (req, res) =>{
    const { id } = req.params;
    const productor = {
        nombre: req.body.nombre,
        renapa: req.body.renapa,
        direccion: req.body.direccion,
        localidad: req.body.localidad,
        provincia: req.body.provincia,
        email: req.body.email,
        telefono: req.body.telefono,
        tipo: req.body.tipo
    };
    await Productor.findByIdAndUpdate(id, {$set: productor}, {new: true});
    res.json({status: 'Productor Updated'});
};

productorCtrl.deleteProductor = async (req, res) =>{
    await Productor.findByIdAndRemove(req.params.id);
    res.json({status: 'Employee Deleted'});
};

module.exports = productorCtrl;