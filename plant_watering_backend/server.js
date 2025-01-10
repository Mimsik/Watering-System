const express = require('express');
const cors = require('cors');
const { ref, onValue } = require('firebase/database');
const { database } = require('./config/firebaseConfig');

const app = express();
const port = 3000;

// Enable CORS middleware for all routes
app.use(cors());

// Endpoint to send soil moisture data
let latestSoilMoisture = 0; // Store the latest soil moisture value

const soilMoistureRef = ref(database, 'SoilMoisture');
onValue(soilMoistureRef, (snapshot) => {
  if (snapshot.exists()) {
    latestSoilMoisture = snapshot.val();
    console.log('Updated SoilMoisture:', latestSoilMoisture);
  } else {
    console.log('No soil moisture data found in Firebase.');
  }
});

// Handle GET requests to '/SoilMoisture'
app.get('/SoilMoisture', (req, res) => {
  try {
    res.json({ SoilMoisture: latestSoilMoisture });
  } catch (error) {
    console.error('Error fetching soil moisture data:', error);
    res.status(500).json({ error: 'Internal server error', details: error.message });
  }
});

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${port}/`);
});
