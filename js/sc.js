  // Hamburger menu functionality
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  hamburgerBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      // Change hamburger icon
      const icon = hamburgerBtn.querySelector('i');
      if (mobileMenu.classList.contains('active')) {
          icon.classList.remove('bx-menu');
          icon.classList.add('bx-x');
      } else {
          icon.classList.remove('bx-x');
          icon.classList.add('bx-menu');
      }
  });
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', (event) => {
      const isClickInsideMenu = mobileMenu.contains(event.target);
      const isClickOnHamburger = hamburgerBtn.contains(event.target);
      
      if (!isClickInsideMenu && !isClickOnHamburger && mobileMenu.classList.contains('active')) {
          mobileMenu.classList.remove('active');
          const icon = hamburgerBtn.querySelector('i');
          icon.classList.remove('bx-x');
          icon.classList.add('bx-menu');
      }
  });
  
  // Close mobile menu when window is resized to desktop size
  window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && mobileMenu.classList.contains('active')) {
          mobileMenu.classList.remove('active');
          const icon = hamburgerBtn.querySelector('i');
          icon.classList.remove('bx-x');
          icon.classList.add('bx-menu');
      }
  });

  let currentSlide = 0;
  const slides = document.querySelectorAll('.carousel-item');
  const indicators = document.querySelectorAll('.carousel-indicator');
  
  function changeSlide(index) {
      currentSlide = index;
      updateCarousel();
  }
  
  function updateCarousel() {
      const offset = -currentSlide * 100;
      document.getElementById('carouselSlide').style.transform = `translateX(${offset}%)`;
      
      indicators.forEach((indicator, i) => {
          indicator.classList.toggle('active', i === currentSlide);
      });
  }
  
  // Auto slideshow
  setInterval(() => {
      currentSlide = (currentSlide + 1) % slides.length;
      updateCarousel();
  }, 5000);
  
  updateCarousel();