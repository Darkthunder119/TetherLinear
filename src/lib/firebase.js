import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

let app;

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_PUBLIC_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
};

if (getApps().length) {
    app = getApp();
} else {
    app = initializeApp(firebaseConfig);
}

const auth = getAuth(app);

export default auth;
