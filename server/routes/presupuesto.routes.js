const express = require('express');
const router = express.Router();

const presupuesto = require('../controllers/presupuesto.controller');

router.get('/', presupuesto.getPresupuestos);
router.post('/', presupuesto.createPresupuesto);
router.get('/:id', presupuesto.getPresupuesto );
router.put('/:id', presupuesto.editPresupuesto);
router.delete('/:id', presupuesto.deletePresupuesto);

module.exports = router;