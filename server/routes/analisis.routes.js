const express = require('express');
const router = express.Router();

const analisis = require('../controllers/analisis.controller');

router.get('/', analisis.getAnalisis);
router.post('/', analisis.createAnalisis);
router.get('/:id', analisis.getOneAnalisis);
router.put('/:id', analisis.editAnalisis);
router.delete('/:id', analisis.deleteAnalisis);

module.exports = router;