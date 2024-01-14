
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
