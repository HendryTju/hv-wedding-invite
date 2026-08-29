// firebase-config.js - ES Module loading Firebase SDK from CDN
import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Placeholders. User can replace this with actual credentials.
const firebaseConfig = {
  apiKey: "AIzaSyDIHQBn-rcmv2XdweLuSgCSo-dBrL6cr4Y",
  authDomain: "hvweddingbingo.firebaseapp.com",
  projectId: "hvweddingbingo",
  storageBucket: "hvweddingbingo.firebasestorage.app",
  messagingSenderId: "1034434807063",
  appId: "1:1034434807063:web:fc18c95b2278e901f16352"
};

let app;
let auth;
let db;
let isEmulated = false;

// Check if credentials have been filled in
const hasRealCredentials = 
  firebaseConfig.apiKey && 
  !firebaseConfig.apiKey.includes("YOUR_") && 
  firebaseConfig.projectId && 
  !firebaseConfig.projectId.includes("YOUR_");

if (hasRealCredentials) {
  try {
    app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);
    console.log("Firebase initialized successfully in real production mode.");
  } catch (error) {
    console.warn("Failed to initialize Firebase with provided credentials. Falling back to local emulator mode.", error);
    isEmulated = true;
  }
} else {
  console.log("Firebase credentials not set. Operating in local-only Emulated Mode.");
  isEmulated = true;
}

export { auth, db, isEmulated, firebaseConfig };
export { getApps };
export { getAuth, getFirestore };
export { initializeApp };
