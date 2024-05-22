document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.navbar');
    const navheader = document.querySelector('.navbar-brand');
    const link1 = document.querySelector('a[href="#about"]');
    const link2 = document.querySelector('a[href="#projects"]');
    const link3 = document.querySelector('a[href="#resume"]');
    const toggler = document.querySelector(".navbar-toggler");

    if (header && link1 && link2 && link3) {
        window.addEventListener('scroll', function() {
            const top = window.scrollY;

            if (top >= 50) {
                header.classList.add('navbarDark');
                link1.classList.add('navbarLinkColor');
                link2.classList.add('navbarLinkColor');
                link3.classList.add('navbarLinkColor');
            } else {
                header.classList.remove('navbarDark');
                link1.classList.remove('navbarLinkColor');
                link2.classList.remove('navbarLinkColor');
                link3.classList.remove('navbarLinkColor');
            }
        });
    }

    const navbarCollapse = document.querySelector('.navbar-expand-lg .navbar-collapse');

    if (navbarCollapse) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbarCollapse.classList.add('scrolled');
            } else {
                navbarCollapse.classList.remove('scrolled');
            }
        });
    }

    const theToggle = document.getElementById('toggle');

    if (theToggle) {
        function toggleClass(elem, className) {
            if (elem.classList.contains(className)) {
                elem.classList.remove(className);
            } else {
                elem.classList.add(className);
            }
        }
        theToggle.onclick = function() {
            toggleClass(this, 'on');
            return false;
        };
    }
});
