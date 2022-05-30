window.addEventListener('scroll', function () {
  var scroll = document.querySelector('.upward');
  scroll.classList.toggle('active', window.scrollY > 500);
});
function scrollTopTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
