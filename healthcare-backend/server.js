const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Import the DB connection function
const userRoutes = require('./routes/userRoutes');
const createDefaultAccounts = require('./utils/createDefaultAccounts'); // Import default account creation function
const cors = require('cors');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON request bodies
app.use(express.json());



// Enable CORS for your React app
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your React app's URL
  // credentials: true, // Include credentials if needed (cookies, auth headers, etc.)
}));


// Connect to MongoDB and create default accounts
const initializeApp = async () => {
  try {
    await connectDB();
    await createDefaultAccounts(); // Call the function to create default accounts
  } catch (err) {
    console.error('Error during initialization:', err.message);
    process.exit(1);
  }
};

initializeApp(); 

// Routes
app.use('/api/users', userRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
