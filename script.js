document.addEventListener('DOMContentLoaded', () => {
    const themeSelectorButton = document.getElementById('theme-selector');
    const body = document.body;

    // Define the list of available themes
    const themes = [
        'dark-theme', // <--- Yeh pehla theme hai, aur default bhi
        'light-theme',
        'red-theme',
        'green-theme',
        'yellow-theme',
        'pink-theme',
        'chocolate-theme'
    ];

    let currentThemeIndex = 0; // Index of the current theme in the 'themes' array

    // Function to apply a theme
    function applyTheme(themeName) {
        // Remove all existing theme classes from the body
        themes.forEach(theme => body.classList.remove(theme));
        // Add the new theme class
        body.classList.add(themeName);
        // Save the current theme preference
        localStorage.setItem('theme', themeName);
    }

    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && themes.includes(savedTheme)) {
        applyTheme(savedTheme);
        currentThemeIndex = themes.indexOf(savedTheme); // Set current index
    } else {
        // Default to dark theme if no preference is saved or invalid
        applyTheme('dark-theme'); // <--- Yahan 'dark-theme' apply ho raha hai as default
        currentThemeIndex = themes.indexOf('dark-theme');
    }

    themeSelectorButton.addEventListener('click', () => {
        // Move to the next theme in the array
        currentThemeIndex = (currentThemeIndex + 1) % themes.length;
        const nextTheme = themes[currentThemeIndex];
        applyTheme(nextTheme);
    });
});