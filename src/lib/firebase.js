import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

let app;

const firebaseConfig = {
    apiKey: process.env.FIREBASE_PUBLIC_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
};

if (getApps().length) {
    app = getApp();
} else {
    app = initializeApp(firebaseConfig);
}

const auth = getAuth(app);

export default auth;
