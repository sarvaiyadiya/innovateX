document.addEventListener("DOMContentLoaded", function() {
    // Typing animation for Hero Section
    var typed = new Typed("#typed-text", {
        strings: ["Healthcare", "Technology", "Smart Clinics"],
        typeSpeed: 80,
        backSpeed: 50,
        loop: true
    });

    // Scroll Animation
    const sections = document.querySelectorAll(".content");
    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: "-50px"
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, options);

    sections.forEach(section => {
        section.classList.add("fade-out");
        observer.observe(section);
    });
});
