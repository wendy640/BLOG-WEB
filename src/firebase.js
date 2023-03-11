import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
	apiKey: 'AIzaSyCj70y0TiA0JXVyxQZd9qi6tMaN_mKKF24',
	authDomain: 'web-blog-b8e4e.firebaseapp.com',
	projectId: 'web-blog-b8e4e',
	storageBucket: 'web-blog-b8e4e.appspot.com',
	messagingSenderId: '351645797654',
	appId: '1:351645797654:web:0e796dee0c8879a0191437'
}


const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

export { auth, db, storage }
