document.addEventListener('DOMContentLoaded', () => {
    const heroImage = document.querySelector('.hero-image');
    const description = document.querySelector('.description');
    const protectedButtons = document.querySelectorAll('.protected');

    // Scroll animation
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Fade out hero image
        const opacity = 1 - (scrollPosition / windowHeight);
        heroImage.style.opacity = Math.max(opacity, 0);
        
        // Fade in description
        if (scrollPosition > windowHeight * 0.3) {
            description.classList.add('visible');
        }
    });

    // Password protection for buttons
    protectedButtons.forEach(button => {
        button.dataset.password = "22313"; 
        button.addEventListener('click', () => {
            const password = prompt('Please enter the password:');
            if (password === button.dataset.password) {
                alert('Access granted! This would redirect to the secure page.');
            } else {
                alert('Incorrect password. Access denied.');
            }
        });
    });
});
