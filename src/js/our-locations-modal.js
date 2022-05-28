(() => {
  const refs = {
    openModalBtn: document.querySelector('[loc-data-modal-open]'),
    closeModalBtn: document.querySelector('[loc-data-modal-close]'),
    modal: document.querySelector('[loc-data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle("loc-modal-open");
    refs.modal.classList.toggle('loc-is-hidden');
  }
})();