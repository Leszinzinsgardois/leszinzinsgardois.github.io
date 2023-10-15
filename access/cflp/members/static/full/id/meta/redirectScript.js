document.addEventListener('DOMContentLoaded', function () {
  const referrer = document.referrer;

  // Vérifier s'il y a un referrer et qu'il contient "?password-check=true"
  const urlParams = new URLSearchParams(referrer.split('?')[1]);

  if (urlParams.get('password-check') !== 'true') {
      alert('Accès non autorisé');
      window.stop();
      window.location.replace('login.html');  // Redirige vers la page de connexion
  }
});


  