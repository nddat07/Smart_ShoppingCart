// Script điều khiển slider banner
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('slider');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const dots = document.querySelectorAll('.slider-dots .dot');
  const slides = document.querySelectorAll('.slider .slide');

  let currentSlide = 0;
  const totalSlides = slides.length || 3;

  // Hàm chuyển slide và cập nhật dot
  function showSlide(index) {
    if (index < 0) {
      currentSlide = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentSlide = 0;
    } else {
      currentSlide = index;
    }

    if (slider) {
      const slideWidth = slider.offsetWidth;
      slider.scrollTo({
        left: slideWidth * currentSlide,
        behavior: 'smooth'
      });
    }

    // Cập nhật trạng thái dot active
    dots.forEach((dot, i) => {
      if (i === currentSlide) {
        dot.classList.add('dot--active');
      } else {
        dot.classList.remove('dot--active');
      }
    });
  }

  // Nút lùi slide (<)
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      showSlide(currentSlide - 1);
    });
  }

  // Nút tiến slide (>)
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      showSlide(currentSlide + 1);
    });
  }
});
