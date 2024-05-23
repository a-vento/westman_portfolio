document.addEventListener('DOMContentLoaded', function() {
    // Navbar appears when scrolled
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

    // Toggle on Mobile View
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

    // Cards text
    const funCards = document.querySelectorAll('.fun-card');
    const cardTexts = [
        "Text for card 1",
        "Text for card 2",
        "Text for card 3",
        "Text for card 4",
        "Text for card 5",
        "Text for card 6",
    ];

    const originalText = [];
    funCards.forEach((card, index) => {
        originalText.push(card.querySelector('.fun-title').textContent);

        card.addEventListener('mouseover', () => {
            card.querySelector('.fun-title').textContent = cardTexts[index];
            card.querySelector('.fun-title').style.fontSize = '20px';
        });

        card.addEventListener('mouseout', () => {
            card.querySelector('.fun-title').textContent = originalText[index];
            card.querySelector('.fun-title').style.fontSize = '';
        });
    });
});
