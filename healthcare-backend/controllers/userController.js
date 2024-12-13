const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const sendEmail = require('../utils/sendEmail'); // Importing the email utility

// Secret key for JWT (should be stored in .env)
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Login function
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      JWT_SECRET,
      { expiresIn: '1h' } // Token expires in 1 hour
    );

    
    if (user.isDefault) {
      // Default accounts: Static OTP for testers
      return res.status(200).json({
        message: 'Login successful',
        otp: '12345', // Static OTP for default accounts
        isOtpSent: true, // Flag to indicate OTP is required
        role: user.role,
        isDefault: true,
        token,
      });
    }

    // Non-default accounts: Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
    const otpExpires = Date.now() + 5 * 60 * 1000; // Expires in 5 minutes

    user.otp = otp;
    user.otpExpires = otpExpires;
    await user.save();

    // Send OTP to user's email
    await sendEmail(
      user.email,
      'Your OTP for Login',
      `Your OTP is ${otp}. It will expire in 5 minutes.`
    );

    res.status(200).json({ message: 'OTP sent to your email', 
      isOtpSent: true, // Flag to indicate OTP is required
      token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// OTP Verification function
exports.verifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // For default accounts, skip OTP expiration check
    if (user.isDefault) {
      if (user.otp !== otp) {
        console.log(`Provided OTP: ${otp}, User OTP: ${user.otp}`);
        return res.status(400).json({ message: 'Invalid OTP' });
      }

      return res.status(200).json({ message: 'OTP verified successfully (Default Account)' });
    }

    // For non-default accounts, verify OTP and expiration
    if (user.otp !== otp) {
      console.log(`Provided OTP: ${otp}, User OTP: ${user.otp}`);
      return res.status(400).json({ message: 'Invalid OTP' });
    }

    if (Date.now() > user.otpExpires) {
      return res.status(400).json({ message: 'OTP expired' });
    }

    // Clear OTP fields after successful verification
    user.otp = null;
    user.otpExpires = null;
    await user.save();

    res.status(200).json({ message: 'OTP verified successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
