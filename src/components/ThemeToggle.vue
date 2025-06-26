<script setup>
import { inject } from "vue";
const isDark = inject("isDark");
const savedTheme = localStorage.getItem("evoSolarTheme");
let moonIconUrl = isDark.value ? "./icons/white.png" : "./icons/black.png";
if (savedTheme === 'light') {
    isDark.value = false;
    moonIconUrl = "./icons/black.png";
} else if (savedTheme === 'dark') {
    isDark.value = true;
    moonIconUrl = "./icons/white.png";
}
function toggleTheme() {
    isDark.value = !isDark.value;
    localStorage.setItem("evoSolarTheme", isDark.value ? 'dark' : 'light');
    document.documentElement.classList.toggle("dark", isDark.value);
    document.getElementById("moon-icon").src = isDark.value ? "./icons/white.png" : "./icons/black.png";
}
</script>

<template>
    <div class="theme-toggle" :class="{ dark: isDark }" @click="toggleTheme">
        <img :src="moonIconUrl" alt="moon" id="moon-icon">
    </div>
</template>


<style scoped>
.theme-toggle {
    display: flex;
    align-items: center;
    padding: 8px 28px;
    background: transparent;
    width: 140px;
    height: 56px;
    cursor: pointer;
    transition: border-color 0.3s;
    box-sizing: border-box;
    user-select: none;
}

.theme-toggle .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
}
</style>