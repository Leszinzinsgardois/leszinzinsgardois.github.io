function loginUser() {
    const username = document.getElementById('username').value;
  
    if (validateUser(username)) {
      window.location.href = `admin.html?username=${username}`;
    } else {
      alert('Nom d\'utilisateur incorrect. Veuillez réessayer.');
    }
  }
  