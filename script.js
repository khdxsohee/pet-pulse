document.addEventListener('DOMContentLoaded', () => {
    const modeToggleButton = document.getElementById('mode-toggle');
    const body = document.body;

    // Check for user's preferred mode from localStorage
    const savedMode = localStorage.getItem('theme');
    if (savedMode) {
        body.classList.add(savedMode);
        // Update button icon based on the loaded mode
        updateToggleButtonIcon(savedMode === 'light-mode');
    } else {
        // Default to dark mode if no preference is saved
        body.classList.remove('light-mode');
        updateToggleButtonIcon(false); // Default is dark, so show moon icon
    }

    modeToggleButton.addEventListener('click', () => {
        // Toggle the 'light-mode' class on the body
        body.classList.toggle('light-mode');

        // Check the current mode after toggling
        const isLightMode = body.classList.contains('light-mode');

        // Save the preference to localStorage
        localStorage.setItem('theme', isLightMode ? 'light-mode' : 'dark-mode');

        // Update the button icon
        updateToggleButtonIcon(isLightMode);
    });

    // Function to update the button icon
    function updateToggleButtonIcon(isLightMode) {
        const icon = modeToggleButton.querySelector('i');
        if (isLightMode) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
});