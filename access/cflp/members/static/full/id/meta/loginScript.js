const credentials = {
  'admin': 'admin',
  '08438584213445': 'test'
  // Données utilisateurs ici
};

function login() {
  const identifiant = document.getElementById('identifiant').value;
  const motDePasse = document.getElementById('motDePasse').value;

  if (credentials[identifiant] && credentials[identifiant] === motDePasse) {
      window.location.href = `${identifiant}.html`;
  } else {
      alert('Identifiant ou mot de passe incorrect, veuillez réessayer');
  }
}



