<template>
  <section id="services" class="services">
    <h2>{{ translationStore.t('services', 'title') }}</h2>
    <p>{{ translationStore.t('services', 'description') }}</p>
    <div class="service-cards">
      <div class="card" v-for="(service, index) in services" :key="index">
        <img :src="service.image" :alt="service.title" />
        <div class="overlay"></div>
        <span class="card-title">{{ translationStore.t('services', `service${index + 1}`, 'title') }}, </span>
        <p class="description">{{ translationStore.t('services', `service${index + 1}`, 'description') }}</p>
        <!-- <button @click="scrollToContact">{{ translationStore.t('services', 'button') }}</button> -->
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
      services: [
        {
          title: 'service1',
          description: 'We offer premium solar system design and installation services for both homes and businesses, free of charge.',
          image: 'images/service1.jpg',
        },
        {
          title: 'Maintenance of Solar Systems',
          description: 'We provide maintenance services for both solar systems installed by us and those installed by other companies.',
          image: 'images/service2.jpg',
        },
        {
          title: 'Adding Solar Panels',
          description: 'Increase the capacity of your existing solar system. We specialize in adding solar panels and expanding your system for improved energy efficiency.',
          image: 'images/service3.jpg',
        },
      ],
    };
  },
  methods: {
    scrollToContact() {
      // document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>

<style scoped>
.services {
  background: white;
  padding: 30px 20px;
  text-align: center;
}

.service-cards {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 20px;
}

.card {
  flex: 1 1 30%;
  position: relative;
  max-width: 30%;
  text-align: left;
  color: white;
}

.card img {
  width: 100%;
  height: auto;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 98.75%;
  width: 100%;
  opacity: 0.3;
  transition: .5s ease;
  background-color: #000000;
}

.card-title {
  position: absolute;
  font-size: 19px;
  font-weight: 800;
  top: 60%;
  left: 15px;
  transform: translate(0, -50%);
}

.description {
  position: absolute;
  font-size: 16px;

  top: 75%;
  left: 15px;
}

.card button {
  position: absolute;
  bottom: 15px;
  left: 16px;

  color: white;
  border: none;
  width: 120;
  height: 34;
  gap: 10px;
  border-radius: 9px;
  padding-top: 8px;
  padding-right: 20px;
  padding-bottom: 8px;
  padding-left: 20px;
  background: #ED3200;
}


@media (max-width: 1280px) and (min-width: 768px) {
  .card-title {
    font-size: 20px;
    top: 20%;
  }

  .description {
    font-size: 13px;
    top: 28%;
  }
}

@media (max-width: 768px) {
  .card {
    flex: 1 1 100%;
    max-width: 100%;
  }

  .card-title {
    font-size: 20px;
    top: 50%;
  }

  .description {
    font-size: 13px;
    top: 59%;
  }
}
</style>