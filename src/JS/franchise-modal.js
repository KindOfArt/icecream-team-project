// Get the modal
const modal = document.getElementById('modalFranchise');

// Get the button that opens the modal
const btn = document.getElementById('btnFranchise');

// Get the <span> element that closes the modal
const span = document.querySelector('.franchise__close');
const btnFrsbm = document.querySelector('.button__franchise-submit');

// When the user clicks the button, open the modal
btn.addEventListener('click', () => (modal.style.display = 'block'));

// When the user clicks on <span> (x), close the modal
span.addEventListener('click', () => (modal.style.display = 'none'));
// When the user clicks on <button__franchise-submit>, close the modal
btnFrsbm.addEventListener('click', () => (modal.style.display = 'none'));

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', event => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
