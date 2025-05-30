import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { firebaseConfig } from './firebaseConfig.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const cdnScriptEl = document.getElementById('cdn-script');
const copyButton = document.querySelector('.copyButton');
const logoutButton = document.getElementById('logout-button');
const errorMessage = document.getElementById('error-message');

onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById('user-email').textContent = user.email;
    const script = `<script src="https://itmooti-codex.github.io/cdn-proj/cdn.js" data-uid="${user.uid}"><\/script>`;
    cdnScriptEl.textContent = script;
  } else {
    window.location.href = 'index.html';
  }
});

copyButton.addEventListener('click', () => {
  navigator.clipboard.writeText(cdnScriptEl.textContent)
    .then(() => alert('Script copied to clipboard!'))
    .catch((error) => {
      errorMessage.textContent = 'Failed to copy script: ' + error.message;
    });
});

logoutButton.addEventListener('click', async () => {
  try {
    await signOut(auth);
    window.location.href = 'index.html';
  } catch (error) {
    errorMessage.textContent = error.message;
  }
});
