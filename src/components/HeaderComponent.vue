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
        <div
        class="dropdown-menu"
        :class=" { 'active': isMenuOpen }" id="myLinks">
          <div class="menu-item"><a href="#services">{{ translationStore.t('header', 'services') }}</a></div>
          <div class="menu-item"><a href="#blocks">{{ translationStore.t('header', 'whyChooseUs') }}</a></div>
          <div class="menu-item"><a href="#cases">{{ translationStore.t('header', 'ourProjects') }}</a></div>
          <div class="menu-item"><a href="#contact">{{ translationStore.t('header', 'contacts') }}</a></div>
        </div>
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

.dropdown-menu {
  list-style: none;
  display: flex;
}

.menu-item a {
  color: white;
  text-decoration: none;
  font-size: 18px;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
}

.menu-item {
  border-bottom: 3px solid #4b4742;
  padding: 10px 0;
  padding-left:20px;
}
.menu-item:last-child {
  border: none;
}

@media (max-width: 768px) {
  .dropdown-menu {
    display: none;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    top: 50px;
    left: 0px;
    margin-top: 20px;
    width: 100%;
  }

  .dropdown-menu.active {
    display: flex;
  }

  .menu-toggle {
    display: block;
  }
}
</style>