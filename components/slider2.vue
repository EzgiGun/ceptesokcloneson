<template>
    <div>
      <swiper
    :slidesPerView="1"
    :spaceBetween="30"
    :navigation="true"
    :modules="modules"
    class="mySwiper">
        <swiper-slide>
        <img src="https://cdnd-tr.ceptesok.com/banner/1440x475/2219d855d62f8cd556af645062db3879.jpg" width="100%">
        </swiper-slide>
        <swiper-slide>
        <img src="https://cdnd-tr.ceptesok.com/banner/1440x475/7afb336398077288df077d089afdbdd4.jpg" width="100%">
        </swiper-slide>
        <swiper-slide>
        <img src="https://cdnd-tr.ceptesok.com/banner/1440x475/208131b8e2069f3ecf9e2395ac9db41a.jpg" width="100%">
        </swiper-slide>

    </swiper>
  </div>
  </template>
   
   <script>
   // Import Swiper Vue.js components
   import { Swiper, SwiperSlide } from 'swiper/vue';
 
   // Import Swiper styles
   import 'swiper/css';
   import { Navigation } from "swiper";

   export default {
     components: {
       Swiper,
       SwiperSlide,
     },
     setup() {
    return {
      modules: [Navigation],
    };
  },
   };
 </script>
  
  <style scoped>

  img{
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
 
  #app { height: 100% }
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>