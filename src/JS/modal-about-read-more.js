// Get the modalReadMore
var modalReadMore = document.getElementById('modalAboutReadMore');

// Get the button that opens the modalReadMore
var btnReadMore = document.getElementById('btnAboutReadMore');

// Get the <spanReadMore> element that closes the modalReadMore
var spanReadMore = document.getElementsByClassName('about-read-more__close')[0];

// When the user clicks the button, open the modalReadMore
btnReadMore.onclick = function () {
  modalReadMore.style.display = 'block';
};

// When the user clicks on <spanReadMore> (x), close the modalReadMore
spanReadMore.onclick = function () {
  modalReadMore.style.display = 'none';
};

// When the user clicks anywhere outside of the modalReadMore, close it
window.onclick = function (event) {
  if (event.target == modalReadMore) {
    modalReadMore.style.display = 'none';
  }
};
