<script setup>
import { inject, ref, provide } from "vue";
import ThemeToggle from "./ThemeToggle.vue";
const translationStore = inject("translationStore");
const currentHour = new Date().getHours();
const isDark = ref(currentHour < 8 || currentHour > 20);
provide("isDark", isDark);

const isMenuOpen = ref(false);
const dropdownOpen = ref(false);
const langOptions = {
  hy: { value: 'hy', label: 'Հա' },
  en: { value: 'en', label: 'EN' }
}

const handleClick = (lang) => {
  if (translationStore) {
    translationStore.switchLanguage(lang);
  } else {
    console.error("translationStore is not defined");
  };
  toggleDropdown();
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  dropdownOpen.value = false;
};

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const backToCalculator = () => {
  toggleMenu()
}
</script>

<script>
export default {
  data() {
    return {


    };
  },
  methods: {



  },
};
</script>

<template>
  <header class="header" :class="{ 'header-dark': isDark, 'header-light': !isDark }">
    <div class="flex flex-row items-center justify-between w-screen text-base header-content p-4 md:p-[30px]">
      <img src="/images/Logo.svg" alt="Logo" class="logo" />
      <nav class="flex flex-row ">
        <div class="dropdown-menu flex flex-row " id="myLinks">
          <div class="menu-item mr-[72px]"><a href="#about">{{ translationStore.t('header', 'about') }}</a></div>
          <div class="menu-item mr-[72px]"><a href="#services">{{ translationStore.t('header', 'services') }}</a></div>
          <div class="menu-item mr-[72px]"><a href="#contact">{{ translationStore.t('header', 'contacts') }}</a></div>
        </div>
        <div class="custom-dropdown-wrapper flex">
          <div class="custom-select-box " @click="toggleDropdown" :class="{ activebox: dropdownOpen }">
            <img src="/icons/Lang-Icon.svg" class="select-icon" />
            <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="14" fill="none">
              <path d="M3 5l4 4 4-4" stroke="#fff" stroke-width="2" />
            </svg>
          </div>
          <div v-if="dropdownOpen" class="dropdown-options">
            <div v-for="option in langOptions" :key="option.value" class="dropdown-option"
              @click="handleClick(option.value)">
              <span>
                <img v-if="option.value === 'hy'" src='/icons/hy.svg' class="select-icon" />
                <img v-else src="/icons/en.svg" class="select-icon" />
              </span>
              <span>
                {{ option.label }}
              </span>
            </div>
          </div>
        </div>
        <button class="menu-toggle" @click="toggleMenu">☰</button>
      </nav>
    </div>
    <ThemeToggle />
  </header>

  <div v-if="isMenuOpen" class="fixed top-[0] left-[0] w-screen h-screen bg-[#232323] z-[50]">

    <div class="border-solid border border-b-[#F6F6F6] h-[80px]">
      <button class="back-button" @click="backToCalculator">
        <img src="/icons/back-arrow.svg" alt="Back" />
      </button>
    </div>
    <div class="dropdown-menu flex flex-row " :class="{ 'active': isMenuOpen }" id="myLinks">
      <div class="menu-item mr-[72px]"><a href="#about">{{ translationStore.t('header', 'about') }}</a></div>
      <div class="menu-item mr-[72px]"><a href="#services">{{ translationStore.t('header', 'services') }}</a>
      </div>
      <div class="menu-item mr-[72px]"><a href="#contact">{{ translationStore.t('header', 'contacts') }}</a></div>
    </div>
  </div>
</template>



<style scoped>
.theme-toggle {
  position: absolute;
  right: 20px;
  top: 185px
}

.header {
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.header-dark {
  background-image: url('/images/hero_night.jpg');
}

.header-light {
  background-image: url('/images/hero.jpg');
}

.header-content {
  background-color: rgba(13, 13, 13, 0.75);
  padding: 26px 80px;
}

.logo {
  height: 28px;
}

.custom-dropdown-wrapper {
  position: relative;
  width: 48px;
}

.custom-select-box {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.select-icon {
  width: 24px;
  height: 24px;
}

.placeholder {
  color: #888;
  flex-grow: 1;
}

.selected {
  color: rgba(246, 246, 246, 1);
  flex-grow: 1;
}

.arrow {
  margin-left: auto;
  width: 100%;
}

.dropdown-options {
  position: absolute;
  background-color: rgba(57, 63, 64, 1);
  width: 120px;
  align-items: center;
  left: auto;
  top: 52px;
  right: -35px;
  z-index: 1000;
}

.dropdown-option {
  padding: 10px;
  color: white;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
}

.dropdown-option:hover {
  background-color: #222;
}

.dropdown-options::-webkit-scrollbar {
  width: 6px;
}

.dropdown-options::-webkit-scrollbar-thumb {
  background: transparent;
}

.dropdown-options {
  scrollbar-width: none;
}

.menu-item a {
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

.menu-item:last-child {
  border: none;
}

.back-button {
  position: absolute;
  top: 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  width: 50px;
  height: 50px;
  padding-left: 20px;
}

@media (max-width: 768px) {

  .header-content {
    padding: 30px;
  }

  .logo {
    width: 130px;
  }

  .dropdown-menu {
    display: none;
    flex-direction: column;
    background: none;
    position: absolute;
    /* top: 50px; */
    left: 0px;
    margin: 70px 60px;
    width: 100%;
  }

  .dropdown-menu.active {
    display: flex;
  }

  .menu-toggle {
    display: block;
  }

  .menu-item {
    border-bottom: none;
    margin-bottom: 30px;
    color: #F6F6F6;
  }
}
</style>