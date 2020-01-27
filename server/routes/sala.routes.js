const express = require('express');
const router = express.Router();

const sala = require('../controllers/sala.controller');

router.get('/', sala.getSalas);
router.post('/', sala.createSala);
router.get('/:id', sala.getSala );
router.put('/:id', sala.editSala);
router.delete('/:id', sala.deleteSala);

module.exports = router;