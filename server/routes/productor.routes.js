const express = require('express');
const router = express.Router();

const productor = require('../controllers/productor.controller');

router.get('/', productor.getProductores);
router.post('/', productor.createProductor);
router.get('/:id', productor.getProductor );
router.put('/:id', productor.editProductor);
router.delete('/:id', productor.deleteProductor);

module.exports = router;