var phoneInputs = document.querySelectorAll('input[name="user-tel"]');
phoneInputs.forEach(function (phoneInput) {
    phoneInput.addEventListener('input', function (e) {
        var target = e.target,
            position = target.selectionStart;
        if (target.value.length === 0) {
            target.value = '+380';
        } else if (position <= 4 && target.value.substring(0, 4) !== '+380') {
            target.value = '+380' + target.value.substring(4);
        }
        target.selectionEnd = target.selectionStart = Math.max(position, 4);
    });
    phoneInput.addEventListener('blur', function (e) {
        var target = e.target;
        if (target.value === '+380') {
            target.value = '';
        }
    });
    phoneInput.addEventListener('keypress', function (e) {
        if (!/[0-9]/.test(String.fromCharCode(e.which))) {
            e.preventDefault();
        }
    });
});
