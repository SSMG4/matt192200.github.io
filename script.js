// Switch mode on icon click
const modeIcon = document.getElementById('mode-icon');
const body = document.body;

modeIcon.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        modeIcon.classList.remove('fa-moon');
        modeIcon.classList.add('fa-sun');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        modeIcon.classList.remove('fa-sun');
        modeIcon.classList.add('fa-moon');
    }
});
