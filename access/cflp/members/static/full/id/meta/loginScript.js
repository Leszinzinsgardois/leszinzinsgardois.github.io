const credentials = {
  'admin': 'admin', // Compte Admin
  '35848267': 'cflpprevert_fonda', // Compte Antony
  '12482523': 'aksel_cflp_prevert', // Compte Aksel
  '1934942': 'lina_cflp_prevert',
  '12847351': 'aymeric_cflp_prevert',
  '2342593586':'doryan_cflp_prevert',
  '29349259':'katya_cflp_prevert',
  '283845234': 'laurie_cflp_prevert',
  '346678312': 'léane_cflp_prevert',
  '314828512': 'maxance_cflp_prevert',
  '8238584': 'roxane_cflp_prevert',
  '19499425': 'tiphaine_cflp_prevert',
  '13484251': 'camille_cflp_prevert'

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