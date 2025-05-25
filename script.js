document.querySelectorAll('.chunk').forEach(chunk => {
    const bgColor = chunk.getAttribute('data-bg') || '#121212'; // fallback color
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.body.style.backgroundColor = bgColor;
        }
      });
    }, { threshold: 0.5 });
  
    observer.observe(chunk);
  });

  
  // Scroll to bottom detection
window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 5) {
      document.getElementById('endPopup').style.display = 'flex';
    }
  });
  
  const noBtn = document.getElementById('noBtn');

  noBtn.addEventListener('click', () => {
    noBtn.style.transition = 'opacity 0.5s ease';
    noBtn.style.opacity = '0';
  
    // Optional: Disable pointer events after fade out
    noBtn.style.pointerEvents = 'none';
  });
  