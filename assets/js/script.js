document.addEventListener("DOMContentLoaded", function() {

  // ===============================================
  // 1. REVEAL ELEMENTS ON SCROLL
  // ===============================================
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1 // Trigger saat 10% elemen terlihat
  });

  // Amati semua section
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });


  // ===============================================
  // 2. ACTIVE NAVIGATION LINK ON SCROLL
  // ===============================================
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      // Beri offset 60px untuk tinggi header
      if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) {
        link.classList.add('active');
      }
    });
  });


  // ===============================================
  // 3. HAMBURGER MENU TOGGLE
  // ===============================================
  // Fungsi ini sudah ada di HTML Anda, kita bisa memindahkannya ke sini untuk kerapian
  const hamburger = document.querySelector('.hamburger');
  const navbar = document.querySelector('.navbar');

  if (hamburger && navbar) {
    hamburger.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });

    // Tutup menu saat link diklik (berguna di mobile)
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if(navbar.classList.contains('active')){
            navbar.classList.remove('active');
        }
      });
    });
  }


  // ===============================================
  // 4. TYPING EFFECT FOR HERO SECTION
  // ===============================================
  const typedTextSpan = document.querySelector(".green");
  if (typedTextSpan) {
    const textArray = ["a Machine Learning", "a Data Sainst", "a Web Developer"];
    const typingDelay = 150;
    const erasingDelay = 100;
    const newTextDelay = 2000; // Delay sebelum mulai mengetik teks baru
    let textArrayIndex = 0;
    let charIndex = 0;

    function type() {
      if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
      } else {
        setTimeout(erase, newTextDelay);
      }
    }

    function erase() {
      if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
      } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
      }
    }

    // Mulai animasi
    setTimeout(type, newTextDelay + 250);
  }

  

});