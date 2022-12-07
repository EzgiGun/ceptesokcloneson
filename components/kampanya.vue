<template>
  <div>
    <section class="section home-slider home-campaigns">
      <div class="wrapper mobile-wide">
        <div class="slider-heading">
          <h2 class="baslik">Kampanyalar</h2>
          <a href="/kampanya-listesi">Tüm Kampanyalar</a>
        </div>
        <VueSlickCarousel :arrows="true" :dots="false" :slidesToShow="4">
        <div>
          <div class="swiper-wrapper">           
          <div class=" kampanyaKismi">
              <button class="kampanyaResimleri">
                  <img src="../assets/kategori1.jpg">
              </button>
            </div>
            <div class="kampanyaKismi ">
              <button class="kampanyaResimleri">
                  <img src="../assets/kategori2.jpg">
              </button>
            </div>
            <div class="kampanyaKismi ">
              <button class="kampanyaResimleri">
                <div class="imagewrap bg">
                  <img src="../assets/kategori3.jpg">
                </div>
              </button>
            </div>
            <div class="kampanyaKismi ">
              <button class="kampanyaResimleri">
                  <img src="../assets/kategori4.jpg">
              </button>
            </div>
            <div class="kampanyaKismi">
              <button class="kampanyaResimleri">
                  <img src="../assets/kategori5.jpg">
              </button>
            </div>
            <div class="kampanyaKismi">
              <button class="kampanyaResimleri">
                  <img src="../assets/kategori5.jpg">
              </button>
            </div>
          </div>
        </div>
        </VueSlickCarousel>
      </div>
    </section>
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
 
  export default {
    name: 'MyComponent',
    components: { VueSlickCarousel },
  }
</script>

<style>



.baslik{
    font-size:1.8rem;
    letter-spacing:-.025em;
}
.kampanyaKismi {
    flex-shrink:0;
    width:100%;
    height:100%;
    position:relative;
    z-index:1;
    display:flex;
    transition-property:transform;
    box-sizing:content-box
   }
.kampanyaResimleri{
    position:relative;
    display:flex;
    width:100%;
    height:100%;
    border-radius:.4rem;
    flex-flow:column wrap;
    justify-content:space-between;
    padding:1rem 0 1.5rem 3rem;
    color:#fff;
    width:33.5rem;
    height:10.2rem;
    overflow:hidden
}

</style>
