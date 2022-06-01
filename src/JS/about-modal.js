(() => {
  const refs = {
    openModalBtnAbout: document.querySelector('[data-modal-open-about]'),
    modalAbout: document.querySelector('[data-modal-about]'),
  };

  refs.openModalBtnAbout.addEventListener('click', toggleModalAbout);
  refs.modalAbout.addEventListener('click', toggleModalAbout);

  function toggleModalAbout() {
    document.body.classList.toggle('about-read-more');
    refs.modalAbout.classList.toggle('about-is-hidden');
  }
})();
