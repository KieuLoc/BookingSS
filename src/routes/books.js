const express = require('express');
const router = express.Router();
const bookController = require('../app/controllers/BookController');

router.get('/create', bookController.create);
router.get('/:slug', bookController.show);
router.get('/:id/edit', bookController.edit)
router.put('/:id', bookController.update)
router.delete('/:id', bookController.destroy)
router.post('/store', bookController.store);

module.exports = router;