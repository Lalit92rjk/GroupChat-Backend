const express = require('express');

const router = express.Router();

const authController = require("../controllers/signuplogin");

router.post("/userregister", authController.signup);

router.post('/userlogin', authController.login);

module.exports = router;