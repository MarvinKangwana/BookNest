window.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');

  const scrollAmount = 300;

  nextBtn.addEventListener('click', () => {
    slider.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  });

  prevBtn.addEventListener('click', () => {
    slider.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  });
});
