// Get the modal
var modal = document.getElementById('modalFranchise');

// Get the button that opens the modal
var btn = document.getElementById('btnFranchise');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('franchise__close')[0];
var btnFrsbm = document.getElementsByClassName('button__franchise-submit')[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};
// When the user clicks on <button__franchise-submit>, close the modal
btnFrsbm.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
