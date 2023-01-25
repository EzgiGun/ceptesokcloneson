<script setup>
    const route = useRoute();
    console.log(route.params.kategori);
    const {
        data: urun
    } = await useFetch('http://localhost:8080/uruncek/' + route.params.kategori)

    
</script>

<template>
    <main class="listing-results">
        <div class="wrapper wide">
            <div class="results-container">
                <ul class="results-list">
                    
                    <li class="list-item" v-for="item in urun">
                        
                        <div class="productbox type-listing ">
                            <div class="productbox-controls">
                                <div class="controls-innerwrap"><button type="button"
                                        class="controls-btn controls-minus"><i class="icon-minus"></i></button>
                                    <div class="controls-count"><span class="count-num">0</span> Kg</div>
                                    <button type="button" class="controls-btn controls-plus">
                                    <svg class="icon-plus" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" fill="rgba(47,204,113,1)"/></svg>
                                    </button>
                                </div>
                            </div>
                            
                            <a class="productbox-wrap link-to-pages-productDetail" v-bind:href="'../../urundetay/' + item.isim">
                                <div class="productbox-imagewrap">
                                    <div class="image productbox-image imagewrap bg contain" title=" Yerli Muz Kg ">
                                        <div class="imagewrap-image" v-bind:style="{ 'background-image': 'url(' + item.link + ')' }" >
                                        </div>
                                    </div>
                                </div>
                                <div class="productbox-content">
                                    <div class="pricetag content-prices"><span>{{ item.fiyat }}</span></div><strong
                                        class="content-title"> {{item.isim}} </strong>
                                </div>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </main>

    

</template>

