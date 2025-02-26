<template>
    <section id="partners" class="partners-section">
        <h2>{{ translationStore.t('ourPartners', 'title') }}</h2>
        <div class="slider-container">
            <div class="slider">
                <a v-for="(partner, index) in partners" :key="index" :href="partner.url">
                    <div class='partner-icon'>
                        <img :src=partner.image :alt="partner.title">
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
import { inject } from "vue";
const translationStore = inject("translationStore");
</script>

<script>
const partners = [
    { image: 'icons/longi.png', url: 'https://www.longi.com/', title: 'Longi' },
    { image: 'icons/ameriabank.png', url: 'https://ameriabank.am/', title: 'AmeriaBank' },
    { image: 'icons/acbabank.png', url: 'https://www.acba.am/en/', title: 'ACBA Bank' },
    { image: 'icons/growatt.png', url: 'https://en.growatt.com/', title: 'Growatt' },
    { image: 'icons/fca.png', url: 'https://www.fca.am/en/home.html', title: 'FCA' },
];

export default {
    data() {
        return {
            partners: partners,
        };
    },
};
</script>

<style scoped>
.partners-section {
    background: #ffffff;
    padding: 20px;
}

.partners-section h2 {
    font-size: 2rem;
    text-align: center;
}

.partners-section p {
    font-size: 0.8rem;
    text-align: center;
    margin-bottom: 20px;
}

.slider-container {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    position: relative;
}

.slider {
    display: inline-block;
}

.partner-icon {
    display: inline-block;
    width: 20%;
    margin: 0 10px;
}

.partner-icon img {
    width: 100%;
    height: auto;
    vertical-align: middle;
}
</style>