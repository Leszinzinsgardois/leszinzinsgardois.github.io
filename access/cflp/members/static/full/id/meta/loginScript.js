const credentials = {
  'admin': 'admin', // Compte Admin
  '35848267': '...' // Compte Antony
  // Données utilisateurs ici
};

function login() {
  const identifiant = document.getElementById('identifiant').value;
  const motDePasse = document.getElementById('motDePasse').value;

  if (credentials[identifiant] && credentials[identifiant] === motDePasse) {
      window.location.href = `user/${identifiant}.html`;
  } else {
      alert('Identifiant ou mot de passe incorrect, veuillez réessayer');
  }
}



