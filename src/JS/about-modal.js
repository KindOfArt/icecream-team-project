(() => {
  const refs = {
    openModalBtnAbout: document.querySelector('[data-modal-open-about]'),
    closeModalBtnAbout: document.querySelector('[data-modal-close-about]'),
    modalAbout: document.querySelector('[data-modal-about]'),
  };

  refs.openModalBtnAbout.addEventListener('click', toggleModalAbout);
  refs.closeModalBtnAbout.addEventListener('click', toggleModalAbout);

  function toggleModalAbout() {
    document.body.classList.toggle('about-read-more');
    refs.modalAbout.classList.toggle('about-is-hidden');
  }
  // on click anywhere NOT the window close modal
  // window.addEventListener('click', event => {
  //   if (event.target == refs.modalAbout) {
  //     refs.modalAbout.style.opacity = 0;
  //     toggleModalAbout();
  //   }
  // });
})();
