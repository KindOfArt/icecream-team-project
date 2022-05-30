// Get the modalReadMore
const modalReadMore = document.getElementById('modalAboutReadMore');

// Get the button that opens the modalReadMore
const btnReadMore = document.getElementById('btnAboutReadMore');

// Get the <spanReadMore> element that closes the modalReadMore
const spanReadMore = document.getElementById('about-read-more__close');

// When the user clicks the button, open the modalReadMore
btnReadMore.addEventListener(
  'click',
  () => (modalReadMore.style.display = 'block')
);

// When the user clicks on <spanReadMore> (x), close the modalReadMore
spanReadMore.addEventListener(
  'click',
  () => (modalReadMore.style.display = 'none')
);

// When the user clicks anywhere outside of the modalReadMore, close it
window.addEventListener('click', event => {
  if (event.target == modalReadMore) {
    modalReadMore.style.display = 'none';
  }
});
