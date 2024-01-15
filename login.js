
document.addEventListener('DOMContentLoaded', function () {
    // Sélectionnez le formulaire de connexion
    const loginForm = document.querySelector('form');

    // Écoutez l'événement de soumission du formulaire
    loginForm.addEventListener('submit', function (event) {
        // Empêchez le formulaire de se soumettre normalement
        event.preventDefault();

        // Récupérez les valeurs des champs du formulaire
        const email = document.getElementById('exampleInputEmail1').value;
        const password = document.getElementById('exampleInputPassword1').value;

        // Vérifiez si tous les champs sont remplis
        if (email && password) {
            // Récupérez les informations de l'utilisateur depuis le LocalStorage
            const storedUser = JSON.parse(localStorage.getItem('user'));

            // Vérifiez si les informations de connexion sont correctes
            if (storedUser && storedUser.email === email && storedUser.password === password) {
                // Stockez les informations de l'utilisateur dans le LocalStorage après la connexion
                localStorage.setItem('loggedInUser', JSON.stringify(storedUser));

                // Redirigez l'utilisateur vers la page d'accueil après la connexion
                window.location.href = 'app_home.html';
            } else {
                // Affichez un message d'erreur si les informations de connexion sont incorrectes
                alert('Adresse e-mail ou mot de passe incorrect.');
            }
        } else {
            // Affichez un message d'erreur si tous les champs ne sont pas remplis
            alert('Veuillez remplir tous les champs du formulaire.');
        }
    });
});

/* document.addEventListener('DOMContentLoaded', function() {
    let form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        var email = document.getElementById('exampleInputEmail1').value;
        var password = document.getElementById('exampleInputPassword1').value;
        if (email === '' || password === '') {
            alert('Veuillez remplir tous les champs du formulaire.');
            event.preventDefault(); // Empêche la soumission du formulaire
        }else {
            window.location.href = 'app_home.html';
            event.preventDefault();
        }
        // Vous pouvez ajouter d'autres validations si nécessaire
    });
}); */
const logLinkdn = document.querySelector('.log-linkdn');
logLinkdn.addEventListener('click', (e)=>{
    window.location.href = 'https://www.linkedin.com/company/ninetec/';
    e.preventDefault();
});
const logFacebook = document.querySelector('.log-facebook');
logFacebook.addEventListener('click', (e)=>{
    window.location.href = 'https://www.facebook.com/ninetec.ne';
    e.preventDefault();
});
const logInstagram = document.querySelector('.log-instagram');
logInstagram.addEventListener('click', (e)=>{
    window.location.href = '';
    e.preventDefault();
});
