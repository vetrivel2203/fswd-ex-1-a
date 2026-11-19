// ===============================
// Vetrivel P R - Portfolio Script
// ===============================

// Mobile Menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-link');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Close mobile menu after clicking a link
navItems.forEach((link) => {
  link.addEventListener('click', () => {
    if (navLinks) {
      navLinks.classList.remove('active');
    }
  });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {

    const target = document.querySelector(
      anchor.getAttribute('href')
    );

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Active Navigation Link
const sections = document.querySelectorAll('section[id]');

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        navItems.forEach((link) => {

          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${entry.target.id}`
          );

        });

      }

    });

  },
  {
    threshold: 0.35
  }
);

sections.forEach((section) => {
  observer.observe(section);
});

// Current Year
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

// Say Hello Button
const helloBtn = document.getElementById('helloBtn');

if (helloBtn) {

  helloBtn.addEventListener('click', () => {

    alert(
      'Thanks for visiting my portfolio! Feel free to contact me.'
    );

  });

}
