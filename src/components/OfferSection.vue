<template>
  <section id="offers" class="offers-section">
    <h2>{{ translationStore.t('steps', 'title') }}</h2>
    <div class="w-[37%] mb-[15px] text-center description">
      {{ translationStore.t('steps', 'description') }}
    </div>

    <div class="slider-container" ref="sliderContainer" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
      <div class="slider" ref="slider">
        <div v-for="(partner, index) in displayedOffers" :key="partner.title + index" class="partner-item">
          <div class="partner-icon">
            <img :src="partner.image" :alt="partner.title" />
          </div>
          <div class="text-center text-sm">
            {{ translationStore.t('steps', partner.title) }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { inject, ref, onMounted, onBeforeUnmount, nextTick, computed } from 'vue';

const translationStore = inject('translationStore');
const offers = ref([
  { image: 'icons/Frame.png', title: 'step1' },
  { image: 'icons/Frame1.png', title: 'step2' },
  { image: 'icons/Frame2.png', title: 'step3' },
  { image: 'icons/Frame3.png', title: 'step4' },
  { image: 'icons/Frame4.png', title: 'step5' },
  { image: 'icons/Frame5.png', title: 'step6' },
]);

const displayedOffers = computed(() => [...offers.value, ...offers.value]);


const slider = ref(null);
const sliderContainer = ref(null);
const isHovered = ref(false);
let animationFrame;
let position = 0;
let itemWidth = 0;
const speed = 1;

const updateSliderPosition = () => {
  if (slider.value) {
    slider.value.style.transform = `translateX(${position}px)`;
  }
};

const onMouseEnter = () => {
  isHovered.value = true;
  pauseScrolling();
};

const onMouseLeave = () => {
  isHovered.value = false;
  scrollLoop();
};


const scrollLoop = () => {
  if (isHovered.value) return;

  position -= speed;

  const firstItem = slider.value.children[0];
  const firstItemRight = firstItem.getBoundingClientRect().right;
  const containerLeft = sliderContainer.value.getBoundingClientRect().left;

  if (firstItemRight <= containerLeft) {
    const removed = offers.value.shift();
    offers.value.push(removed);
    position += itemWidth;
  }

  updateSliderPosition();
  animationFrame = requestAnimationFrame(scrollLoop);
};

const pauseScrolling = () => {
  cancelAnimationFrame(animationFrame);
};

const clamp = (val, min, max) => Math.max(min, Math.min(val, max));

let isDragging = false;
let startX = 0;
let startPos = 0;

const onDragStart = (x) => {
  isDragging = true;
  pauseScrolling();
  startX = x;
  startPos = position;
};

const onDragMove = (x) => {
  if (!isDragging) return;

  const dx = x - startX;
  const maxScrollLeft = 0;
  const visibleCount = Math.floor(sliderContainer.value.offsetWidth / itemWidth);
  const maxScrollRight = -(itemWidth * (offers.value.length - visibleCount));

  position = clamp(startPos + dx, maxScrollRight, maxScrollLeft);
  updateSliderPosition();
};

const onDragEnd = () => {
  if (!isDragging) return;
  isDragging = false;
  if (!isHovered.value) scrollLoop();
};

onMounted(() => {
  nextTick(() => {
    itemWidth =
      slider.value.querySelector('.partner-item').offsetWidth +
      parseInt(getComputedStyle(slider.value.querySelector('.partner-item')).marginRight) * 2;

    scrollLoop();

    sliderContainer.value.addEventListener('mousedown', (e) => onDragStart(e.clientX));
    window.addEventListener('mousemove', (e) => onDragMove(e.clientX));
    window.addEventListener('mouseup', onDragEnd);

    sliderContainer.value.addEventListener('touchstart', (e) => onDragStart(e.touches[0].clientX));
    window.addEventListener('touchmove', (e) => onDragMove(e.touches[0].clientX));
    window.addEventListener('touchend', onDragEnd);
  });
});

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrame);
  window.removeEventListener('mousemove', onDragMove);
  window.removeEventListener('mouseup', onDragEnd);
  window.removeEventListener('touchmove', onDragMove);
  window.removeEventListener('touchend', onDragEnd);
});
</script>


<style scoped>
.offers-section {
  background: #232323;
  padding: 60px 20px;
  color: #f6f6f6;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.slider-container {
  width: 100%;
  overflow: hidden;
  cursor: grab;
  user-select: none;
  margin-top: 40px;
}

.slider-container:active {
  cursor: grabbing;
}

.slider {
  display: flex;
  will-change: transform;
  transition: transform 0s linear;
}

.partner-item {
  flex: 0 0 auto;
  width: 200px;
  margin: 0 20px;
  text-align: center;
}

.partner-icon img {
  width: 110px;
  height: 110px;
  margin-bottom: 10px;
}

.slider::-webkit-scrollbar {
  display: none;
}


@media (max-width: 768px) {
    h2 {
      font-size: 19px;
    }

    .description {
      width: 70%;
    }

}
</style>
