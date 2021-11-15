// ROUTES
const express = require('express');

const main = require('../controllers/main');



const router = express.Router();


router.route('/').get(main);




module.exports = router




