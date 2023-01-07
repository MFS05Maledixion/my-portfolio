document.addEventListener('DOMContentLoaded', () => {
  // get the components
  const navbar = document.querySelector('.navigation');
  const hero = document.querySelector('.hero');
  const links = document.querySelectorAll('.nav-link');

  // scroll event listener
  window.addEventListener('scroll', () => {
    // get bounding rectangle
    const heroRect = hero.getBoundingClientRect();

    // check if top of hero is no longer visible
    if (heroRect.top < 0) {
      // if true change color
      navbar.style.backgroundColor = 'black';
      navbar.style.padding = '20px';
      for (const link of links) {
        link.style.color = 'white';
      }
    } else {
      // if false, keep it transparent
      navbar.style.transition = '300ms';
      navbar.style.backgroundColor = 'transparent';
      navbar.style.padding = '0';
      for (const link of links) {
        link.style.color = 'black';
      }
    }
  });
});
