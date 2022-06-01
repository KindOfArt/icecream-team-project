(() => {
  const refs = {
    openModalBtnFranchise: document.querySelector('[data-modal-open-franchise]'),
    closeModalBtnFranchise: document.querySelector('[data-modal-close-franchise]'),
    modalFranchise: document.querySelector('[data-modal-franchise]'),
  };

  refs.openModalBtnFranchise.addEventListener('click', toggleModalFranchise);
  refs.closeModalBtnFranchise.addEventListener('click', toggleModalFranchise);

  function toggleModalFranchise() {
    document.body.classList.toggle('franchise');
    refs.modalFranchise.classList.toggle('franchise-is-hidden');
  }
})();
