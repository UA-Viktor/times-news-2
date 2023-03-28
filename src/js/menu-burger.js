const menuBtn = document.querySelector('.button-menu');
const menuModal = document.querySelector('.modal');
const menuModalContent = document.querySelector('.modal-content');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('is-open');
  menuModal.classList.toggle('is-hidden');
  menuModal.classList.toggle('true');
  menuModalContent.classList.toggle('true');
});
