<template>
  <section id="about" class="blocks-section">
    <h2>{{ translationStore.t('whyChooseUs', 'title') }}</h2>
    <div class="blocks">
      <div class="block" v-for="(index) in 4" :key="index">
        <h3>{{ translationStore.t('whyChooseUs', `block${index}`, 'title') }}</h3>
        <p>{{ translationStore.t('whyChooseUs', `block${index}`, 'description') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { inject } from "vue";
const translationStore = inject("translationStore");
</script>

<style scoped>
.blocks-section {
  background: #ffffff;
  padding: 20px 40px 30px 40px;
}

.blocks-section h2 {
  text-align: center;
  color: rgb(0, 0, 0);
}

.blocks {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto auto;
  gap: 10px;
  padding: 20px;
}

.block:nth-child(4n-3),
.block:nth-child(4n) {
  grid-column: span 7;
}

.block:nth-child(4n-2),
.block:nth-child(4n-1) {
  grid-column: span 5;
}

.block {
  border: 1px solid #081C10;
  /* border: 1px solid #55B17A; */
  background-color: #2C61411A;
  padding: 20px;
  color: rgb(0, 0, 0);
  text-align: center;
  border-radius: 15px;
  font-family: "Inter", serif;
  font-optical-sizing: auto;
  font-style: normal;
}

.block:only-child,
.block:last-child:nth-child(4n-3) {
  grid-column: span 12;
}

.block h3 {
  font-size: 1.75rem;
  font-weight: 400;
}

.block p {
  font-weight: 300;
}

@media (max-width: 768px) {
  .blocks {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto);
  }

  .blocks .block {
    grid-column: span 12;
  }

  .blocks-section {
    padding: 20px 10px;
  }
}
</style>