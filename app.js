

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

function updateDayTime() {
    const now = new Date();
    const optionsDay = { 
        weekday: 'long',   
    };
    const optionsTime = {
        hour: 'numeric', 
        minute: 'numeric', 
        second: 'numeric',
        hour12: true
    };
    const currentDay = now.toLocaleDateString('en-US', optionsDay);
    const currentTime = now.toLocaleTimeString('en-US', optionsTime);
    
    document.querySelector('.current-day').innerText = currentDay;
    document.querySelector('.current-time').innerText = currentTime;
}
updateDayTime();
setInterval(updateDayTime, 1000);


function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}
