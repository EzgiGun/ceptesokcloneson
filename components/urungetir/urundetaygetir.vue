<script setup>

const route = useRoute();
    console.log(route.params.urunisim);
    const {
        data: urun
    } = await useFetch('http://localhost:8080/urundetaycek/' + route.params.urunisim)

</script>
<template>
 <li class="list-item" v-for="item in urun">

    <main class="section product-detail">
        <div class="breadcrumbs detail-breadcrumbs">
            <div data-simplebar="init" options="[object Object]" class="breadcrumbs-wrap">
                <div class="simplebar-wrapper" style="margin: 0px;">
                    <div class="simplebar-height-auto-observer-wrapper">
                        <div class="simplebar-height-auto-observer"></div>
                    </div>
                    <div class="simplebar-mask">
                        <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
                            <div class="simplebar-content-wrapper" style="height: auto; overflow: hidden;">
                                <div class="simplebar-content" style="padding: 0px;">
                                    <ul class="breadcrumbs-list">
                                        <li class="breadcrumbs-item"><a class="item-link" href="/">Anasayfa</a></li>
                                        <li class="breadcrumbs-item"><a class="item-link"
                                                href="/meyve-sebze-c-1396/">Meyve &amp; Sebze</a></li>
                                        <li class="breadcrumbs-item"><a class="item-link"
                                                href="/patates-sogan-sarimsak-c-1599/">{{item.kategori}}</a></li>
                                        <li class="breadcrumbs-item"><a class="item-link"
                                                href="/patates-kg-p-5971/">{{ item.isim }}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="simplebar-placeholder" style="width: 1047px; height: 37px;"></div>
                </div>
                <div class="simplebar-track simplebar-horizontal" style="visibility: hidden;">
                    <div class="simplebar-scrollbar" style="width: 0px; display: none;"></div>
                </div>
                <div class="simplebar-track simplebar-vertical" style="visibility: hidden;">
                    <div class="simplebar-scrollbar" style="height: 0px; display: none;"></div>
                </div>
            </div>
        </div>
        <div class="detail-wrap wrapper webwrap">
            <section class="detail-highlight">
                <div class="highlight-innerwrap">
                    <div class="highlight-imagewrap"><img v-bind:src="item.link" /> </div>
                    <div class="highlight-info">
                        <div class="info-controls"><button type="button" class="controls-favbtn empty"><i
                                    class="favbtn-heart icon-heart-full"></i><i class="icon-heart-empty"></i></button>
                        </div>
                        <div class="pricetag info-price"><span>{{ item.fiyat }}</span></div>
                        <h1 class="info-title" style="color:black">{{ item.isim }}</h1>
                        <div class="productbox type-controls info-addcontrols">
                            <div class="productbox-controls">
                                <div class="controls-outerwrap">
                                    <div class="controls-innerwrap"><button type="button" class="controls-addbtn">Sepete
                                            Ekle</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <aside class="detail-additions">
                <div class="additions-section additions-info">
                    <h2 class="section-title">Açıklamalar</h2>
                    <div class="section-content">
                        <div class="info-data"><strong>Ürün Kodu</strong><span>28290001</span></div>
                        <div class="info-data"><strong>Menşei</strong><span>TÜRKİYE</span></div>
                    </div>
                </div>
            </aside>
        </div>
    </main>

</li>
</template>