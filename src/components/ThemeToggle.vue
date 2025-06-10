<script setup>
import { inject } from "vue";
const isDark = inject("isDark");
const savedTheme = localStorage.getItem("evoSolarTheme");
let moonIconUrl = isDark.value ? "/icons/moon_white.png" : "/icons/moon_black.png";
if (savedTheme === 'light') {
    isDark.value = false;
    moonIconUrl = "/icons/moon_black.png";
} else if (savedTheme === 'dark') {
    isDark.value = true;
    moonIconUrl = "/icons/moon_white.png";
}
function toggleTheme() {
    isDark.value = !isDark.value;
    localStorage.setItem("evoSolarTheme", isDark.value ? 'dark' : 'light');
    document.documentElement.classList.toggle("dark", isDark.value);
    document.getElementById("moon-icon").src = isDark.value ? "/icons/moon_white.png" : "/icons/moon_black.png";
}
</script>

<template>
    <div class="theme-toggle" :class="{ dark: isDark }" @click="toggleTheme">
        <span class="icon moon">
            <img :src="moonIconUrl" alt="moon" id="moon-icon">
        </span>
        <span class="divider"></span>
        <span class="icon sun">
            <img src="/icons/sun.png" alt="sun">
        </span>
    </div>
</template>


<style scoped>
.theme-toggle {
    display: flex;
    align-items: center;
    border: 4px solid #222;
    border-radius: 999px;
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

.theme-toggle .divider {
    width: 2px;
    height: 36px;
    background: #222;
    margin: 0 18px;
    border-radius: 1px;
}

.theme-toggle .moon svg path {
    transition: fill 0.3s;
}

.theme-toggle.dark {
    border-color: #fff;
}

.theme-toggle.dark .divider {
    background: #fff;
}

.theme-toggle.dark .moon svg path {
    fill: #fff !important;
}

.theme-toggle:not(.dark) .moon svg path {
    fill: #222 !important;
}
</style>