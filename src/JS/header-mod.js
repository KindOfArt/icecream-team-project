(() => {
  const refs = {
    openModalBtn: document.querySelector('[header-data-modal-open]'),
    openModalMenuBtn: document.querySelector('[menu-data-modal-form-open]'),
    closeModalBtn: document.querySelector('[header-data-modal-close]'),
    modal: document.querySelector('[header-data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalMenuBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('header-is-hidden');
  }
})();