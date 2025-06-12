<template>
  <section id='mapSection' class="map-section">

    <h2 class="title">{{ translationStore.t('findUs', 'title') }}</h2>

    <div class="address-button">{{ translationStore.t('findUs', 'address') }}</div>
    <div class="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.6607079386436!2d44.56738817641832!3d40.19436367147618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa337d96f5425%3A0xe7b39fb66c1123a7!2s37%20Gai%20Ave%2C%20Yerevan%200076!5e0!3m2!1sen!2sam!4v1740042328628!5m2!1sen!2sam"
        width="1200" height="450" style="border:0;" allowfullscreen="true" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </section>
</template>

<script setup>
import { inject } from "vue";
const translationStore = inject("translationStore");
</script>

<style scoped>
.map-section {
  text-align: center;
  padding: 40px 20px 250px 20px;
  margin: 0 0 20px 0;
  background-color: #fff;
  font-family: sans-serif;
}

.title {
  font-size: 28px;
  font-weight: 500;
  color: #222;
  margin-bottom: 20px;
}

.address-button {
  display: inline-block;
  background-color: #c2410c;
  position: relative;
  top: 33px;
  color: white;
  font-size: 20px;
  font-weight: 500;
  padding: 12px 64px;
  border-radius: 6px;
  margin-bottom: 24px;
}

.map-container {
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.map-image {
  width: 100%;
  height: auto;
  display: block;
}
</style>