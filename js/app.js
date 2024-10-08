// Fonction pour calculer la somme
document.getElementById('calculateBtn').addEventListener('click', function() {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    const resultElement = document.getElementById('result');

    if (!isNaN(num1) && !isNaN(num2)) {
        const sum = num1 + num2;
        resultElement.textContent = `La somme est : ${sum}`;
    } else {
        resultElement.textContent = "Veuillez entrer des nombres valides.";
    }
});

// Fonction pour valider le formulaire
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const age = document.getElementById('age');
    const password = document.getElementById('password');

    let isValid = true; // Pour suivre si le formulaire est valide

    // Réinitialiser les erreurs
    firstName.classList.remove('error');
    lastName.classList.remove('error');
    age.classList.remove('error');
    password.classList.remove('error');
    document.getElementById('firstNameError').textContent = '';
    document.getElementById('lastNameError').textContent = '';
    document.getElementById('ageError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('formMessage').textContent = '';

    // Vérifier le prénom
    if (firstName.value.trim() === '') {
        firstName.classList.add('error');
        document.getElementById('firstNameError').textContent = 'Le prénom est requis.';
        isValid = false;
    }

    // Vérifier le nom
    if (lastName.value.trim() === '') {
        lastName.classList.add('error');
        document.getElementById('lastNameError').textContent = 'Le nom est requis.';
        isValid = false;
    }

    // Vérifier l'âge
    const ageValue = parseInt(age.value);
    if (isNaN(ageValue) || ageValue <= 0) {
        age.classList.add('error');
        document.getElementById('ageError').textContent = 'L\'âge doit être un nombre positif.';
        isValid = false;
    }

    // Vérifier le mot de passe
    const passwordValue = password.value;
    const passwordErrorElement = document.getElementById('passwordError');
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/; // Règles : 1 majuscule, 1 minuscule, 1 chiffre, 8 caractères min

    if (!passwordRegex.test(passwordValue)) {
        password.classList.add('error');
        passwordErrorElement.textContent = 'Le mot de passe doit contenir au moins 8 caractères, dont 1 majuscule, 1 minuscule et 1 chiffre.';
        isValid = false;
    }

    // Afficher le message final
    const formMessageElement = document.getElementById('formMessage');
    if (isValid) {
        formMessageElement.textContent = "Le formulaire est ok.";
        formMessageElement.style.color = "green";
    } else {
        formMessageElement.textContent = "Des erreurs sont présentes.";
        formMessageElement.style.color = "red";
    }
});