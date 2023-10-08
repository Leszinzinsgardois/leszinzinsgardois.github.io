// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC89YrODz9EGjzP3DkvuJg8GSL6E2Tlzvk",
  authDomain: "prev-art-film-club.firebaseapp.com",
  projectId: "prev-art-film-club",
  storageBucket: "prev-art-film-club.appspot.com",
  messagingSenderId: "326975031935",
  appId: "1:326975031935:web:7aa21956423affac5a4d4a",
  measurementId: "G-93DCH2E35N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

/////////////////////////////////////////////////////////////////////////

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Empêche le rechargement de la page

  const email = loginForm.email.value;
  const password = loginForm.password.value;

  // Utilise Firebase Authentication pour authentifier l'utilisateur
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Utilisateur connecté avec succès
      const user = userCredential.user;
      console.log('Utilisateur connecté :', user);
    })
    .catch((error) => {
      // Gestion des erreurs
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Erreur de connexion :', errorMessage);
    });
});
