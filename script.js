document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    // Function to check if an element is in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to add slide-in class if element is in viewport
    function addSlideInClass() {
        sections.forEach(section => {
            if (isElementInViewport(section)) {
                section.classList.add('slide-in');
            }
        });
    }

    // Initial check on page load
    addSlideInClass();

    // Check on scroll
    window.addEventListener('scroll', addSlideInClass);
});
