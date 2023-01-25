<script setup>
    const route = useRoute();
    console.log(route.params.kategori);
</script>
<template>
    <Navbar />
    <section class="section listing category has-subnav">
        <div class="listing-head">
            <div class="wrapper wide head-titlewrap">
                <h1 class="head-title" style="color: black">   Meyve Sebze </h1>
            </div>
            <div data-simplebar="init" options="[object Object]" class="head-nav">
                <div class="simplebar-wrapper" style="margin: -12.6417px 0px;">
                    <div class="simplebar-height-auto-observer-wrapper">
                        <div class="simplebar-height-auto-observer"></div>
                    </div>
                    <div class="simplebar-mask">
                        <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
                            <div class="simplebar-content-wrapper" style="height: auto; overflow: scroll hidden;">
                                <div class="simplebar-content" style="padding: 12.6417px 0px;">
                                    <div class="wrapper wide">
                                        <nav class="nav-list">
                                            <NuxtLink to="sarimsak">
                                            <li class="list-item">
                                                <a v-if="route.params.kategori == 'sarimsak'" class="item-link active link-to-pages-category"
                                                   >Patates, Soğan, Sarımsak</a>
                                                <a v-else  class="item-link link-to-pages-category">Patates, Soğan, Sarımsak</a>
                                            </li>
                                            </NuxtLink>
                                            <NuxtLink to="sebze">
                                            <li class="list-item">
                                                <a v-if="route.params.kategori == 'sebze'" class="item-link active link-to-pages-category">Sebze</a>
                                                <a v-else  class="item-link link-to-pages-category">Sebze</a>
                                            </li>
                                            </NuxtLink>
                                            <NuxtLink to="meyve">
                                            <li class="list-item">
                                                <a v-if="route.params.kategori == 'meyve'" class="item-link active link-to-pages-category">Meyve</a>
                                                <a v-else  class="item-link link-to-pages-category">Meyve</a>
                                            </li>
                                            </NuxtLink>
                                            <NuxtLink to="narenciye">
                                            <li class="list-item">
                                                <a v-if="route.params.kategori == 'narenciye'" class="item-link active link-to-pages-category">Narenciye</a>
                                                <a v-else  class="item-link link-to-pages-category">Narenciye</a>
                                            </li>
                                            </NuxtLink>
                                            <NuxtLink to="salata">
                                            <li class="list-item">
                                                <a v-if="route.params.kategori == 'salata'" class="item-link active link-to-pages-category">Salata Malzemei</a>
                                                <a v-else  class="item-link link-to-pages-category">Salata Malzemesi</a>
                                            </li>
                                            </NuxtLink>
                                            <NuxtLink to="yesillik">
                                            <li class="list-item">
                                                <a v-if="route.params.kategori == 'yesillik'" class="item-link active link-to-pages-category">Yeşillik ve Otlar</a>
                                                <a v-else  class="item-link link-to-pages-category">Yeşillik ve Otlar</a>
                                            </li>
                                            </NuxtLink>
                                            <NuxtLink to="kurutulmus">
                                            <li class="list-item">
                                                <a v-if="route.params.kategori == 'kurutulmus'" class="item-link active link-to-pages-category">Kurutulmuş Meyve &amp; Sebze</a>
                                                <a v-else  class="item-link link-to-pages-category">Kurutulmuş Meyve &amp; Sebze</a>
                                            </li>
                                            </NuxtLink>
                                            <NuxtLink to="kabuklu">
                                            <li class="list-item">
                                                <a v-if="route.params.kategori == 'kabuklu'" class="item-link active link-to-pages-category">Kabuklu Sert Meyve</a>
                                                <a v-else  class="item-link link-to-pages-category">Kabuklu Sert Meyve</a></li>
                                            </NuxtLink>
                                            <NuxtLink to="dondurulmus">
                                            <li class="list-item">
                                                <a v-if="route.params.kategori == 'dondurulmus'" class="item-link active link-to-pages-category">Dondurulmuş Meyve Sebze</a>
                                                <a v-else  class="item-link link-to-pages-category">Dondurulmuş Meyve Sebze</a>
                                            </li>
                                            </NuxtLink>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="simplebar-placeholder" style="width: 1213px; height: 51px;"></div>
                </div>
                <div class="simplebar-track simplebar-horizontal" style="visibility: visible;">
                    <div class="simplebar-scrollbar"
                        style="width: 1157px; display: block; transform: translate3d(0px, 0px, 0px);"></div>
                </div>
                <div class="simplebar-track simplebar-vertical" style="visibility: hidden;">
                    <div class="simplebar-scrollbar" style="height: 0px; display: none;"></div>
                </div>
            </div>
        </div>
        

        <Urungetir />


    </section>

    <Footer />

</template>

<style>
    .section.listing .listing-head .head-title {
        font-weight: 700;
        padding: 1.8rem 0;
        font-size: 1.6rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-weight: 700;
        line-height: 1em;
    }

    button,
    figure,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    ol,
    p,
    table,
    ul {
        margin: 0;
        padding: 0;
    }

    * {
        box-sizing: border-box;
    }

    :-webkit-any(article, aside, nav, section) h1 {
        font-size: 1.5em;
        margin-block-start: 0.83em;
        margin-block-end: 0.83em;
    }

    h1 {
        display: block;
        font-size: 2em;
        margin-block-start: 0.67em;
        margin-block-end: 0.67em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
        font-weight: bold;
    }

    body {
        font-family: GTWalsheim, Arial, Helvetica, sans-serif;
        font-weight: 400;
        color: #33290a;
        font-size: 1.6rem;
        background-color: #f6f6f6;
        letter-spacing: -.015em;
        opacity: 1;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }

    body {
        line-height: 1;
    }

    :root {
        --swiper-theme-color: #007aff;
    }
</style>