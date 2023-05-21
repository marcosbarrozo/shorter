const router = require('express').Router();

const contactsController = require('../controllers/users');

router.get('/', contactsController.getAllUsers);
router.get('/:id', contactsController.getSingleUser);
router.post('/', contactsController.createUser);


module.exports = router;



