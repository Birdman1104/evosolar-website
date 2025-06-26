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
    <div v-if="isMobile" class="treemb-box">
      <img src="../../public/images/treemb.png" />
      <div class="treebadgeMb orangeBlock">
        <span>{{ translationStore.t('services', 'coBadge') }}</span>
        <span class="text-sm">{{ translationStore.t('services', 'coBadge2') }}</span>
      </div>
      <div class="treebadgeMb greenBlock">
        <span>{{ translationStore.t('services', 'treeBadge') }}</span>
        <span class="text-sm">{{ translationStore.t('services', 'treeBadge2') }}</span>
      </div>
    </div>
    <div class="text-box">
      <div class="tree-title-box">
        <span class="tree-title font-bold"> {{ translationStore.t('services', 'titleText') }}
          <span class="tree-title text-[#c2410c] mb-[20px]"> {{ translationStore.t('services', 'titleText2') }}</span>
        </span>

        <span class="text-left w-[55%]  desc"> {{ translationStore.t('services', 'treetext') }}</span>
        <span class="text-left w-[55%] desc2"> {{ translationStore.t('services', 'treetext2') }}</span>
      </div>

    </div>

  </section>
  <!-- <div v-if="!isMobile" class="badge-box">
    <div class="treebadge orange">
      <span>{{ translationStore.t('services', 'coBadge') }}</span>
      <span class="text-sm">{{ translationStore.t('services', 'coBadge2') }}</span>
    </div>
    <div class="treebadge green">
      <span>{{ translationStore.t('services', 'treeBadge') }}</span>
      <span class="text-sm">{{ translationStore.t('services', 'treeBadge2') }}</span>
    </div>
  </div> -->
  <div v-if="!isMobile" class="tree-box">
    <img class="tree" src="../../public/images/tree.png" />
  </div>

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
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 35px;

}

.text-box {
  display: flex;
  height: 600px;
  margin-left: 10%;
  align-self: baseline;
}

.tree-box {
  position: relative;
  margin-top: 30px;
}

.badge-box {
  position: relative;
  width: 600px;
}

.treebadge {
  position: absolute;
  width: 220px;
  height: 110px;
  color: #F6F6F6;
  font-weight: 500;
  border-radius: 5px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  flex-direction: column;
}

.orange {
  background-color: #c2410c;
  right: -540px;
  bottom: 300px;
}

.green {
  background-color: #13381E;
  right: -250px;
  bottom: 150px;
}

.text-sm {
  font-size: 24px;
}

.tree {
  position: absolute;
  right: 0;
  bottom: 0;
}

.card {
  flex: 1 1 30%;
  position: relative;
  text-align: left;
  color: white;
  max-width: 359px;
  max-height: 359px;

  width: 100%;
  height: 100%;
  margin-bottom: 60px;
}

.card img {
  width: 359px;
  height: 359px;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.99);
  background: linear-gradient(179deg, rgba(0, 0, 0, 0.01) 0%, rgba(0, 0, 0, 1) 100%);
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
  height: 98%;
  width: 100%;
  background-color: rgba(35, 35, 35, 0.96);
  border-bottom: 11px solid rgba(193, 71, 10, 1);
  align-items: center;
  align-content: center;
  line-height: 23px;
  display: flex;
}


.tree-title-box {
  font-size: 18px;
  display: flex;
  flex-direction: column;
  width: 640px;
  margin-top: 100px;
}

.tree-title {
  font-size: 40px;
  text-align: left;
  line-height: 100%;
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

  .orange {
    right: -200px;
  }

  .tree {
    width: 50%
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

  .text-box {
    border: 1px solid #00000033;
    border-radius: 10px;
    margin-left: 0;
    padding: auto;
    position: relative;
    background: #FFFFFF;
    top: -40px;
    height: 570px;
    z-index: 1;
  }

  .tree-title-box {
    width: 90%;
    margin: auto;
  }

  .tree-title {
    font-size: 25px;
    text-align: center;
    margin-bottom: 15px;

  }

  .treemb-box {
    position: relative;
    width: 350px;
    height: 350px;
  }

  .treemb-box img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .badge-box {
    position: absolute;
    width: auto;
  }

  .treebadgeMb {
    position: absolute;
    width: 130px;
    height: 65px;
    color: #F6F6F6;
    font-weight: 500;
    border-radius: 5px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    flex-direction: column;
  }

  .greenBlock {
    bottom: 0;
    z-index: 10;
    background-color: #13381E;
  }

  .orangeBlock {
    top: 0;
    right: 0;
    z-index: 0;
    background-color: #c2410c;

  }

  .text-sm {
    font-size: 14px;
  }

  .tree-title-box {
    width: 85%;
    margin-top: 60px;
  }

  .tree-title-box span {
    width: 95%;
  }

  .card-title {
    font-size: 20px;
  }

  .desc {
    width: 94% !important;
  }

  .desc2 {
    width: 85% !important;
  }
}
</style>