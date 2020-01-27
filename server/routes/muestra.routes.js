const express = require('express');
const router = express.Router();

const muestra = require('../controllers/muestra.controller');

router.get('/', muestra.getMuestras);
router.post('/', muestra.createMuestra);
router.get('/:id', muestra.getMuestra );
router.put('/:id', muestra.editMuestra);
router.delete('/:id', muestra.deleteMuestra);

module.exports = router;