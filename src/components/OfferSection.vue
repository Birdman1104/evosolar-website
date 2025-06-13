<template>
  <section id="partners" class="partners-section">
    <h2>{{ translationStore.t('steps', 'title') }}</h2>
    <div class="w-[70%] mb-[15px]">{{ translationStore.t('steps', 'description') }}</div>
    <div class="slider-container" ref="sliderContainer" @mouseenter="pauseScrolling" @mouseleave="startScrolling">
      <div class="slider" ref="slider">
        <div class="flex justify-center flex-col" v-for="(partner, index) in partners" :key="partner.title + index">
          <div class="partner-icon">
            <img :src="partner.image" :alt="partner.title" />
          </div>
          <div class="text-center">
            {{ translationStore.t("steps", partner.title) }}
          </div>
        </div>
      </div>
      <div class="dots">
        <span v-for="(partner, index) in partners" :key="'dot-' + index" :class="{ active: index === currentIndex }"
          @click="goToIndex(index)"></span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { inject, onMounted, ref, nextTick, onBeforeUnmount, watchEffect } from "vue";

const translationStore = inject("translationStore");
const currentIndex = ref(0); // Track current center item
const isTouched = ref(false); // Track whether user interacted
const partners = ref([
  { image: "icons/Frame.png", title: "step1" },
  { image: "icons/Frame1.png", title: "step2" },
  { image: "icons/Frame2.png", title: "step3" },
  { image: "icons/Frame3.png", title: "step4" },
  { image: "icons/Frame4.png", title: "step5" },
  { image: "icons/Frame5.png", title: "step6" },
]);

const slider = ref(null);
const sliderContainer = ref(null);

let animationFrame;
let position = 0;
const speed = 1;

let itemWidth = 0;

const goToIndex = (index) => {
  pauseScrolling();
  currentIndex.value = index;
  position = -index * itemWidth;
  updateSliderPosition();
  
  // Resume loop after short delay
  setTimeout(() => {
    startScrolling();
  }, 3000); // Wait 3s before resuming
};

const updateSliderPosition = () => {
  if (slider.value) {
    slider.value.style.transform = `translateX(${position}px)`;
  }
};
const onDragStart = (x) => {
  isDragging = true;
  isTouched.value = true;
  pauseScrolling();
  dragStartX = x;
  dragStartPosition = position;
};


const shiftLeft = () => {
  const firstItem = partners.value.shift();
  partners.value.push(firstItem);
  position += itemWidth;
  slider.value.style.transition = "none";
  updateSliderPosition();
  nextTick(() => {
    slider.value.style.transition = "transform 0s linear";
  });
};

const shiftRight = () => {
  const lastItem = partners.value.pop();
  partners.value.unshift(lastItem);
  position -= itemWidth;
  slider.value.style.transition = "none";
  updateSliderPosition();
  nextTick(() => {
    slider.value.style.transition = "transform 0s linear";
  });
};
const startScrolling = () => {
  if (isTouched.value) return; // 👈 Skip if touched

  const scroll = () => {
    if (!slider.value || partners.value.length === 0) return;

    position -= speed;

    const firstItem = slider.value.children[0];
    if (firstItem.getBoundingClientRect().right <= sliderContainer.value.getBoundingClientRect().left) {
      shiftLeft();
    }

    updateSliderPosition();
    animationFrame = requestAnimationFrame(scroll);
  };

  animationFrame = requestAnimationFrame(scroll);
};

const pauseScrolling = () => {
  cancelAnimationFrame(animationFrame);
};

// 🖱 Drag support
let isDragging = false;
let dragStartX = 0;
let dragStartPosition = 0;



const onDragMove = (x) => {
  if (!isDragging) return;
  const dx = x - dragStartX;
  position = dragStartPosition + dx;
  updateSliderPosition();

  if (dx < -itemWidth) {
    // Dragging left
    shiftLeft();
    dragStartX += itemWidth;
    dragStartPosition = position;
  } else if (dx > itemWidth) {
    // Dragging right
    shiftRight();
    dragStartX -= itemWidth;
    dragStartPosition = position;
  }
};

const onDragEnd = () => {
  if (!isDragging) return;
  isDragging = false;
  startScrolling();
};

// Mouse & Touch events
const handleMouseDown = (e) => onDragStart(e.clientX);
const handleMouseMove = (e) => onDragMove(e.clientX);
const handleMouseUp = () => onDragEnd();

const handleTouchStart = (e) => onDragStart(e.touches[0].clientX);
const handleTouchMove = (e) => onDragMove(e.touches[0].clientX);
const handleTouchEnd = () => onDragEnd();

onMounted(() => {
  nextTick(() => {
    const firstItem = slider.value.querySelector(".partner-icon");
    itemWidth = firstItem.offsetWidth + 40; // margin compensation

    startScrolling();

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);
  });
});

watchEffect(() => {
  currentIndex.value = Math.round(-position / itemWidth);
});
onBeforeUnmount(() => {
  window.removeEventListener("mousedown", handleMouseDown);
  window.removeEventListener("mousemove", handleMouseMove);
  window.removeEventListener("mouseup", handleMouseUp);
  window.removeEventListener("touchstart", handleTouchStart);
  window.removeEventListener("touchmove", handleTouchMove);
  window.removeEventListener("touchend", handleTouchEnd);
});

</script>


<style scoped>
.partners-section {
  background: rgba(35, 35, 35, 1);
  height: 550px;
  padding: 0 20px 0 20px;
  color: rgba(246, 246, 246, 1);
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.partners-section h2 {
  font-size: 40px;
  text-align: center;
  font-weight: 400;
  margin-bottom: 15px;
  color: rgba(246, 246, 246, 1);
}


.slider-container {
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-bottom: 130px;
}

.slider {
  display: flex;
  width: max-content;
  will-change: transform;
  justify-content: center;
  align-items: center;
}

.partner-icon {
  display: flex;
  width: 200px;
  margin: 0 20px;
  align-items: center;
  align-content: center;
  justify-content: center;
}

.partner-icon img {
  width: 110px;
  height: 110px;
  margin-bottom: 20px;
}


.slider-container:active {
  cursor: grabbing;
}

.slider-container {
  cursor: grab;
  user-select: none;
}


.dots {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
}

.dots span {
  width: 12px;
  height: 12px;
  background-color: #ccc;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
}

.dots span.active {
  background-color: #fff;
}
</style>
