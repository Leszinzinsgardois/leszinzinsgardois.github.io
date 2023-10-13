const users = [
    { username: "admin", password: "cflpprevert" },
    // Ajoutez d'autres utilisateurs ici
  ];
  
  function redirectToLogin() {
    window.location.href = 'login.html';
  }
  
  function validateUser(username) {
    return users.some(user => user.username === username);
  }
  