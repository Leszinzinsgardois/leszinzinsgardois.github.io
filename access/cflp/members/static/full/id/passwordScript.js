const correctPassword = "cflp prevert"; // Remplacez par votre mot de passe

function checkPassword() {
  const passwordInput = document.getElementById('password').value;
  if (passwordInput === correctPassword) {
    // Redirection vers la page d'administration avec le bon paramètre
    window.location.href = 'admin.html?password=true';
  } else {
    alert('Mot de passe incorrect. Veuillez réessayer.');
  }
}

