<template ref="contactSectionRef">
    <section id="contact" class="contact-section">
        <h1>{{ translationStore.t('contactUs', 'title') }}</h1>
        <div class="container-wrapper">
            <div class="map-container" v-if="isMounted">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.6607079386436!2d44.56738817641832!3d40.19436367147618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa337d96f5425%3A0xe7b39fb66c1123a7!2s37%20Gai%20Ave%2C%20Yerevan%200076!5e0!3m2!1sen!2sam!4v1740042328628!5m2!1sen!2sam"
                    width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="info">

                <div class="contact-box tell">
                    <p>📞 {{ translationStore.t('contactUs', 'callUs') }}</p>
                    <p><a href="tel:++37455648800">+374 55 64 88 00</a></p>
                    <div class="social-icons">
                        <a v-for="(social, index) in socials" :key="index" :href=social.url target="_blank">
                            <img :src=social.icon :alt=social.alt>
                        </a>
                    </div>
                </div>

            </div>

            <div class="mail-address">

                <div class="contact-box">
                    <p>✉️ {{ translationStore.t('contactUs', 'emailUs') }}</p>
                    <p><a href="mailto:sales@evosolar.am">sales@evosolar.am</a></p>
                </div>

                <div class="contact-box">
                    <p>📍 {{ translationStore.t('contactUs', 'visitUs') }} </p>
                    <p>{{ translationStore.t('contactUs', 'address') }}</p>
                </div>
            </div>
        </div>

    </section>
</template>

<script setup>
import { inject, ref, onMounted, defineExpose } from "vue";
const translationStore = inject("translationStore");

const socials = [
    {
        icon: 'icons/telegram.png',
        alt: 'Telegram',
        url: 'https://t.me/LeonK8800'
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


const contactSectionRef = ref(null);

const isMounted = ref(false);

onMounted(() => {
    isMounted.value = true;
});

defineExpose({
    el: contactSectionRef
});
</script>

<style scoped>
.contact-section h1 {
    text-align: center;
    margin-bottom: 20px;
}

.container-wrapper {
    display: flex;
    justify-content: center;
    gap: 50px;
    background: white;
    /* padding: 20px; */
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    flex-wrap: wrap;
}

.map-container {
    min-width: 350px;
    width: 350px;
}

.map-container iframe {
    border-radius: 10px;
    min-width: 350px;
    width: 350px;
    height: 250px;
    border: none;
}

.info {
    width: 300px;
    min-width: 300px;
}

.info h2 {
    margin-top: 0;
}

.contact-box {
    background: white;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
}

.mail-address {
    width: 300px;
    min-width: 300px;
}

.tell {
    height: 150px;
}

.contact-box p {
    margin: 5px 0;
    font-weight: bold;
}

.social-icons {
    display: flex;
    gap: 10px;
    margin-top: 10px;
}

.social-icons img {
    width: 42px;
    height: 42px;
}

@media (max-width: 1100px) {
    .container {
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .info,
    .mail-address,
    .map-container {
        width: 80%;
    }

    .tell {
        height: fit-content;
    }


    .map-container iframe {
        width: 100%;
        height: 200px;
    }


}
</style>