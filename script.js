document.addEventListener('DOMContentLoaded', function () {
    const nightModeToggle = document.getElementById('nightModeToggle');
    const body = document.body;

    nightModeToggle.addEventListener('click', function () {
        body.classList.toggle('night-mode');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Check if user prefers dark color scheme
    if (prefersDarkScheme.matches) {
        document.body.classList.add('night-mode');
    } else {
        document.body.classList.remove('night-mode');
    }

    // Listen for changes in color scheme preference
    prefersDarkScheme.addEventListener('change', function (event) {
        if (event.matches) {
            document.body.classList.add('night-mode');
        } else {
            document.body.classList.remove('night-mode');
        }
    });
});
