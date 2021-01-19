document.addEventListener( 'DOMContentLoaded' , function() {

  // baguettebox
  baguetteBox.run('.tanner-collection__gallery');

  // header scroll 

  const header = document.querySelector('.header');
  document.addEventListener('scroll', function(e) {
    if(window.pageYOffset > 100) {
      header.classList.add('active')
    } else {
      header.classList.remove('active')
    }
  })
  // navigation scrollspy

  const navLink = document.querySelectorAll('.nav-menu__link');
  const navLinkArray = []; 
  navLink.forEach(el => navLinkArray.push(el))
  
  function navigationSpy(e) {
    let best;
    for (let i = 0; i < navLinkArray.length; i++) {
      const el = navLinkArray[i];
      const elObj = document.getElementById(el.getAttribute('href').slice(1))
      const scroll = elObj.offsetTop - window.pageYOffset;
      const isSmall = elObj.offsetHeight < window.innerHeight / 2;
      
      if ( isSmall && scroll && scroll - 20  + elObj.offsetHeight <= window.innerHeight) {
        best = el;
        
      } else if ( scroll + elObj.offsetHeight >= window.innerHeight / 2 
        && scroll < window.innerHeight / 2 ) {
        best = el;
      };
      
    }
    if (best) {
      navLinkArray.forEach(el=> el.parentElement.classList.remove('active'))
      best.parentElement.classList.add('active');
    }
  }
  window.addEventListener('scroll', navigationSpy);


    document.querySelector('.nav-toggle').addEventListener('click', function (e) {
      this.classList.toggle('active');
      document.querySelector('.nav-menu').classList.toggle('active')
    })
    document.querySelectorAll('.nav-menu__link').forEach(x=>x.addEventListener('click', function (e) {
      document.querySelector('.nav-menu').classList.toggle('active');
      document.querySelector('.nav-toggle').classList.toggle('active');
    }))

    


    var mySwiper = new Swiper('.slider1-container', {
        // Optional parameters
        //direction: 'vertical',
        loop: true,
        effect: 'fade',
        slidesPerView: 1,
        preloadImages: false,
        // Enable lazy loading
        lazy: true,
      
        // If we need pagination
        pagination: {
          el: '.slider1-control__dots',
          clickable: true,
          bulletClass: 'slider1-bullet',
          bulletActiveClass: 'slider1-bullet--active',
          dynamicBullets: true,
          dynamicMainBullets: 1,
        },
        breakpoints: {
          // when window width is >= 640px
          992: {
            pagination: {
              dynamicBullets: false,
            }
          }
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.slider1-control__arrowdown',
          prevEl: '.slider1-control__arrowup',
        },
      
    })
    var mySwiper2 = new Swiper('.promo-slider', {
        // Optional parameters
        //direction: 'vertical',
        loop: true,
        touchEventsTarget: 'wrapper',
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 30,
        speed: 1000,
        slideToClickedSlide: true, watchSlidesVisibility:true,
        preloadImages: false,
        // Enable lazy loading
        lazy: true,
        //parallax:true,// Responsive breakpoints
        breakpoints: {
          // when window width is >= 640px
          992: {
            slidesPerView: 4,
          }
        },
      
        // If we need pagination
        pagination: {
          el: '.promo-slider__pagination',
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 1,
          bulletClass: 'swiper-pagination-bullet1',
          bulletActiveClass: 'swiper-pagination-bullet1-active',
          modifierClass: 'promo-slide__pagination-',
          type: 'bullets',
          renderBullet: function (index, className) {
            let prefix = '0';
            if (index > 8) {prefix = ''}
            return '<span class="' + className + '">' + (prefix + ++index) + '</span>';
          },
        },

        // Navigation arrows
        navigation: {
          nextEl: '.promo-slider__next',
          prevEl: '.promo-slider__prev',
        },
      
      })
})