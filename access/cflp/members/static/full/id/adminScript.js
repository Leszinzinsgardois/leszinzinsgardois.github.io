const users = [
    { username: 'admin', password: 'admin' },
    { username: 'utilisateur2', password: 'password2' }
  ];
  
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
  
  function validateUser(username) {
    return users.some(user => user.username === username);
  }
  
  // Vérification si l'utilisateur est connecté avant d'afficher la page
  displayWelcomeMessage();
  