<script setup>
import { inject } from "vue";
const translationStore = inject("translationStore");

const handleClick = (lang) => {
    if (translationStore) {
        translationStore.switchLanguage(lang);
    } else {
        console.error("translationStore is not defined");
    }
};
</script>


<script>
window.onload = () => {
    document.getElementById("yearSpan").innerHTML = new Date().getFullYear();
}
</script>


<template>
    <hr>
    <footer class="footer">
        <span class="copyright">Evosolar &#169; <span id='yearSpan'>2025</span> </span>
        <div class="urls">
            <a href="#">Terms and Conditions </a>
            <a href="#">Privacy and Policy </a>
            <a href="http://birdman1104.github.io/" target="_blank">Developer: Birdman</a>
            <a href="#" @click.prevent="handleClick('hy')">AM</a>
            <a href="#" @click.prevent="handleClick('en')">EN</a>
        </div>
    </footer>
</template>


<style scoped>
hr {
    margin: 0;
}

.footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 40px;
    background-color: #ffffff;
    color: #5c5c5c;
}

.urls a {
    color: #5c5c5c;
    margin-left: 15px;
    text-decoration: none;
}

.copyright a {
    color: #5c5c5c;
    text-decoration: none;
}

@media (max-width: 768px) {
    .footer {
        display: block;
        text-align: center;
    }

    .urls a {
        margin: 0;
        display: block;
    }
}
</style>