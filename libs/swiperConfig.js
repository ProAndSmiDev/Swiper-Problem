import Swiper from 'swiper/swiper-bundle.min';

 const demoSwiperParams = {
   loop: true,
   slidesPerView: 1,
   speed: 3000,
   effect: 'fade',
   fadeEffect: {
     crossFade: true,
   },
   autoplay: {
     delay: 1000,
   },
 };

 const swiper = new Swiper('.content', demoSwiperParams);
