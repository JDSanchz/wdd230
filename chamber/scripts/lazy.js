const images = document.querySelectorAll('img.lazy');

const lazyLoad = (target) => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.setAttribute('src', img.getAttribute('data-src'));
        img.classList.add('loaded');
        observer.disconnect();
      }
    });
  });

  io.observe(target);
};

images.forEach(lazyLoad);
