<template>
  <header class="header">
    <div class="header-content">
      <img src="../assets/images/logo.png" alt="Logo" class="logo" />
      <nav class="nav-menu">
        <button class="menu-toggle" @click="toggleMenu">☰</button>
        <ul :class="{ 'active': isMenuOpen }">
          <li><a href="#">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#offer">What We Offer</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

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

<style scoped>
.header {
  background-image: url('../assets/images/hero.jpg');
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
  height: 50px;
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
    top: 70px;
    right: 20px;
    padding: 10px;
  }

  .nav-menu ul.active {
    display: flex;
  }

  .menu-toggle {
    display: block;
  }
}
</style>