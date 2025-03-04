document.getElementById('lead-capture-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    if (name && email) {
        alert(`Thank you, ${name}, for your interest in AI in Healthcare! Stay tuned for more updates.`);
    } else {
        alert('Please fill out all required fields.');
    }
});
