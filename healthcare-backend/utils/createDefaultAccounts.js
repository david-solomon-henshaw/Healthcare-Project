const User = require('../models/User'); // Adjust path if needed
const bcrypt = require('bcrypt');

const createDefaultAccounts = async () => {
    const defaultUsers = [ 
        { 
          firstName: 'Admin', 
          lastName: 'User', 
          email: 'admin@example.com', 
          password: 'Admin@123', 
          role: 'Admin',
          isDefault: true,
          otp: "12345",
          otpExpires: null
        },
        { 
          firstName: 'Caregiver', 
          lastName: 'User', 
          email: 'caregiver@example.com', 
          password: 'Caregiver@123', 
          role: 'Caregiver',
          isDefault: true,
          otp: "12345",
          otpExpires: null
        },
        { 
          firstName: 'Doctor', 
          lastName: 'User', 
          email: 'doctor@example.com', 
          password: 'Doctor@123', 
          role: 'Doctor',
          isDefault: true,
          otp: "12345",
          otpExpires: null
        },
        { 
          firstName: 'Nurse', 
          lastName: 'User', 
          email: 'nurse@example.com', 
          password: 'Nurse@123', 
          role: 'Nurse',
          isDefault: true,
          otp: "12345",
          otpExpires: null
        },
      ];
          

      for (const userData of defaultUsers) { 
        const existingUser = await User.findOne({ email: userData.email });
        
        if (!existingUser) {
          const hashedPassword = await bcrypt.hash(userData.password, 10);
          
          await User.create({
            firstName: userData.firstName, // Added firstName
            lastName: userData.lastName, // Added lastName
            email: userData.email,
            password: hashedPassword,
            role: userData.role,
            isDefault: true, // Set to true for default accounts
            otp: "12345", // Default value
            otpExpires: null, // Default value
          });
          console.log(`Default account created: ${userData.email}`);
        } else {
          console.log(`Default account already exists: ${userData.email}`);
        }
      }
      
};

module.exports = createDefaultAccounts;
