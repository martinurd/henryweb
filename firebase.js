// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase only on client side with error handling
let app;
let analytics;

if (typeof window !== 'undefined') {
  try {
    app = initializeApp(firebaseConfig);
    // Initialize analytics only in production and on client side
    if (process.env.NODE_ENV === 'production') {
      analytics = getAnalytics(app);
    }
  } catch (error) {
    console.error('Firebase initialization error:', error);
  }
}

// Analytics event tracking helper with error handling
export const trackEvent = (eventName, eventParams = {}) => {
  try {
    if (analytics && process.env.NODE_ENV === 'production') {
      logEvent(analytics, eventName, eventParams);
    }
  } catch (error) {
    console.error('Error tracking event:', error);
  }
};

export { analytics };