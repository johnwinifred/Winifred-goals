

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
    const currentDayIndex = now.getDay();
    const currentDayName =["Sunday", "Monday" ,"Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = currentDayName[currentDayIndex];
    const currentTime = now.toUTCString().split(' ')[4];
    
    document.querySelector('.current-day').innerText = currentDay;
    document.querySelector('.current-time').innerText = currentTime;
}
updateDayTime();
setInterval(updateDayTime, 1000);


function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}
