(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-header-modal-open]'),
    openModalMenuBtn: document.querySelector('[data-menu-modal-form-open]'),
    closeModalBtn: document.querySelector('[data-header-modal-close]'),
    modal: document.querySelector('[data-header-modal]'),
    mobileMenu: document.getElementById('mobile-menu'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalMenuBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('lock');
    refs.modal.classList.toggle('header-is-hidden');
    if (!refs.modal.classList.contains('header-is-hidden')) {
      refs.mobileMenu.classList.remove('is-open');
      document.body.style.overflow = null;
    }
  }
})();
