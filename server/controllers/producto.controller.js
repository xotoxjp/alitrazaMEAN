const Producto = require('../models/producto');
const productoCtrl = {}

productoCtrl.getProductos = async (req, res) => {
    const productos = await Producto.find();
    res.json(productos);
};

productoCtrl.createProducto = async (req, res) => {
    const producto = new Producto(req.body);
    // console.log(sala);
    await producto.save();
    res.json({
        'status': 'Producto Saved'
    });
};

productoCtrl.getProducto = async (req, res) =>{
    const producto = await Producto.findById(req.params.id);
    res.json(producto);
};

productoCtrl.editProducto = async (req, res) =>{
    const { id } = req.params;
    const producto = {
        nombre: req.body.nombre
    };
    await Producto.findByIdAndUpdate(id, {$set: producto}, {new: true});
    res.json({status: 'Producto Updated'});
};

productoCtrl.deleteProducto = async (req, res) =>{
    await Producto.findByIdAndRemove(req.params.id);
    res.json({status: 'Producto Deleted'});
};

module.exports = productoCtrl;