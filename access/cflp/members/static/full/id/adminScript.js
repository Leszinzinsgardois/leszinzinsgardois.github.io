function redirectToLogin() {
    window.location.href = 'login.html';
  }
  
  function displayWelcomeMessage() {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
  
    if (!username || !validateUser(username)) {
      redirectToLogin();
    } else {
      const welcomeMessage = document.getElementById('welcome-message');
      welcomeMessage.innerText = `Bienvenue, ${username} !`;
    }
  }
  
  // Récupération des IDs à partir de commonScript
  const commonScript = document.getElementById('commonScript');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  
  // Vérification si l'utilisateur est connecté avant d'afficher la page
  displayWelcomeMessage();