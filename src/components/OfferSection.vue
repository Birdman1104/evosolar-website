<template>
  <section id="offer" class="offer">
    <h2>5 STEPS TO YOUR SOLAR SYSTEM</h2>
    <p>Explore our services and solutions.</p>
    <div class="circles">
      <div class="circle-wrapper" v-for="(offer, index) in offers" :key="index">
        <div class="circle">
          <div class="icon">{{ offer.icon }}</div>
        </div>
        <h3 v-html="offer.title"></h3>
      </div>
    </div>
  </section>
</template>

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
  background: white;
  padding: 50px 20px;
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
  top: 35%;
  left: 0;
  right: 0;
  height: 2px;
  background: #193D27;
  z-index: 0;
}

.circle-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
  color: #193D27;
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

h3 {
  margin: 0;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .circles {
    flex-direction: column;
  }

  .circles::before {
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
  }
}
</style>