<template>
  <section id="services" class="services flex justify-center flex-col items-center font-normal mb-[60px]">
    <h1 class=" text-[35px] mt-[130px] mb-[15px]">{{ translationStore.t('services', 'title') }}</h1>
    <p class="w-[75%] leading-[25px] m-[0]">{{ translationStore.t('services', 'description') }}</p>
    <div class="service-cards">

      <div class="card" v-for="(service, index) in services" :key="index" @mouseenter="hoveredIndex = index"
        @mouseleave="hoveredIndex = null" @click="handleClick(index)">

        <img :src="service.image" :alt="service.title" />
        <div class="overlay" :class="{ hovered: isCardActive(index) }"></div>

        <div v-if="!isCardActive(index)" class="card-title flex justify-center">
          <span class="w-[80%] flex">
            {{ translationStore.t('services', `service${index + 1}`, 'title') }}
          </span>
        </div>

        <div v-if="isCardActive(index)" class="description">
          <p class="m-[25px]">
            {{ translationStore.t('services', `service${index + 1}`, 'description') }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { inject, ref } from "vue";
const translationStore = inject("translationStore");

const hoveredIndex = ref(null);
const clickedIndex = ref(null);

const services = [
  {
    title: 'service1',
    image: 'images/service1.jpg',
  },
  {
    title: 'Maintenance of Solar Systems',
    image: 'images/service2.jpg',
  },
  {
    title: 'Adding Solar Panels',
    image: 'images/service3.jpg',
  },
];

const isMobile = window.innerWidth <= 768;

const handleClick = (index) => {
  if (isMobile) {
    clickedIndex.value = clickedIndex.value === index ? null : index;
  }
};

const isCardActive = (index) => {
  return hoveredIndex.value === index || clickedIndex.value === index;
};
</script>

<script>
export default {
  data() {
    return {
      services: [
        {
          title: 'service1',
          image: 'images/service1.jpg',
        },
        {
          title: 'Maintenance of Solar Systems',
          image: 'images/service2.jpg',
        },
        {
          title: 'Adding Solar Panels',
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
  padding: 0 20px 30px 20px;
  text-align: center;
  font-family: 'Montserrat Armenian', sans-serif;
}

.service-cards {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 35px;
  gap: 28px;

}

.card {
  flex: 1 1 30%;
  position: relative;
  text-align: left;
  color: white;
  max-width: 355px;
  max-height: 359px;
  width: 100%;
  height: 100%;
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
  background-color: #000000;
}

.card-title {
  position: absolute;
  font-size: 20px;
  font-weight: 800;
  bottom: 35px;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  font-family: 'Montserrat Armenian', sans-serif;
}

.description {
  position: absolute;
  font-size: 16px;
  top: 0;
  left: 0;
  right: 0;
  height: 95%;
  width: 100%;
  background-color: rgba(35, 35, 35, 0.96);
  border-bottom: 11px solid rgba(193, 71, 10, 1);
  align-items: center;
  align-content: center;
  line-height: 23px;
  display: flex;

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
  }

}

@media (max-width: 768px) {
  h1 {
    margin-top: 100px;
    font-size: 25px;
  }

  .card {
    flex: 1 1 100%;
  }

  .card-title {
    font-size: 20px;
  }
}
</style>