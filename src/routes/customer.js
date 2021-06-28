const express = require('express');
const router = express.Router();
const customerController = require('../app/controllers/customerController');

router.get('/create', customerController.create);
router.get('/:slug', customerController.show);
router.post('/store', customerController.store);

module.exports = router;