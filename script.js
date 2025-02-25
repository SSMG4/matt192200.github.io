function toggleMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");

    // Change the button color based on the mode
    const modeButton = document.getElementById("mode-switch");
    if (body.classList.contains("dark-mode")) {
        modeButton.textContent = "Switch to Light Mode";
    } else {
        modeButton.textContent = "Switch to Dark Mode";
    }
}

// Initially set the mode based on the user's preference
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add("dark-mode");
} else {
    document.body.classList.add("light-mode");
}
