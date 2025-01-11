require('dotenv').config(); // Load environment variables from .env file
const admin = require('firebase-admin');

// Use the path to the service account key from the .env file
const serviceAccountPath = process.env.SERVICE_ACCOUNT_KEY_PATH;

if (!serviceAccountPath) {
  throw new Error('Missing SERVICE_ACCOUNT_KEY_PATH in .env file');
}

// Initialize Firebase Admin SDK with the service account key
admin.initializeApp({
  credential: admin.credential.cert(require(serviceAccountPath)),
  databaseURL: 'https://plant-watering-system-e97b9-default-rtdb.europe-west1.firebasedatabase.app'
});

const db = admin.firestore();
module.exports = db;
