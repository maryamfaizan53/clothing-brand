document.getElementById('contactForm')?.addEventListener('submit', function(event: Event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('name') as HTMLInputElement | null;
    if (nameInput) {
        alert('Thank you for contacting us, ' + nameInput.value + '!');
    }
});
