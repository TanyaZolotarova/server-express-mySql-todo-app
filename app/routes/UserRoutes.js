const users = require('../controllers/UserController.js');
const router = require('express').Router();

router.get('/', users.findAll);
router.get('/one', users.findOne);
router.post('/', users.create);
router.delete('/:id', users.delete);

module.exports = router;