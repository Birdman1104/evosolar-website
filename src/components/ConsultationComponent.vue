<template>
    <section id="consultation" class="consultationSection">
        <div class="textBlock">
            <h2 class="consultationTitle">{{ translationStore.t('consulting', 'topText') }}</h2>
            <h1 class="mainText">
                {{ translationStore.t('consulting', 'bottomText1') }}
                <span class="orangeText">{{ translationStore.t('consulting', 'bottomText2') }}</span>
                {{ translationStore.t('consulting', 'bottomText3') }}
            </h1>
            <a href="#contact"><button class="consultationButton">
                    {{ translationStore.t('consulting', 'buttonText') }} </button></a>
        </div>
    </section>
    <hr>
</template>

<script setup>
import { inject } from "vue";
const translationStore = inject("translationStore");
</script>

<style>
.consultationSection {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 40vh;
    background-color: white;
    padding-left: 1rem;
    padding-right: 1rem;
}

.textBlock {
    text-align: center;
    max-width: 70%;
}

.consultationTitle {
    font-weight: 400;
    margin-top: 130px;
    color: black;
    font-size: 25px;
    margin-bottom: 1rem;
}

.mainText {
    color: black;
    font-weight: 500;
    font-size: 40px;
    margin-bottom: 1.5rem;
}

.orangeText {
    color: #c2410c;
    font-weight: 600;
}

.consultationButton {
    background-color: #c1470a;
    color: white;
    font-size: 1.125rem;
    font-weight: 500;
    padding: 0.9rem 6rem;
    border-radius: 0.5rem;
    border-style: hidden;
    margin-bottom: 130px;
}

.consultationButton:hover {
    background-color: #f2711c;
}

@media (max-width: 640px) {
    .consultationTitle {
        font-size: 16px;
        margin-top: 100px;
    }

    .textBlock {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .mainText {
        font-size: 20px;

    }

    .consultationButton {
        margin-bottom: 100px;
        height: 50px;
        width: 260px;
        padding: 0;
    }
}
</style>