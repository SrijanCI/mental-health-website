document.addEventListener('DOMContentLoaded', function() {
    const featuresSection = document.getElementById('features');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.5 });

    observer.observe(featuresSection);
});

// Add a new class for the visible effect