window.addEventListener('scroll', () => {
  const scroll = document.querySelector('.upward');
  scroll.classList.toggle('active', window.scrollY > 500);
});
() => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
