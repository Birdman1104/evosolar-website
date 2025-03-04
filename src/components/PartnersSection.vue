<template>
  <section id="partners" class="partners-section">
    <h2>{{ translationStore.t('ourPartners', 'title') }}</h2>
    <div class="slider-container" ref="sliderContainer" @mouseenter="pauseScrolling" @mouseleave="startScrolling">
      <div class="slider" ref="slider">
        <a v-for="(partner, index) in displayedPartners" :key="partner.title + index" :href="partner.url"
          target="_blank">
          <div class="partner-icon">
            <img :src="partner.image" :alt="partner.title">
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { inject, onMounted, ref, computed, nextTick } from "vue";

const translationStore = inject("translationStore");

const partners = ref([
  { image: "icons/longi.png", url: "https://www.longi.com/", title: "Longi" },
  { image: "icons/ameriabank.png", url: "https://ameriabank.am/", title: "AmeriaBank" },
  { image: "icons/acbabank.png", url: "https://www.acba.am/en/", title: "ACBA Bank" },
  { image: "icons/growatt.png", url: "https://en.growatt.com/", title: "Growatt" },
  { image: "icons/fca.png", url: "https://www.fca.am/en/home.html", title: "FCA" },
]);

const displayedPartners = computed(() => [...partners.value, ...partners.value]);

const slider = ref(null);
let animationFrame;
let position = 0;
const speed = 1;

const startScrolling = () => {
  const scroll = () => {
    if (slider.value) {
      position -= speed;
      const firstItem = slider.value.children[0];

      if (firstItem.getBoundingClientRect().right <= 0) {
        const itemWidth = firstItem.offsetWidth;
        partners.value.push(partners.value.shift());
        position += itemWidth;
        slider.value.style.transition = "none";
        slider.value.style.transform = `translateX(${position}px)`;

        nextTick(() => {
          slider.value.style.transition = "transform 0s linear";
        });
      }

      slider.value.style.transform = `translateX(${position}px)`;
      animationFrame = requestAnimationFrame(scroll);
    }
  };

  animationFrame = requestAnimationFrame(scroll);
};

const pauseScrolling = () => {
  cancelAnimationFrame(animationFrame);
};

onMounted(() => {
  startScrolling();
});
</script>

<style scoped>
.partners-section {
  background: #ffffff;
  padding: 20px 20px 30px 20px;
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
  justify-content: center;
  align-items: center;
}

.partner-icon {
  display: inline-block;
  width: 150px;
  margin: 0 20px;
}

.partner-icon img {
  width: 100%;
  height: auto;
}
</style>