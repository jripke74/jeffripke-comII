const express = require('express');

const generalController = require('../controllers/general');

const router = express.Router();

router.get('/', generalController.getIndex);

module.exports = router;
