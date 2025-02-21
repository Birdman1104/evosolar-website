<template>
  <section id="blocks" class="blocks-section">
    <h2>Why Choose Us?</h2>
    <div class="blocks">
      <div class="block" v-for="(block, index) in blocks" :key="index">
        <h3>{{ block.title }}</h3>
        <p>{{ block.text }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      blocks: [
        { title: 'Experience', text: 'Our team consists of experienced solar specialists who are dedicated to their mission and continuously invest in professional development.' },
        { title: 'Quality', text: 'We use only high-quality solar panels, equipment, and components to ensure reliability and efficiency.' },
        { title: 'Customer-Centric Approach', text: 'We provide personalized solutions for each client to meet their unique energy needs and goals.' },
        { title: 'Sustainability', text: 'We are committed to protecting the environment and creating a GREEN planet.' },
      ],
    };
  },
};
</script>

<style scoped>
.blocks-section {
  background: #081C10;
  padding: 20px;

}

.blocks-section h2 {
  text-align: center;
  color: white;
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
  border: 1px solid #55B17A;
  background-color: #2C61411A;
  padding: 20px;
  color: white;
  text-align: center;
  border-radius: 15px;
  font-family: "Inter", serif;
  font-optical-sizing: auto;
  font-weight: 100;
  font-style: normal;
}

.block:only-child,
.block:last-child:nth-child(4n-3) {
  grid-column: span 12;
}

.block h3 {
  font-size: 1.75rem;
  font-weight: 300;
}

.block p {
  font-weight: 100;
}

@media (max-width: 768px) {
  .blocks {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto);
  }

  .blocks .block {
    grid-column: span 12;
  }
}
</style>