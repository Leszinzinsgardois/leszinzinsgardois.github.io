const urlParams = new URLSearchParams(window.location.search);
const passwordParam = urlParams.get('password');

if (passwordParam === 'true') {
  console.log("Mot de passe correct. Accès autorisé à la page d'administration.");
} else {
  console.log("Mot de passe incorrect. Redirection vers la page de mot de passe.");
  window.location.href = 'login.html';
}
