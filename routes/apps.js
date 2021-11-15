// ROUTES
const express = require('express');

const basicApps = require('../controllers/apps');



const router = express.Router();


router.route('/').get(basicApps);




module.exports = router



