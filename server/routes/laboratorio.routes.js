const express = require('express');
const router = express.Router();

const laboratorio = require('../controllers/laboratorio.controller');

router.get('/', laboratorio.getLaboratorios);
router.post('/', laboratorio.createLaboratorio);
router.get('/:id', laboratorio.getLaboratorio);
router.put('/:id', laboratorio.editLaboratorio);
router.delete('/:id', laboratorio.deleteLaboratorio);

module.exports = router;