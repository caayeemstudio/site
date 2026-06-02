// js/main.js - kod interaksi JavaScript
window.addEventListener('DOMContentLoaded', function() {
  // load navigation partial into the placeholder
  fetch('partials/nav.html')
    .then(function(res) { return res.text(); })
    .then(function(html) {
      var holder = document.getElementById('nav-placeholder');
      if (holder) holder.innerHTML = html;

      // simple toggle for small screens
      var toggle = document.querySelector('.nav-toggle');
      var links = document.getElementById('nav-links');
      var nav = holder.querySelector('.site-nav');
      if (toggle && links) {
        toggle.addEventListener('click', function() {
          var expanded = this.getAttribute('aria-expanded') === 'true';
          this.setAttribute('aria-expanded', String(!expanded));
          links.classList.toggle('open');
          if (nav) nav.classList.toggle('open');
        });
      }
    })
    .catch(function() {
      // fail silently if partial cannot be loaded
    });

  // Portfolio carousel - fade effect every 2 seconds
  var portfolioFiles = [
    'images/portfolio/p1.jpg',
    'images/portfolio/p2.jpg',
    'images/portfolio/p3.jpg',
    'images/portfolio/p4.jpg',
    'images/portfolio/p5.jpg',
    'images/portfolio/p6.jpg',
    'images/portfolio/p7.jpg',
    'images/portfolio/p8.jpg',
    'images/portfolio/p9.jpg',
    'images/portfolio/p10.jpg',
    'images/portfolio/p11.jpg',
    'images/portfolio/p12.jpg',
    'images/portfolio/p13.jpg',
    'images/portfolio/p14.jpg',
    'images/portfolio/p15.jpg',
    'images/portfolio/p16.jpg',
    'images/portfolio/p17.jpg',
    'images/portfolio/p18.jpg',
    'images/portfolio/p19.jpg',
    'images/portfolio/p20.jpg',
    'images/portfolio/p21.jpg',
    'images/portfolio/p22.jpg',
    'images/portfolio/p23.jpg',
    'images/portfolio/p24.jpg'
  ];

  var carousel = document.getElementById('portfolioCarousel');
  if (carousel && portfolioFiles.length) {
    var images = [];

    portfolioFiles.forEach(function(src, index) {
      var img = document.createElement('img');
      img.src = src;
      img.alt = 'Portfolio';
      img.className = 'carousel-image' + (index === 0 ? ' active' : '');
      carousel.appendChild(img);
      images.push(img);
    });

    var currentIndex = 0;

    function showNextImage() {
      if (!images.length) return;
      images[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add('active');
    }

    setInterval(showNextImage, 2000);
  }

  const actionButton = document.getElementById('actionButton');

  if (actionButton) {
    actionButton.addEventListener('click', function() {
      const message = 'Hai! Ini contoh JavaScript asas dari js/main.js.';
      alert(message);
    });
  }
});
