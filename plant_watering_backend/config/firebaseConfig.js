require('dotenv').config(); // Load environment variables from the .env file
const { initializeApp } = require('firebase/app');
const { getDatabase } = require('firebase/database');
const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");

// Load Firebase config from environment variables
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize the Realtime Database
const database = getDatabase(app);
const auth = getAuth(app);

const authenticateBackend = async () => {
  try {
    const email = process.env.FIREBASE_EMAIL; // Load email from .env
    const password = process.env.FIREBASE_PASSWORD; // Load password from .env
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Backend authenticated successfully:", userCredential.user.uid);
  } catch (error) {
    console.error("Error authenticating backend:", error.message);
  }
};

// Call the authentication function at startup
authenticateBackend();

module.exports = { database };
