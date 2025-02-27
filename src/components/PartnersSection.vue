<template>
    <section id="partners" class="partners-section">
        <h2>{{ translationStore.t('ourPartners', 'title') }}</h2>
        <div class="slider-container" ref="sliderContainer" @mouseenter="pauseScrolling" @mouseleave="startScrolling">
            <div class="slider" ref="slider">
                <a v-for="(partner, index) in partners" :key="index" :href="partner.url" target="_blank">
                    <div class="partner-icon">
                        <img :src="partner.image" :alt="partner.title">
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
import { inject, onMounted, ref } from "vue";

const translationStore = inject("translationStore");

const partners = [
    { image: "icons/longi.png", url: "https://www.longi.com/", title: "Longi" },
    { image: "icons/ameriabank.png", url: "https://ameriabank.am/", title: "AmeriaBank" },
    { image: "icons/acbabank.png", url: "https://www.acba.am/en/", title: "ACBA Bank" },
    { image: "icons/growatt.png", url: "https://en.growatt.com/", title: "Growatt" },
    { image: "icons/fca.png", url: "https://www.fca.am/en/home.html", title: "FCA" },
];

const slider = ref(null);
let animationFrame;
let position = 0;
const speed = 1.5; 
const FPS = 16
let lastTime = performance.now();

const scroll = (time) => {
    const deltaTime = time - lastTime;
    lastTime = time;

    if (slider.value) {
        position -= speed * (deltaTime / FPS);
        if (Math.abs(position) >= slider.value.scrollWidth / 2) {
            position = 0;
        }
        slider.value.style.transform = `translate3d(${position}px, 0, 0)`;
    }

    animationFrame = requestAnimationFrame(scroll);
};

const startScrolling = () => {
    animationFrame = requestAnimationFrame(scroll);
};

const pauseScrolling = () => {
    cancelAnimationFrame(animationFrame);
};

onMounted(() => {
    if (slider.value) {
        slider.value.innerHTML += slider.value.innerHTML;
        startScrolling();
    }
});
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

.slider-container {
    width: 100%;
    overflow: hidden;
    position: relative;
}

.slider {
    display: flex;
    width: max-content;
    will-change: transform;
}

.slider a {
    align-content: center;
    margin: 0 20px;
}

.partner-icon {
    display: inline-block;
    width: 150px;
}

.partner-icon img {
    width: 100%;
    height: auto;
}
</style>