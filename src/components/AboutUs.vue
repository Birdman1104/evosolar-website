<template>
    <!-- <section class="hero-section"> -->
    <div id="about" class="hero-content">
        <div class="hero-image">
            <img src="/images/roof.png" alt="Roof with solar panels" />
            <div class="image-bg-layer"></div>
        </div>
        <div class="hero-text">
            <div class="hero-label">{{ translationStore.t('aboutUs', 'header') }}</div>
            <h1>
                {{ translationStore.t('aboutUs', 'title1') }}<br />
                <span class="highlight">{{ translationStore.t('aboutUs', 'title2') }}</span><br />
                {{ translationStore.t('aboutUs', 'title3') }}
            </h1>
            <p>
                {{ translationStore.t('aboutUs', 'description') }}
            </p>
            <div class="hero-more">
                <button class="more-btn" @click="toggleMore">
                    {{ translationStore.t('aboutUs', 'more') }}
                    <span :class="{ 'arrow': true, 'open': showMore }">
                    </span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>

                </button>
                <transition name="fade-slide">
                    <div v-if="showMore" class="more-text">
                        <b>{{ translationStore.t('aboutUs', 'whyUs') }}</b>
                        <br />
                        <br />
                        <p><b>{{ translationStore.t('aboutUs', 'experienceTitle') }}</b>{{
                            translationStore.t('aboutUs', 'experienceText') }}</p><br />
                        <p><b>{{ translationStore.t('aboutUs', 'qualityTitle') }}</b>{{
                            translationStore.t('aboutUs',
                                'qualityText') }}</p><br />
                        <p><b>{{ translationStore.t('aboutUs', 'customerCentricTitle') }}</b>{{
                            translationStore.t('aboutUs', 'customerCentricText') }}</p><br />
                        <p><b>{{ translationStore.t('aboutUs', 'sustainabilityTitle') }}</b>{{
                            translationStore.t('aboutUs', 'sustainabilityText') }}</p><br />
                    </div>
                </transition>
            </div>
        </div>
    </div>
    <!-- </section> -->
</template>

<script setup>
import { inject, ref } from "vue";
const translationStore = inject("translationStore");

const showMore = ref(false);
const toggleMore = () => {
    showMore.value = !showMore.value;
};
</script>

<style scoped>
.hero-section {
    width: 100%;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat Armenian', sans-serif !important;
}

.hero-content {
    display: flex;
    min-height: 800px;
    height: auto;
    position: relative;
    align-items: center;
    justify-content: center;
    width: 100%;
}

.hero-image {
    width: fit-content;
    height: 95%;
    align-items: center;
    justify-content: center;
    overflow: visible;
    left: -6%;
}

.image-bg-layer {
    position: absolute;
    left: 0%;
    top: 20%;
    z-index: 0;
    background: #eaeaea;
    width: 632px;
    height: 601px;
}

.hero-image img {
    position: absolute;
    z-index: 2;
    display: block;
    width: 800px;
    height: 800px;
    left: -10%;
    top: 10%;
}

.hero-text {
    background: #fff;
    border-radius: 8px;
    padding: 40px 48px 40px 48px;
    margin-left: 32px;
    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.04);
    min-width: 340px;
    max-width: 500px;
    margin-left: 40%;
}

.hero-label {
    font-size: 1rem;
    color: #888;
    margin-bottom: 12px;
}

.hero-text h1 {
    font-size: 2.4rem;
    font-weight: 600;
    line-height: 1.2;
    margin: 0 0 18px 0;
    letter-spacing: -1px;
    font-family: 'Montserrat Armenian', sans-serif;
}

.highlight {
    color: #C1470A;
    font-weight: 600;
}

.hero-text p {
    color: #444;
    font-size: 1.08rem;
    margin-bottom: 24px;
    margin-top: 0;
    line-height: 1.6;
    font-family: 'Montserrat Armenian', sans-serif;
}

.hero-more {
    margin-top: 18px;
}

.more-btn {
    background: none;
    border: none;
    color: #222;
    font-size: 1.1rem;
    font-weight: 500;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    border-bottom: 2px solid #bbb;
    padding: 0 0 2px 0;
    transition: border-color 0.2s;
    font-family: 'Montserrat Armenian', sans-serif;

}

.more-btn:hover {
    border-color: #e96b1f;
    color: #e96b1f;
}

.arrow {
    margin-left: 8px;
}


.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: opacity 0.4s cubic-bezier(.4, 2, .6, 1), transform 0.4s cubic-bezier(.4, 2, .6, 1);
}

.fade-slide-enter-from,
.fade-slide-leave-to {
    opacity: 0;
    transform: translateY(16px);
}

.fade-slide-enter-to,
.fade-slide-leave-from {
    opacity: 1;
    transform: translateY(0);
}

.more-text {
    margin-top: 18px;
    color: #444;
    font-size: 1.05rem;
    border-radius: 6px;
    padding: 16px 18px;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.03);
}

@media (max-width: 900px) {
    .hero-content {
        flex-direction: column;
        padding: 24px 0;
        height: fit-content;
    }

    .hero-text h1 {
        font-size: 25px;
        width: 110%;
    }

    .hero-label {
        text-align: center;
    }

    .more-text {
        padding: 0;
    }

    .hero-more {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

    .more-btn {
        width: 55%;
        align-self: center;
        margin: 30px 0;
    }

    .hero-image {
        margin-bottom: 24px;
    }

    .hero-image img {
        display: block;
        top: 0;
        left: 0;
        position: unset;
        margin: auto;
        object-fit: scale-down;
        border-radius: 8px;
        height: 320px;
        width: 350px;
        z-index: 100;
    }

    .image-bg-layer {
        width: 280px;
        height: 260px;
        z-index: -1;
        top: 6%;
    }

    .hero-text {
        position: unset;
        margin-left: 0;
        padding: 28px 16px;
        min-width: 270px;
        max-width: 100%;
        width: 270px;
    }
}
</style>