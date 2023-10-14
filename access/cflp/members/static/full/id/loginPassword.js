const users = [
    { username: 'admin', password: 'admin' },
    { username: '07120884657', password: 'cflpprevert', id:'Antony' }
  ];
  
  function validateUser(username, password) {
    return users.some(user => user.username === username && user.password === password);
  }
  
  function loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username && password && validateUser(username, password)) {
      alert('Connexion réussie ! Redirection vers la page d\'administration.');
      window.location.href = `admin.html?username=${username}`;
    } else {
      alert('Identifiants incorrects. Veuillez réessayer.');
    }
  }
