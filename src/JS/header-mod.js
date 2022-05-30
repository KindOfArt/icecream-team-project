(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-header-modal-open]'),
    openModalMenuBtn: document.querySelector('[data-menu-modal-form-open]'),
    closeModalBtn: document.querySelector('[data-header-modal-close]'),
    modal: document.querySelector('[data-header-modal]'),
    menu: document.getElementById('mobile-menu'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalMenuBtn.addEventListener('click', () => {
    if (menu.classList.contains('is-open')) {
      document.body.classList.toggle('modal-open');
      refs.modal.classList.toggle('header-is-hidden');
      menu.classList.remove('is-open');
    }
  });
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.modal.classList.toggle('header-is-hidden');
  }
  console.log(refs.mobileMenu);
})();
