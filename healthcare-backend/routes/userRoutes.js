const express = require('express');
const { loginUser, verifyOTP } = require('../controllers/userController');
const router = express.Router();

router.post('/login', loginUser); // Route for login
router.post('/verify-otp', verifyOTP); // Route for OTP verification

module.exports = router;
