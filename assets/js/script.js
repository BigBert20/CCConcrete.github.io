// Counter animation
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id);
        if (!obj) return;
        let current = start,
            range = end - start,
            step = Math.max(Math.floor(duration / range), 10),
            timer = setInterval(() => {
                current++;
                obj.textContent = current;
                if (current >= end) clearInterval(timer);
            }, step);
    }

    counter("count1", 0, 100, 2000);
    counter("count2", 0, 100, 2000);
});

// Scroll reveal
window.addEventListener('scroll', reveal);
reveal();

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        if (revealtop < windowheight - 120) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

// Close mobile menu when a nav link is clicked
document.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link, .navbar-nav .contact-button');
    var navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            if (navbarCollapse.classList.contains('show')) {
                $(navbarCollapse).collapse('hide');
            }
        });
    });
});
