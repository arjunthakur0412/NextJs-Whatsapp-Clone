import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
	apiKey: 'AIzaSyAgLxmk-tcu0H9kHK9e5rw6zrevSDUWbD8',
	authDomain: 'whatsapp-clone-ef293.firebaseapp.com',
	projectId: 'whatsapp-clone-ef293',
	storageBucket: 'whatsapp-clone-ef293.appspot.com',
	messagingSenderId: '707265335729',
	appId: '1:707265335729:web:a8e8524a5295d0b05d2d90',
	measurementId: 'G-X89VRPLDJ8'
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
