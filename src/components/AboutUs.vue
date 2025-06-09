<template>
    <section class="hero-section">
        <div class="hero-content">
            <div class="hero-image">
                <img src="/images/roof.png" alt="Roof with solar panels" />
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
                        <span :class="{ 'arrow': true, 'open': showMore }">&gt;</span>
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
    </section>
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
    min-height: 60vh;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
}

.hero-content {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    width: 100%;
    padding: 40px 0;
}

.hero-image {
    flex: 1 1 0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: visible;
}

.hero-image img {
    /* width: 420px; */
    max-width: 40vw;
    height: auto;
    display: block;
    background: #eaeaea;
    border-radius: 8px;
    position: absolute;
    left: -500px;
    /* top: 0; */
}

.hero-text {
    flex: 1 1 0;
    background: #fff;
    border-radius: 8px;
    padding: 40px 48px 40px 48px;
    margin-left: 32px;
    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.04);
    min-width: 340px;
    max-width: 500px;
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
}

.highlight {
    color: #e96b1f;
    font-weight: 600;
}

.hero-text p {
    color: #444;
    font-size: 1.08rem;
    margin-bottom: 24px;
    margin-top: 0;
    line-height: 1.6;
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
}

.more-btn:hover {
    border-color: #e96b1f;
    color: #e96b1f;
}

.arrow {
    display: inline-block;
    margin-left: 8px;
    font-size: 1.2em;
    transition: transform 0.3s cubic-bezier(.4, 2, .6, 1), color 0.2s;
}

.arrow.open {
    transform: rotate(90deg);
    color: #e96b1f;
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
    background: #f7f7f7;
    border-radius: 6px;
    padding: 16px 18px;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.03);
}

@media (max-width: 900px) {
    .hero-content {
        flex-direction: column;
        padding: 24px 0;
    }

    .hero-image {
        margin-bottom: 24px;
        position: relative;
    }

    .hero-image img {
        display: block;
        background: #eaeaea;
        top: 0;
        left: 0;
        margin: auto;
        border-radius: 8px;
    }

    .hero-text {
        margin-left: 0;
        padding: 28px 16px;
        min-width: 0;
        max-width: 100vw;
    }
}
</style>