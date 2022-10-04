const express = require('express');

const router = express.Router();

const authController = require("../controllers/signuplogin");


router.post("/userregister", authController.postsignup);


module.exports = router;