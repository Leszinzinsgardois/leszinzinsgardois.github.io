function loginUser() {
    // Récupération des IDs à partir de commonScript
    const commonScript = document.getElementById('commonScript');
    const usernameInput = commonScript ? commonScript.querySelector('#username') : null;
    const passwordInput = commonScript ? commonScript.querySelector('#password') : null;
  
    const username = usernameInput ? usernameInput.value : '';
    const password = passwordInput ? passwordInput.value : '';
  
    if (username && password && validateUser(username)) {
      window.location.href = `admin.html?username=${username}`;
    } else {
      alert('Identifiants incorrects. Veuillez réessayer.');
    }
  }
  