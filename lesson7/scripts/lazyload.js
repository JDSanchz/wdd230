const images = document.querySelectorAll("[data-src]");

const options = {
    threshold: 1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.getAttribute('data-src');
            img.setAttribute('src', src);
            img.classList.remove('loading');
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
}, options);

images.forEach(img => {
    img.classList.add('loading');
    observer.observe(img);
});
