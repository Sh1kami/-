var nameInputs = document.querySelectorAll('input[name="user-name"]');
nameInputs.forEach(function (nameInput) {
    nameInput.addEventListener('keypress', function (e) {
        if (!/[a-zA-Zа-яА-Я-єЄ-Ґґ]/.test(String.fromCharCode(e.which))) {
            e.preventDefault();
        }
    });
});
