const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.static('D:/JDGIFTS/src/components/public')); // Serve static files (like images)

// API route to get products from data.json
app.get('/api/products', (req, res) => {
  fs.readFile(path.join(__dirname, 'public', 'data.json'), 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the data.json file:', err);
      return res.status(500).json({ message: 'Server error' });
    }
    const products = JSON.parse(data);
    res.json(products.products); // Send the products array from the JSON file
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}api/products`);
});
