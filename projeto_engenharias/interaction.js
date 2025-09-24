document.querySelectorAll('.carrossel-container').forEach(container => {
  const carrossel = container.querySelector('.carrossel');
  const btnLeft = container.querySelector('.btn-left');
  const btnRight = container.querySelector('.btn-right');

  const scrollAmount = 220;; // rola a largura visível inteira

  btnLeft.addEventListener('click', () => {
    carrossel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  btnRight.addEventListener('click', () => {
    carrossel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
});