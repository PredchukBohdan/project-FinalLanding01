(() => {
  const topButton = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      topButton?.classList.add('active');
    } else {
      topButton?.classList.remove('active');
    }
  });
  topButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
})();
