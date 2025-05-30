import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore, collection, doc, setDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { firebaseConfig } from './firebaseConfig.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const form = document.getElementById('signup-form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(collection(db, 'users'), userCredential.user.uid), {
      email,
      createdAt: serverTimestamp()
    });
    window.location.href = 'dashboard.html';
  } catch (error) {
    errorMessage.textContent = error.message;
  }
});
