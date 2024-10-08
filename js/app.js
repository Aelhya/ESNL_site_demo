document.getElementById('registrationForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Empêche le formulaire de se soumettre immédiatement

  // Vérifie que tous les champs sont remplis
  let nom = document.getElementById('nom').value.trim();
  let prenom = document.getElementById('prenom').value.trim();
  let email = document.getElementById('email').value.trim();
  let codePostal = document.getElementById('code_postal').value.trim();
  let ville = document.getElementById('ville').value.trim();

  if (nom && prenom && email && codePostal && ville) {
    alert("Tout est OK !");
  } else {
    alert("Il y a des erreurs dans le formulaire. Veuillez vérifier tous les champs.");
  }
});
