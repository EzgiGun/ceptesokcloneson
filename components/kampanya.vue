<template>
  <div>
    <section class="section home-slider home-campaigns">
      <div class="wrapper mobile-wide">
        <div class="slider-heading">
          <h2 class="baslik">Kampanyalar</h2>
          <a href="/kampanya-listesi">Tüm Kampanyalar</a>
        </div>
  <swiper
    :slidesPerView="3"
    :spaceBetween="30"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide>

      <div class="kampanyaKismi">
              <button class="kampanyaResimleri">
                  <img src="../assets/kategori1.jpg">
              </button>
            </div>

    </swiper-slide>
    <swiper-slide>

      <div class="kampanyaKismi">
              <button class="kampanyaResimleri">
                  <img src="../assets/kategori2.jpg">
              </button>
            </div>

    </swiper-slide>
    <swiper-slide>
      
      <div class="kampanyaKismi">
              <button class="kampanyaResimleri">
                  <img src="../assets/kategori3.jpg">
              </button>
            </div>

    </swiper-slide>
    <swiper-slide>

      <div class="kampanyaKismi">
              <button class="kampanyaResimleri">
                  <img src="../assets/kategori4.jpg">
              </button>
            </div>

    </swiper-slide>
    <swiper-slide>
      
      <div class="kampanyaKismi">
              <button class="kampanyaResimleri">
                  <img src="../assets/kategori5.jpg">
              </button>
            </div>

    </swiper-slide>
  </swiper>
  </div>
    </section>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
};
</script>

<style>
.home-slider {
    background-color:#f7f3eb;
    padding:2.6rem 0 4.3rem;
    overflow:hidden
   }

.slider-heading {
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:3.3rem
   }   
</style>