document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('#nav a');

    for (const link of navLinks) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('href');
            if (targetId.startsWith('#')) {
                window.scrollTo({
                    top: document.querySelector(targetId).offsetTop - 50,
                    behavior: 'smooth'
                });
            } else {
                window.location.href = targetId;
            }
        });
    }
});