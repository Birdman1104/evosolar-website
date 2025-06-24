<script setup>
import { inject } from "vue";
const translationStore = inject("translationStore");

const socials = [
    {
        icon: 'icons/telegram.png',
        alt: 'Telegram',
        url: 'https://t.me/evosolarllc'
    },
    // {
    //     icon: 'icons/viber.png',
    //     alt: 'Viber',
    //     url: 'https://t.me/Birdman1104'
    // },
    // {
    //     icon: 'icons/whatsapp.png',
    //     alt: 'WhatsApp',
    //     url: 'https://t.me/Birdman1104'
    // },
]
</script>

<script>
window.onload = () => {
    document.getElementById("yearSpan").innerHTML = new Date().getFullYear();
}
</script>


<template>
    <footer class="footer">
        <div class="footer-top">
            <div class="logo">
                <img src="/images/logo.png" alt="EvoSolar Logo" />
            </div>

            <div class="footer-column">
                <h4>{{ translationStore.t('contactUs', 'contact') }}</h4>
                <p>{{ translationStore.t('contactUs', 'address') }}</p>
                <p><a href="tel:++37455648800">+374 55 64 88 00</a></p>
                <p><a href="mailto:sales@evosolar.am">sales@evosolar.am</a></p>
            </div>

            <div class="footer-column">
                <h4>{{ translationStore.t('contactUs', 'links') }}</h4>
                <p>{{ translationStore.t('contactUs', 'aboutUs') }}</p>
                <p>{{ translationStore.t('contactUs', 'services') }}</p>
                <p>{{ translationStore.t('contactUs', 'contactUs') }}</p>
            </div>
        </div>

        <div class="footer-bottom">
            <p>Copyright © EvoSolar <span id='yearSpan'></span></p>
            <div class="social-icons">
                <a v-for="(social, index) in socials" :key="index" :href=social.url target="_blank">
                    <img :src=social.icon :alt=social.alt>
                </a>
            </div>
        </div>
    </footer>
</template>


<style scoped>
.footer {
    background-color: #1f1f1f;
    padding: 0 20px 40px 20px;
    color: #fff;
    font-family: sans-serif;

}

a {
    color: inherit;
    text-decoration: none;
}

.footer-top {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1100px;
    margin: 0 auto 20px;
    gap: 20px;
}

.footer-column {
    min-width: 180px;
}

.footer-column h4 {
    font-size: 16px;
    margin-bottom: 12px;
}

.footer-column p {
    margin: 8px 0;
    color: #ddd;
}

.footer-bottom {
    border-top: 1px solid #333;
    padding-top: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1100px;
    margin: 0 auto;
}

.footer-bottom p {
    color: #888;
    font-size: 14px;
}

.social-icons a {
    margin-left: 10px;
}

.social-icons img {
    width: 20px;
    height: 20px;
    filter: brightness(0.9);
}

.logo img {
    height: 40px;
}

@media (max-width: 768px) {
    .footer {
        display: block;
        margin: -50px auto 0;
    }

    .urls a {
        margin: 0;
        display: block;
    }

    .footer-top {
        display: block;
        padding: 0 30px;
        justify-self: center;
    }

    .logo {
        margin-bottom: 40px;
    }
}
</style>