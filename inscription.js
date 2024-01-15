/* 
document.addEventListener('DOMContentLoaded', function() {
    let form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        let username = document.getElementById('exampleInputName1').value;
        var email = document.getElementById('exampleInputEmail1').value;
        var password = document.getElementById('exampleInputPassword1').value;
        var confirmPassword = document.getElementById('exampleInputPassword1').value;
        if (username === '' || email === '' || password === '' || confirmPassword === '') {
            alert('Veuillez remplir tous les champs du formulaire.');
            event.preventDefault(); // Empêche la soumission du formulaire
        } else if (password !== confirmPassword) {
            alert('Les mots de passe ne correspondent pas.');
            event.preventDefault(); // Empêche la soumission du formulaire
        }else {
            window.location.href = 'app_home.html';
            event.preventDefault();
        }
        // Vous pouvez ajouter d'autres validations si nécessaire
    });
});
 */
document.addEventListener('DOMContentLoaded', function () {
    // Sélectionnez le formulaire d'inscription
    const registrationForm = document.querySelector('form');

    // Écoutez l'événement de soumission du formulaire
    registrationForm.addEventListener('submit', function (event) {
        // Empêchez le formulaire de se soumettre normalement
        event.preventDefault();

        // Récupérez les valeurs des champs du formulaire
        const username = document.getElementById('exampleInputName1').value;
        const email = document.getElementById('exampleInputEmail1').value;
        const password = document.getElementById('exampleInputPassword1').value;

        // Vérifiez si tous les champs sont remplis
        if (username && email && password) {
            // Créez un objet utilisateur avec les données du formulaire
            const user = {
                username: username,
                email: email,
                password: password
            };

            // Stockez les informations de l'utilisateur dans le LocalStorage
            localStorage.setItem('user', JSON.stringify(user));

            // Redirigez l'utilisateur vers la page d'accueil après l'inscription
            window.location.href = 'app_home.html';
        } else {
            // Affichez un message d'erreur si tous les champs ne sont pas remplis
            alert('Veuillez remplir tous les champs du formulaire.');
        }
    });
});
