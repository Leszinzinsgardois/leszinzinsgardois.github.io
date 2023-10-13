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
  
  displayWelcomeMessage();
  