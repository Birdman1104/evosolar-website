<template>
  <section id="offer" class="offer">
    <h2>{{ translationStore.t('steps', 'title') }}</h2>
    <p>{{ translationStore.t('steps', 'description') }}</p>
    <div class="circles">
      <div class="circle-wrapper" v-for="(offer, index) in offers" :key="index">
        <div class="circle">
          <div class="icon">{{ offer.icon }}</div>
        </div>
        <p class="icon-text">{{ translationStore.t('steps', `step${index + 1}`) }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { inject } from "vue";
const translationStore = inject("translationStore");
</script>


<script>
export default {
  data() {
    return {
      offers: [
        { title: 'Consultation,<br>Measurement', icon: '💡' },
        { title: 'Design', icon: '🎨' },
        { title: 'Preparation Work', icon: '📋' },
        { title: 'Installation', icon: '🔧' },
        { title: 'Monitoring', icon: '📊' },
      ],
    };
  },
};
</script>

<style scoped>
.offer {
  background: #081C10;
  color: white;
  padding: 20px 20px;
  text-align: center;
}

.circles {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  margin-top: 30px;
}

.circles::before {
  content: '';
  position: absolute;
  top: 30%;
  width: 100%;
  left: 0;
  right: 0;
  height: 2px;
  background: #c1c1c1;
  z-index: 0;
}

.circle-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  color: white;
  height: 158px;
  /* color: #193D27; */
  margin-bottom: 30px;
}

.circle {
  background: white;
  border: 2px solid #193D27;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}

.icon {
  font-size: 24px;
}

.icon-text {
  word-break: break-word;
  margin: 0;
  width: 195px;
  font-size: 0.98rem;
}

@media (max-width: 900px) {
  .circles {
    flex-direction: column;
  }

  .circle {
    margin-bottom: 3px;
  }

  .circles::before {
    display: none;
  }
}
</style>