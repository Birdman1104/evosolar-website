<script setup>
import { inject } from "vue";
const translationStore = inject("translationStore");
</script>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      dropdownOpen: false,
      langOptions: {
        hy: { value: 'hy', label: 'Հա' },
        en: { value: 'en', label: 'EN' }
      }

    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },

    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
  },
};
</script>

<template>
  <header class="header">
    <div class="flex flex-row items-center justify-between w-screen text-base header-content ">
      <img src="/images/Logo.svg" alt="Logo" class="" />
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
              @click="selectRegion(option.value)">
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
        <div v-if="isMenuOpen">
          <div>
            <button></button>
          </div>
          <div class="dropdown-menu flex flex-row " :class="{ 'active': isMenuOpen }" id="myLinks">
            <div class="menu-item mr-[72px]"><a href="#about">{{ translationStore.t('header', 'about') }}</a></div>
            <div class="menu-item mr-[72px]"><a href="#services">{{ translationStore.t('header', 'services') }}</a>
            </div>
            <div class="menu-item mr-[72px]"><a href="#contact">{{ translationStore.t('header', 'contacts') }}</a></div>
          </div>
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

  .menu-item {
    border-bottom: 3px solid #4b4742;
  }
}
</style>