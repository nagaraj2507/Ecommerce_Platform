const express = require('express');
const router = express.Router();

router.get('/',(req,res) => res.render('user_register', { layout: false }));

module.exports = router;