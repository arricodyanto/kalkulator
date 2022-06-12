const recordsController = require('../controllers/records-controller')

const router = require('express').Router()

router.get('/', recordsController.list)
router.post('/add', recordsController.add)

module.exports = router