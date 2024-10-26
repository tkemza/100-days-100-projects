const button = document.getElementById('toggle-button');
const body = document.body;

// Set initial mode based on user's preference or default to light mode
if (localStorage.getItem('mode') === 'dark') {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
    button.textContent = 'Switch to Light Mode';
} else {
    body.classList.add('light-mode');
    button.textContent = 'Switch to Dark Mode';
}

// Toggle dark mode and light mode
button.addEventListener('click', () => {
    if (body.classList.contains('light-mode')) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        button.textContent = 'Switch to Light Mode';
        localStorage.setItem('mode', 'dark');
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        button.textContent = 'Switch to Dark Mode';
        localStorage.setItem('mode', 'light');
    }
});
