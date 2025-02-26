<script setup>
import { inject } from "vue";
const translationStore = inject("translationStore");
</script>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<template>
  <header class="header">
    <div class="header-content">
      <img src="/images/logo.png" alt="Logo" class="logo" />
      <nav class="nav-menu">
        <button class="menu-toggle" @click="toggleMenu">☰</button>
        <ul :class="{ 'active': isMenuOpen }" id="myLinks">
          <li><a href="#services">{{ translationStore.t('header', 'services') }}</a></li>
          <li><a href="#blocks">{{ translationStore.t('header', 'whyChooseUs') }}</a></li>
          <li><a href="#cases">{{ translationStore.t('header', 'ourProjects') }}</a></li>
          <li><a href="#contact">{{ translationStore.t('header', 'contacts') }}</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>



<style scoped>
.header {
  background-image: url('/images/hero.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px;
}

.header-content {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  height: 20px;
}

.nav-menu ul {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-menu ul li a {
  color: white;
  text-decoration: none;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .nav-menu ul {
    display: none;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 50px;
    left: 0px;
    padding: 20px;
    width: 100%;
  }

  .nav-menu ul.active {
    display: flex;
  }

  .menu-toggle {
    display: block;
  }
}
</style>