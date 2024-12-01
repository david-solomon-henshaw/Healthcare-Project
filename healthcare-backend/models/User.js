const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['Admin', 'Caregiver', 'Nurse', 'Doctor', 'Patient'], default: 'Patient' },
  isDefault: { type: Boolean, default: false }, // New field for default accounts
  otp: { type: String }, // Field to store OTP
  otpExpires: { type: Date }, // Field to store OTP expiration timestamp
});

module.exports = mongoose.model('User', userSchema);
