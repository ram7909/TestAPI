const express = require('express');
require('dotenv').config(); // <-- ADD THIS LINE
const app = express();
const userRoutes = require('./routes/userRoutes');

// Middleware to parse JSON
app.use(express.json());

// Use user routes
app.use('/api/user', userRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
