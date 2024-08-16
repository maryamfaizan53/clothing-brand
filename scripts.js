var _a;
(_a = document.getElementById('contactForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameInput = document.getElementById('name');
    if (nameInput) {
        alert('Thank you for contacting us, ' + nameInput.value + '!');
    }
});
